/*
  formulario.js
  Responsabilidade ÚNICA: lógica do formulário de cadastro
  (validação, feedback visual e preenchimento).
  A persistência é delegada a storage.js: aqui não existe localStorage.
*/
import { salvarCadastro, carregarCadastro } from "./storage.js";

export function exibirFeedbackCadastro(tipo, titulo, mensagem){
    const area = document.getElementById("feedbackCadastro");
    if(!area) return;

    const classesPorTipo = {
        sucesso: "alerta-sucesso",
        erro: "alerta-erro",
        info: "alerta-info",
        aviso: "alerta-aviso"
    };
    const classeAlerta = classesPorTipo[tipo] || "alerta-info";

    area.innerHTML = `
        <div class="alerta ${classeAlerta}">
            <div>
                <strong>${titulo}</strong>
                ${mensagem}
            </div>
        </div>
    `;
    area.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function tratarSubmitCadastro(form){
    if(!form.checkValidity()){
        form.reportValidity();
        exibirFeedbackCadastro("erro", "Não foi possível enviar", "Verifique os campos destacados e tente novamente.");
        return;
    }

    const dados = Object.fromEntries(new FormData(form).entries());
    salvarCadastro(dados);

    exibirFeedbackCadastro("sucesso", "Cadastro enviado com sucesso!", "Obrigado, " + dados.nome + ". Em breve entraremos em contato.");
    form.reset();
}

export function restaurarCadastroSalvo(){
    const dadosSalvos = carregarCadastro();
    if(!dadosSalvos) return;

    const form = document.getElementById("formCadastro");
    if(!form) return;

    Object.keys(dadosSalvos).forEach(function(nomeCampo){
        const campo = form.elements[nomeCampo];
        if(!campo) return;
        campo.value = dadosSalvos[nomeCampo];
    });

    exibirFeedbackCadastro("info", "Dados recuperados", "Encontramos um cadastro salvo anteriormente neste navegador e preenchemos o formulário automaticamente.");
}