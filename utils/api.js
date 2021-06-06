import {
  getData
} from './helpers.js'

export function getInitialData () {
  return getData()
  .then((repos) => ({
    repos
  }))
}
