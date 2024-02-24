import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any = [];
  // pokemonsId: any = [];

  // public formatId(id:any){
  //   id = id.toString().padStart(3, "0")
  //   console.log(id)
  // }

  constructor(private pokemonService:PokemonService){
  }
  ngOnInit(): void {
    this.pokemonService.pokeApiList.subscribe(
      res => {
        this.pokemons = res.results
        // console.log(this.pokemons)
      }
    )
  }
}
