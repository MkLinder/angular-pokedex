import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ComponentsModule,
        PagesModule
    ]
})
export class AppModule { }
