import { RECEIVE_REPOS } from '../actions/repos.js'

export default function repos(state='', action){
  switch (action.type){
    case RECEIVE_REPOS:
      return {
        ...state,
        ...action.repos
      }
    default:
      return state
  }
}
