import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from '../app/componentes/tareas/crear-tarea/crear-tarea.component';

const routes: Routes = [
  { path: 'employees-get-all', component: CrearTareaComponent },
  { path: '**', component: CrearTareaComponent },
  { path: '', component: CrearTareaComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
