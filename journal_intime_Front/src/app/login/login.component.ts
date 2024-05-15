import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private dataService: DataService){}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  authenticateUser() {
    if(this.loginForm.value.username == '' || this.loginForm.value.password == '') {
      alert("Tout les champ sont obligatoires")
    }
    else {
      this.dataService.authenticateUser(
        this.loginForm.value.username,
        this.loginForm.value.password
      );
    }
  }
}
