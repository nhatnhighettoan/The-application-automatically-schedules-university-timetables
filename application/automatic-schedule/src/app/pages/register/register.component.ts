import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnvUrl } from '../../env-url';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  envUrl = EnvUrl
}
