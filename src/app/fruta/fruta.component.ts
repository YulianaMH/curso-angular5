import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent implements OnInit {
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

  ngOnInit() {
    this.cambiarNombre();
    this.cambiarEdad(15);
    console.log(this.nombre + ' ' + this.edad);

    // Variables y alcance
    var uno = 8;
    var dos = 15;

    if (uno === 8 ) {
      let uno = 3;   // let: a nivel de bloque.
      var dos = 88;  // var: a nivel global

      console.log('DENTRO DEL IF: ' + uno + ' ' + dos );
    }
    console.log('FUERA DEL IF: ' + uno + ' ' + dos );
  }

  cambiarNombre() {
    this.nombre = 'Yuli';
  }

  cambiarEdad(edad) {
    this.edad = edad;
  }

}

