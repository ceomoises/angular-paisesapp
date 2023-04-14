import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  /* 
   * Este Input ayuda a recibir como [paises] 
   * <app-pais-tabla [paises]="paises"></app-pais-tabla>
   * otro arreglo de "paises" de quien llame este componente. 
   */
  
    @Input() paises : Country[] = [];
  
}
