export const RECEIVE_REPOS = 'RECEIVE_REPOS'

export function receiveRepos(repos){
  return {
    type: RECEIVE_REPOS,
    repos
  }
}
