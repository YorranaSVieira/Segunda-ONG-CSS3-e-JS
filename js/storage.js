/*
  storage.js
  Responsabilidade ÚNICA: Web Storage (localStorage).
  Nenhuma função aqui toca no DOM: recebe e devolve apenas dados.
*/
const CHAVE_CADASTRO = "cadastroAB";

// SET: o localStorage só aceita strings, então o objeto é serializado
export function salvarCadastro(dados){
    localStorage.setItem(CHAVE_CADASTRO, JSON.stringify(dados));
}

// GET + PARSE: devolve o objeto salvo ou null (nada salvo / valor corrompido)
export function carregarCadastro(){
    const bruto = localStorage.getItem(CHAVE_CADASTRO);
    if(!bruto) return null;

    try{
        return JSON.parse(bruto);
    } catch(erro){
        console.warn("Não foi possível interpretar os dados salvos:", erro);
        return null;
    }
}

// Função para gerir o tema e persistir no localStorage
export function initDarkMode() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const toggleButton = document.querySelector('#dark-mode-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}