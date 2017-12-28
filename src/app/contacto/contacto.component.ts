import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {
  public titulo = 'Página de contacto de la web';
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
      console.log(params);
    });
  }

  redirigir() {
    this._router.navigate(['/contacto', 'Hola Yuli']);
  }

  redirigirHome() {
    this._router.navigate(['/pagina-principal']);
  }
}
