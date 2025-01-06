import { Cart, Product, User } from "./types";

export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch('http://127.0.0.1:8000/api/products/');
    const data = await response.json();
    return data;
}

export async function fetchProduct(id): Promise<Product[]> {
    const response = await fetch('http://127.0.0.1:8000/api/products/'+id);
    const data = await response.json().catch(() => null);
    return data;
}

export async function getUser(token): Promise<User> {
    const response = await fetch('http://127.0.0.1:8000/auth/users/me', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        }});
    const data = await response.json().catch(() => null);
    return data;
}

export async function postAuthUser({ username, password }){
  console.log(username, password);
    try {
        const response = await fetch("http://127.0.0.1:8000/auth/token/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password
          }),
        });
    
        // Проверяем статус ответа
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("authToken", data.auth_token);
            console.log(data.auth_token);
            window.location.reload()
          } else {
            alert("Ошибка авторизации!");
          }
      } 
    catch (error) {
        alert(`Ошибка запроса: ${error.message}`); 
    }
}

export async function postUser({ username, password, email }){
  console.log(username, password, email);
    try {
        const response = await fetch("http://127.0.0.1:8000/auth/users/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            email
          }),
        });
    
        // Проверяем статус ответа
        if (!response.ok) {
          const errorData = await response.json(); 
          alert(`Ошибка: ${JSON.stringify(errorData)}`); 
        } else {
            const data = await response.json();
            postAuthUser({username, password});
          }
      } catch (error) {
        alert(`Ошибка запроса: ${error.message}`); 
      }
}

export async function postReview({ review_text, img, num }){
  const token = getToken();
  console.log(review_text, img, `Token ${token}`);
  const product = num;
  const rating = 5;
  // const images = img;

  try {
      const response = await fetch("http://127.0.0.1:8000/api/product-reviews/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", "Authorization": `Token ${token}`,
        },
        body: JSON.stringify({
          product,
          review_text,
          rating,
          image: null,
        }),
      });
  
      // Проверка статуса ответа
      if (!response.ok) {
        console.error(`Ошибка: ${response.status}, ${response.statusText}`);
        const errorData = await response.json(); 
        
        alert(`Ошибка: ${JSON.stringify(errorData)}`); 
        
      } else {
          const data = await response.json();
          console.log(data);
        }
    } catch (error) {
      alert(`Ошибка запроса: ${error.message}`); 
    }
}

// export async function postReview({ review_text, img, num }) {
//   const token = getToken();

//   let formData = new FormData();
//   formData.append('product', num.toString());
//   formData.append('review_text', review_text);
//   formData.append('rating', '5');

//   // Добавляем картинку как файл
//   if (img instanceof File) {
//     formData.append('image', img, img.name);
//   } else {
//     console.error('img is not a File instance');
//     alert('Ошибка: переданный файл недействителен.');
//     return;
//   }
//   for (let pair of formData.entries()) {
//     console.log(pair[0] + ':', pair[1]);
//   }
//   try {
//     const response = await fetch("http://127.0.0.1:8000/api/product-reviews/", {
//       method: "POST",
//       headers: {
//         "Authorization": `Token ${token}`,
//       },
//       body: formData,
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error(`Ошибка: ${response.status}, ${response.statusText}`);
//       alert(`Ошибка: ${JSON.stringify(errorData)}`);
//     } else {
//       const data = await response.json();
//       console.log(data);
//     }
//   } catch (error) {
//     alert(`Ошибка запроса: ${error.message}`);
//   }
// }

export async function getCart(token): Promise<Cart> {
  const response = await fetch('http://127.0.0.1:8000/api/cart/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      }});
  const data = await response.json().catch(() => null);
  return data;
}

export async function addCart({ product_id }){
  const token = getToken();
  const quantity = 1;
  console.log(product_id, `Token ${token}`);
    try {
        const response = await fetch("http://127.0.0.1:8000/api/cart/add/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", "Authorization": `Token ${token}`,
          },
          body: JSON.stringify({
            product_id,
            quantity
          }),
        });
    
        // Проверяем статус ответа
        if (!response.ok) {
          const errorData = await response.json(); 
          alert(`Ошибка: ${JSON.stringify(errorData)}`); 
        } else {
            const data = await response.json();
            console.log(data);
          }
      } catch (error) {
        alert(`Ошибка запроса: ${error.message}`); 
      }
}

export async function getCartProducts(id: []): Promise<Product[]> {

  const products: Array<Product> = [];
  for (let i = 0; i < id.length; i++) {
    products.push = await fetchProduct(id[i]); // Ждём выполнения
  }
  return(products);

}

export const getToken = () => localStorage.getItem("authToken");