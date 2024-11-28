# Front-End

Este � o reposit�rio do front-end do nosso projeto. Este projeto utiliza [Next.js](https://nextjs.org/), uma estrutura de React para desenvolvimento de aplica��es web.

## Pr�-requisitos

Certifique-se de ter o Node.js instalado na sua m�quina. Voc� pode baixar o Node.js [aqui](https://nodejs.org/).

## Instala��o

Primeiro, clone o reposit�rio:

```bash
git clone https://gitlab.com/senac-projetos-de-desenvolvimento/2024-jennifer-schwanz-torchelsen/front-end.git
```

Depois, navegue at� o diret�rio do projeto:

```bash
cd front-end
```

Instale as depend�ncias do projeto utilizando o npm:

```bash
npm install
```

## Scripts Dispon�veis

No diret�rio do projeto, voc� pode executar os seguintes scripts:

### `npm run dev`

Executa a aplica��o em modo de desenvolvimento.\
Abra [http://localhost:3001](http://localhost:3001) para ver no navegador.

A p�gina ser� recarregada se voc� fizer edi��es.\
Voc� tamb�m ver� erros de lint no console.

### `npm run build`

Compila a aplica��o para produ��o na pasta `build`.\
Ele corretamente empacota o React no modo de produ��o e otimiza a constru��o para o melhor desempenho.

### `npm run start`

Inicia o servidor da aplica��o em produ��o. Certifique-se de ter executado `npm run build` primeiro.

### `npm run lint`

Executa o linter para verificar a conformidade do c�digo com as regras de estilo definidas.

## Depend�ncias

O projeto utiliza as seguintes depend�ncias:

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

Se voc� deseja contribuir com o projeto, por favor, siga os seguintes passos:

1. Fa�a um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas altera��es (`git commit -m 'Adiciona nova feature'`)
4. Envie para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request
