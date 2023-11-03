export const githubAPIEndpoints = {
  pull: (state: string) =>
    `https://api.github.com/repos/janus-idp/backstage-showcase/pulls?per_page=100&state=${state}`,
  issues: (state: string) =>
    `https://api.github.com/repos/janus-idp/backstage-showcase/issues?per_page=100&sort=updated&state=${state}`,
  workflowRuns: `https://api.github.com/repos/janus-idp/backstage-showcase/actions/runs?per_page=100`,
};
