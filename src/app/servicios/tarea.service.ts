import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iTareaDTO } from '../interfaces/iTareaDTO';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private apiUrl = 'https://localhost:7136/api/Tareas'; 

  constructor(private http: HttpClient) { }

  ObtenerTareasConUsuarios(): Observable<any> {             
    return this.http.get(`${this.apiUrl}/ObtenerTareasConUsuarios`).pipe(
      catchError(error => {
          console.error('Request error:', error);
          return throwError(error);
      })    
    );    
  }

  CrearTarea(tarea: iTareaDTO): Observable<any> {         
    console.log(tarea);
    return this.http.post(`${this.apiUrl}/CrearTarea`, tarea).pipe(
      catchError(error => {
          console.error('Request error:', error);
          return throwError(error);
      })    
    );    
  }
}
