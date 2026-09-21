import { Component } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { IProduct } from '../../../core/interFaces/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  constructor(private _categoryService:CategoryService) {}

  allCategory: any[] = [];

  ngOnInit(){
    this.displayAllCategory();
  }

  displayAllCategory(){
    this._categoryService.getAllCategory().subscribe((next) => (this.allCategory = next));
  }

  getImageCategory(type: string): string{
    return `./assets/imgs/categories/${type}.jpg`;
  }
}
