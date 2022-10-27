import { defineRule } from "@monokle/validation/custom";

export const noTeamLabel = defineRule("RCA002", {
  name: "no-team-label",
  description: "Require deployments to have a valid team label.",
  help: "Add a label 'whoosh.io/team' with your team name as value (see validation settings for valid options).",
  validate({ resources, settings }, { report }) {
    resources
      .filter((r) => r.kind === "Deployment")
      .forEach((resource) => {
        const labels = resource.content.metadata?.labels;
        const team: string = labels?.["whoosh.io/team"];

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
