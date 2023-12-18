import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 login : FormGroup; 

  constructor(private fb : FormBuilder){
  this.login = this.fb.group({
   e_mail: [''],
   password: ['']
  }); 
  }
  

}
