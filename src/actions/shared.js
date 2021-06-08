import { getInitialData } from '../utils/api.js'
import { receiveRepos } from '../actions/repos.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export default function handleInitialData(page){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData(page)
    .then(({ repos }) => {
      dispatch(receiveRepos(repos))
      dispatch(hideLoading())
    })
  }
}
