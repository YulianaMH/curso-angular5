// Esta vendría siendo la vista
import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent implements OnInit {
  public nombre_componente = 'Componente Empleado';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public color_seleccionado: string;
  // public listado_empleados = 'Sofía, Manuel, Yuliana, Alejandro';

  constructor() {
    this.empleado = new Empleado('Yuliana Murillo', 17, 'Gerente', true);

    this.trabajadores = [
      new Empleado('Alejandra M.', 40, 'Enfermera', false),
      new Empleado('AMaximiliano M.', 40, 'Ingeniero', true),
      new Empleado('Julio M.', 40, 'Licenciado', true),
      new Empleado('Sandra M.', 40, 'Ingeniera', true)
    ];

    this.trabajador_externo = true;
    this.color = 'blue';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit() {
    console.log(this.trabajadores);
    console.log(this.empleado);
  }

  cambiarExterno(valor) {
    this.trabajador_externo = valor;
  }

  logColorSeleccionado() {
    console.log(this.color_seleccionado);
  }

}
