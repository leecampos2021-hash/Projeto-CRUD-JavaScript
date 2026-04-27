# Projeto-CRUD-JavaScript
API REST para gerenciamento de filmes, desenvolvida com Express e Sequelize, utilizando SQLite como banco de dados.

Este projeto foi construído com foco em aplicar os conceitos de:

- Arquitetura em camadas (routes, controllers, models)
- CRUD completo
- Middlewares
- Integração com ORM (Sequelize)

# Estrutura do projeto
src/
 ├─ database/
 │    └─ database.js
 ├─ models/
 │    └─ Filme.js
 ├─ controllers/
 │    └─ filmes.controller.js
 ├─ middlewares/
 │    └─ validateFilm.js
 ├─ routes.js
 └─ index.js

# Tecnologias utilizadas
- Node.js
- Express
= Sequelize
- SQLite

# Instalação
- Clone o repositório
- Instale as dependências:
- npm install
- Execute o projeto:
- node src/index.js

O servidor iniciará em:

http://localhost:3000

O banco database.sqlite será criado automaticamente.

# Rotas da API
Método	Rota	Descrição

GET	/filmes	Lista todos os filmes
POST	/filmes	Cadastra um novo filme
PUT	/filmes/:id	Atualiza um filme completo
PATCH	/filmes/:id	Atualiza parcialmente um filme
DELETE	/filmes/:id	Remove um filme

 
# Exemplo de JSON para cadastro
{
  "titulo": "Interestelar",
  "genero": "Ficção Científica",
  "ano": 2014
}

# Conceitos aplicados
- Separação de responsabilidades (MVC)
- Uso de ORM para manipulação do banco
- Validação com middleware
- Tratamento de erros com try/catch
- Padrão REST
📄 Licença

Projeto acadêmico para fins de estudo.
