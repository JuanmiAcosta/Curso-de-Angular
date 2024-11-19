import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public personajes: Personaje[] = [
    {id: uuid(), nombre: 'Goku', poder: 15000},
    {id: uuid(), nombre: 'Vegeta', poder: 7500},
    {id: uuid(), nombre: 'Trunks', poder: 7000},
    {id: uuid(), nombre: 'Gohan', poder: 10000},
    {id: uuid(), nombre: 'Piccolo', poder: 5000},
    {id: uuid(), nombre: 'Krilin', poder: 2000}
  ];

  constructor() { }

  onNewPersonaje(personaje: Personaje): void {
    personaje.id = uuid();
    this.personajes.push(personaje);
  }

  onDeletePersonajePorId(id: string): void {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
  }

}
