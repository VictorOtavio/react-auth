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
## License

[MIT](LICENSE)
