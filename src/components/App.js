import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared.js'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    console.log(this.props.repos.items)
    return (
      <ol>
        {Object.keys(this.props.repos.items).map((repoId) =>
          <li key={repoId}>
            { this.props.repos.items[repoId].name }
            <hr />
          </li>
        )}

      </ol>
    )
  }
}
function mapStateToProps ({ repos }) {
  return {
    repos
  }
}
export default connect(mapStateToProps)(App);
