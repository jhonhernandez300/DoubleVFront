import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '../../../servicios/tarea.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
//import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
//import { CloseDialogComponent } from '../close-dialog/close-dialog.component';
import { iTarea } from '../../../interfaces/iTarea';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent implements OnInit{
  myForm!: FormGroup; 
  submitted = false;
  tareaIdSeleccionada!: number;
  tareas: iTarea[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private tareaService: TareaService,
    private router: Router,
    public dialog: MatDialog    
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {   
  }

  private initializeForm(): void {
    this.myForm = this.formBuilder.group({                                
      tareaId: [0],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      usuarioId: [0]
    });
  }

  public onReset(): void {
    this.submitted = false;
    this.myForm.reset();
  }

  public async onSubmit(): Promise<void> {
    this.submitted = true;
    this.myForm.patchValue({
      usuarioId: null 
    });
    console.log("Form value ", this.myForm.value);        

    if (this.myForm.invalid) {
      console.log('Error de validación')          
      // this.dialog.open(CloseDialogComponent, {            
      //   data: { message: "Check the values of the form" } 
      // });
      return;
    }             
    
    this.tareaService.CrearTarea(this.myForm.value).subscribe({
      next: (response: any) => {
          console.log('response', response);
          // this.dialog.open(CloseDialogComponent, {            
          //   data: { message: "Employee created" } 
          // });
      },
      error: (error: any) => {
          console.error('Request error:', error);
          // this.dialog.open(CloseDialogComponent, {            
          //   data: { message: error } 
          // });
      }
  });     
  }

  get form(): { [key: string]: AbstractControl; }
  {
      return this.myForm.controls;
  }
}
