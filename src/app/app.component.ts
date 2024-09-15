import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import {SignUpComponent} from './sign-up/sign-up.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [LoginComponent,SignUpComponent] 
  
})
export class AppComponent {
  title = 'your-app';}