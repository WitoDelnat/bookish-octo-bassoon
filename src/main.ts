import { definePlugin } from "@monokle/validation/custom";
import { noEmptyAnnotations } from "./noEmptyAnnotations.js";
import { noTeamLabel } from "./noTeamLabel.js";
import { sealedSecrets } from "./sealedSecrets.js";

export default definePlugin("annotations", {
  description: "Validates your annotations",
  rules: {
    noEmptyAnnotations,
    noTeamLabel,
    sealedSecrets,
  },
});
