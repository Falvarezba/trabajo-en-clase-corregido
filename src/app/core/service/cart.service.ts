import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductoCarrito } from '../interfaces/carrito';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carrito: ProductoCarrito[] =[]
  totalCarrito: number = 0;
  
  constructor() {
    const guardado = localStorage.getItem("carrito");
    if(guardado){
      this.carrito = JSON.parse(guardado);
    }
   }

  agregarAlCarrito(producto:Producto, cantidad:number){

    const index = this.carrito.findIndex (item => item.producto.nombre = producto.nombre)
    if(index === -1 ){
      const productoActual: ProductoCarrito = {
      cantidad: cantidad,
      producto: producto
    }
    this.carrito.push(productoActual);
  }
  
    else{
      this.carrito[index].cantidad = this.carrito [index].cantidad + cantidad;
    }


    
    
    
    console.log(this.carrito)
    this.guardarLocalStorage()
    this.calcularTotal()
  
    
  }
  eliminarProducto(nombre: string){
    this.carrito = this.carrito.filter(item => item.producto.nombre != nombre)
    this.guardarLocalStorage()
    this.calcularTotal();
  }
  vaciarCarrito(){
    this.carrito = [];
    this.guardarLocalStorage();
    this.calcularTotal();
  }
  cambiarCantidad(){
    this.guardarLocalStorage();
    this.calcularTotal();
  }
  guardarLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(this.carrito))
  }
  calcularTotal(){
    let subtotal = 0;
    this.carrito.forEach(item => {
      subtotal = subtotal+item.producto.precio * item.cantidad
    })
    this.totalCarrito = subtotal;
  }
  
  
}
