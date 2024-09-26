import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iUsuario } from '../interfaces/iUsuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { iUsuarioSinIdDTO } from '../interfaces/iUsuarioSinIdDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://localhost:7136/api/Usuarios'; 

  constructor(private http: HttpClient) { }

  BorrarUsuario(id: number): Observable<any> {             
    return this.http.delete(`${this.apiUrl}/BorrarUsuario` + "/" + id).pipe(
      catchError(error => {
          console.error('Request error:', error);
          return throwError(error);
      })    
    );    
  }

  CrearUsuario(usuario: iUsuarioSinIdDTO): Observable<any> {             
    return this.http.post(`${this.apiUrl}/CrearUsuario`, usuario).pipe(
      catchError(error => {
          console.error('Request error:', error);
          return throwError(error);
      })    
    );    
  }

  ObtenerTodosLosUsuariosAsync(): Observable<any> {             
    return this.http.get(`${this.apiUrl}/ObtenerTodosLosUsuariosAsync`).pipe(
      catchError(error => {
          console.error('Request error:', error);
          return throwError(error);
      })    
    );    
  }
}
