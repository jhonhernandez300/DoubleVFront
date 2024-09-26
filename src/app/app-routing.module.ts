import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from '../app/componentes/tareas/crear-tarea/crear-tarea.component';
import { ObtenerTodosComponent } from '../app/componentes/usuarios/obtener-todos/obtener-todos.component';
import { GuardarUsuarioComponent } from '../app/componentes/usuarios/guardar-usuario/guardar-usuario.component';
import { ObtenerTodasTareasComponent } from '../app/componentes/tareas/obtener-todas-tareas/obtener-todas-tareas.component';

const routes: Routes = [
  { path: 'obtener-todas-tareas', component: ObtenerTodasTareasComponent },
  { path: 'guardar-usuario', component: GuardarUsuarioComponent },
  { path: 'employees-get-all', component: ObtenerTodosComponent },
  { path: 'crear-tarea', component: CrearTareaComponent },
  { path: '**', component: ObtenerTodasTareasComponent },
  { path: '', component: ObtenerTodasTareasComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
