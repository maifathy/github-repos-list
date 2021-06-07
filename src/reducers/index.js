import { combineReducers } from 'redux'
import repos from './repos.js'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  repos,
  loadingBar: loadingBarReducer
})
