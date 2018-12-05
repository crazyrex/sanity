/* eslint-disable react/prop-types */

import client from 'part:@sanity/base/client?'
import React from 'react'

class DataProvider extends React.PureComponent {
  state = {
    data: null,
    error: null
  }

  componentDidMount() {
    client
      .fetch(this.props.query, this.props.params)
      .then(data => this.setState({data}))
      .catch(error => this.setState({error}))
  }

  render() {
    return this.props.children(this.state)
  }
}

export default DataProvider
