import { Component} from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  anio:number;
  hora:string;

  constructor(public _is:InformacionService) {
    var d = new Date();
    this.anio = d.getFullYear();
    this.hora = d.toLocaleTimeString();
  }


}
