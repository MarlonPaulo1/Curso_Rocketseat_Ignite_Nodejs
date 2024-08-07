## FinAPI - Financeira

Nessa aplicação foi feita uma API, que simula a operação de um banco real, com todos so critérios e regras de negócio mencionados abaixo.
- Foi utilizado o Nodejs/javascript como linguagem para desenvolver o Backend.
- framework/biblioteca Express, UUID, Nodemon.
- Foi utilizado a ferramenta/software Insominia para trabalhar com as requisições HTTP.

### Requisitos

- [X] Deve ser possível criar uma conta.
- [X] Deve ser possível buscar o extrato bancário do cliente.
- [X] Deve ser possível realizar um depósito.
- [X] Deve ser possível realizar um saque.
- [X] Deve ser possível buscar o extrato bancário do cliente por data.
- [X] Deve ser possível atualizar dados da conta do cliente.
- [X] Deve ser possível obter dados da conta do cliente.
- [X] Deve ser possível deletar uma conta.
- [X] Deve ser possível retornar o balance.


## Regras de negócio

- [X] Não deve ser possível cadastrar uma conta com CPF já existente.
- [X] Não deve ser possível fazer depósito em uma conta não existente.
- [X] Não deve ser possível buscar extrato em uma conta não existente.
- [X] Não deve ser possível fazer saque em uma conta não existente.
- [X] Não deve ser possível fazer saque quando o saldo for insuficiente.
- [X] Não deve ser possível excluir uma conta não existente. 