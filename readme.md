# Wild Vision  

Репозиторий проекта Wild Vision для ПП `24-25.  
Kega Boom

Django 5.1.2 + DRF 3.15.2

## Запуск backend-сервера
- Из корня проекта перейти в папку бэкенда `cd backend`
- Создать виртуальное окружение `python -m venv venv`
- Активировать вирутальное окружение `venv/scripts/activate`
- Установить зависимости `pip install -r requirements.txt`
- Запустить миграции
```shell
python manage.py makemigrations
python manage.py migrate
```
- Опционально - создать суперпользователя `python manage.py createsuperuser`
- Опционально - создать несколько объектов в БД `python manage.py seed_db`
- Запустить сервер `python manage.py runserver`
- админ панель дев-сервера доступна по адресу http://127.0.0.1:8000/admin, использовать данные от суперпользователя
- эндпоинты доступны по http://127.0.0.1:8000/api/
