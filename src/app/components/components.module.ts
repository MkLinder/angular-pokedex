import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PokemonListComponent,
    FooterComponent,
    ButtonComponent
  ],
  exports: [
    HeaderComponent,
    PokemonListComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
