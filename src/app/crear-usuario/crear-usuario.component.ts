import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
    if (this.form.invalid) {
      return;
    }

    console.log('Datos del formulario:', this.form.value);

    alert('Formulario enviado exitosamente');
  }

  get f() {
    return this.form.controls;
  }

}

