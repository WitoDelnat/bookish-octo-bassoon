function definePlugin(name, init) {
    const rules = Object.entries(init.rules).map(([name, r]) => {
        return {
            id: r.id,
            name: r.name,
            shortDescription: {
                text: r.description,
            },
            fullDescription: {
                text: r.fullDescription ?? r.description,
            },
            help: {
                text: r.help ?? "No help available.",
            },
            validate: r.validate,
        };
    });
    return {
        name,
        description: init.description,
        rules,
    };
}
function defineRule(id, init) {
    return { id, ...init };
}

const noEmptyAnnotations = defineRule("RCA001", {
    name: "no-empty-annotations",
    description: "Require annotations as metadata.",
    help: "Add any annotation to the Kubernetes resource.",
    validate({ resources }, { report }) {
        resources.forEach((resource) => {
            const annotations = Object.entries(resource.content.metadata?.annotations ?? {});
            const hasAnnotations = annotations.length > 0;
            if (!hasAnnotations) {
                report(resource, { path: "metadata.annotations" });
            }
        });
    },
});

const noTeamLabel = defineRule("RCA002", {
    name: "no-team-label",
    description: "Require deployments to have a valid team label.",
    help: "Add a label 'whoosh.io/team' with your team name as value (see validation settings for valid options).",
    validate({ resources, settings }, { report }) {
        resources
            .filter((r) => r.kind === "Deployment")
            .forEach((resource) => {
            const labels = resource.content.metadata?.labels;
            const team = labels?.["whoosh.io/team"];
            if (!team) {
                return report(resource, { path: "metadata.labels" });
            }
            const validTeams = settings?.["whoosh"]?.["teams"] ?? [];
            const isValid = validTeams.includes(team);
            if (!isValid) {
                return report(resource, { path: "metadata.labels" });
            }
        });
    },
});

const sealedSecrets = defineRule("RCA003", {
    name: "sealed-secrets",
    description: "Disallow default Kubernetes secrets.",
    fullDescription: "Kubernetes secrets are base64 encoded and you can easily retrieve the secret value. Instead you should use a SealedSecret which encrypts the secret so that it can safely be committed to your repository.",
    help: "Use a SealedSecret instead of a default Kubernetes secret.",
    validate({ resources }, { report }) {
        resources
            .filter((r) => r.kind === "Secret")
            .forEach((resource) => {
            return report(resource, { path: "kind" });
        });
    },
});

var main = definePlugin("annotations", {
    description: "Validates your annotations",
    rules: {
        noEmptyAnnotations,
        noTeamLabel,
        sealedSecrets,
    },
});

export { main as default };
