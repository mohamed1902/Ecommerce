import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICart, IProduct } from '../../../../core/interFaces/http';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from "primeng/menubar";
import { CartsService } from '../../../../core/services/carts.service';
import { NotificationsService } from '../../../../core/services/notifications.service';
import { EmptyComponent } from '../../empty/empty.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, ButtonModule, MenubarModule, EmptyComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) isSmallCard: boolean = false;
  @Input({ required: true }) products!: IProduct[];
  @Input() searchKey: string = '';
  isAddToCart: boolean = false;
  constructor(private _cart: CartsService) { }

  onAddToCart(product: IProduct) {
    this._cart.addToCart(product);
  }
}
