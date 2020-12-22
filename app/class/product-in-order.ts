import { Order } from './order';
import { Product } from './product';

export class ProductInOrder {
  ido: number
  ordero: Order;
  product: Product;
  quantity: number;
  price: number;
}
