export interface Categories {
  id: number,
  name: string,
  visibleName: string,
};

export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  images: string[],
  featured?: string
};

export interface ProductCart {
  id: number,
  title: string,
  price: number,
  img: string,
  col: number
};
