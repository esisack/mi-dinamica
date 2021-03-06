import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  userId: number;

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.authService.authenticate(this.form.value.username, this.form.value.password)) {
      setTimeout(() => {
        this.loginInvalid = false
        this.router.navigate(['/'])
    }, 15000);
    } else
      this.loginInvalid = true
  }
}
