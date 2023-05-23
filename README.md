# Meu Time - Aplicação Web de Visualização de Dados de Futebol

Esta é uma aplicação web chamada Meu Time, desenvolvida em React com TypeScript, que permite aos usuários visualizarem informações sobre ligas, times e jogadores de futebol de diferentes países. A aplicação utiliza a API pública API-Football para obter os dados necessários.

## Funcionalidades

- Login com API key: O usuário precisa fornecer sua API key da API-Football para acessar a aplicação.
- Seleção de país: O usuário pode selecionar um país para ver as ligas disponíveis.
- Seleção de liga: O usuário pode escolher uma liga pertencente ao país selecionado.
- Seleção de time: O usuário pode selecionar um time participante da liga selecionada.
- Visualização de detalhes do time: O usuário pode ver os detalhes do time, incluindo a formação mais utilizada, o total de jogos e o total de vitórias. Também é possível visualizar a lista de jogadores, incluindo nome, idade e nacionalidade.

## Instalação e execução

Siga as etapas abaixo para executar a aplicação localmente:

1. Clone este repositório para o seu computador:

   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Acesse o diretório do projeto:

   ```
   cd meu-time
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

4. Renomeie o arquivo `.env.example` para `.env` e insira sua API key da API-Football neste arquivo.

5. Inicie a aplicação:

   ```
   npm start
   ```

6. A aplicação estará disponível em `http://localhost:3000` no seu navegador.

## Testes unitários

Para executar os testes unitários da aplicação, execute o seguinte comando:

```
npm test
```

Os testes unitários foram implementados para garantir o correto funcionamento dos componentes e suas interações. Certifique-se de que todos os testes estejam passando antes de fazer alterações no código.


