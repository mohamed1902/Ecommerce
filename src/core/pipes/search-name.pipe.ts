import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interFaces/http';

@Pipe({
  name: 'searchName',
  standalone: true
})
export class SearchNamePipe implements PipeTransform {

  transform(products: IProduct[], searchKey: string): IProduct[] {
    return products.filter((products) => products.title.toLowerCase().includes(searchKey.toLowerCase()));
  }

}
