import mazes from './config/mazes'

export class Model {
    constructor(){
      this.index = 0
      this.cells = mazes[0].cells
  }

  move(direction) {
    console.log('Index: ',this.index)
        if((direction === 'right') && this.canMove(direction)){
      this.index += 1
    } else if((direction === 'left') && this.canMove(direction)){
      this.index -= 1
    } else if((direction === 'up') && this.canMove(direction)){
       this.index -= 20
    } else if((direction === 'down') && this.canMove(direction)){
      this.index += 20
    }
    }

  canMove(direction) {
    return true

    //openCellWall
    //if direction === right or bottom openCellWall is index(this).open
    //else if direction === left openCellWall is upperCell.open
    //else if direction === up openCellWall is index(this-20).openCellWall

    //if direction === openCellWall
    //return true
    //else return false
  }
  upperCell(){
    return this.cells[this.index - 20]
  }
  leftCell(){
    return this.cells[this.index - 1]
  }
}
