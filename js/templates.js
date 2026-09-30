/*
  templates.js
  Responsabilidade ÚNICA: gerar as strings HTML de cada "página".
  Só importa os dados (dados.js); não conhece rotas, storage nem eventos.
*/
import { projetosData } from "./dados.js";

export function templateHome(){
    return `
        <section class="hero">
            <h1 class="transformando">Transformando vidas com Inclusão e Tecnologia</h1>
            <p class="hero-subtitulo">Tecnologia e acolhimento caminhando juntos para incluir, capacitar e transformar a vida de pessoas autistas.</p>
        </section>

        <section>
            <div class="quemsomos-wrapper">
                <p class="quemsomos-texto">
                    A AUTISTA BRASIL (AB) é uma organização sem fins lucrativos dedicada a promover a inclusão social, a autonomia e a empregabilidade de pessoas dentro do Espectro Autista (TEA). Conectamos tecnologia, voluntários, doadores e parceiros estratégicos para desenvolver ferramentas inovadoras, capacitações profissionais e redes de apoio que transformam barreiras cotidianas em pontes para o desenvolvimento pleno da comunidade autista e de suas famílias.
                </p>
                <img src="../imagens/quemsomos.png" alt="Uma pessoa adulta em um ambiente corporativo utilizando o cordão do Autismo e o crachá de trabalho" class="quemsomosimg">
            </div>

            <div class="stats">
                <div class="stat">
                    <strong>500+</strong>
                    <span>Pessoas impactadas</span>
                </div>
                <div class="stat">
                    <strong>20</strong>
                    <span>Parceiros</span>
                </div>
                <div class="stat">
                    <strong>10</strong>
                    <span>Projetos ativos</span>
                </div>
            </div>

            <div class="grafico-impacto-wrapper">
                <h3>Nosso impacto em números</h3>
                <div class="grafico-canvas-container">
                    <canvas id="graficoImpacto"></canvas>
                </div>
            </div>
        </section>

        <aside aria-label="Chamada para ação">
            <section class="faca-parte">
                <h2>Faça parte dessa mudança</h2>
            </section>
            <div class="doe">
                <p>Seja um doador ou voluntário do Autista Brasil e ajude a promover a inclusão e a autonomia por meio da tecnologia.</p>
            </div>
            <a class="botao" href="#/cadastro" data-link>Quero fazer parte</a>
        </aside>
    `;
}

function cardProjeto(projeto, indice){
    return `
        <article class="projeto" data-projeto-index="${indice}" tabindex="0" role="button" aria-haspopup="dialog">
            <img src="../imagens/${projeto.imagem}" alt="${projeto.alt}">
            <div>
                <h2>${projeto.titulo}</h2>
                <span class="badge ${projeto.categoriaClasse}">${projeto.categoriaLabel}</span>
                <p>${projeto.descricao}</p>
            </div>
        </article>
    `;
}

export function templateProjetos(){
    const cardsHTML = projetosData.map(cardProjeto).join("");

    return `
        <section class="hero-projetos">
            <div class="textoprincipal">
                <h1>Nossos Projetos</h1>
            </div>
            <div class="subtexto">
                <p>Conheça as iniciativas que você pode apoiar como voluntário(a) ou doador(a). Clique em um card para ver mais detalhes.</p>
            </div>
        </section>

        <div class="alerta alerta-sucesso">
            <div>
                <strong>Projetos carregados com sucesso!</strong>
                Conheça as iniciativas abaixo.
            </div>
        </div>

        <div class="modal-overlay" id="modalProjeto">
            <div class="modal-caixa">
                <span class="modal-fechar" id="fecharModalProjeto">&times;</span>
                <h3 id="modalProjetoTitulo"></h3>
                <p id="modalProjetoDescricao"></p>
            </div>
        </div>

        <div class="toast">Novo projeto disponível!</div>

        <div class="projetos-grid">
            ${cardsHTML}
        </div>

        <div class="iniciativa">
            <h3>Inclusão se constrói com oportunidades, conhecimento e colaboração.</h3>
            <p>Cada projeto da AUTISTA BRASIL conta com pessoas voluntárias, parceiros e doadores que acreditam no potencial de uma sociedade mais acessível, acolhedora e inclusiva. Juntos, transformamos tecnologia e conhecimento em oportunidades reais para pessoas autistas, promovendo autonomia, participação e novas possibilidades para o futuro.</p>
        </div>
    `;
}

export function templateCadastro(){
    return `
        <div class="cadastro-main">
            <h1>Cadastre-se como voluntário(a) ou doador(a)</h1>
            <p>Preencha os dados abaixo. Os campos marcados com <span class="asterisco">*</span> são obrigatórios.</p>

            <div id="feedbackCadastro"></div>

            <form action="#" method="post" id="formCadastro" novalidate>
                <fieldset>
                    <legend>Dados pessoais</legend>
                    <label for="nome">Nome Completo<span class="asterisco">*</span></label>
                    <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo">

                    <label for="email">E-mail<span class="asterisco">*</span></label>
                    <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com">

                    <label for="nascimento">Data de nascimento<span class="asterisco">*</span></label>
                    <input type="date" id="nascimento" name="nascimento" required>
                </fieldset>

                <fieldset>
                    <legend>Documento e contato</legend>
                    <label for="cpf">CPF<span class="asterisco">*</span></label>
                    <input type="text" id="cpf" name="cpf" required
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00"
                        title="formato esperado:000.000.000-00">

                    <label for="telefone">Telefone/Whatsapp<span class="asterisco">*</span></label>
                    <input type="tel" id="telefone" name="telefone" required
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        placeholder="(00) 00000-0000"
                        title="Formato esperado:(00) 000000000">

                    <label for="cep">CEP<span class="asterisco">*</span></label>
                    <input type="text" id="cep" name="cep" required
                        pattern="[0-9]{5}-[0-9]{3}"
                        placeholder="00000-000"
                        title="Formato esperado:0000000">

                    <label for="rua">Rua/Avenida<span class="asterisco">*</span></label>
                    <input type="text" id="rua" name="rua" required placeholder="Nome da rua ou avenida">

                    <label for="numero">Número<span class="asterisco">*</span></label>
                    <input type="text" name="numero" id="numero" required placeholder="Número da residência">

                    <label for="bairro">Bairro<span class="asterisco">*</span></label>
                    <input type="text" id="bairro" name="bairro" required placeholder="Nome do bairro">

                    <label for="complemento">Complemento</label>
                    <input type="text" name="complemento" id="complemento" placeholder="Apartamento, bloco, etc (opcional)">
                </fieldset>

                <fieldset>
                    <legend>Como você gostaria de ajudar?</legend>
                    <div class="radio-grupo">
                        <label>
                            <input type="radio" name="participacao" value="voluntario" required>
                            Quero ser voluntário(a)
                        </label>
                        <label>
                            <input type="radio" name="participacao" value="doador">
                            Quero ser doador(a)
                        </label>
                        <label>
                            <input type="radio" name="participacao" value="ambos">
                            Ambos
                        </label>
                    </div>
                </fieldset>

                <button type="submit">Enviar cadastro</button>
            </form>
        </div>
    `;
}