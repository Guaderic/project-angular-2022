import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private service:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]\w{3,14}$/)])
    });

  }

  submitLogin() {
    this.service.login(this.loginForm.value).subscribe({
      next:()=>this.router.navigate(['movies']),
      error:(err)=>alert(err.message)
    })
  }
}
