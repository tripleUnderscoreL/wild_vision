import * as React from 'react';
import './ModalAddReview.scss';
import { createElement, useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, z } from 'zod'
import { postReview } from '../../../api';

//https://habr.com/ru/companies/timeweb/articles/722108/  -  double password check

// const reviewSchema = z
//   .object({
//     review_text: z.string(),
//     pros: z.string(),
//     cons: z.string(),
// })//готовая схема для валидации отзыва

// type ReviewSchema = z.infer<typeof reviewSchema>

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
    num: z
      .string(),
  })


  type FormSchema = z.infer<typeof formSchema>

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const AddReview = () => {

    const {
      register,
      handleSubmit,
      reset,
      setFocus,
      formState: { isDirty, isSubmitting, errors },
    } = useForm<FormSchema>({ resolver: zodResolver(formSchema) })
  
    // обработчик отправки формы
    const onSubmit : SubmitHandler<FormSchema> = async (data) => {
      // просто выводим данные в консоль
      console.log(data)
      // сбрасываем состояние формы (очищаем поля)
      // const img = file.length !== undefined ? await convertToBase64(file[0]) : '';
      const img = file.length !== 0 ? file[0] : null;
      const post_data = {review_text: data.review, img: img, num: data.num};
      console.log(post_data);
      postReview(post_data);
      reset()
      setFile([]);
      handleClose();
    }
  
    useEffect(() => {
      // устанавливаем фокус на первое поле (имя пользователя) после монтирования компонента
      setFocus('review')
    }, [])

    return(
      <form className='add-review-main' onSubmit={handleSubmit(onSubmit)}>
        <section className='add-review-info'>
          <h2>Оставьте свой отзыв</h2>
          <img src="../../src/assets/5star-big.png"></img>
        </section>
        <input type="text" placeholder='Поделитесь мнением'
          {...register('review')}
          id='review'
          aria-invalid={errors.review ? 'true' : 'false'}
        />
        {errors.review && (
          <span role='alert' className='error'>
            {errors.review?.message}
          </span>
        )}
        <input type="text" placeholder='Опишите достоинства'
          id='pros'
          aria-invalid={errors.pros ? 'true' : 'false'}
        />
        <input type="text" placeholder='Опишите недостатки'
          id='cons'
          aria-invalid={errors.review ? 'true' : 'false'}
        />
        <input type="text" placeholder='Выберите товар'
          {...register('num')}
          id='num'
          aria-invalid={errors.review ? 'true' : 'false'}
        />

       

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

