import React from 'react';
import "./404Page.scss"

const NotFoundPage = () => {

  const handleMouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;

    document.body.style.setProperty('--mouse-x', x + 'px');
    document.body.style.setProperty('--mouse-y', y + 'px');
  }

  return (
    <div className='not-found' onMouseMove={handleMouseMove}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <a href="/">На главную</a>
    </div>
  );
}

export default NotFoundPage;