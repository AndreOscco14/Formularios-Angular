import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

 usuario ={
  nombre: 'Andre',
  apellido: 'Oscco',
  correo: 'andre@gmail.com'
 }


  guardar( formulario : NgForm){
    console.log( formulario);

    if(formulario.invalid){
      Object.values(formulario.controls) .forEach(control => {
        control.markAllAsTouched();
      })
      return;
    }
    console.log( formulario.value); 
  }
}
