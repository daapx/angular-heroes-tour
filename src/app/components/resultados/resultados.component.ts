import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  heroes:Heroe[] = [];
  termino = "";
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params =>{
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }

  ngOnInit(): void {
  }

}
