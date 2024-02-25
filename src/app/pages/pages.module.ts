import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { RoutingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from "../components/components.module";
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    exports: [],
    providers: [],
    bootstrap: [],
    imports: [
        CommonModule,
        RoutingModule,
        ComponentsModule
    ]
})
export class PagesModule { }
