import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public character: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000 
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
];

addNewCharacter(character:Character){
    const newCharacter: Character = {id: uuid(), ...character}

    this.character.push(newCharacter);
}

/*deleteCharacter(characterId: number): void{
    this.character.splice(characterId, 1)
}*/

deleteCharacter(id:string):void{
  this.character = this.character.filter(character => character.id !== id)
}
}
