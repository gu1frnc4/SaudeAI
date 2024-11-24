# SaúdeAI

O SaúdeAI é uma plataforma robusta e informativa voltada para promover transparência e eficiência no setor de saúde pública municipal. A plataforma oferece dados detalhados sobre diversas doenças e indicadores de saúde, além de informações socioeconômicas dos municípios. O objetivo é fornecer dados precisos e atualizados para melhorar a gestão da saúde pública e auxiliar na tomada de decisões estratégicas.

## Índice

1. [Funcionalidades](#funcionalidades)
2. [Endpoints da API](#endpoints-da-api)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Pré-requisitos](#pré-requisitos)
5. [Instalação](#instalacao)
6. [Contribuição](#contribuicao)

## Funcionalidades

- **Busca de Informações de Saúde**: Permite buscar informações detalhadas sobre saúde por região, estado e cidade.
- **Detalhes do Município**: Exibe informações detalhadas sobre um município específico, incluindo população, IDHM, mortalidade infantil, número de estabelecimentos de saúde, internações por diarreia e gastos públicos.
- **Autenticação**: Funcionalidade de login, registro e recuperação de senha.
- **Componentes Reutilizáveis**: Inclui componentes reutilizáveis como cabeçalho, rodapé e barra de pesquisa.

## Endpoints da API

A plataforma consome dados de uma API hospedada no Vercel. Os principais endpoints são:

- `https://saude-ai-server.vercel.app/municipios`: Retorna informações sobre os municípios.
- `https://saude-ai-server.vercel.app/doencas`: Retorna informações sobre doenças.
- `https://saude-ai-server.vercel.app/atividades`: Retorna informações sobre atividades relacionadas à saúde.
- `https://saude-ai-server.vercel.app/notificacoes`: Retorna notificações de saúde.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
SaudeAI/
├── .angular/
├── .cache/
├── .editorconfig
├── .gitignore
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   ├── tasks.json
├── angular.json
├── package.json
├── public/
├── README.md
├── src/
│   ├── app/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.module.ts
│   │   ├── app.routes.server.ts
│   │   ├── app.routes.ts
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.css
│   │   │   │   ├── header.component.spec.ts
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.css
│   │   │   │   ├── footer.component.spec.ts
│   │   │   ├── search/
│   │   │   │   ├── search.component.ts
│   │   │   │   ├── search.component.html
│   │   │   │   ├── search.component.css
│   │   ├── views/
│   │   │   ├── auth/
│   │   │   │   ├── auth.component.ts
│   │   │   │   ├── auth.component.html
│   │   │   │   ├── auth.component.css
│   │   │   │   ├── auth.component.spec.ts
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.css
│   │   │   │   ├── home.component.spec.ts
│   │   │   ├── details/
│   │   │   │   ├── details.component.ts
│   │   │   │   ├── details.component.html
│   │   │   │   ├── details.component.css
│   │   │   │   ├── details.component.spec.ts
│   ├── assets/
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   ├── server.ts
│   ├── styles.css
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
```

## Pré-requisitos

- Node.js
- Angular CLI

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/saude-ai.git
    cd saude-ai
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Execute o servidor de desenvolvimento:
    ```sh
    ng serve
    ```

Abra o navegador e navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer um dos arquivos fonte.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.