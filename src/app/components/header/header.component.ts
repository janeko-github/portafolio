import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {
  constructor( public _is:InformacionService, public enrutador:Router) {

  }
  buscar_producto(termino:string) {

    this.enrutador.navigate(['/buscar',termino]);
    //console.log(termino);
  }


}
