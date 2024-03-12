import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public pokemons: any;
  public limit:number = 11;

  constructor(private pokemonService:PokemonService){
  }
  ngOnInit(): void {
    this.pokemonService.pokeApiList.subscribe(
      res => {
        this.pokemons = res.results
      }
    )
  }
}
