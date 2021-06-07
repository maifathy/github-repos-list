import { getData } from './helpers.js'
import { gitHubUrl } from './_data.js'

export function getInitialData () {
  return getData(gitHubUrl)
  .then((repos) => ({
    repos
  }))
}
