import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ILogin } from '../../../core/interFaces/http';
import { AuthService } from '../../../core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/module/shared/shared.module';
import { UserDataService } from '../../../core/services/user-data.service';
import { NotificationsService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  email!: FormControl;
  password!: FormControl;
  loginForm!: FormGroup;

  constructor(private _authService: AuthService, private _notificationsService: NotificationsService, private _router: Router, private _userData:UserDataService) {
    this.initFormControls();
    this.initFormGroups();
  }

  initFormControls(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
  }
  initFormGroups(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    })
  }


  sumbit() {
    if (this.loginForm.valid) {
      this.signIn(this.loginForm.value)
    } else {
      this.loginForm.markAllAsTouched();
      Object.keys(this.loginForm.controls).forEach((control) => this.loginForm.controls[control].markAsDirty());
    }

  }

  signIn(data: ILogin): void {
    this._authService.login(data).subscribe({
      next: (response) => {
        console.log(response);
        if (response.id) {
          this._notificationsService.showSuccess('Success', 'Success Login');
          localStorage.setItem('token', response.id);
          this.loginForm.reset();
          this._userData.userName.next(response.name);
          localStorage.setItem('username',  response.name);
        }
        this._router.navigate(['home'])
      },
      error: (err) => {
        const errorMessage =
          err?.error?.message ||
          err?.error?.error ||
          err?.message ||
          'Could not connect to server. Please check if the backend is running.';

        this._notificationsService.showError('Error', errorMessage);
      }
    });
  }
}

