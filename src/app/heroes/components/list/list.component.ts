import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  public removedHero?: string = undefined;

  removeHero() {
    this.removedHero = this.heroes.pop();
    if (this.removedHero) {
      console.log(`Hero removed: ${this.removedHero}`);
    }
  }
}
