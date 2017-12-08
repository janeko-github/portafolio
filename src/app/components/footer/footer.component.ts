import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  anio:number;
  hora:string;

  constructor() {
    var d = new Date();
    this.anio = d.getFullYear();
    this.hora = d.toLocaleTimeString();
  }


}
