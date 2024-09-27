import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from '../app/componentes/tareas/crear-tarea/crear-tarea.component';
import { ObtenerTodosComponent } from '../app/componentes/usuarios/obtener-todos/obtener-todos.component';
import { GuardarUsuarioComponent } from '../app/componentes/usuarios/guardar-usuario/guardar-usuario.component';
import { ObtenerTodasTareasComponent } from '../app/componentes/tareas/obtener-todas-tareas/obtener-todas-tareas.component';
import { ActualizarTareaComponent } from '../app/componentes/tareas/actualizar-tarea/actualizar-tarea.component';
import { LoginComponent } from '../app/componentes/general/login/login.component';
import { authGuard } from '../app/helpers/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'actualizar-tarea', component: ActualizarTareaComponent, canActivate: [authGuard] },
  { path: 'obtener-todas-tareas', component: ObtenerTodasTareasComponent, canActivate: [authGuard] },
  { path: 'guardar-usuario', component: GuardarUsuarioComponent, canActivate: [authGuard] },
  { path: 'obtener-todos-usuarios', component: ObtenerTodosComponent, canActivate: [authGuard] },
  { path: 'crear-tarea', component: CrearTareaComponent, canActivate: [authGuard] },
  { path: '**', component: LoginComponent },
  { path: '', component: LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
