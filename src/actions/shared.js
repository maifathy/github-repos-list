import { getInitialData } from '../utils/api.js'
import { receiveRepos } from '../actions/repos.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export default function handleInitialData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ repos }) => {
      dispatch(receiveRepos(repos))
      dispatch(hideLoading())
    })
  }
}
