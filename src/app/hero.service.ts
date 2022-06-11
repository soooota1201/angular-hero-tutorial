import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROS } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROS)
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROS.find(h => h.id === id)
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }
}
