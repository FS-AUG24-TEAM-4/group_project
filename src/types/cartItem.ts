import { Device } from './Device';

export interface CartItem extends Device {
  quantity: number;
  clickedBuy: boolean;
}
