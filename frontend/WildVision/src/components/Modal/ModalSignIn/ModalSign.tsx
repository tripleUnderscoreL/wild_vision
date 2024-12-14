import * as React from 'react';
import './ModalSign.scss';

export default function FormDialog() {
  const Sign = () => {
    if (signState) {
      return(
        <>
          <div className='sign'>
            <section className='switch-sign'>
              <button type="button" onClick={() => setSignState(false)}>Вход</button>
              <button type="button" disabled onClick={() => setSignState(true)}>Регистрация</button>
            </section>
            <input type="text" name="name" required placeholder='Логин'/>
            <input type="password" name="password" required placeholder='Пароль'/>
            <input type="email" name="email" required placeholder='Электронная почта'/>
            <section className='checkbox'>
              <input type="checkbox"></input>
              <p>Я согласен с политикой конфиденциальности</p>
            </section>
            <button type="submit" className='finish-button' onClick={handleClose}>Регистрация</button>
          </div>

        </>
      )
    }
    else{
      return(
        <>
          <div className='sign'>
            <section className='switch-sign'>
              <button type="button" disabled onClick={() => setSignState(false)}>Вход</button>
              <button type="button" onClick={() => setSignState(true)}>Регистрация</button>
            </section>
            <input type="email" name="email" required placeholder='Логин/Email'/>
            <input type="password" name="password" required placeholder='Пароль'/>
            <button type="submit" className='finish-button' onClick={handleClose}>Авторизация</button>
          </div>
        </>
      );
    }
  }

  const [open, setOpen] = React.useState(false);

  const [signState, setSignState] = React.useState(false);

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

