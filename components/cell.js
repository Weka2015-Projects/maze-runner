import React, { Component } from 'react'

export default class Cell extends Component{
  render() {
    const styles = {}

    if(this.props.open.match(/r/)) {
      styles.borderRight = 'none'
    }
    if(this.props.open.match(/l/)) {
      styles.borderLeft = 'none'
    }
    if(this.props.open.match(/b/)) {
      styles.borderBottom = 'none'
    }
    if(this.props.open.match(/t/)) {
      styles.borderTop = 'none'
    }
    // return React.createElement('div', { className: 'cell' }, this.props.number)

    return (<div className='cell' style={styles} >{this.props.number}</div>)
  }
}
