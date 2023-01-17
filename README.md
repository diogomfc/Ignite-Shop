<h1 align="center">
  <img alt="Logo" src="./public/Capa.svg" alt="Coffe Delivery">
</h1>
<p align="center">Implantação de um carrinho de comparas que utilizará os dados da API do Stripe para buscar os itens existentes </p>


<p align="center">
 <a href="#sobre-o-projeto">Sobre o Projeto</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#configurações-necessárias">Configurações necessárias</a>
</p>

## Sobre o projeto

O projeto tem como objetivo o estudo e desenvolvimento de uam implantação de um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará o número de itens que a pessoa deseja comprar.

- Adicionar itens ao carrinho na página do produto.
- Salvar todos os itens selecionados, e exibir o número de itens no carrinho
- Enviar o carrinho para a rota de checkout, onde irá gerar a sessão de checkout com os ``line_items`` necessários.

O projeto foi desenvolvido como desafio das aulas do projeto 04 do [Ignite da Rocketseat](https://rocketseat.com.br/)

Link do [desafio](https://efficient-sloth-d85.notion.site/Desafio-04-Adicionando-features-ao-Ignite-Shop-91e5b2c26c9342f5b1375ba66907d0b7)

---

## Tecnologias

Abaixo as tecnologias utilizadas para construção da aplicação

- [NextJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Immer](https://github.com/immerjs/immer)
- [ContexAPI](https://reactjs.org/docs/context.html)
- [Stitches](https://stitches.dev/)
- [Radix](https://www.radix-ui.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [KeenSlider](https://github.com/colinhacks/zod)

---

## Configurações necessárias

### **Requisitos**

Necessário realizar as instalações:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)

### **Clone do projeto**

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/diogomfc/Ignite-Shop.git
# Entre na pasta do repositório clonado
$ cd Ignite-Shop
```

### **Iniciando o projeto**

```bash
# Execute yarn para instalar as dependências
$ yarn

# Para iniciar a aplicação
$ yarn dev

```
