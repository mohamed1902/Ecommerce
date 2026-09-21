import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { UserDataService } from '../../../core/services/user-data.service';
import { AuthService } from '../../../core/services/auth.service';
import { CartsService } from '../../../core/services/carts.service';
import { count } from 'console';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UserNavComponent {
  items: MenuItem[] | undefined;
  logOut: boolean = false;
  username: string = '';
  cartCount: number = 0;

  constructor(private _userData: UserDataService, private _cart: CartsService, private _authService: AuthService) { }

  ngOnInit() {
    this.getUserCartCount();
    this.getUserName();
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        path: 'home'
      },
      {
        label: 'Product',
        icon: 'pi pi-sparkles',
        path: 'product'
      },
      {
        label: 'Category',
        icon: 'pi pi-bars',
        path: 'category'
      }
    ]

    this._cart.countOfCart.subscribe((next) => {
      this.cartCount = next;
    })
  }

  getUserName() {
    this._userData.userName.subscribe((next) => this.username = next);
  }

  getUserCartCount() {
    const id = localStorage.getItem('token') ?? '';
    this._cart.countOfCart.subscribe((next) => (this.cartCount = next));
  }


  onLogout(): void {
    this._authService.logOut();
  }
}
