import React from 'react'
import ReactDOM from 'react-dom'

import Model from './model'
import Maze from './maze'

export class View {
  constructor() {
    this.root = document.createElement('div')
    document.body.appendChild(this.root)
  }

  render(Model) {
    const App = (
      <div className='amazed'>
        <Maze cells={Model.cells} runnerIndex={Model.index}/>
      </div>
    )
    ReactDOM.render(App, this.root)
  }
}
