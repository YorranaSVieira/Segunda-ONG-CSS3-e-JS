/*
  main.js
  PONTO DE ENTRADA: só orquestra. Importa os módulos e registra os
  eventos delegados no container fixo (#app), que nunca é recriado.
*/
import { iniciarRouter } from "./router.js";
import { abrirModalProjeto, fecharModalProjeto } from "./modal.js";
import { tratarSubmitCadastro } from "./formulario.js";

const containerApp = document.getElementById("app");

// Cliques: abre o modal pelo card ou fecha no "×" / área escura
containerApp.addEventListener("click", function(evento){
    const card = evento.target.closest("[data-projeto-index]");
    if(card){
        abrirModalProjeto(Number(card.getAttribute("data-projeto-index")));
        return;
    }
    if(evento.target.id === "fecharModalProjeto" || evento.target.id === "modalProjeto"){
        fecharModalProjeto();
    }
});

// Teclado: Enter/Espaço abrem o card (acessibilidade)
containerApp.addEventListener("keydown", function(evento){
    const card = evento.target.closest("[data-projeto-index]");
    if(card && (evento.key === "Enter" || evento.key === " ")){
        evento.preventDefault();
        abrirModalProjeto(Number(card.getAttribute("data-projeto-index")));
    }
});

// Submissão do formulário
containerApp.addEventListener("submit", function(evento){
    if(evento.target.id !== "formCadastro") return;
    evento.preventDefault();
    tratarSubmitCadastro(evento.target);
});

/* ====================================================================
   FUNCIONALIDADE DE ALTO CONTRASTE (MODO ESCURO)
   Como o botão está no header (fora do #app), ouvimos ele direto.
==================================================================== */
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. Verifica no localStorage se o usuário já escolheu o modo escuro antes
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

// 2. Adiciona o evento de clique ao botão do header
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // Alterna a classe no body
        body.classList.toggle('dark-mode');
        
        // 3. Salva a preferência atualizada no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Inicia o roteamento do site
iniciarRouter();