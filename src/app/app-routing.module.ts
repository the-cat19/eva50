import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EncuentranosComponent } from './componentes/encuentranos/encuentranos.component';
import { ComunicateComponent } from './componentes/comunicate/comunicate.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "Encuentranos", component:EncuentranosComponent},
  {path: "comunicate", component:ComunicateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
