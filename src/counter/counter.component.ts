import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'counter-component',
    template: `
        <h1>Contador</h1>
        <h4> Contador : {{counter}} </h4>
        <button (click)="this.sum()">+1</button>
        <button (click)="this.rest()">-1</button>
        <button (click)="this.reset()">Reset</button>
    `
})

export class CounterComponent {

    public counter: number = 0;

    constructor() { }

    public sum(): void {
      this.counter++;
    }

    public rest(): void {
      this.counter--;
    }

    public reset(): void {
      this.counter = 0;
    }

}
