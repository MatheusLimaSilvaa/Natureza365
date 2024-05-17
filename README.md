# ConectOfNature
## *Essa API tem como base a conexão humana com a natureza.*


#### Descrição
*O ConectOfNature é uma plataforma que visa a conexão humana com a natureza, fornecendo aos usuários acesso a informações sobre áreas naturais, trilhas, parques ecológicos, reservas ambientais e outros locais de interesse. A aplicação permite tanto a exploração desses locais quanto a contribuição para sua preservação, através do cadastro de novos locais.*


## Tecnologias Utilizadas
1. Node.js
2. Express.js
3. PostgreSQL
4. Sequelize (ORM)
5. JSON Web Tokens (JWT) para autenticação
6. Swagger para documentação de API
7. https://nominatim.openstreetmap.org/


*Instalação e Execução:*
*Clone o repositório do GitHub*
- git clone https://github.com/MatheusLimaSilvaa/Natureza365.git

#### Instale as dependências do projeto:

1. cd natureza365
2. npm install
3. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

    - PORT=3000
    - DB_HOST=seu_host_do_banco_de_dados
    - DB_USER=seu_usuario_do_banco_de_dados
    - DB_PASSWORD=sua_senha_do_banco_de_dados
    - DB_NAME=nome_do_seu_banco_de_dados
    - JWT_SECRET=sua_chave_secreta_para_gerar_tokens_JWT

1. Execute as migrações do Sequelize para criar as tabelas no banco de dados:
- npx sequelize-cli db:migrate
- npx sequelize db:seed:all

#### Inicie o servidor sql:
1. npm run dev<br>
    - A aplicação estará disponível em http://localhost:3000.

Documentação da API:
Acesse a documentação da API através do Swagger em http://localhost:3000/documentos.

## Funcionalidades e Rotas

### local: */local*

1. Cadastro de um local: POST /locals

2. Detalhes de um local específico: GET /locals/:id - 

3. Detalhes de todos locais cadastrados: GET /locals - 

4. Exclusão de um local específico: DELETE /locals/:id - Autentificação

5. Atualização de um local: PUT /local/:id - Autentificação

6. Link do Google Maps para um local: GET /local/maps/:id 

### usuário: */users*

1. Cadastro de um usuário: POST /users

2. Detalhes de um usuário específico: GET /users/:id

3. Detalhes de todos usuário cadastrados: GET /users

4. Exclusão de um usuário: DELETE /users/:id - Autentificação

5. Atualização de um usuário: PUT /users/:id - Autentificação


## Melhorias Futuras:

**Implementação de testes automatizados.
Adição de funcionalidades para interação social entre os usuários, como comentários e avaliações dos locais.
Integração com outras APIs de geolocalização para melhorar a precisão das coordenadas dos locais.**

*Link explicando o projeto* -> https://drive.google.com/file/d/1e8YMOhex6yP8cLGVdkRG699cPhd2rIud/view?usp=sharing

*Feito por*: **Matheus De Lima Silva**
