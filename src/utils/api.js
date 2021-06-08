import { getData } from './helpers.js'
import { gitHubUrl } from './_data.js'

export function getInitialData (page) {
  return getData(`${gitHubUrl}&page=${page}`)
  .then((repos) => ({
    repos
  }))
}
