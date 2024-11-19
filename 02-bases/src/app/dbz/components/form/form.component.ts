import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

    @Output()
    public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

    constructor() { }

    public personajeForm: Personaje = {
      nombre: '',
      poder: 0
    };

    public refrescarForm(): void {
      this.personajeForm = {
        nombre: '',
        poder: 0
      };
    }

    public emitPersonaje(): void {
      console.log(this.personajeForm);

      //debugger;

      if(this.personajeForm.nombre.trim().length !== 0) {
        this.onNewPersonaje.emit(this.personajeForm);
      }

      this.refrescarForm();
    }

}
