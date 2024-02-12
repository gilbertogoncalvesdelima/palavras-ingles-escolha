# Aplicativo de Dicionário em React Native

Este é um aplicativo de dicionário simples desenvolvido em React Native. Ele permite que os usuários busquem definições de palavras em inglês usando a API de dicionário.

## Funcionalidades

- Busca de definições de palavras em inglês
- Exibição de definições para palavras pesquisadas
- Lista de termos pesquisados anteriormente
- Integração com Redux para gerenciamento de estado global

## Tecnologias Utilizadas

- React Native
- Redux
- Jest (para testes unitários)
- Programação reativa (RxJS)
- TypeScript
- Styled Components (para estilização)
- API de Dicionário (https://api.dictionaryapi.dev/)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `assets/`: Contém arquivos de recursos, como imagens e fontes.
- `components/`: Contém os componentes React utilizados no aplicativo.
- `redux/`: Contém a configuração do Redux, incluindo ações, redutores e store.
- `services/`: Contém o serviço de integração com a API de dicionário.
- `App.tsx`: Componente principal do aplicativo.
- `babel.config.js`: Configuração do Babel.
- `jest.config.js`: Configuração do Jest para testes.
- `metro.config.js`: Configuração do Metro, o bundler JavaScript do React Native.
- `package.json`: Arquivo de manifesto do projeto com as dependências e scripts.
- `tsconfig.json`: Configuração do TypeScript.

## Como Executar o Projeto

1. Certifique-se de ter o ambiente de desenvolvimento configurado para React Native.
2. Clone este repositório em sua máquina local.
3. Execute `npm install` para instalar as dependências do projeto.
4. Execute `npm start` para iniciar o Metro Bundler.
5. Em outra janela do terminal, execute `npm run android` ou `npm run ios` para iniciar o aplicativo no emulador ou dispositivo.

## Testes

O projeto inclui testes unitários usando o Jest. Para executar os testes, execute `npm test`.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de recebimento com quaisquer melhorias, correções de bugs ou novos recursos.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

