# Front-End

Este é o repositório do front-end do nosso projeto. Este projeto utiliza [Next.js](https://nextjs.org/), uma estrutura de React para desenvolvimento de aplicações web.

## Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina. Você pode baixar o Node.js [aqui](https://nodejs.org/).

## Instalação

Primeiro, clone o repositório:

```bash
git clone <URL-do-repositório>
```

Depois, navegue até o diretório do projeto:

```bash
cd front-end
```

Instale as dependências do projeto utilizando o npm:

```bash
npm install
```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3001](http://localhost:3001) para ver no navegador.

A página será recarregada se você fizer edições.\
Você também verá erros de lint no console.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele corretamente empacota o React no modo de produção e otimiza a construção para o melhor desempenho.

### `npm run start`

Inicia o servidor da aplicação em produção. Certifique-se de ter executado `npm run build` primeiro.

### `npm run lint`

Executa o linter para verificar a conformidade do código com as regras de estilo definidas.

## Dependências

O projeto utiliza as seguintes dependências:

- `@chakra-ui/react`: ^2.8.2
- `@emotion/react`: ^11.11.4
- `@emotion/styled`: ^11.11.5
- `axios`: ^1.7.2
- `framer-motion`: ^11.2.13
- `lucide-react`: ^0.407.0
- `next`: 14.2.4
- `react`: ^18
- `react-calendly`: ^4.3.1
- `react-dom`: ^18

## Contribuindo

Se você deseja contribuir com o projeto, por favor, siga os seguintes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Envie para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request
