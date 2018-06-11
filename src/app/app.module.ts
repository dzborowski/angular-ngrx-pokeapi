import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

import { AppRoutingModule } from './core/app-routing.module';
import { PokemonModule } from './pokemon-center/pokemon.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/pokemon.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './effects/pokemon.effects';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([PokemonEffects]),
    StoreModule.forRoot({
      data: reducer
    }),
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
