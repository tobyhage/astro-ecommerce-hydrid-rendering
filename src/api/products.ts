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

const toJson = (res: Response) => {
  if (res.status === 404) {
    return undefined;
  }

  return res.json();
};

export const fetchProducts = (category?: string): Promise<ProductList> => {
  const categoryPath = category ? `/category/${category}` : '';
  return fetch(`https://dummyjson.com/products${categoryPath}`).then(toJson);
};

export const fetchSalesProducts = async (): Promise<Product[]> => {
  const allProducts = await fetchProducts();
  return allProducts.products.filter(
    ({ discountPercentage }) => discountPercentage > 10,
  );
};

export const fetchCategories = (): Promise<string[]> =>
  fetch('https://dummyjson.com/products/categories').then(toJson);

export const fetchProduct = (id: string): Promise<Product> =>
  fetch(`https://dummyjson.com/products/${id}`).then(toJson);

export const fetchCategoryImage = async (category: string) => {
  const { products } = await fetchProducts(category);
  return products[0].thumbnail;
};

export const fetchTestimonials = () =>
  Promise.resolve([
    {
      text: "I recently purchased a dress from this online store and was blown away by the quality and fit. It was even better than I expected and I received so many compliments when I wore it. I'll definitely be back for more!",
      source: 'Sarah D.',
    },
    {
      text: 'I was hesitant to order a piece of furniture online, but the team at this online store made the process so easy and hassle-free. The item arrived on time and in perfect condition, and it looks amazing in my home. I highly recommend this store for their excellent customer service and high-quality products.',
      source: 'John P.',
    },

    {
      text: "I'm always on the lookout for the latest tech gadgets, and this online store has an amazing selection. I ordered a new smartwatch and it arrived quickly and was exactly what I was looking for. The prices are also very competitive, so I know I'm getting a great deal. I'm already browsing their site for my next purchase!",
      source: 'Emily R.',
    },
  ]);
