import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PokemonListComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    PokemonListComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
