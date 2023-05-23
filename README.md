# Busca de Endereço por CEP

Este é um projeto simples que realiza a busca de endereço com base em um CEP utilizando a API pública do ViaCEP. O objetivo é fornecer uma interface onde o usuário possa inserir um CEP e obter as informações do endereço correspondente.

## Funcionalidades

- O usuário pode inserir um CEP no campo de entrada designado.
- Ao sair do campo de entrada, o sistema realiza uma solicitação para a API do ViaCEP para obter as informações do endereço correspondente ao CEP fornecido.
- Se o CEP for válido e existir, os campos de cidade, logradouro, estado e bairro serão preenchidos com as informações obtidas.
- Caso contrário, uma mensagem de erro será exibida indicando que o CEP é inválido.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Executar o Projeto

1. Clone este repositório para o seu computador.
2. Abra o arquivo `index.html` em um navegador web.
3. Insira um CEP válido no campo de entrada.
4. Saia do campo de entrada (por exemplo, clicando em outro lugar ou pressionando Tab).
5. Os campos de endereço serão preenchidos automaticamente, se o CEP for válido.

## Estrutura do Projeto

O projeto consiste nos seguintes arquivos:

- `index.html`: O arquivo HTML que contém a estrutura da página.
- `script.js`: O arquivo JavaScript que contém a lógica da busca de endereço.
- `styles`: Os arquivos CSS que definem os estilos.
- `img`: imagens utilizadas.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
