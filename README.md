# Autista Brasil (AB) — Single Page Application

Projeto acadêmico de uma SPA para a ONG fictícia **AUTISTA BRASIL (AB)**, organização sem fins lucrativos dedicada à inclusão social, à autonomia e à empregabilidade de pessoas no Espectro Autista (TEA). O site apresenta a ONG, seus projetos e um formulário de cadastro para voluntários e doadores.

## Funcionalidades

- **Início:** apresentação da ONG, números de impacto e gráfico gerado com Chart.js.
- **Projetos:** cards gerados a partir de dados, com modal de detalhes ao clicar (mouse ou teclado).
- **Cadastro:** formulário com validação nativa do HTML5, feedback visual e persistência no `localStorage`, com preenchimento automático ao voltar à página.
- **Navegação sem recarregar a página**, por roteamento com hash (`#/`, `#/projetos`, `#/cadastro`).
- **Layout responsivo**, com grid de 12 colunas e cinco breakpoints.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, grid, flexbox, animações, media queries)
- JavaScript com módulos ES6
- [Chart.js 4.4.4](https://www.chartjs.org/) (servido localmente)
- Git e GitHub, com fluxo GitFlow

## Estrutura de pastas

```
├── css/
│   └── style.css
├── html/
│   └── index.html
├── imagens/
├── js/
│   ├── main.js          # ponto de entrada; registra eventos e inicia o router
│   ├── router.js        # roteamento por hash
│   ├── templates.js     # geração do HTML de cada página
│   ├── dados.js         # dados dos projetos
│   ├── modal.js         # abrir/fechar o modal de projetos
│   ├── formulario.js    # validação e feedback do cadastro
│   ├── storage.js       # acesso ao localStorage
│   ├── grafico.js       # integração com o Chart.js
│   └── chart.umd.min.js # biblioteca Chart.js
├── LICENSE
└── README.md
```

## Arquitetura do JavaScript

O código é dividido em módulos ES6 (`import`/`export`), cada um com uma única responsabilidade:

| Módulo | Responsabilidade | Depende de |
| --- | --- | --- |
| `dados.js` | Dados estáticos dos projetos | — |
| `storage.js` | Leitura e escrita no `localStorage` | — |
| `grafico.js` | Gráfico de impacto (Chart.js) | Chart (global) |
| `modal.js` | Modal de detalhes dos projetos | `dados.js` |
| `formulario.js` | Validação e feedback do formulário | `storage.js` |
| `templates.js` | HTML das páginas | `dados.js` |
| `router.js` | Rotas e renderização | `templates.js`, `grafico.js`, `formulario.js` |
| `main.js` | Orquestra eventos e inicia a aplicação | `router.js`, `modal.js`, `formulario.js` |

Os eventos de clique, teclado e envio são registrados por **delegação** no elemento fixo `#app`, já que seu conteúdo é recriado a cada troca de rota.

## Como executar

Como o projeto usa módulos ES6, ele **não funciona abrindo o arquivo com duplo clique** (`file://`). É preciso um servidor local:

1. Clone o repositório:
   ```bash
   git clone https://github.com/YorranaSVieira/Segunda-ONG-CSS3-e-JS.git
   ```
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server**.
4. Clique com o botão direito em `html/index.html` e escolha **Open with Live Server**.

## Fluxo de versionamento (GitFlow)

O repositório segue o GitFlow, com commits semânticos:

- `main`: versões estáveis, marcadas com tags (ex.: `v1.0.0`).
- `develop`: integração do desenvolvimento contínuo.
- `feature/*`: novas funcionalidades e documentação, criadas a partir de `develop` e integradas por Pull Request.
- `release/*`: preparação de uma versão, integrada em `main` e `develop`.
- `hotfix/*`: correções urgentes a partir de `main`.

Padrão de mensagens de commit:

| Prefixo | Uso |
| --- | --- |
| `feat:` | nova funcionalidade |
| `fix:` | correção de erro |
| `docs:` | documentação |
| `refactor:` | reestruturação sem mudar o comportamento |
| `chore:` | tarefas de manutenção |

## Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE`.