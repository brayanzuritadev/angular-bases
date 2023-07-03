import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames : string[] = ["spiderman","hulk", "thor", "loki"];
  public deletedHero?:string;

  removeHero():void{
     this.deletedHero = this.heroNames.pop();
  }
}
