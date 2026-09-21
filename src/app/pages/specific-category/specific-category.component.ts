import { Component } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../core/interFaces/http';
import { CardComponent } from '../../shared/card/card/card.component';
import { CartsService } from '../../../core/services/carts.service';

@Component({
  selector: 'app-specific-category',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './specific-category.component.html',
  styleUrl: './specific-category.component.scss'
})
export class SpecificCategoryComponent {

  constructor(private _categoryService: CategoryService, private _activatedRoute: ActivatedRoute, private _cart: CartsService) { }

  products: IProduct[] = [];
  categoryType: string = '';

  ngOnInit() {
    this.categoryType = this._activatedRoute.snapshot.paramMap.get('type') ?? '';
    this.getSpecificCategory(this.categoryType);
  }


  getSpecificCategory(type: string) {
    this._categoryService.getSpecificCategory(type).subscribe((next: IProduct[]) => {
      this.products = next.map((product) => {
        return {
          ...product,
          isAddToCart: this._cart.isAddedToCart(product) || false
        };
      });
    });
  }
}
