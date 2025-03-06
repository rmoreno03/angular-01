import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America', 'Luplas', 'Reindy', 'Orton'];
  public deletedHero?: string;

  public removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
