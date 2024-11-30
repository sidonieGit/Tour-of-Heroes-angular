import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // Indique que ce composant est standalone
  // Ce composant ne peut être importé dans d'autres composants
  // Il doit être uniquement utilisé dans ce fichier
  imports: [BrowserModule, FormsModule, AppRoutingModule],

  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ], // Gardez uniquement les composants qui ne sont pas standalone à la creation d'un composant angular fait la déclaration du composant automatiquement avec la version 17 par contre si on use la version 16 il faut les déclarer manuellement

  providers: [],
  bootstrap: [AppComponent], // Indique le composant principal à charger
})
export class AppModule {}
