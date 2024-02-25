import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

//Services
import { PokemonService } from 'src/app/services/pokemon.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private urlPokemon:string = environment.pokemonsListUrl;
  private urlName:string = 'https://pokeapi.co/api/v2/pokemon-species/';

  public pokemon:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private pokeService:PokemonService
    ) { } // 'ActivatedRoute' recupera informações que vem na url.

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeService.getPokemonsDetails(`${this.urlPokemon}${id}`);
    const name = this.pokeService.getPokemonsDetails(`${this.urlName}${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res
      }
    )
    // 'forkJoin' método que carrega as duas requisições da api (pokemon e name),
    // e quando terminar devolve a resposta das duas juntas. Ele substitui
    // fazer vários subscribe().
  }
}
