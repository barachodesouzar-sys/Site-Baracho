/**
 * ============================================================================
 * GERENCIADOR DE TEMA (CLARO / ESCURO)
 * - Tema padrão: Escuro (preto e azul)
 * - Suporta alternância para tema claro
 * - Persiste a escolha do usuário no localStorage
 * - Respeita preferência do sistema operacional caso não haja escolha salva
 * ============================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'rafael_site_theme';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';

  /**
   * Obtém o tema inicial preferido
   * @returns {string} 'dark' ou 'light'
   */
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === THEME_LIGHT || savedTheme === THEME_DARK) {
      return savedTheme;
    }

    // Padrão do site é escuro conforme o briefing
    return THEME_DARK;
  }

  /**
   * Aplica o tema ao documento
   * @param {string} theme 
   */
  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === THEME_LIGHT) {
      root.setAttribute('data-theme', THEME_LIGHT);
    } else {
      root.removeAttribute('data-theme');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      const isLight = theme === THEME_LIGHT;
      themeToggleBtn.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
      themeToggleBtn.setAttribute('title', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
      themeToggleBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    }
  }

  /**
   * Alterna entre os temas
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === THEME_LIGHT 
      ? THEME_LIGHT 
      : THEME_DARK;
    
    const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  }

  // Executa imediatamente para evitar flash de tela em branco/incorreta (FOUC)
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  // Inicializa o evento do botão após o carregamento do DOM
  document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
      applyTheme(document.documentElement.getAttribute('data-theme') === THEME_LIGHT ? THEME_LIGHT : THEME_DARK);
    }
  });
})();
