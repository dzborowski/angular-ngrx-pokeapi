import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as PokemonActions from "./../actions/pokemon.actions";
import { PokemonService } from "./../pokemon-center/pokemon.service";


@Injectable()

export class PokemonEffects {

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) { }



  @Effect() initPokemon$: Observable<Action> = this.actions$.pipe(
    ofType<PokemonActions.InitPokemon>(
      PokemonActions.INIT_POKEMON
    ),
    switchMap(action => this.pokemonService.init().pipe(
      map(
        items => new PokemonActions.InitPokemonDone(items)
      ),
      catchError(error =>
        observableOf(new PokemonActions.InitPokemonFailure({ error }))
      )
    ))
  )


  @Effect() getPokemons$: Observable<Action> = this.actions$.pipe(
    ofType<PokemonActions.GetPokemons>(
      PokemonActions.GET_POKEMONS
    ),
    switchMap(action => this.pokemonService.getPokemons(action.payload).pipe(
      map(
        items => new PokemonActions.GetPokemonsDone(items)
      ),
      catchError(error =>
        observableOf(new PokemonActions.GetPokemonsFailure({ error }))
      )
    ))
  )


  @Effect() getPokemon$: Observable<Action> = this.actions$.pipe(
    ofType<PokemonActions.GetPokemon>(
      PokemonActions.GET_POKEMON
    ),
    switchMap(action => this.pokemonService.getPokemon(action.payload).pipe(
      map(
        items => new PokemonActions.GetPokemonDone(items)
      ),
      catchError(error =>
        observableOf(new PokemonActions.GetPokemonsFailure({ error }))
      )
    ))
  )


}
