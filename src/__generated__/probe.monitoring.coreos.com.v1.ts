export interface Probe {
  apiVersion?: string;
  kind?: string;
  metadata?: {};
  spec: {
    authorization?: {
      credentials?: {
        key: string;
        name?: string;
        optional?: boolean;
      };
      type?: string;
    };
    basicAuth?: {
      password?: {
        key: string;
        name?: string;
        optional?: boolean;
      };
      username?: {
        key: string;
        name?: string;
        optional?: boolean;
      };
    };
    bearerTokenSecret?: {
      key: string;
      name?: string;
      optional?: boolean;
    };
    interval?: string;
    jobName?: string;
    labelLimit?: number;
    labelNameLengthLimit?: number;
    labelValueLengthLimit?: number;
    metricRelabelings?: {
      action?:
        | "replace"
        | "Replace"
        | "keep"
        | "Keep"
        | "drop"
        | "Drop"
        | "hashmod"
        | "HashMod"
        | "labelmap"
        | "LabelMap"
        | "labeldrop"
        | "LabelDrop"
        | "labelkeep"
        | "LabelKeep"
        | "lowercase"
        | "Lowercase"
        | "uppercase"
        | "Uppercase";
      modulus?: number;
      regex?: string;
      replacement?: string;
      separator?: string;
      sourceLabels?: string[];
      targetLabel?: string;
    }[];
    module?: string;
    oauth2?: {
      clientId: {
        configMap?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        secret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
      };
      clientSecret: {
        key: string;
        name?: string;
        optional?: boolean;
      };
      endpointParams?: {
        [k: string]: string;
      };
      scopes?: string[];
      tokenUrl: string;
    };
    prober?: {
      path?: string;
      proxyUrl?: string;
      scheme?: string;
      url: string;
    };
    sampleLimit?: number;
    scrapeTimeout?: string;
    targetLimit?: number;
    targets?: {
      ingress?: {
        namespaceSelector?: {
          any?: boolean;
          matchNames?: string[];
        };
        relabelingConfigs?: {
          action?:
            | "replace"
            | "Replace"
            | "keep"
            | "Keep"
            | "drop"
            | "Drop"
            | "hashmod"
            | "HashMod"
            | "labelmap"
            | "LabelMap"
            | "labeldrop"
            | "LabelDrop"
            | "labelkeep"
            | "LabelKeep"
            | "lowercase"
            | "Lowercase"
            | "uppercase"
            | "Uppercase";
          modulus?: number;
          regex?: string;
          replacement?: string;
          separator?: string;
          sourceLabels?: string[];
          targetLabel?: string;
        }[];
        selector?: {
          matchExpressions?: {
            key: string;
            operator: string;
            values?: string[];
          }[];
          matchLabels?: {
            [k: string]: string;
          };
        };
      };
      staticConfig?: {
        labels?: {
          [k: string]: string;
        };
        relabelingConfigs?: {
          action?:
            | "replace"
            | "Replace"
            | "keep"
            | "Keep"
            | "drop"
            | "Drop"
            | "hashmod"
            | "HashMod"
            | "labelmap"
            | "LabelMap"
            | "labeldrop"
            | "LabelDrop"
            | "labelkeep"
            | "LabelKeep"
            | "lowercase"
            | "Lowercase"
            | "uppercase"
            | "Uppercase";
          modulus?: number;
          regex?: string;
          replacement?: string;
          separator?: string;
          sourceLabels?: string[];
          targetLabel?: string;
        }[];
        static?: string[];
      };
    };
    tlsConfig?: {
      ca?: {
        configMap?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        secret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
      };
      cert?: {
        configMap?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        secret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
      };
      insecureSkipVerify?: boolean;
      keySecret?: {
        key: string;
        name?: string;
        optional?: boolean;
      };
      serverName?: string;
    };
  };
}

  
export function isProbe(resource: unknown): resource is Probe {
  return typeof resource === "object" && (resource as any)?.apiVersion === "monitoring.coreos.com/v1" && (resource as any)?.kind === "Probe";
}

