import { Component } from '@angular/core';
import { IProduct } from '../../../core/interFaces/http';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  allProducts: IProduct[] = [];

  ngOnInit(){
    if(localStorage.getItem('cartState') !== null){
      this.allProducts = JSON.parse(localStorage.getItem('cartState') || '');
    }
  }

  clearCart():void {
    localStorage.removeItem('cartState');
    this.allProducts = [];
  }
}
