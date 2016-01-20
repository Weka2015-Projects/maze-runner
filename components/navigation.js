// import $ from 'jquery'
// import {Controller} from './controller'
//
// export class Router {
//   constructor() {
//     this.controller = new Controller()
//   }
//   listen() {
//     console.log('listening in the router')
//     let that = this
//     $(() => {
//       $(document).on('keydown', (event) => {
//         this.controller.dance()
//       })
//     })
//   }
// }




const LEFT = 37
const RIGHT = 39
const UP = 38
const DOWN = 40

handleKeydown (event) {
  switch (event.keyCode) {
    case LEFT:
      console.log("Left!")
      break
    case RIGHT:
      console.log("Right!")
      break
    case UP:
      console.log("Up!")
      break
    case DOWN:
      console.log("Down!")
      break
    default:
      console.log("Unknown key", event.KeyCode)
  }
}
