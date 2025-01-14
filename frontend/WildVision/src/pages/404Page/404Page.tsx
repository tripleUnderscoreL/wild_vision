import React from 'react';
import "./404Page.scss"

const NotFoundPage = () => {

  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <a href="/">На главную</a>
    </div>
  );
}

export default NotFoundPage;