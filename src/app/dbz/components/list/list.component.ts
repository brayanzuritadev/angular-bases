import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDBZComponent {

  //esta es la propiedad que podra ver el padre para hacerle llegar 
  //informacion
  //a este componente que es el hijo
  @Input()
  public characterList: Character[]=[];

  @Output()
  characterIdDeleted: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string):void {
    this.characterIdDeleted.emit(id);
  }
}
