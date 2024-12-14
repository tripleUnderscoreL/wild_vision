import * as React from 'react';
import './ModalAddReview.scss';
import { useEffect, useState } from 'react';

export default function FormDialog() {
  const AddReview = () => {
    return(
      <div className='add-review-main'>
        <section className='add-review-info'>
          <h2>Название товара атпотвлатплытпавльы</h2>
          <img src="../../src/assets/5star-big.png"></img>
        </section>
        <input type="text" placeholder='Поделитесь мнением'/>
        <input type="text" placeholder='Опишите достоинства'/>
        <input type="text" placeholder='Опишите недостатки'/>
        <section className='add-review-img'>
          <img src={file}></img>
          <label htmlFor="review-img-input">Фото<br/>Видео</label>
          <input id="review-img-input" type="file"  onChange={handleImgChange} ></input>
        </section>
        <button type="submit" className='finish-button' onClick={handleClose}>Опубликовать</button>
      </div>
    )
  }

  const [open, setOpen] = React.useState(false);

  const onWrapperClick = (event) => {
    if (event.target.className === 'modal-sign') {handleClose()}
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFile(null);
    setOpen(false);
  };

  // multiple img unput on js or invisible input for images: https://onestepcode.com/style-html-img-file-input/

    const [file, setFile] = useState();
    function handleImgChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }



  if (open) {
    return (
      <>
        <button type="button" className='ad-review-button' onClick={handleClickOpen}>
          Добавить отзыв
        </button>
        <div className='modal' >
          <div className='modal-sign' onClick={onWrapperClick}>
            <AddReview></AddReview>
          </div>
        </div>
      </>
    );
  }
  else{
    return(<>
      <button type="button" className='add-review-button' onClick={handleClickOpen}>
        Добавить отзыв
      </button>
    </>)
  }
}

