import React from 'react'
import ReactDOM from 'react-dom'

import Model from './model.js'
import Maze from './maze.js'

export class View {
  constructor() {
    this.root = document.createElement('div')
    document.body.appendChild(this.root)
  }

  render(Model) {

    // return <div className='amazed'><Maze cells={this.state.cells} /></div>

    ReactDOM.render(<Maze model={Model}/>, this.root)

  }
}
