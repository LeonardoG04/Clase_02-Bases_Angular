import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzDbzService: DbzService) { }

  get character(): Character[] {
    return [...this.dbzDbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzDbzService.deleteCharacterById(id);
  }

  addCharacter(characters: Character) {
    this.dbzDbzService.addCharacter(characters);
  }

}
