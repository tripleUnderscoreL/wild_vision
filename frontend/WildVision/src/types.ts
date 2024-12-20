interface Product {
  id: string,
  image: string,
   name: string,
    price: string,
    description: string,
    category: string
    reviews: []
}

interface Review {
  name: string,
  date: string,
  rating: number,
  review: string,
  pros: string,
  cons: string,
  images: string[]
}

export type {Product, Review}