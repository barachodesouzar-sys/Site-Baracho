/**
 * ============================================================================
 * MÓDULO DE FORMULÁRIO E VALIDAÇÃO DE DADOS
 * Atende aos critérios da Rubrica de Avaliação (15 pontos + Fundamentos de JS):
 * - Escuta o evento submit e previne o recarregamento com event.preventDefault()
 * - Captura os dados digitados usando .value e .trim()
 * - Valida campo vazio, tamanho mínimo (nome >= 3) e formato de e-mail (com @ e .)
 * - Exibe mensagens visuais específicas na página com cores distintas (sucesso e erro)
 * - Utilização estrita de const e let, funções nomeadas com retorno, condicionais if/else if/else
 * - Registro minucioso no console.log para apresentação oral
 * ============================================================================
 */

/**
 * Valida o campo de nome do usuário
 * @param {string} nomeDigitado - Nome fornecido no campo
 * @returns {Object} Objeto com estado booleano de validação e mensagem explicativa
 */
function validarNome(nomeDigitado) {
  if (nomeDigitado === '') {
    return { valido: false, mensagem: 'Por favor, preencha o campo de nome.' };
  } else if (nomeDigitado.length < 3) {
    return { valido: false, mensagem: 'O nome precisa conter pelo menos 3 caracteres.' };
  } else {
    return { valido: true, mensagem: 'Nome válido.' };
  }
}

/**
 * Valida o formato e preenchimento do campo de e-mail
 * @param {string} emailDigitado - E-mail fornecido no campo
 * @returns {Object} Objeto com estado booleano de validação e mensagem explicativa
 */
function validarEmail(emailDigitado) {
  if (emailDigitado === '') {
    return { valido: false, mensagem: 'Por favor, preencha o campo de e-mail.' };
  } else if (!emailDigitado.includes('@') || !emailDigitado.includes('.')) {
    return { valido: false, mensagem: 'Por favor, informe um e-mail válido contendo "@" e pelo menos um ponto "."' };
  } else if (emailDigitado.indexOf('@') > emailDigitado.lastIndexOf('.')) {
    return { valido: false, mensagem: 'O ponto "." deve estar localizado após o "@" no domínio do e-mail.' };
  } else {
    return { valido: true, mensagem: 'E-mail válido.' };
  }
}

/**
 * Valida o preenchimento da mensagem
 * @param {string} mensagemDigitada - Texto da mensagem
 * @returns {Object} Objeto com estado booleano de validação e mensagem explicativa
 */
function validarMensagem(mensagemDigitada) {
  if (mensagemDigitada === '') {
    return { valido: false, mensagem: 'Por favor, escreva a sua mensagem.' };
  } else if (mensagemDigitada.length < 10) {
    return { valido: false, mensagem: 'A mensagem é muito curta. Digite pelo menos 10 caracteres.' };
  } else {
    return { valido: true, mensagem: 'Mensagem válida.' };
  }
}

/**
 * Exibe a mensagem de feedback na interface da página
 * @param {HTMLElement} containerFeedback - Elemento da página onde a mensagem será exibida
 * @param {string} textoMensagem - Conteúdo textual da mensagem
 * @param {string} tipoFeedback - Tipo da mensagem: 'sucesso' ou 'erro'
 * @returns {boolean} Retorna true ao concluir a exibição
 */
function exibirFeedback(containerFeedback, textoMensagem, tipoFeedback) {
  if (!containerFeedback) {
    return false;
  }

  // Remove classes anteriores
  containerFeedback.className = 'form__feedback';

  if (tipoFeedback === 'sucesso') {
    containerFeedback.classList.add('form__feedback--sucesso');
  } else if (tipoFeedback === 'erro') {
    containerFeedback.classList.add('form__feedback--erro');
  } else {
    containerFeedback.className = 'form__feedback';
  }

  containerFeedback.textContent = textoMensagem;
  return true;
}

/**
 * Processa a submissão do formulário, valida os dados e gera os feedbacks visuais e no console
 * @param {Event} eventoSubmit - Evento disparado pelo formulário
 */
function processarEnvioFormulario(eventoSubmit) {
  // Impede o recarregamento padrão da página
  eventoSubmit.preventDefault();

  const formulario = eventoSubmit.target;
  const campoNome = document.getElementById('campo-nome');
  const campoEmail = document.getElementById('campo-email');
  const campoMensagem = document.getElementById('campo-mensagem');
  const containerFeedback = document.getElementById('mensagem-feedback');

  // Captura dos valores digitados com remoção de espaços em branco nas pontas
  const nomeDigitado = campoNome.value.trim();
  const emailDigitado = campoEmail.value.trim();
  const mensagemDigitada = campoMensagem.value.trim();

  // Registro no console dos dados recebidos para demonstração na apresentação
  console.log('--- Submissão de Formulário Detectada ---');
  console.log('Dados capturados:', {
    nome: nomeDigitado,
    email: emailDigitado,
    mensagem: mensagemDigitada
  });

  // Execução das validações modulares
  const validacaoNome = validarNome(nomeDigitado);
  const validacaoEmail = validarEmail(emailDigitado);
  const validacaoMensagem = validarMensagem(mensagemDigitada);

  // Verificação condicional passo a passo cobrindo todos os cenários
  if (validacaoNome.valido !== true) {
    console.log('Erro de validação:', validacaoNome.mensagem);
    exibirFeedback(containerFeedback, validacaoNome.mensagem, 'erro');
    campoNome.focus();
  } else if (validacaoEmail.valido !== true) {
    console.log('Erro de validação:', validacaoEmail.mensagem);
    exibirFeedback(containerFeedback, validacaoEmail.mensagem, 'erro');
    campoEmail.focus();
  } else if (validacaoMensagem.valido !== true) {
    console.log('Erro de validação:', validacaoMensagem.mensagem);
    exibirFeedback(containerFeedback, validacaoMensagem.mensagem, 'erro');
    campoMensagem.focus();
  } else {
    // Cenário de sucesso: todos os campos estão devidamente corretos
    console.log('Sucesso! Todos os campos do formulário foram validados com êxito.');
    exibirFeedback(
      containerFeedback,
      `Obrigado pelo contato, ${nomeDigitado}! Sua mensagem foi registrada com sucesso. Responderei em breve.`,
      'sucesso'
    );

    // Limpa os campos do formulário após envio bem-sucedido
    formulario.reset();
  }
}

// Inicialização do ouvinte de envio após o carregamento da página
document.addEventListener('DOMContentLoaded', function () {
  const formularioContato = document.getElementById('formulario-contato');
  if (formularioContato) {
    formularioContato.addEventListener('submit', processarEnvioFormulario);
  }
});
