
import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-pages.component.html'
})

export class MainPageComponent  {
    constructor(private dbzService: DbzService){} //aqui se hace inyeccion de servicios
    

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.addCharacter( character );
  }
}