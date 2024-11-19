import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzComponent {

  constructor ( private dbzService: DbzService ) {}

  get personajes() {
    return this.dbzService.personajes;
  }

  onDeletePersonajePorId(id: string): void {
    this.dbzService.onDeletePersonajePorId(id);
  }

  onNewPersonaje(personaje: Personaje): void {
    this.dbzService.onNewPersonaje(personaje);
  }

}
