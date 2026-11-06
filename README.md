# 🚀 Site Pessoal & Portfólio — Rafael Baracho

> Website profissional, elegante e responsivo desenvolvido com HTML5 Semântico, CSS3 Moderno e JavaScript Puro (Vanilla JS).
> Projeto avaliado no **Bootcamp4All** com foco em boas práticas de acessibilidade (WCAG AA), manipulação dinâmica do DOM e conformidade com regras estritas de desenvolvimento.

---

## 🌐 Demonstração Online

- **Repositório:** [https://github.com/barachodesouzar-sys/Site-portifolio](https://github.com/barachodesouzar-sys/Site-portifolio)
- **GitHub Pages:** Acesse as configurações do repositório (`Settings` > `Pages`) e selecione a branch `main` para ativar o site online gratuitamente.

---

## ✨ Funcionalidades Principais

1. **Design System & Alternador de Tema:**
   - Paleta refinada em **Preto e Azul** com contraste verificado para conformidade **WCAG AA**.
   - Alternador de modo escuro (padrão) e modo claro com persistência em `localStorage`.
   - Tipografia elegante combinando **Playfair Display** (títulos) e **Inter** (textos).

2. **Listagem Dinâmica de Projetos (JavaScript):**
   - Os projetos são armazenados em um array de objetos estruturado (`listaDeProjetos`).
   - Renderização no DOM realizada exclusivamente através de um laço `for`.
   - Novos projetos adicionados ao array aparecem automaticamente na tela sem alteração no HTML.

3. **Formulário de Contato com Validação em Tempo Real:**
   - Prevenção de recarregamento (`event.preventDefault()`).
   - Validação de campo vazio, tamanho mínimo e formato de e-mail.
   - Mensagens visuais específicas de erro e sucesso com cores distintas na interface e registros detalhados no `console.log`.

4. **Navegação & Responsividade:**
   - Cabeçalho fixo translúcido com efeito blur (`backdrop-filter`).
   - Menu hambúrguer adaptável para dispositivos móveis com fechamento automático.
   - Rolagem suave com destaque automático da seção ativa (*scroll spy* via `IntersectionObserver`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica (`header`, `main`, `footer`, `section`, `nav`, `article`).
- **CSS3:** Variáveis customizadas (design tokens), CSS Grid, Flexbox e Mobile-First.
- **JavaScript (ES6+):** Manipulação do DOM, funções com retorno, laço `for`, eventos e validações.
- **Antigravity AI Rules:** Diretrizes de qualidade documentadas em `AGENTS.md`.

---

## 📁 Estrutura de Arquivos

```text
├── index.html           # Página única principal (One-Page)
├── AGENTS.md            # Regras oficiais de qualidade e desenvolvimento
├── BRIEFING.md          # Ficha de briefing do projeto
├── README.md            # Documentação do repositório
├── .gitignore           # Ignora arquivos de ambiente da IDE
├── css/
│   ├── variables.css    # Tokens de cor, tipografia e espaçamento
│   ├── base.css         # Reset, container e estilos globais
│   ├── components.css   # Header, botões, cards e alternador de tema
│   └── sections.css     # Estilos de cada seção e responsividade
├── js/
│   ├── theme.js         # Lógica do modo claro/escuro
│   ├── menu.js          # Menu mobile e scroll spy
│   ├── projetos.js      # Array e laço for dos projetos
│   └── formulario.js    # Captura e validação do formulário
└── assets/
    ├── img/             # Imagens e foto de perfil (foto-rafael.png)
    └── docs/            # Currículo em formato PDF
```

---

## 👤 Autor

**Rafael Baracho**
- **WhatsApp:** [(44) 99112-9047](https://wa.me/5544991129047)
- **E-mail:** [rafaelbaracho.dev@gmail.com](mailto:rafaelbaracho.dev@gmail.com)
- **GitHub:** [https://github.com/barachodesouzar-sys](https://github.com/barachodesouzar-sys)

---
*Desenvolvido com dedicação, elegância e foco em boas práticas.*
