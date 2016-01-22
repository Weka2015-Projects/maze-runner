import $ from 'jquery'
import { Controller } from './controller'


export class Router {
  constructor() {
    this.controller = new Controller()
  }

  listen() {
    let that = this

    $( () => {
      $(document).on('keydown', (event) => {
      that.controller.handleKeyDown(event)
      })
    })
  }
}
