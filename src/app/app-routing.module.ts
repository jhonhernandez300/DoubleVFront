import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from '../app/componentes/tareas/crear-tarea/crear-tarea.component';
import { ObtenerTodosComponent } from '../app/componentes/usuarios/obtener-todos/obtener-todos.component';
import { GuardarUsuarioComponent } from '../app/componentes/usuarios/guardar-usuario/guardar-usuario.component';

const routes: Routes = [
  { path: 'guardar-usuario', component: GuardarUsuarioComponent },
  { path: 'employees-get-all', component: ObtenerTodosComponent },
  { path: 'crear-tarea', component: CrearTareaComponent },
  { path: '**', component: GuardarUsuarioComponent },
  { path: '', component: GuardarUsuarioComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
