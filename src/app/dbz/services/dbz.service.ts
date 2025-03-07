import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 9500
    },{
      id: uuid(),
      name: 'Trunks',
      power: 9000
    }
  ];

  public onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    };
    this.characters.push(newCharacter);
  }

  /*
  public onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
  */

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  public getId(): string {
    return uuid();
  }

  constructor() { }

}
