export interface ProductList {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const toJson = (res: Response) => res.json();

export const fetchProducts = (category?: string): Promise<ProductList> => {
  const categoryPath = category ? `/category/${category}` : '';
  return fetch(`https://dummyjson.com/products${categoryPath}`).then(toJson);
};

export const fetchCategories = (): Promise<string[]> =>
  fetch('https://dummyjson.com/products/categories').then(toJson);

export const fetchProduct = (id: string): Promise<Product> => {
  return fetch(`https://dummyjson.com/products/${id}`).then(toJson);
};
