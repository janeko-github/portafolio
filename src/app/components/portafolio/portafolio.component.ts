import { Component } from '@angular/core';

import { ProductosService } from '../../services/productos.service';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent {

  constructor(public _ps:ProductosService,public _is:InformacionService) {
  }

}
