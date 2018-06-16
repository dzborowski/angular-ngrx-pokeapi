import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from './../../reducers/pokemon.reducer';
import { PokemonObj } from './../../models/pokemon.model';
import * as PokemonActions from './../../actions/pokemon.actions';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  init: Observable<State>;
  load: boolean;
  ELEMENT_DATA: PokemonObj[] = [];
  dataSource: MatTableDataSource<PokemonObj>;
  displayedColumns = ['id', 'name', 'url'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  paginatorSize: number[];

  constructor(private store: Store<State>) {
    store.dispatch(new PokemonActions.InitPokemon());
    this.init = store.select('data');
  }

  ngOnInit() {
    this.load = false;
    this.init.subscribe(x => {
      if (x.size && x.pokemons.length == 0) {
        this.store.dispatch(new PokemonActions.GetPokemons(x.size));
      }

      if (x.pokemons.length > 0 && this.ELEMENT_DATA.length == 0) {

        this.ELEMENT_DATA = x.pokemons.map(poke => {
          let id = parseInt(poke.url.split('/')[6]);
          return new PokemonObj(id, poke.name, poke.url)
        });

        this.dataSource = new MatTableDataSource<PokemonObj>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.load = true;
      }

    });

    this.paginatorSize = [5, 10, 20];

  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectRow(row): void {
    console.log(row);
  }

}
