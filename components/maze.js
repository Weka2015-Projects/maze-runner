import React, { Component } from 'react'
import Cell from './cell'

export default class Maze extends Component {

  render() {
      const cells = this.props.cells.map((cell, idx) => {
        return <Cell key={idx} number={idx + 1} open={cell.open}/>
      })

      return <div className='maze'>{cells}</div>
    }
  }
