import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {


  form!: FormGroup;

constructor(
  private fb: FormBuilder )
    {
    this.crearFormulario();
    this.cargarDataAlFormulario();
    }


get nombreNoValido(){
  return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched
}


get apellidoNoValido(){
  return this.form.get('apellido')?.invalid && this.form.get('apellido')?.touched
}

get CorreoNoValido(){
  return this.form.get('correo')?.invalid && this.form.get('correo')?.touched
}

get DistritoNoValido(){
  return this.form.get('direccion.distrito')?.invalid && this.form.get('direccion.distrito')?.touched
}

get CiudadNoValida(){
  return this.form.get('direccion.ciudad')?.invalid && this.form.get('direccion.ciudad')?.touched
}



crearFormulario(){
  this.form = this.fb.group({
    nombre:   ['', [Validators.required, Validators.minLength(5)]],
    apellido: ['', Validators.required],
    correo:   ['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],
    direccion: this.fb.group({
      distrito: ['', Validators.required],
      ciudad: ['', Validators.required]
    })
  });
}


cargarDataAlFormulario(){
   this.form.setValue({
  //   nombre: 'Juan'
  // })

  nombre: 'Andre',
  apellido: 'Perez',
  correo: 'andre@gmail.com',
  direccion: {
    distrito: 'Madrid',
    ciudad: 'Lima'
  }
   })
}


guardar(){
  console.log(this.form); 
  if(this.form.invalid){
   return Object.values(this.form.controls).forEach(control => {

    if(control instanceof FormGroup) {
      Object.values(control.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }else{
      control.markAllAsTouched()
         }
      });
    }
      //POSTEO DE INFORMACIÓN
      this.form.reset();
  }
}
