import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  cargando:boolean=false;
  productos:any[] = [];

  constructor(private http:Http) {
    this.cargar_productos();
  }
  public cargar_productos(){
    this.cargando=true;
    if(this.productos.length === 0){
      this.http.get("https://paginawebportafolio-7b95a.firebaseio.com/productos_idx.json")
        .subscribe(data =>{
          // console.log(data.json());
          // setTimeout(()=>{
            this.cargando=false;
            this.productos = data.json();
          // },500)

        })
    }
  }

}
