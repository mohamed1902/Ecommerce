import { Component } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ICart, IProduct } from '../../../core/interFaces/http';
import { ButtonModule } from 'primeng/button';
import { CartsService } from '../../../core/services/carts.service';
import { NotificationsService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  constructor(private _activatedRoute: ActivatedRoute, private _cart: CartsService) { }

  id: string = '';
  productDetails!: IProduct;
  isAddToCart: boolean = false;

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((next: any) => this.id = next.get('id') ?? '');
    this.displayDetails();
  }

  displayDetails(): void {
    this._activatedRoute.data.subscribe((data: any) => { this.productDetails = {
      ...data.details,
      isAddToCart: this._cart.isAddedToCart(data.details)
    } });
  }


  onAddToCart(product: IProduct) {
    this._cart.addToCart(product);
  }
}
