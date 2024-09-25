import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTareaComponent } from './componentes/tareas/crear-tarea/crear-tarea.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ObtenerTodosComponent } from './componentes/usuarios/obtener-todos/obtener-todos.component';
import { GuardarUsuarioComponent } from './componentes/usuarios/guardar-usuario/guardar-usuario.component';
import { ConfirmDialogComponent } from '../app/componentes/confirm-dialog/confirm-dialog.component';
import { CloseDialogComponent } from '../app/componentes/close-dialog/close-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTareaComponent,
    ObtenerTodosComponent,
    GuardarUsuarioComponent,
    ConfirmDialogComponent,
    CloseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginator,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
