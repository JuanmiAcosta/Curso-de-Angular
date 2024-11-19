import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public personajesList: Personaje[] = [];

  constructor() { }

  borrarPersonaje(id: string): void {
    this.onDeletePersonaje.emit(id);
  }
}
