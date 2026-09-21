export interface IRegister {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ICart {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
}

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand?: string;
  model?: string;
  color?: string;
  category: string;
  discount?: number;
  popular: boolean;
  isAddToCart: boolean;
}
