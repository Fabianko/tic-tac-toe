import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  array: number[][];
  maxValue: number = 0;
  sizeArray: number = 3;
  player: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.configInit();
  }
  public configInit(){
    this.array = this.createArray(this.sizeArray);
  }

  public createArray(size: number):  number[][] {
    var i = 0;
    var matrix: number[][] = [];
    while (i < size) {
      let j = 0;
      while (j < size) {
        if (!matrix[i]) {
          matrix[i] = [];
        }
        matrix[i][j] = 0;
        j = j + 1;
      }
      i = i + 1;
    }
    return matrix;
  }

  public nextPlayer(result) {
    this.array[result.i][result.j] = result.value;
    //debugger;
    this.player = this.player == 1 ? 2 : 1;
  }
}
