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
  images: string
}

interface User {
  address: string,
  email: string, 

  first_name: string,

  last_name: string,

  phone_number: string,

  username: string,
}

interface Cart{
  cart_id: number,
  items: [],
  total: number
}

export type {Product, Review, User, Cart};