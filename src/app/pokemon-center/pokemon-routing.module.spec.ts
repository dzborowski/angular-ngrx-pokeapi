import { PokemonRoutingModule } from './pokemon-routing.module';

describe('PokemonRoutingModule', () => {
  let pokemonRoutingModule: PokemonRoutingModule;

  beforeEach(() => {
    pokemonRoutingModule = new PokemonRoutingModule();
  });

  it('should create an instance', () => {
    expect(pokemonRoutingModule).toBeTruthy();
  });
});
