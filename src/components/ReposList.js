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

  getDocHeight = () => {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
  }

  onScroll = () => {
      if (window.scrollY + window.innerHeight === this.getDocHeight() && this.props.repos.incomplete_results && this.state.items.length <= 970){
        this.props.dispatch(handleInitialData(parseInt(this.state.page) + 1))
        .then(() => {
          console.log('this.state.page:', parseInt(this.state.page) + 1)
          var repeated = this.state.items.filter(e => this.props.repos.items.indexOf(e) !== -1).length === this.props.repos.items.length
          console.log('repeated: ', repeated)
          if(!repeated){
            this.setState((prevState) => ({
              page: prevState.page + 1
            }))
            this.setState((prevState) => ({
              items: [...prevState.items, ...this.props.repos.items]
            }))
          }
          else{
            setTimeout(this.onScroll(), 10000)
          }
        })
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
    const { items } = this.state
    return(
      <div id='divItems'>
        <LoadingBar />
        {this.props.loading === true ?
          <div> Waiting to load data </div>
          :
          <ul style={{ listStyle: 'none' }}>
            {Object.keys(items).map((repoId) =>
              <li key={repoId}>
                <table className='table'>
                  <tbody>
                    <tr style={{display: 'flex'}}>
                      <td style={{width: 100 + 'px'}}>
                        <img
                          alt='avatar'
                          src={items[repoId].owner !== undefined ?
                            items[repoId].owner.avatar_url : ''}
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
                          {`Submitted ${getDays(items[repoId].created_at)} days ago`} {items[repoId].owner !== undefined ?
                            `by ${items[repoId].owner.login}` : ''}
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
