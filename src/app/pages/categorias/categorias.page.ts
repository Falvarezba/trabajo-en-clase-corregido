import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Categoria } from 'src/app/core/interfaces/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  
  categoria : Categoria | undefined ;

  constructor(
    private activatedRoute : ActivatedRoute
  ) {
    activatedRoute.params.subscribe(Params => {
      this.categoria = CATEGORIAS.find (categoria => categoria.nombre ===  Params['nombre'])
    } )
  }

  
  ngOnInit() {
  }


  


}
