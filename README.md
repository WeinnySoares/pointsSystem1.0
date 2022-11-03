# pointsSystem1.0

Sistema para registro de ponto online.


teconologias usadas:

- Backend:
    - Nodejs 14.20.1
    - Restify

- Database:
  - neo4j

- Frontend:
    - VueJs
    - Vuetify
    - Vue ui

---

Utilização

- Primeiro verificar se a versão do node instalada é a 14.20.1, caso não mude o node para essa versão e baixe o repositório.

- Apos baixar o repositório, acessar a pasta backend e executar $npm i

- Apos baixar as dependencias, executar o servidor neo4j

- Apos executado o servidor, ainda na pasta backend executar $npm run dev

- Por ultimo acessar a pasta frontend e executar o comando $npm run serve

---
Dificuldades

- A Restfy não estava compativel com a ultima versão do Node, para utilizar tive que muda o node para a versão 14.20.1

- Não descobrir ainda como recuperar o id dos nós no neo4j para realizar uma operação de crud correta

- O vuetify 2 não istalou corretamente na minha maquina então precisei utilizar a versão 3 beta

---
Melhorias

- Criar uma tela de cadastro para logar como admin ou user no sistema.

- Conectar o frontend com o backend da aplicação

- Criar restrições para determinadas opreações somente serem realizar por usuário admins

- Criar validaçoes dos dados de inputs e testes automátizados
