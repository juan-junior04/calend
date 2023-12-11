import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiLoginService } from './api-login/api-login.service';
import { SharedDataService } from 'src/app/shared-data.service';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  error:boolean = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private apiUserServices: ApiLoginService,
    private sharedDataService: SharedDataService,
  ) {
    this.user = this.formBuilder.group({
      id_user: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Recuperar el estado de autenticación al cargar la página
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && isLoggedIn === 'true') {
      this.sharedDataService.setLoggedIn(true);
    }
  }

  errorLogin() {
    this.error = true;

    setTimeout(() => {
      this.error = false;
    }, 3000); // 3000 milisegundos = 3 segundos
  }

  login() {
    const enteredUsername = this.user.get('username')?.value;
    const enteredPassword = this.user.get('password')?.value;

    this.apiUserServices.findAllUser().pipe(
      switchMap(users => {
        const userExists = users.some(user => user.username === enteredUsername && user.password === enteredPassword);

        if (userExists) {
          this.sharedDataService.setLoggedIn(true);
          // Almacenar el estado de autenticación en localStorage
          localStorage.setItem('isLoggedIn', 'true');
        } else {
          this.errorLogin();
        }

        return of(userExists);
      }),
      catchError(error => {
        console.error('Error al obtener usuarios', error);
        return of(false);
      })
    ).subscribe();
  }
}
