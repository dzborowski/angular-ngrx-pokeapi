import { Action } from '@ngrx/store';
import { Pokemon, PokeDetail } from './../models/pokemon.model';
import * as PokemonActions from './../actions/pokemon.actions';


export interface State {
  size: number;
  pokemon: PokeDetail;
  pokemons: Pokemon[];
  error?: any;
}

const initialState: State = {
  size: null,
  pokemon: null,
  pokemons: [],
  error: null
}


export function reducer(state: State = initialState, action: PokemonActions.Actions) {

  switch (action.type) {
    // INIT ACTIONS
    case PokemonActions.INIT_POKEMON:
      return state;
    case PokemonActions.INIT_POKEMON_DONE:
      return {
        ...state,
        size: action.payload.count
      };
    case PokemonActions.INIT_POKEMON_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    // GET_ALL ACTIONS
    case PokemonActions.GET_POKEMONS:
      return state;
    case PokemonActions.GET_POKEMONS_DONE:
      return {
        ...state,
        pokemons: action.payload.results
      };
    case PokemonActions.GET_POKEMONS_FAILURE:
      return state;
    // GET_ONE ACTIONS
    case PokemonActions.GET_POKEMON:
      return state;
    case PokemonActions.GET_POKEMON_DONE:
      return {
        ...state,
        pokemon: action.payload
      };
    case PokemonActions.GET_POKEMON_FAILURE:
      return state;

    default:
      return state;
  }

}
