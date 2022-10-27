import { defineRule } from "@monokle/validation/custom";
import { isPrometheus } from "./__generated__/prometheus.monitoring.coreos.com.v1.js";

export const noExternalUrl = defineRule("RCA005", {
  name: "no-external-url",
  description: "Disallow external URLs for Prometheus instances.",
  help: "Remove the externalUrl.",
  validate({ resources }, { report }) {
    for (const resource of resources) {
      if (!isPrometheus(resource.content)) {
        continue;
      }

      if (resource.content.spec.externalUrl !== undefined) {
        report(resource, { path: "spec.externalUrl" });
      }
    }
  },
});
