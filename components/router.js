import $ from 'jquery'
import { Controller } from './controller'

export class Router {
  constructor() {
    this.controller = new Controller()
  }

  listen() {
    let that = this
    console.log('listening to router')

    $( () => {
      $(document).on('keydown', (event) => {
      that.controller.handleKeydown(event)
      })
    })
  }
}
