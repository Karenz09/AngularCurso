import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Spiderman';
  public age: number = 30;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription (): string{
    
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Ironman';
  }

  changeAge(): void{
    this.age = 45;
  }

  resetForm(): void{
    this.name = 'Spiderman';
    this.age = 30;
  }
}
