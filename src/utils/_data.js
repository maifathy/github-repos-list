var date = new Date()
date.setMonth(date.getMonth() - 1);
export const gitHubUrl = `https://api.github.com/search/repositories?q=created:>${date.toISOString().substring(0, 10)};&sort=stars&order=desc`
