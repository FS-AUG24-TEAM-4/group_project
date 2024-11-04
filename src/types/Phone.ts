export interface Phone {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount?: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Array<{
    title: string;
    text: string[];
  }>;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
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
