import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interFaces/http';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _notificationsService: NotificationsService) { }

  countOfCart: BehaviorSubject<number> = new BehaviorSubject((JSON.parse(localStorage.getItem('cartState') ?? '[]') as IProduct[]).length);

  addToCart(product: IProduct) {
    const storedCart = localStorage.getItem('cartState');
    const cart: IProduct[] = storedCart ? JSON.parse(storedCart) : [];
    if (!product.isAddToCart) {
      product.isAddToCart = true;
      cart.push(product);
      localStorage.setItem('cartState', JSON.stringify(cart));
      this._notificationsService.showSuccess('Success', 'Item Added To Cart');
      this.countOfCart.next(cart.length);
    } else {
      this._notificationsService.showWarn('Warning', 'Is Item Already Added')
    }
  }

  isAddedToCart(product: IProduct): boolean {
    const storedCart = localStorage.getItem('cartState');
    const cartState = storedCart ? JSON.parse(storedCart) : [];
    const isAdded = cartState.some((item: IProduct) => item.id === product.id);
    return isAdded;
  }
}
