import { Model } from './model.js'
import { View } from './view'

const LEFT = 37
const RIGHT = 39
const UP = 38
const DOWN = 40
const HINTS = 72

export class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View()
  }
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
      case HINTS:
        console.log("Show hints")
        break
      default:
        console.log("Unknown key", event.keyCode)
    }
  }

}
