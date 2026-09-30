/*
  modal.js
  Responsabilidade ÚNICA: abrir/fechar o modal de detalhes do projeto.
  Depende apenas de dados.js (leitura).
*/
import { projetosData } from "./dados.js";

export function abrirModalProjeto(indice){
    const projeto = projetosData[indice];
    if(!projeto) return;

    document.getElementById("modalProjetoTitulo").textContent = "Sobre o " + projeto.titulo;
    document.getElementById("modalProjetoDescricao").textContent = projeto.descricao;
    document.getElementById("modalProjeto").classList.add("modal-aberto");
}

export function fecharModalProjeto(){
    const modal = document.getElementById("modalProjeto");
    if(modal) modal.classList.remove("modal-aberto");
}