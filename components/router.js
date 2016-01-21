import $ from 'jquery'
import { Controller } from './controller'



export class Router {
  constructor() {
    this.controller = new Controller()
  }

  listen() {
    let that = this
    console.log('listening to router')

    //write Jquery listeners

    $(document).on('keydown', function (event) {
      that.controller.handleKeydown(event)
    })

  }

  }

// componentWillMount () {
//   document.addEventListener(
//     'keydown',
//     this.handleKeydown.bind(this),
//     false
//   )
// }
//
// componentWillUnmount () {
//   document.removeEventListener(
//     'keydown',
//     this.handleKeydown.bind(this),
//     false
//   )
// }
