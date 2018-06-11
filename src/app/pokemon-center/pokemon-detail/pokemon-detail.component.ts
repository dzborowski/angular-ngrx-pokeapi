import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from './../../reducers/pokemon.reducer';
import { PokeDetail } from './../../models/pokemon.model';
import * as PokemonActions from './../../actions/pokemon.actions';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  init: Observable<State>;
  my_poke: PokeDetail = null;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.init = store.select('data');
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new PokemonActions.GetPokemon(id));

    this.init.subscribe(x => {
      if (x.pokemon) {
        this.my_poke = x.pokemon;
      }
    })
  }


  goBack(): void {
    this.location.back();
  }

}
