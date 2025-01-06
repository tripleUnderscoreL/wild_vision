import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from './api';

interface ProtectedRouteProps {
  element: JSX.Element;
}

// Проверка аутентификации
const isAuthenticated = () => {
  const token = getToken();
  return !!token; // Возвращает true, если токен существует
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  if (isAuthenticated()) {
    return element;
  } else {
    // Перенаправляем на страницу, если пользователь не авторизован
    alert("Вы не авторизованы!");
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;