export interface ServiceMonitor {
  apiVersion?: string;
  kind?: string;
  metadata?: {};
  spec: {
    endpoints: {
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
      bearerTokenFile?: string;
      bearerTokenSecret?: {
        key: string;
        name?: string;
        optional?: boolean;
      };
      enableHttp2?: boolean;
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
        caFile?: string;
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
        certFile?: string;
        insecureSkipVerify?: boolean;
        keyFile?: string;
        keySecret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        serverName?: string;
      };
    }[];
    jobLabel?: string;
    labelLimit?: number;
    labelNameLengthLimit?: number;
    labelValueLengthLimit?: number;
    namespaceSelector?: {
      any?: boolean;
      matchNames?: string[];
    };
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
    targetLabels?: string[];
    targetLimit?: number;
  };
}

  
export function isServiceMonitor(resource: unknown): resource is ServiceMonitor {
  return typeof resource === "object" && (resource as any)?.apiVersion === "monitoring.coreos.com/v1" && (resource as any)?.kind === "ServiceMonitor";
}

