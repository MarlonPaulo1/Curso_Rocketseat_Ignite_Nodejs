<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocketseat&message=Education&color=8257e5&labelColor=202024" alt="Rocketseat Project" />
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=8257e5&labelColor=202024" alt="License"></a>
</p>


## 💻 Projeto

Nesse desafio você irá trabalhar mais a fundo com middlewares no Express. Dessa forma você será capaz de fixar mais ainda os conhecimentos obtidos até agora. 

Para facilitar um pouco mais do conhecimento da regra de negócio, você irá trabalhar com a mesma aplicação do desafio anterior: uma aplicação para gerenciar tarefas (ou *todos*) mas com algumas mudanças.

Será permitida a criação de um usuário com `name` e `username`, bem como fazer o CRUD de *todos*:

- Criar um novo *todo*;
- Listar todos os *todos*;
- Alterar o `title` e `deadline` de um *todo* existente;
- Marcar um *todo* como feito;
- Excluir um *todo*;

Tudo isso para cada usuário em específico. Além disso, dessa vez teremos um plano grátis onde o usuário só pode criar até dez *todos* e um plano Pro que irá permitir criar *todos* ilimitados, isso tudo usando middlewares para fazer as validações necessárias.

ignite-template-trabalhando-com-middlewares

## Requisitos

- [X] Deve ser capaz de encontrar o usuário pelo nome de usuário no cabeçalho e passá-lo para request.user
- [X] Deve ser possível permitir que o usuário crie uma nova tarefa quando estiver no plano gratuito e tiver menos de dez tarefas
- [X] Deve ser capaz de permitir que o usuário crie infinitas novas tarefas quando estiver no plano Pro
- [X] Deve ser capaz de colocar usuário e tarefa na solicitação quando ambos existem
- [X] Deve ser capaz de encontrar o usuário pelo parâmetro de rota id e passá-lo para request.user

## Regras de negócio

- [X] Não deve ser possível encontrar um usuário inexistente pelo nome de usuário no cabeçalho
- [X] Não deveria ser possível permitir que o usuário crie uma nova tarefa quando não for Pro e já tiver dez tarefas
- [X] Não deveria ser possível colocar usuário e tarefa na solicitação quando o usuário não existe
- [X] Não deve ser possível colocar usuário e tarefa na solicitação quando o ID da tarefa não for uuid
- [X] Não deve ser possível colocar usuário e tarefa na solicitação quando a tarefa não existir
- [X] Não deve ser possível passar o usuário para request.user quando ele não existe

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

