import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validWin() {
    if (
      this.valid1() ||
      this.valid2() ||
      this.valid3() ||
      this.valid4()
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  public valid1() :boolean {
    /*for (let index = 0; index < array.length; index++) {
      const element = array[index];

    }*/
    return false;
  }

  public valid2() :boolean{
    return false;
  }

  public valid3():boolean {
    return false;
  }

  public valid4():boolean {
    return false;
  }


}
