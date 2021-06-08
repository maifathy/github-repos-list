import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared.js'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    console.log(this.props.repos)
    const { total_count, incomplete_results, items } = this.props.repos
    console.log(items)
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ?
          <div> Waiting to Load data </div>
          :
          <ul style={{ listStyle: 'none' }}>
            {Object.keys(items).map((repoId) =>
              <li key={repoId}>
                <table>
                  <tr>
                    <td>
                      <img
                        src={items[repoId].owner.avatar_url}
                        className='avatar'
                      />
                    </td>
                    <td>
                      <div>
                        {items[repoId].name}
                      </div>
                      <br />
                      <div>
                        {items[repoId].description}
                      </div>
                      <br />
                      <div>
                      <div>
                        {`${items[repoId].watchers} Stars`}
                      </div>
                      <div>
                        {`${items[repoId].open_issues_count} Issues`}
                      </div>
                      <div>
                        {`Time Interval by ${items[repoId].owner.login}`}
                      </div>
                      </div>
                    </td>
                  </tr>
                </table>
                <br />
              </li>
            )}
          </ul>
        }
      </div>
    )
  }
}
function mapStateToProps ({ repos }) {
  return {
    loading: repos === null,
    repos
  }
}
export default connect(mapStateToProps)(App);
