import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnvUrl } from '../../env-url';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  envUrl = EnvUrl
  loginForm! : FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  getForm() {
    return {
      email: this.loginForm.value.email,
      password : this.loginForm.value.password
    }
  }

  clearForm(){
    this.loginForm.get('email')?.setValue('')
    this.loginForm.get('password')?.setValue('')
  }

  onClickValidate(){
    this.loginForm.get('email')?.markAsTouched()
    this.loginForm.get('password')?.markAsTouched()
  }

  onSubmit(){
    this.onClickValidate()
    if(!this.loginForm.invalid){
      console.log(this.getForm())
    }
  }
}
