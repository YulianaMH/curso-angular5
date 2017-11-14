import { Component } from '@angular/core';

@Component({
    selector: 'app-fruta',
    template: `
            <h2>{{nombre_componente}}</h2>
            <p>{{listado_frutas}}</p>
  `
})
export class FrutaComponent {
  public nombre_componente = 'Componente Fruta';
  public listado_frutas = 'Naraja, Manzana, Pera y Sandía';
}

