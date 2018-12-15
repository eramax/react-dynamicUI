import React from 'react'
import axios from 'axios'
import Tag from './Tag'

export default class Loader extends React.Component {
  state = {
    data: {}
  }

  componentDidMount() {
    if (this.state.data.lenth > 0) return
    axios.get(this.props.item.action).then(res => {
      let data = res.data
      this.setState({ data })
    })
  }
  render() {
    return <Tag tag={this.state.data} handler={this.props.handler} />
  }
}
