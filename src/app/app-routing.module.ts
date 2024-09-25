import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from '../app/componentes/tareas/crear-tarea/crear-tarea.component';
import { ObtenerTodosComponent } from '../app/componentes/usuarios/obtener-todos/obtener-todos.component';

const routes: Routes = [
  { path: 'employees-get-all', component: ObtenerTodosComponent },
  { path: 'crear-tarea', component: CrearTareaComponent },
  { path: '**', component: ObtenerTodosComponent },
  { path: '', component: ObtenerTodosComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
