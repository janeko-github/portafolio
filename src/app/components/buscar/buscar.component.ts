import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {
  terminoabuscar:string;
  constructor(private route:ActivatedRoute, private _ps:ProductosService, public _is:InformacionService) {
    route.params.subscribe(parametros => {
      this.terminoabuscar = parametros['termino'];
      
     _ps.buscar_productos(this.terminoabuscar);
    })
  }

}
