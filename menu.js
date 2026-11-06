/**
 * ============================================================================
 * GERENCIADOR DE MENU E ROLAGEM
 * - Controle do menu hambúrguer para dispositivos móveis
 * - Fechamento automático ao selecionar uma âncora
 * - Destaque dinâmico da seção ativa no menu via IntersectionObserver
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('header-nav');
  const navLinks = document.querySelectorAll('.header__link');
  const sections = document.querySelectorAll('section[id]');

  // ========================================================================
  // 1. Menu Hambúrguer (Mobile)
  // ========================================================================
  if (menuToggle && navMenu) {
    function toggleMobileMenu() {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }

    function openMobileMenu() {
      navMenu.classList.add('is-open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Fechar menu de navegação');
    }

    function closeMobileMenu() {
      navMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    }

    menuToggle.addEventListener('click', toggleMobileMenu);

    // Fecha o menu ao clicar em qualquer link da navegação
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    // Fecha o menu se o usuário clicar fora do cabeçalho
    document.addEventListener('click', function (event) {
      const header = document.querySelector('.header');
      if (header && !header.contains(event.target) && navMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    // Fecha ao pressionar a tecla ESC (acessibilidade)
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeMobileMenu();
        menuToggle.focus();
      }
    });
  }

  // ========================================================================
  // 2. Destaque da Seção Ativa (Scroll Spy via IntersectionObserver)
  // ========================================================================
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px', // Ativa quando a seção atinge o terço superior da tela
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            const href = link.getAttribute('href');
            if (href === '#' + currentId) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }
});
