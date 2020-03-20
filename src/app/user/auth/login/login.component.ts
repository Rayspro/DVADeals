import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: any = {
    email: '',
    password: ''
  };

  isSubmit = false;

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.isSubmit = true;
    if (this.loginData.email.length < 2) {

    } else {
      if (this.loginData.password < 6) {

      } else {
        this.auth.login(this.loginData)
          .subscribe(res => {
            this.isSubmit = false;
            if (res.status && res.status === 200) {
              console.log(res.body);
              localStorage.setItem('token', res.body.token);
              this.router.navigate(['/dashboard/main']);
            }
          });
      }
    }
  }

  ngOnInit(): void { }

}
