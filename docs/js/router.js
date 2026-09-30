/*
  router.js
  Responsabilidade ÚNICA: roteamento por hash (location.hash).
  Importa os templates e, após cada render, aciona os módulos
  que precisam do DOM recém-criado (gráfico e formulário).
*/
import { templateHome, templateProjetos, templateCadastro } from "./templates.js";
import { inicializarGraficoImpacto } from "./grafico.js";
import { restaurarCadastroSalvo } from "./formulario.js";

const rotas = {
    "/": { titulo: "AB - Início", template: templateHome },
    "/projetos": { titulo: "Nossos Projetos - AB", template: templateProjetos },
    "/cadastro": { titulo: "Cadastro - AB", template: templateCadastro }
};

const containerApp = document.getElementById("app");

function renderizarRota(){
    const caminhoAtual = location.hash.replace("#", "") || "/";
    const rota = rotas[caminhoAtual] || rotas["/"];

    document.title = rota.titulo;
    containerApp.innerHTML = rota.template();

    atualizarMenuAtivo(caminhoAtual);

    if(caminhoAtual === "/") inicializarGraficoImpacto();
    if(caminhoAtual === "/cadastro") restaurarCadastroSalvo();

    window.scrollTo(0, 0);
}

function atualizarMenuAtivo(caminhoAtual){
    const links = document.querySelectorAll(".menu-interativo a[data-link]");
    links.forEach(function(link){
        const destino = link.getAttribute("href").replace("#", "");
        if(destino === caminhoAtual){
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

// Única função pública: quem usa o router só precisa "ligá-lo"
export function iniciarRouter(){
    window.addEventListener("hashchange", renderizarRota);
    renderizarRota();
}