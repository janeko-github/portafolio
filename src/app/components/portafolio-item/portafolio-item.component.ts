import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent implements OnInit {
  producto:any = undefined;
  cod:string ="";

  constructor(private route:ActivatedRoute,public _is:InformacionService, private _ps:ProductosService) {
    route.params.subscribe(parametros => {
      // console.log(parametros);
      //  console.log(_is.info.titulo);
      //console.log(parametros['id']);
      // + parametros['id'];
      this.cod = parametros['id'];
       _ps.cargar_producto(parametros['id'])
       .subscribe(data => {
          this.producto = data.json();

        //  console.log(this.producto);
       }

     )



      // console.log("Parámetro " + parametros['id']);
      // console.log(this.producto);

    })
  }

  ngOnInit() {
  }

}
