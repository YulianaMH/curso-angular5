import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Es como el index, la página de inicio
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: 'pagina-principal', component: HomeComponent },
  { path: 'contacto/:page', component: ContactoComponent },
  { path: '**', component: HomeComponent } // Para errores, un 404 se mostraría Empleado
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
