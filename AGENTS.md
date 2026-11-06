# Regras do Projeto (Rules) — Site Pessoal Rafael Baracho
> Diretrizes oficiais de desenvolvimento e qualidade para o projeto do Bootcamp4All.
> Este documento define regras específicas, verificáveis e obrigatórias para o código gerado e mantido pela IA e pelo desenvolvedor.

---

## 1. Regras de Estrutura HTML Semântico
- **Semântica Obrigatória:** A página deve utilizar tags semânticas estruturais (`header`, `main`, `footer`, `section`, `nav`, `article`). É proibido usar `<div>` para elementos estruturais principais.
- **Hierarquia de Títulos:**
  - Existe apenas um único `<h1>` na página (no Hero).
  - Cada `<section>` possui um `<h2>` identificador.
  - Subtítulos de cards, projetos e itens utilizam `<h3>`. Nunca pular níveis de cabeçalho.
- **Acessibilidade e Imagens:**
  - Todas as tags `<img>` devem possuir o atributo `alt` descritivo detalhando o conteúdo da imagem.
  - Elementos interativos (botões, links e campos de formulário) devem possuir `aria-label` ou rótulos `<label>` associados via `for`/`id`.
  - Formulário com `novalidate` para permitir que o JavaScript controle a validação personalizada com mensagens na interface.
- **Indentação:** Manter indentação estrita e consistente de 2 espaços.

---

## 2. Regras de CSS e Design System
- **Uso Estrito de Variáveis:** Todas as cores, tipografias, espaçamentos e raios de borda devem obrigatoriamente consumir os tokens definidos em `css/variables.css` (ex.: `var(--color-bg)`, `var(--color-primary)`, `var(--space-4)`).
- **Proibição de Estilos Soltos / Inline:** Proibido o uso de `style="..."` diretamente nas tags HTML. Todo estilo deve residir nos arquivos `.css` organizados.
- **Metodologia de Classes:** Utilizar nomes de classes claros, semânticos e em kebab-case, seguindo o padrão BEM (`bloco__elemento--modificador`).
- **Layout com Grid e Flexbox:**
  - Navegação e rodapé alinhados com `display: flex`.
  - Grids de cartões e projetos estruturados com `display: grid` responsivo (`repeat(auto-fit, minmax(...))`).
- **Responsividade e Prevenção de Overflow:**
  - Design mobile-first com breakpoints em `@media (max-width: 768px)`.
  - Nunca permitir rolagem horizontal indesejada (`overflow-x: hidden` no body e larguras relativas).

---

## 3. Regras de JavaScript (Fundamentos e Funcionalidades)
- **Declaração de Variáveis:**
  - Proibido o uso da palavra-chave `var`.
  - Usar `const` para elementos capturados do DOM, arrays, objetos e valores imutáveis.
  - Usar `let` única e exclusivamente quando houver reatribuição de valor (ex.: contadores de laço `for`, estados mutáveis).
  - Nomes de variáveis devem ser autoexplicativos em português camelCase (ex.: `nomeDigitado`, `campoEmail`, `listaDeProjetos`). Proibido usar abreviações como `x`, `temp`, `data`.
- **Organização de Funções:**
  - Toda função deve ter nome com verbo de ação claro (ex.: `validarEmail`, `validarFormulario`, `renderizarProjetos`, `exibirFeedback`).
  - Funções de validação devem receber parâmetros, realizar testes e devolver resultado booleano ou objeto via `return`.
  - Código modular e reaproveitável, evitando duplicações desnecessárias.
- **Estruturas Condicionais:**
  - Utilizar `if / else` e `else if` quando houver múltiplos cenários de teste.
  - Utilizar comparações estritas (`===`, `!==`, `<`, `>`).
  - Sempre cobrir o caso contrário (`else`) para garantir previsibilidade e feedback ao usuário.
- **Uso do console.log para Avaliação:**
  - Registrar no `console.log` os dados recebidos do formulário no momento do envio.
  - Registrar no `console.log` cada erro de validação encontrado com mensagem descritiva.
  - Registrar no `console.log` a mensagem de sucesso no envio.
  - Registrar no `console.log` a lista de projetos carregada dinamicamente com a contagem total de itens.

---

## 4. Regras do Módulo de Projetos
- **Array de Objetos Dinâmico:**
  - Os projetos devem ser armazenados em um array de objetos (`listaDeProjetos`).
  - Cada objeto deve ter uma estrutura padronizada com chaves idênticas: `titulo`, `descricao`, `link` e `tecnologias`.
  - Conter no mínimo 3 projetos cadastrados no array.
  - **PROIBIDO** escrever projetos de forma estática no arquivo HTML. O container `#lista-projetos` deve iniciar vazio no HTML.
- **Renderização com Laço for:**
  - A renderização deve ser feita através de um laço `for` clássico (`for (let i = 0; i < projetos.length; i++)`).
  - O laço deve ler as propriedades de cada objeto (`projeto.titulo`, `projeto.descricao`, etc.) e construir os elementos HTML dinamicamente no DOM.
  - Novos projetos adicionados ao array devem aparecer automaticamente na página sem qualquer alteração no código HTML.

---

## 5. Regras do Formulário de Contato e Validação
- **Captura e Prevenção:**
  - O evento `submit` do formulário deve ser interceptado pelo JavaScript.
  - Executar obrigatoriamente `evento.preventDefault()` para impedir o recarregamento da página.
  - Capturar os valores digitados nos campos de `nome`, `e-mail` e `mensagem` utilizando `.value.trim()`.
- **Critérios de Validação Obrigatórios:**
  - **Campo Vazio:** Nenhum dos campos pode ser enviado em branco.
  - **Tamanho Mínimo do Nome:** O nome deve conter no mínimo 3 caracteres.
  - **Validação de E-mail:** O e-mail deve conter o caractere `@` e pelo menos um ponto `.` após o arroba.
  - **Tamanho Mínimo da Mensagem:** A mensagem deve conter no mínimo 10 caracteres.
- **Feedback Visual na Interface:**
  - Mensagens de erro específicas para cada campo com problema (ex.: informar exatamente se o erro foi no nome, no e-mail ou na mensagem).
  - Mensagem de sucesso quando todos os dados estiverem válidos.
  - As mensagens devem aparecer visivelmente na página dentro de um container com `role="alert"`.
  - Cores distintas e acessíveis: cor vermelha/coral para erros e cor verde para sucesso, integradas à paleta visual.
