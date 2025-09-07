Хранение данных:

- база данных json-server
- BFF
- редакс стор

Сущьности приложения:

- пользователь: БД (список пользователей), BFF (сессия текущего пользователя), стор (отоброжение в браузере)
- роли: БД (список ролей), BFF (сессия пользователя с ролью), стор (отоброжение на клиенте)
- статья: БД (список статей), стор (отоброжение в браузере)
- комментарий: БД (список комментариев), стор (отоброжение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registered_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для редакс стор (на клиенте):

- user: id / login / role_id
- posts: array post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: id / login / registeredAt / role
