import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  registerData = {
    name: '',
    password: '',
    confirm_password: '',
    phone_number: '',
    email: ''
  };

  ngOnInit(): void { }

  register(): void {
    if (this.registerData.name.length < 2) {
      console.log('Input complete name');
    } else {
      if (this.registerData.email.length < 0) {

      } else {
        if (this.registerData.password.length < 6) {

        } else {
          if (this.registerData.password !== this.registerData.confirm_password) {

          } else {
            this.auth.register(this.registerData)
              .subscribe(res => {
                if (res.status && res.status === 200) {
                  this.router.navigate(['/auth/login']);
                }
              });
          }
        }
      }
    }
  }
}
