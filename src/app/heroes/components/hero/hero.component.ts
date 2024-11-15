import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

    public name: string = 'Ironman';
    public age: number = 45;
    public address: string = 'New York, USA';

    get capitalizedName(): string {
      return this.name.toUpperCase();
    }

    public getName(): string {
      return this.name;
    }

    public getAge(): number {
      return this.age;
    }

    public getAddress(): string {
      return this.address;
    }

    public changeName(): void {
      this.name = 'Spiderman';
    }

    public changeAge(): void {
      this.age = 30;
    }

    public changeAddress(): void {
      this.address = 'Mexico City, Mexico';
    }

    public changedName(): boolean {
      return this.name == 'Ironman';
    }

    public changedAge(): boolean {
      return this.age == 45;
    }
}
