export interface PodMonitor {
  apiVersion?: string;
  kind?: string;
  metadata?: {};
  spec: {
    attachMetadata?: {
      node?: boolean;
    };
    jobLabel?: string;
    labelLimit?: number;
    labelNameLengthLimit?: number;
    labelValueLengthLimit?: number;
    namespaceSelector?: {
      any?: boolean;
      matchNames?: string[];
    };
    podMetricsEndpoints: {
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
      enableHttp2?: boolean;
      filterRunning?: boolean;
      followRedirects?: boolean;
      honorLabels?: boolean;
      honorTimestamps?: boolean;
      interval?: string;
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
      params?: {
        [k: string]: string[];
      };
      path?: string;
      port?: string;
      proxyUrl?: string;
      relabelings?: {
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
      scheme?: string;
      scrapeTimeout?: string;
      targetPort?: number | string;
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
    }[];
    podTargetLabels?: string[];
    sampleLimit?: number;
    selector: {
      matchExpressions?: {
        key: string;
        operator: string;
        values?: string[];
      }[];
      matchLabels?: {
        [k: string]: string;
      };
    };
    targetLimit?: number;
  };
}

  
export function isPodMonitor(resource: unknown): resource is PodMonitor {
  return typeof resource === "object" && (resource as any)?.apiVersion === "monitoring.coreos.com/v1" && (resource as any)?.kind === "PodMonitor";
}

