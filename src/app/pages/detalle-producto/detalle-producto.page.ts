import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
    ) {
    activatedRoute.params.subscribe(params =>{
      console.log(params)
      this.buscarProducto(params['nombre']);
    })
   }
   cantidad = 1;

   buscarProducto(nombreProductoABuscar:String){
    

    for (let i = 0; i < CATEGORIAS.length; i++) {
      const categoriaActual = CATEGORIAS[i];
      for (let j = 0; j < categoriaActual.productos.length; j++) {
        const productoActual = categoriaActual.productos[j];

        if(productoActual.nombre === nombreProductoABuscar ){
          this.producto = productoActual;
        }
      }
      
    }
  

   }

  ngOnInit() {
  }

  producto:Producto ={
    imagen: '',
    nombre: '',
    descripcion: '',
    precio: 0
  }

}
