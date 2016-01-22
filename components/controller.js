import { Model } from './model'
import { View } from './view'

export class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View()
    this.view.render(this.model)
  }

  handleKeyDown(event) {
    var up = 38
    var left = 37
    var right = 39
    var down =  40

    switch (event.keyCode) {
      case up:
      this.model.move('up')
      break;

      case down:
      this.model.move('down')
      break;

      case left:
      this.model.move('left')
      break;

      case right:
      this.model.move('right')
      break;
    }
    this.view.render(this.model)
    this.winnerAlert()
  }
    winnerAlert(){
      if (this.model.index === 399){
        alert("Winner winner chicken dinner!")
      }
  }
}
