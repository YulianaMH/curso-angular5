import { Component } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  public nombre_componente = 'Componente Fruta';
  public listado_frutas = 'Naraja, Manzana, Pera y Sandía';

  // Tipos de datos. Creo no es necesario definir el tipo, Angular lo interpreta
  public nombre: string;
  public edad: number;
  public mayorEdad: boolean;
  public trabajos: Array<any> = ['Carpintero', 55, 'Médico'];
  comodin: any;

  constructor() {
    this.nombre = 'Yuliana';
    this.edad = 20;
    this.mayorEdad = true;
    this.comodin = 'cualquier cosa';
    console.log(this.trabajos);
  }
}

