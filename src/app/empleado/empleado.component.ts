import { Component } from '@angular/core';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
  public nombre_componente = 'Componente Empleado';
  public listado_empleados = 'Sofía, Manuel, Yuliana, Alejandro';
}
