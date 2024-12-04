export interface CartItem {
    product: {
      id: number;
      title: string;
      category: string;
      image: string;
      price: number;
    };
    quantity: number;
  }