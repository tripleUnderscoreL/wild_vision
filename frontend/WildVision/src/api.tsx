import { Product } from "./types";

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

export async function getUser(token) {
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
            alert("Токен сохранен!");
          } else {
            alert("Ошибка авторизации!");
          }
      } 
    catch (error) {
        alert(`Ошибка запроса: ${error.message}`); 
    }
}

export async function postUser({ username, password, email }){

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

export const getToken = () => localStorage.getItem("authToken");