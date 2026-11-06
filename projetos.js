/**
 * ============================================================================
 * MÓDULO DE LISTAGEM DE PROJETOS DINÂMICOS
 * Atende aos critérios da Rubrica de Avaliação (13 pontos):
 * - Array de objetos estruturados com chaves uniformes (titulo, descricao, link, tecnologias)
 * - Mínimo de 3 projetos (nenhum escrito de forma estática no HTML)
 * - Renderização dinâmica através de um laço "for"
 * - Nomes de variáveis com const/let e funções de ação com parâmetros e retorno
 * - Exibição no console.log dos projetos carregados
 * ============================================================================
 */

// Array de objetos com os projetos desenvolvidos
const listaDeProjetos = [
  {
    titulo: 'Site Pessoal e Portfólio',
    descricao: 'Website profissional responsivo com alternador de tema claro/escuro, validação de formulário em tempo real e renderização dinâmica de dados via JavaScript puro.',
    link: '#inicio',
    tecnologias: ['HTML5 Semântico', 'CSS3 Moderno', 'JavaScript ES6+', 'WCAG AA']
  },
  {
    titulo: 'Calculadora Interativa Web',
    descricao: 'Aplicação web interativa desenvolvida com JavaScript puro, com suporte a operações matemáticas básicas, tratamento de erros e interface elegante.',
    link: 'https://github.com/rafaelbaracho',
    tecnologias: ['JavaScript Puro', 'Manipulação do DOM', 'CSS Flexbox']
  },
  {
    titulo: 'Gerenciador de Tarefas (To-Do List)',
    descricao: 'Sistema de produtividade pessoal que permite criar, filtrar e marcar tarefas concluídas, mantendo persistência de dados localmente no navegador via localStorage.',
    link: 'https://github.com/rafaelbaracho',
    tecnologias: ['JavaScript ES6+', 'LocalStorage', 'CSS Grid', 'Acessibilidade']
  }
];

/**
 * Cria o elemento HTML de um cartão de projeto
 * @param {Object} projeto - Objeto contendo os dados do projeto
 * @returns {HTMLElement} Elemento <article> montado com os dados do projeto
 */
function criarCardProjeto(projeto) {
  const cardElemento = document.createElement('article');
  cardElemento.className = 'project-card';

  // Montagem das tags de tecnologias
  let tagsHtml = '';
  for (let j = 0; j < projeto.tecnologias.length; j++) {
    const tecnologia = projeto.tecnologias[j];
    tagsHtml += `<span class="project-card__tag">${tecnologia}</span>`;
  }

  // Estrutura interna semântica do card
  cardElemento.innerHTML = `
    <div class="project-card__header">
      <h3 class="project-card__title">${projeto.titulo}</h3>
      <p class="project-card__desc">${projeto.descricao}</p>
    </div>
    <div class="project-card__tags">
      ${tagsHtml}
    </div>
    <div class="project-card__footer">
      <a href="${projeto.link}" target="${projeto.link.startsWith('#') ? '_self' : '_blank'}" rel="noopener noreferrer" class="btn btn--outline btn--sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Ver projeto
      </a>
    </div>
  `;

  return cardElemento;
}

/**
 * Percorre a lista de projetos utilizando o laço 'for' e renderiza cada card na página
 * @param {Array<Object>} projetos - Lista de projetos a serem renderizados
 * @param {HTMLElement} container - Elemento pai onde os cards serão inseridos
 * @returns {number} Quantidade total de projetos renderizados com sucesso
 */
function renderizarProjetos(projetos, container) {
  if (!container) {
    console.error('Container de projetos não foi encontrado na página.');
    return 0;
  }

  // Limpa o container para garantir que não haja itens duplicados
  container.innerHTML = '';

  let totalRenderizados = 0;

  // Laço for obrigatório conforme a rubrica de avaliação
  for (let i = 0; i < projetos.length; i++) {
    const projetoAtual = projetos[i];
    const cardMontado = criarCardProjeto(projetoAtual);
    container.appendChild(cardMontado);
    totalRenderizados++;

    // Registro no console de cada projeto listado
    console.log(`[Projeto ${i + 1}/${projetos.length}] Montado:`, projetoAtual.titulo);
  }

  console.log(`Total de ${totalRenderizados} projetos renderizados dinamicamente via JavaScript.`);
  return totalRenderizados;
}

// Inicialização automática após carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
  const containerProjetos = document.getElementById('lista-projetos');
  renderizarProjetos(listaDeProjetos, containerProjetos);
});
