import { NgModule } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';


@NgModule({
  declarations: [],
  imports: [
    NgxSpinnerModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ReactiveFormsModule, ButtonModule, MessagesModule, AutoFocusModule
  ],
  exports: [
    NgxSpinnerModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ReactiveFormsModule, ButtonModule, MessagesModule, AutoFocusModule
  ],
})
export class SharedModule { }
