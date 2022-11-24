# Catálogo de Veículos

Demo Live no link: https://back-catalogo-de-veiculos.onrender.com/

### Tecnologias usadas:
React.js, Node.js, JavaScript, Express, MongoDB Atlas, Mongoose, React-Router, JSON Web Token, Puppeteer, Sass, Axios

### Instalando o projeto localmente

Para rodar o projeto será necessario ter Node.js instalado. Depois de fazer o download do projeto na máquina, usar o seguinte comando para instalar todas as dependências necessárias.

    npm run install
    
### Configurando Banco de Dados

O projeto usa MongoDB Atlas como banco de dados, para criar e conectar ao aplicativo será preciso substituir em "./back-end/src/services/mongo.js" a varivavel "MONGO_URL" com um link de conexão válido. Um tutorial passo a passo para gerar esse link pode ser visto em: https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f

### Iniciando o projeto

Depois do banco de dados configurado para iniciar o projeto bastar rodar o comando abaixo, ele fará o build do front-end na pasta public do back-end e inicializará o servidor express: 

    npm run deploy

Como o código do repositório já conta com o build do front-end realizado, também é possivel iniciar a aplicação rodando o combando:

    npm run server

O projeto está configurado para rodar localmente na porta 8000, então depois de inicializado ele estará rodando na url http://localhost:8000

### Funcionamento

- Na primeira inicialização o servidor vai configurar o banco de dados MongoDB Atlas usando mongoose, e vai popular o mesmo com dados de carros extraídos através de web scrapping da página: https://www.kavak.com/br/carros-usados usando puppeteer.
- Na parte do front end, o App utiliza esses dados vindo do banco de dados para criar o catálogo de veículos na página inicial.

### Rotas Back-End

- GET v1/cars

Rota publica onde retorna todos os carros cadastrado no banco de dados.
- POST v1/cars

Rota privada usada para cadastrar carros usando body contendo o json com os dados do carro: 

        {    name, brand, price, imageUrl    }

- DELETE v1/cars/:carId

Rota privada usada para deletar um carro cadastrado através do carId
- POST v1/login

Rota publica usada para fazer o login do usuario na API, dependendo do usuário gera um token JWT de autorização para utilizar as rotas privadas.

### Rotas Front-End

- /

Pagina inicial que mostra o catálogo de veículos 
- /login

Pagina de login
- /admin

Pagina protegida, apenas usuários com token de autorização gerado no login pode acessar. Lista todos os carros cadastrados no banco de dados, é possivel cadastrar, editar ou excluir um carro do banco de dados.

### Código da pasta back-end

##### ./data
Contém o codigo usado para fazer o web scraping

##### ./public
Contém o build do front end depois de rodar o comando "npm run deploy"

##### ./src
Contém o codigo para rodar o servidor. No arquivo serve.js é onde é iniciado o servidor. No arquivo app.js onde o servidor express é de fato criado e é aplicado alguns middlewares.

Na pasta *models* está o código relacionado a configuração do modelo carro usando mongoose e as funções que modifica os dados armazenados no banco de dados.

Na pasta *routes* está o código relacionado as rotas, arquivos com sufixo .router definem os end points da api, arquivos com sufixo .controller as funções relacionadas aos end points.

Na pasta *services* está o código relacionado a servíços. No arquivo *mongo.js* é feito a conexão do servidor com o banco de dado. No arquivo *jwt.js* está o codigo para verificação do token JWT, a função que protege as rotas privadas.

### Código da pasta ./src do front-end

##### ./components
Contém codigo relacionado aos componentes React utilizados.

Componente CarCard, usando para apresentação dos dados de cada carro cadastrado

Componente Navigation, usado para fazer a navegação entre a página inicial, página de login e admin.

Componente ProtectRoute, usando para protegar páginas privadas, neste caso a rota "/admin"

Componente RegisterCar, usado para fazer o cadastro ou atualização de um carro.

##### ./hooks
Contém dois arquivos importantes para o funcionando do app.

O arquivo *request.js* contem as funções que fazem as solicitações http para a API.

O arquivo *userCar.js* é o um hook customizado que usa as funções do arquivo *request.js* para ser usado nos componentes React.

##### ./pages
Contém o código relacionado a cada página do site, separados por pasta também.

##### ./services
Contem o arquivo *login.js* com o código usando para fazer verificação de login na API

##### ./App.js
Código do componente principal, usado para criação das rotas usando react-router

##### ./index.js
Conecta todo o codigo escrito que manipula o DOM com o arquivo *index.html* na pasta *public*.










