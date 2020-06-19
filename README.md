# React Auth

Prova de conceito de um processo de autenticação com front-end e back-end utilizando Node.js.

## Executando

### Modo de desenvolvimento

> Obs: Você deve ter um banco de dados Mongo rodando para configurar corretamente a aplicação em modo de desenvolvimento.

**API**

```bash
cp .env.example .env
cd api
npm install
# Antes de executar o comando a seguir, você deve editar o arquivo .env e
# informar os dados corretos de acesso ao MongoDB.
npm start
```

**Web**

```bash
cd web
cp .env.example .env
npm install
npm start
```

### Modo de produção

```bash
# Duplique o arquivo com as configurações
cp .env.example .env
# Deixe que o docker-compose faz o resto
docker-compose up -d
```

Em ambos os casos, a aplicação estará disponível através da URL: [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Endpoints

A API expõe duas endpoints para acesso da interface web. Uma endpoint para cadastro de usuários e outra para autenticação, ambas especificadas abaixo:

### POST /user

Cadastra um novo usuário no sistema.

```http
POST "http://127.0.0.1:8000/user" HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"name": "John Doe",
	"email": "john.doe@example.com",
	"password": "secret",
	"password_confirmation": "secret",
	"gender": "m",
	"phone": "(415) 555-2671",
	"country": "USA",
	"cpf": "000.000.000-00",
	"newsletter": true
}
```

### POST /auth

Analisa as credenciais do usuário e autoriza (ou não) seu acesso.

```http
POST "http://127.0.0.1:8000/auth" HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"email": "john.doe@example.com",
	"password": "secret"
}
```

## License

[MIT](LICENSE)
