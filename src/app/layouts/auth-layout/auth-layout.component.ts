import { Component } from '@angular/core';
import { AuthNavComponent } from "../../components/auth-nav/auth-nav.component";
import { AuthFooterComponent } from "../../components/auth-footer/auth-footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthNavComponent, AuthFooterComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
