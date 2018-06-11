export interface Init {
  count: number;
  next: string;
  previous: any;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokeDetail {
  abilities: any[];
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  species: Pokemon;
  sprites: any[];
  stats: any[];
  types: any[];
  weight: number;
}

export class PokemonObj {
  constructor(private id: number, private name: string, private url: string) { };
}
