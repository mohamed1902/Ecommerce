import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CardComponent } from "../../shared/card/card/card.component";
import { UserDataService } from '../../../core/services/user-data.service';
import { IProduct } from '../../../core/interFaces/http';
import { PopularPipe } from '../../../core/pipes/popular.pipe';
import { ProductsService } from '../../../core/services/products.service';
import { CartsService } from '../../../core/services/carts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, CardComponent, PopularPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private _userData: ProductsService, private _Cart: CartsService) { }
  images: any[] | undefined;
  smallProducts!: IProduct[];
  popularProducts!: IProduct[];

  ngOnInit() {
    this.images = [
      {
        itemImageSrc: './assets/imgs/product1.jfif',
        alt: 'Description for Product 1',
        title: 'Product 1'
      },
      {
        itemImageSrc: './assets/imgs/product2.jpg',
        alt: 'Description for Product 2',
        title: 'Product 2'
      },
      {
        itemImageSrc: './assets/imgs/product3.jpg',
        alt: 'Description for Product 3',
        title: 'Product 1'
      },
      {
        itemImageSrc: './assets/imgs/product4.jpg',
        alt: 'Description for Product 4',
        title: 'Product 4'
      },
    ];
    this.getAllProducts();
  };

  getAllProducts(): void {
    this._userData.allProducts().subscribe((response: IProduct[]) => {
      this.smallProducts = response?.slice(0, 4) || [];
      this.popularProducts = response.map((product) => {
        return {
          ...product,
          isAddToCart: this._Cart.isAddedToCart(product) || false,
        }
      });
    });
  }
}
