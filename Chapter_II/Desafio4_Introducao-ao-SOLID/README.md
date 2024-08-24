<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocketseat&message=Education&color=8257e5&labelColor=202024" alt="Rocketseat Project" />
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=8257e5&labelColor=202024" alt="License"></a>
</p>


## 💻 Projeto

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no Node.js!

Essa será uma aplicação de listagem e cadastro de usuários. Para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser um admin.


### Rotas da aplicação
- POST /users
- PATCH /users/:user_id/admin
- GET /users/:user_id
- GET /users/:user_id

### Específicação dos testes

#### Teste do model
- [X] Should be able to create an user with all props

#### Testes do repositório
- [X] Should be able to create new users
- [X] Should be able to list all users
- [X] Should be able to find user by ID
- [X] Should be able to find user by e-mail address
- [X] Should be able to turn an user as admin

#### Testes de useCases
- [] Should be able to create new users
- [] Should not be able to create new users when email is already taken
- [] Should be able to turn an user as admin
- [] Should not be able to turn a non existing user as admin
- [] Should be able to get user profile by ID
- [] Should not be able to show profile of a non existing user
- [] Should be able to list all users
- [] Should not be able to a non admin user get list of all users
- [] Should not be able to a non existing user get list of all users

### Testes das rotas

#### Rota - [POST] /users
- [] Should be able to create new users
- [] Should not be able to create new users when email is already taken

#### Rota - [PATCH] /users/:user_id/admin
- [] Should be able to turn an user as admin
- [] Should not be able to turn a non existing user as admin

#### Rota - [GET] /users/:user_id
- [] Should be able to get user profile by ID
- [] Should not be able to show profile of a non existing user

#### Rota - [GET] /users
- [] Should be able to list all users
- [] Should not be able to a non admin user get list of all users
- [] Should not be able to a non existing user get list of all users

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💜 by Rocketseat
</p>


<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://discord.gg/rocketseat" target="_blank">
    <img align="center" src="https://storage.googleapis.com/golden-wind/comunidade/rodape.svg" alt="banner"/>
  </a>
</p>

<!--END_SECTION:footer-->

