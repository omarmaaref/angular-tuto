import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService,
  private http: HttpClient
  ) { }

private log(message : string ){
this.
}
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('mrgl ');
  return heroes;
}
getHero(id : number ): Observable<Hero>{
const hero = HEROES.find(h=>h , id===id)!;
  this.messageService.add(`HeroService: fetched hero id=${id}`);
return of(hero);
}
}
