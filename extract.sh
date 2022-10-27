#!/bin/bash
# Small utility function based on yq to extract openAPIV3Schema from CRD
# example:  crd2jsonschema.sh ./crd-alertmanager.yaml
set -e

function crd2jsonschema() {
    set -e
    local xkgroup="x-kubernetes-group-version-kind"
    local document="$1"
    local openAPIV3Schema=$(mktemp -u)
    local baseSchema=$(mktemp -u)
    local jsonSchema=$(mktemp -u)
    # clean on exit
    trap 'rm -f -- "$baseSchema" "$openAPIV3Schema" "$jsonSchema"' INT TERM HUP ERR EXIT

    # extract openapi schema from crd
    yq r -j $document 'spec.validation.openAPIV3Schema' >$openAPIV3Schema

    # check if openAPIV3Schema
    if [[ -n $(jq -r .properties $openAPIV3Schema) ]]; then

        # create initial schema file
        cat <<'EOF' >$baseSchema
"$schema": "http://json-schema.org/draft/2019-09/schema#"
type: object
EOF

        # add canonical properties to schema
        yq w $baseSchema 'title' $(yq r $document 'metadata.name') |
            yq w - --tag='!!map' 'properties' |
            yq w - "${xkgroup}.group" $(yq r $document 'spec.group') |
            yq w - "${xkgroup}.kind" $(yq r $document 'spec.names.kind') |
            yq w -j - "${xkgroup}.version" $(yq r $document 'spec.version') >$jsonSchema

        # merge files into expected openapi jsonschema
        echo "$(cat $jsonSchema) $(cat $openAPIV3Schema)" | jq -S -n '[inputs]| add'
    fi

}


# optimized version
function crd2jsonschemaJq() {
   set -e

    local document="$1"
    # local outputPath="$2"
    local queryExpression=$(mktemp -u)
    trap 'rm -f -- "$queryExpression"' INT TERM HUP ERR EXIT

    # local jsonCRD=$(yq r -j $document)   # >/dev/null 2&>1
    local jsonCRD=$(yaml2json $document) # >/dev/null 2&>1
    local hasSchema=$(echo $jsonCRD | jq -r '.spec.validation.openAPIV3Schema.properties')
    local version=$(echo $jsonCRD | jq .spec.version | sed 's/"//g')
    if [[ -n $hasSchema && $version != null ]]; then
        echo $hasSchema
        cat <<'EOF' >$queryExpression
{
    properties: .spec.validation.openAPIV3Schema.properties, 
    description: .spec.validation.openAPIV3Schema.description, 
    required: .spec.validation.openAPIV3Schema.required, 
    title: .metadata.name,
    type: "object",
    "$schema": "http://json-schema.org/draft/2019-09/schema#",
    "x-kubernetes-group-version-kind.group": .spec.group,
    "x-kubernetes-group-version-kind.kind": .spec.names.kind,
    "x-kubernetes-group-version-kind.version": .spec.version
}
EOF
        local basefile=${document##*/}
        local filename=${basefile%.*}
        local destinationFile="$filename-$version.crd-schema.yaml"
        echo "$(date --utc) Writing json-schema file: $PWD/$destinationFile"
        echo $jsonCRD | jq -S -f "$queryExpression" >$destinationFile
    fi
}


crd2jsonschemaJq $1