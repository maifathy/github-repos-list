import React, { Component } from 'react'
import handleInitialData from '../actions/shared.js'
import { getDays } from '../utils/helpers.js'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'

class ReposList extends Component {
  state = {
    page: 0,
    items: []
  }
  onScroll = () => {
      if (window.innerHeight <= window.scrollY &&       this.props.repos.incomplete_results){
        this.props.dispatch(handleInitialData(this.state.page + 1))
        this.setState((prevState) => ({
          page: prevState.page + 1
        }))
        this.setState((prevState) => ({
          items: [...prevState.items, this.props.repos.items]
        }))
      }

  }

  componentDidMount(){
    this.props.dispatch(handleInitialData(1))
    .then(() => {
      this.setState((prevState) => ({
        page: prevState.page + 1
      }))
      this.setState({
        items: this.props.repos.items
      })
    })

    window.addEventListener('scroll', this.onScroll);
  }

  render(){
    console.log(this.props.repos)
    console.log('state' + this.state.items)
    const { items } = this.state
    return(
      <div>
        <LoadingBar />
        {this.props.loading === true ?
          <div> Waiting to load data </div>
          :
          <ul style={{ listStyle: 'none' }}>
            {Object.keys(items).map((repoId) =>
              <li key={repoId}>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td style={{width: 100 + 'px'}}>
                        <img
                          alt='avatar'
                          src={items[repoId].owner.avatar_url}
                          className='avatar'
                        />
                      </td>
                      <td className='td-content'>
                        <div style={{paddingBottom: 5 + 'px'}}>
                          {items[repoId].name}
                        </div>
                        <div style={{paddingBottom: 5 + 'px'}}>
                          {items[repoId].description}
                        </div>
                        <div>
                        <div className='num_box'>
                          {`${items[repoId].watchers} Stars`}
                        </div>
                        <div className='num_box'>
                          {`${items[repoId].open_issues_count} Issues`}
                        </div>
                        <div>
                          {`Submitted ${getDays(items[repoId].created_at)} days ago by ${items[repoId].owner.login}`}
                        </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
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
    loading: repos === '',
    repos
  }
}
export default connect(mapStateToProps)(ReposList);
