import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interFaces/http';

@Pipe({
  name: 'popular',
  standalone: true
})
export class PopularPipe implements PipeTransform {

  transform(products: IProduct[]): IProduct[] {
    return products?.filter((product) => product.popular === true);
  }

}
