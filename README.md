# Sistema de Busca Meteorológica

Este sistema foi contruido utilizando o NextJS para front-end e o Node.js para backend, comunicação com o banco de dados Postgressql e com a API OpenWeatherMap, que fornece as informações meteorológicas completas para qualquer local na Terra, incluindo mais de 200.000 cidades. 

## Iniciando o Sistema

Para iniciar o sistema e testar na sua máquina, basta realizar o clone do projeto utilizando o comando 
```
git clone https://github.com/ERAjeje/meteorologia.git
```
Após realizar o clone do projeto em sua máquina, é necessário instalar as dependencias necessárias para o correto funcionamento. Para isso, você precisa ter o `node.js` e o `postgresql` instalados na sua máquina. Caso esteja com tudo instalado, basta abrir um terminal na pasta onde os arquivos foram baixados e utilizar os comandos listados abaixo
```
yarn --version
```
Se esse comando retornar um valor numérico separado por pontos como por exemplo `1.22.5`, siga com os comandos 
```
yarn
cd client
yarn
````
Caso você não tenha o `yarn` instalado em sua máquina o comando `yarn --version` resultará em um erro. Realize então o teste para verificar se o `node.js` está instalado corretamente através da linha de comando
```
node -v
npm -v
```
Se tudo estiver certo, você receberá como resposta duas sequencias numéricas como por exemplo `v14.15.3` e `6.14.9` . Nesse caso, continue com os comandos
```
npm install
cd client
npm install
```
Uma vez que as dependencias estejam instaladas, você vai precisar preencher o arquivo `.env` com as seguintes informações
```
user = "root"
host = "localhost"
database = "meteorologia_db"
password = "admin"
port_db = "5432"
```
É preciso criar a base de dados `meteorologia_db` e trocar as informações de `user`, `port_db` e `password` para as mesmas que você utiliza no seu banco de dados.

## Vamos Rodar o Sistema?

Já que está tudo pronto, vamos rodar alguns comandos para testar o sistema.
Abra dois terminais de comando (cmd ou bash) na pasta principal onde os arquivos foram baixados.

No primeiro digite
```
yarn serve
```
ou
```
npm run serve
```
Na outra janeja digite
```
cd client
yarn dev
```
ou
```
cd client
npm run dev
```