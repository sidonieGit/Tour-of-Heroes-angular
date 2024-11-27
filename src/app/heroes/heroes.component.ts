import { Component } from '@angular/core';
// import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  ngOnChanges(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
