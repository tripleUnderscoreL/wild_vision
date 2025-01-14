import * as React from 'react';
import './ModalSign.scss';
import { object, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { postUser } from '../../../api';

const regSchema = z
  .object({
    username: z
      .string(),
      // .min(2, { message: 'Имя пользователя слишком короткое' })
      // .max(20, 'Имя пользователя слишком длинное')

      // .transform((v) => v.toLowerCase().replace(/\s+/g, '_')),
    password: z.string(),
    // .min(6, 'Пароль слишком короткий'),
    email: z.string().email('Некорректный email'),

    // terms: z.literal(true, {

    //   errorMap: () => ({ message: 'Примите условия использования' }),
    // }),
  })

const authSchema = z
  .object({
    username: z
      .string(),
      // .min(2, { message: 'Имя пользователя слишком короткое' })
      /* eslint-disable @typescript-eslint/no-explicit-any */
      // .transform((v) => v.toLowerCase().replace(/\s+/g, '_')),
    password: z.string()
    // .min(6, 'Пароль слишком короткий'),

  })

type RegSchema = z.infer<typeof regSchema>

type AuthSchema = z.infer<typeof authSchema>

export default function FormDialog() {

  // const [ schema, setSchema ] = useState(regSchema);
  const [ schema, setSchema ] = useState(object);
  const {
        register,
        handleSubmit,
        reset,
        // setFocus,
        formState: { isDirty, isSubmitting, errors },
      } = useForm<RegSchema>({ resolver: zodResolver(schema) })

  
      
      // обработчик отправки формы
      const onReg: SubmitHandler<RegSchema> = (data) => {
        console.log(data, "reg")
        // сбрасываем состояние формы (очищаем поля)
        postUser(data);
        reset()
        handleClose()
      }

      const onAuth: SubmitHandler<AuthSchema> = (data) => {
        console.log(data, "auth")
        // сбрасываем состояние формы (очищаем поля)
        reset()
        handleClose()
      }
    
      // useEffect(() => { 
      //   setFocus('username')
      // }, [])

  const Sign = () => {
    if (signState) {
      setSchema(regSchema)
      return(
        <form onSubmit={handleSubmit(onReg)}>
          <div className='sign'>
            <section className='switch-sign'>
              <button type="button" onClick={() => setSignState(false)}>Вход</button>
              <button type="button" disabled onClick={() => setSignState(true)}>Регистрация</button>
            </section>
            <input type="text" required placeholder='Логин'
              {...register('username')}
              id='username'
              aria-invalid={errors.username ? 'true' : 'false'}
            />
            {errors.username && (
              <span role='alert' className='error'>
                {errors.username?.message}
              </span>
            )}
            <input required placeholder='Пароль'
              {...register('password')}
              type='password'
              id='password'
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
              <span role='alert' className='error'>
                {errors.password?.message}
              </span>
            )}
            <input required placeholder='Электронная почта'
              {...register('email')}
              type='email'
              id='email'
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <span role='alert' className='error'>
                {errors.email?.message}
              </span>
            )}
            <section className='checkbox'>
              <input type="checkbox"
                // {...register('terms')}
                // id='terms'
                // aria-describedby='terms'
                // aria-invalid={errors.terms ? 'true' : 'false'}
              />
              <p>Я согласен с политикой конфиденциальности</p>
            </section>
            {/* {errors.terms && (
              <span className='error top-5'>{errors.terms?.message}</span>
            )} */}
            <button type="submit" className='finish-button'  
            disabled={!isDirty || isSubmitting}>
              Регистрация
            </button>
          </div>

        </form>
      )
    }
    else{
      setSchema(authSchema)
      return(
        <form onSubmit={handleSubmit(onAuth)}>
          <div className='sign'>
            <section className='switch-sign'>
              <button type="button" disabled onClick={() => setSignState(false)}>Вход</button>
              <button type="button" onClick={() => setSignState(true)}>Регистрация</button>
            </section>
            <input required placeholder='Логин/Email'
              {...register('username')}
              id='username'
              aria-invalid={errors.username ? 'true' : 'false'}
            />
            {/* {errors.username && (
              <span role='alert' className='error'>
                {errors.username?.message}
              </span>
            )} */}
            <input required placeholder='Пароль'
              {...register('password')}
              type='password'
              id='password'
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {/* {errors.password && (
              <span role='alert' className='error'>
                {errors.password?.message}
              </span>
            )} */}
            <button type="submit" className='finish-button' 
            disabled={!isDirty || isSubmitting}>
              Авторизация
            </button>
          </div>
        </form>
      );
    }
  }

  const [open, setOpen] = React.useState(false);

  const [signState, setSignState] = React.useState(false);

  const onWrapperClick = (event: any) => {
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
        <button type="button" className='start-button' onClick={handleClickOpen}>
          Регистрация/Вход
        </button>
        <div className='modal' >
          {/* <button type="button" onClick={handleClickOpen}>
            Open form dialog
          </button> */}
          <div className='modal-sign' onClick={onWrapperClick}>
            <Sign></Sign>
          </div>
        </div>
      </>
    );
  }
  else{
    return(<>
      <button type="button" className='start-button' onClick={handleClickOpen}>
        Регистрация/Вход
        </button>
    </>)
  }
}

