import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private limit = 151;
  private url = `${environment.pokemonsListUrl}?limit=${this.limit}`;


  constructor(private http:HttpClient) {
  }

  get pokeApiList():Observable<any>{
    return this.http.get<any>(this.url).pipe(  // 'pipe()' funciona como um filtro, retornando somente o que queremos.
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons:any) => {
          this.getPokemonsDetails(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      }),
      tap(res => {
        res.results.map((resPokemons:any) => {
          this.getPokemonsDetails(resPokemons.url).subscribe(
            res => resPokemons.id = res.id.toString().padStart(3, '0')
          )
        })
      })
    )
  }

  public getPokemonsDetails( url:string):Observable<any>{ // Esta função foi criada pois iremos utilizar
    return this.http.get<any>(url).pipe(             // este trecho de código para outras funciolidades.
      tap(res => res)
    )
  }
}
