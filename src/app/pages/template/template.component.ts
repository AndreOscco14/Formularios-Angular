import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit{

 usuario ={
  nombre: 'Andre',
  apellido: 'Oscco',
  correo: 'andre@gmail.com',
  pais: ''
 }

 paises: any[] = [];

 constructor(
    private paisService: PaisService
 ){

 }


 ngOnInit(): void {
   this.paisService.getPaises().subscribe( paises => {
    // console.log(paises);
    this.paises = paises;

    this.paises.unshift({
      nombre: '[Seleccione Pais]',
      codigo: ''
    })

    console.log(this.paises);
    
   });
 }



  guardar( formulario : NgForm){

    console.log( formulario.value);

    if(formulario.invalid){
      Object.values(formulario.controls) .forEach(control => {
        control.markAllAsTouched();
      })
      return;
    }
    console.log( formulario.value); 
  }
}
