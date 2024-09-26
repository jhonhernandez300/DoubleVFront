import { Component, OnInit, ViewChild } from '@angular/core';
import { iUsuarioCorto } from '../../../interfaces/iUsuarioCorto';
import { iTareaConUsuarioDTO } from '../../../interfaces/iTareaConUsuarioDTO';
import { TareaService } from '../../../servicios/tarea.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../general/confirm-dialog/confirm-dialog.component';
import { CloseDialogComponent } from '../../general/close-dialog/close-dialog.component';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
//import { UsuarioTransferService } from '../../../servicios/usuario-transfer.service';

@Component({
  selector: 'app-obtener-todas-tareas',
  templateUrl: './obtener-todas-tareas.component.html',
  styleUrl: './obtener-todas-tareas.component.css'
})
export class ObtenerTodasTareasComponent implements OnInit {
  dataSource = new MatTableDataSource<iTareaConUsuarioDTO>([]); 
  errorMessage: string = '';  
  showDiv = false;  
  userChoice = false;
  displayedColumns: string[] = ['descripcion', 'estado', 'usuarioNombre'];

  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  constructor(
    private router: Router,    
    private tareaService: TareaService, 
    public dialog: MatDialog
    //public usuarioTransferService: UsuarioTransferService
  ) { }

  ngOnInit(): void {
    this.loadAllTareas();
  }

  public loadAllTareas(): void {
    this.tareaService.ObtenerTareasConUsuarios().subscribe(
      (response: any) => {
        if (response.message != "Tareas obtenidas exitosamente.") {
          this.handleEmpty(response.data);
        } else {                    
          this.dataSource.data = response.data; // Actualiza la tabla con los datos recibidos
          this.dataSource.paginator = this.paginator; // Conecta el paginador
        }
      },
      (error: any) => {
        this.handleError(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  // update(employee: iEmployeeRole) {
  //   this.employeeDataTransferService.changeEmployee(employee);
  //   this.router.navigate(['/employee-update']);        
  // }

  // delete(id: number) {
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.userChoice = result;  
  //     if (this.userChoice) {
  //       this.deleteEmployee(id);
  //     }
  //   });
  // }

  // deleteEmployee(id: number): void {
  //   this.employeeService.DeleteEmployee(id).subscribe(
  //     (response: any) => {
  //       if (response.message === "Employee not found with that id") {
  //         this.dialog.open(CloseDialogComponent, {
  //           data: { message: response.message } 
  //         });
  //       } else {          
  //         this.dialog.open(CloseDialogComponent, {            
  //           data: { message: "Employee deleted" } 
  //         });
  //         this.updateEmployees(id);
  //       }
  //     },
  //     (error: any) => {
  //       this.handleError(error);
  //     }
  //   );
  // }

  // private updateEmployees(id: number): void {
  //   this.dataSource.data = this.dataSource.data.filter(employee => employee.id !== id);
  // }

  private handleEmpty(message: string): void {
    this.errorMessage = message;
    this.showTemporaryDiv();
  }

  private showTemporaryDiv(): void {
    this.showDiv = true;
    setTimeout(() => this.showDiv = false, 5000);
  }

  private handleError(error: any): void {
    console.error('Error:', error);
    this.errorMessage = error;
    this.showTemporaryDiv();
  }
}

