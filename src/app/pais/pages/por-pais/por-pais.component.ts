import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
 
})
export class PorPaisComponent {

  termino : string = "Honduras";
  hayError: boolean = false;
  paises : Country[] = []; 

  constructor(private paisService: PaisService){}

  buscar( termino : string ){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe({ 
        next: (paises) =>{
          console.log(paises);
          this.paises = paises;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      });
  }

  sugerencias(termino: string){
    this.hayError = false; 
    //TODO : Crear sugerencias
  }



}
