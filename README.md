ConectOfNature - Essa API tem como base a conexão humana com a natureza.


Descrição
O ConectOfNature é uma plataforma que visa a conexão humana com a natureza, fornecendo aos usuários acesso a informações sobre áreas naturais, trilhas, parques ecológicos, reservas ambientais e outros locais de interesse. A aplicação permite tanto a exploração desses locais quanto a contribuição para sua preservação, através do cadastro de novos locais.


Tecnologias Utilizadas
Node.js
Express.js
PostgreSQL
Sequelize (ORM)
JSON Web Tokens (JWT) para autenticação
Swagger para documentação de API
Instalação e Execução
Clone o repositório do GitHub


bash
*Copiar código*
git clone https://github.com/MatheusLimaSilvaa/Natureza365.git
Instale as dependências do projeto:

bash
*Copiar código*
cd natureza365
npm install
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

makefile
*Copiar código*
PORT=3000
DB_HOST=seu_host_do_banco_de_dados
DB_USER=seu_usuario_do_banco_de_dados
DB_PASSWORD=sua_senha_do_banco_de_dados
DB_NAME=nome_do_seu_banco_de_dados
JWT_SECRET=sua_chave_secreta_para_gerar_tokens_JWT
Execute as migrações do Sequelize para criar as tabelas no banco de dados:

*Copiar código*
npx sequelize-cli db:migrate
npx sequelize db:seed:all

Inicie o servidor:
sql
*Copiar código*
npm run dev
A aplicação estará disponível em http://localhost:3000.

Documentação da API
Acesse a documentação da API através do Swagger em http://localhost:3000/api-docs.

Funcionalidades e Rotas

Usuários:
Registro de novo usuário: POST /users
Login de usuário: POST /users
Locais da Natureza:

Cadastro de novo local: POST /local

Listagem de locais do usuário autenticado: GET /locals
Detalhes de um local específico do usuário: GET /locals/:id
Exclusão de um local específico do usuário: DELETE /locals/:id
Atualização de um local específico do usuário: PUT /local/:id
Link do Google Maps para um local específico do usuário: GET /local/:id/maps


Melhorias Futuras:

Implementação de testes automatizados.
Adição de funcionalidades para interação social entre os usuários, como comentários e avaliações dos locais.
Integração com outras APIs de geolocalização para melhorar a precisão das coordenadas dos locais.
