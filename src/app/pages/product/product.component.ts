import { Component } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { IProduct } from '../../../core/interFaces/http';
import { CardComponent } from '../../shared/card/card/card.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchNamePipe } from '../../../core/pipes/search-name.pipe';
import { CartsService } from '../../../core/services/carts.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, InputIconModule, IconFieldModule, InputTextModule, FormsModule, SearchNamePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private _productsService: ProductsService, private _cart: CartsService) { }

  allProducts: IProduct[] = [];
  searchKey: string = '';

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(): void {
    this._productsService.allProducts().subscribe((response: IProduct[]) => {
      this.allProducts = response.map((product) => {
        return {
          ...product,
          isAddToCart: this._cart.isAddedToCart(product) || false,
        }
      });
    });
  }
}
