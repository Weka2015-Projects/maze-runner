import React, { Component } from 'react'
import Cell from './cell.js'

export class Maze extends Component {

  render() {
      const cells = this.props.model.cells.map((cell, idx) => {
        return <Cell key={idx} number={idx + 1} open={cell.open}/>
      })

      return <div className='maze'>{cells}</div>
    }
  }
