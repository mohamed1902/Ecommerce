import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IRegister } from '../../../core/interFaces/http';
import { AuthService } from '../../../core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/module/shared/shared.module';
import { UserDataService } from '../../../core/services/user-data.service';
import { NotificationsService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  name!: FormControl;
  email!: FormControl;
  password!: FormControl;
  rePassword!: FormControl;
  registeationForm!: FormGroup;

  constructor(private _authService: AuthService, private _notificationsService: NotificationsService, private _router: Router, private _userData:UserDataService) {
    this.initFormControls();
    this.initFormGroups();
  }

  initFormControls(): void {
    this.name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.rePassword = new FormControl('', [Validators.required, this.passwordMatch(this.password)]);
  }
  initFormGroups(): void {
    this.registeationForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      rePassword: this.rePassword,
    })
  }

  passwordMatch(pass: AbstractControl): ValidatorFn {
    return (rePass: AbstractControl): null | { [key: string]: boolean } => {
      if (rePass.value !== pass.value) {
        return { PassNotMatch: true };
      } else return null;
    }
  }

  sumbit() {
    if (this.registeationForm.valid) {
      this.signUp(this.registeationForm.value)
    } else {
      this.registeationForm.markAllAsTouched();
      Object.keys(this.registeationForm.controls).forEach((control) => this.registeationForm.controls[control].markAsDirty());
    }

  }

  signUp(data: IRegister): void {
    this._authService.register(data).subscribe({
      next: (response) => {
        console.log(response);
        if (response.id) {
          this._notificationsService.showSuccess('Success', 'Success Register');
          this.registeationForm.reset();
          const { email, password } = data;
          this._authService.login({ email, password }).subscribe((next) => {
            localStorage.setItem('token', response.id);
            this._router.navigate(['home'])
            this._userData.userName.next(response.name);
            localStorage.setItem('username',  response.name);
          })
        }
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
