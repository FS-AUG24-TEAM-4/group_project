import { Device } from './Product';

export interface CartItem extends Device {
  quantity: number;
  clickedBuy: boolean;
}
