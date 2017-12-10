import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  cargando:boolean=false;
  productos:any[] = [];
  productos_filtrados:any[] = [];

  constructor(private http:Http) {
    this.cargar_productos();

  }
  public cargar_producto(cod:string){
    return this.http.get(`https://paginawebportafolio-7b95a.firebaseio.com/productos/${ cod }.json`)
  }
  public buscar_productos(termino_buscar:string){
    //Tenemos todos los productos, hay que filtrarlos
    termino_buscar = termino_buscar.toLowerCase();
    if(this.productos.length === 0){
      this.cargar_productos().then(()=>{
        //finalizó la primera carga de todos los productos
        this.filtrar_productos(termino_buscar);
      });
    }else{
      this.filtrar_productos(termino_buscar);
    }
  }

  private filtrar_productos(termino_buscar:string) {
    this.productos_filtrados = [];
    this.productos.forEach(prod => {
      // console.log(prod);

      if((prod.categoria.toLowerCase().indexOf(termino_buscar) >= 0) || (prod.titulo.toLowerCase().indexOf(termino_buscar) >= 0)) {
        this.productos_filtrados.push(prod);
      }
    })
  }
  public cargar_productos(){
    this.cargando=true;
    let promesa = new Promise((resolve,reject) => {
        if(this.productos.length === 0){
          this.http.get("https://paginawebportafolio-7b95a.firebaseio.com/productos_idx.json")
          .subscribe(data =>{
            //  console.log(data.json());
            // setTimeout(()=>{
            this.cargando=false;
            this.productos = data.json();
            resolve();
            // },500)

          })
        }

    });
    return promesa;
  }

}
