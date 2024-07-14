#  React Dashboard Shop 
![](https://github.com/alexsandroferreira/react-dash-shop/workflows/CHANGELOG%20Generator/badge.svg)
[![Release](https://img.shields.io/github/v/release/alexsandroferreira/react-dash-shop?color=lgreen)](https://github.com/alexsandroferreira/react-dash-shop/releases)

Este projeto template, utilizando React puro, Shadcn UI e Tailwind, visa ajudar desenvolvedores com uma configuração mínima. 

Além disso, a integração contínua será implementada para automatizar o versionamento de código utilizando a biblioteca Release-it.

## Adições pessoais para melhor desenvolvimento do projeto

- Integração contínua para automatização do changelog.
- Lint seguindo o guia de estilo da rocketseat/node.
- Automação através do Husky:
    - Script de lint para correção de erros.
    - Script de verificação de commits usando o formato convencional.
- Plugin de lint para organização dos imports.


## Tabela de Conteúdos

- [Tecnologias](#tecnologias)
- [Instalação e Configuração](#instala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o)
  - [Requisitos](#requisitos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)

## Tecnologias 🛠️

Este projeto foi construído com as seguintes tecnologias:

- [Node.js »](https://nodejs.org)
- [Typescript »](https://www.typescriptlang.org)
- [Eslint »](https://eslint.org/docs/latest/)
- [Eslint style guide »](https://github.com/Rocketseat/eslint-config-rocketseat)
- [@eslint-plugin-simple-import-sort »](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [@eslint-plugin-simple-import-sort »](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [React Helmet Async »](https://github.com/staylor/react-helmet-async/)
- [Tailwind »](https://tailwindcss.com/)
- [Shadcm/ui framework de interface  »](https://ui.shadcn.com//)
- [Husky »](https://typicode.github.io/husky/)
- [Commitlint »](https://commitlint.js.org/)
- [release-it »](https://github.com/release-it/release-it)

## Instalação e configuração

### Requisitos

- [Node.js »](https://nodejs.org/en/download) na sua versão LTS
- Extensão do ESlint, Tailwind CSS IntelliSense e PostCSS Language Support instalada no vs code

- Extensão do ESlint instalada no vs code

- Para permitir que o changelog rode automaticamente, verifique as configurações do repositório na aba Settings -> Actions -> General Workflow Permissions e marque a opção de permissões de leitura e escrita (Read and Write Permissions).

### Requisitos funcionais

- [x] configuração do layout com React Router DOM;
- [x] configuração base do shadcn/iu;
- [x] configuração base do React Helmet Async para alternar metatags do React;
- [x] workflow para versionamento do projeto;

### Regras de negócio



### Requisitos não-funcionais


## Instalação

1. Clone o projeto: `git clone https://github.com/alexsandroferreira/react-tailwind-template.git`.
2. Instale as dependências e ative husky: `npm install` e `npm prepare`.
3. Para iniciar a aplicação execute `npm run build` e `npm run start`.