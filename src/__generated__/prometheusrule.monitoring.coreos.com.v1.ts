export interface PrometheusRule {
  apiVersion?: string;
  kind?: string;
  metadata?: {};
  spec: {
    groups?: {
      interval?: string;
      name: string;
      partial_response_strategy?: string;
      rules: {
        alert?: string;
        annotations?: {
          [k: string]: string;
        };
        expr: number | string;
        for?: string;
        labels?: {
          [k: string]: string;
        };
        record?: string;
      }[];
    }[];
  };
}

  
export function isPrometheusRule(resource: unknown): resource is PrometheusRule {
  return typeof resource === "object" && (resource as any)?.apiVersion === "monitoring.coreos.com/v1" && (resource as any)?.kind === "PrometheusRule";
}

