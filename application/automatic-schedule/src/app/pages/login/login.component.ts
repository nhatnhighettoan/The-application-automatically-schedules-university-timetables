import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnvUrl } from '../../env-url';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  envUrl = EnvUrl
}
