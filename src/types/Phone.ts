export interface Phone {
  id: number;
  name: string;
  description: Array<{
    title: string;
    text: string[];
  }>;
  priceRegular: number;
  priceDiscount?: number;
  color: string;
  colorsAvailable: string[];
  capacityAvailable: string[];
  images: string[];
}

export interface PhoneState {
  phones: Phone[];
  loading: boolean;
  error: string | null;
}

export const initialState: PhoneState = {
  phones: [],
  loading: false,
  error: null,
};

export interface RootState {
  phones: PhoneState;
}
