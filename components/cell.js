import React, { Component } from 'react'

export class Cell extends Component{
  render() {
    const styles = {}

    if(this.props.open.match(/r/)) {
      styles['border-right'] = 'none'
    }
    if(this.props.open.match(/l/)) {
      styles['border-left'] = 'none'
    }
    if(this.props.open.match(/b/)) {
      styles['border-bottom'] = 'none'
    }
    if(this.props.open.match(/t/)) {
      styles['border-top'] = 'none'
    }
    return <div className='cell' style={styles}>{this.props.number}</div>
  }
}
