import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${ this.name } is ${ this.age } years old.`;
  }

  public changeName():void{
    this.name = 'Spiderman';
  }

  public changeAge():void{
    this.age = 25;
  }

  public resetForm():void{
    this.name = 'Ironman';
    this.age = 45;
  }
}
