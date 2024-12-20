import * as React from 'react';
import './ModalAddReview.scss';
import { createElement, useEffect, useState } from 'react';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form';

//https://habr.com/ru/companies/timeweb/articles/722108/  -  double password check

export default function FormDialog() {

  const [file, setFile] = useState([]);

  function handleImgChange(e) {
      setFile(
        [...file, e.target.files[0]]
      );
  }
  
  const formSchema = z
  // данные формы - объект
  .object({

    review: z
      .string(),
    pros: z
      .string(),
    cons: z
      .string(),
  })


type FormSchema = z.infer<typeof formSchema>

  const AddReview = () => {

    const {
      register,
      handleSubmit,
      reset,
      setFocus,
      formState: { isDirty, isSubmitting, errors },
    } = useForm<FormSchema>({ resolver: zodResolver(formSchema) })
  
    // обработчик отправки формы
    const onSubmit: SubmitHandler<FormSchema> = (data) => {
      // просто выводим данные в консоль
      console.log(data)
      // сбрасываем состояние формы (очищаем поля)
      reset()
      handleClose();
    }
  
    useEffect(() => {
      // устанавливаем фокус на первое поле (имя пользователя) после монтирования компонента
      setFocus('review')
    }, [])

    return(
      <form className='add-review-main' onSubmit={handleSubmit(onSubmit)}>
        <section className='add-review-info'>
          <h2>Название товара атпотвлатплытпавльы</h2>
          <img src="../../src/assets/5star-big.png"></img>
        </section>
        <input type="text" placeholder='Поделитесь мнением'
          {...register('review')}
          id='review'
          // значение этого свойства определяется наличием ошибки
          aria-invalid={errors.review ? 'true' : 'false'}
        />
        {errors.review && (
          <span role='alert' className='error'>
            {errors.review?.message}
          </span>
        )}
        <input type="text" placeholder='Опишите достоинства'
          {...register('pros')}
          id='pros'
          // значение этого свойства определяется наличием ошибки
          aria-invalid={errors.pros ? 'true' : 'false'}
        />
        {errors.pros && (
          <span role='alert' className='error'>
            {errors.pros?.message}
          </span>
        )}
        <input type="text" placeholder='Опишите недостатки'
          {...register('cons')}
          id='cons'
          // значение этого свойства определяется наличием ошибки
          aria-invalid={errors.review ? 'true' : 'false'}
        />
        {errors.cons && (
          <span role='alert' className='error'>
            {errors.cons?.message}
          </span>
        )}
       

        <section className='add-review-img'>
          <label htmlFor="review-img-input">Фото<br/>Видео</label>
          {
            file.length > 0 ? 
            file.map(e => (<img src={URL.createObjectURL(e)}></img>)) 
            : null
          }
          <input id="review-img-input" type="file"  onChange={handleImgChange} />
        </section>
        <button type="submit" className='finish-button' 

          disabled={!isDirty || isSubmitting}
        >
          Опубликовать
        </button>
      </form>
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
    setOpen(false);
  };

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

