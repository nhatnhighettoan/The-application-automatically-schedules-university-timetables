import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnvUrl } from '../../env-url';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  envUrl = EnvUrl
  registerForm! : FormGroup
  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]*$")]),
      faculty: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]*$")])
    })
  }

  get email(){
    return this.registerForm.get('email')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get name(){
    return this.registerForm.get('name')
  }

  get faculty(){
    return this.registerForm.get('faculty')
  }

  getForm(){
    return{
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      name: this.registerForm.value.name,
      faculty: this.registerForm.value.faculty,
    }
  }

  clearForm(){
    this.registerForm.get('email')?.setValue('')
    this.registerForm.get('password')?.setValue('')
    this.registerForm.get('name')?.setValue('')
    this.registerForm.get('faculty')?.setValue('')
  }

  onClickValidate(){
    this.registerForm.get('email')?.markAsTouched()
    this.registerForm.get('password')?.markAsTouched()
    this.registerForm.get('name')?.markAsTouched()
    this.registerForm.get('faculty')?.markAsTouched()
  }

  onSubmit(){
    this.onClickValidate()
    if(!this.registerForm.invalid){
      console.log(this.getForm())
    }
  }

}
