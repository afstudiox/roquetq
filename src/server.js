/* Importando arquivos e funções */
const express = require('express')
const route = require('./route')
const path = require('path')

/* Adicionando a constante server as funcionalidades do express */
const server = express()

/* Definindo o EJS como visualizador dos conteúdos  */
server.set('view engine', 'ejs')

/* Configurando a pasta do nosso conteúdo público */
server.use(express.static("public"))

/* Ajustando o caminho do para nossa pastar personalizada */
server.set('views', path.join(__dirname, 'views'))

/* Pegar o conteudo que esta vindo do formulário, decodificar e passar para o controller */
server.use(express.urlencoded({extended: true}))

/* Solicitando ao server usar o arquivo de rotas */
server.use(route)

server.listen(3000, () => console.log("RODANDO"))