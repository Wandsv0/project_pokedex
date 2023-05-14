const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const header = document.querySelector("header")
const imagemBotaoTrocaDeTema = document.querySelector(".botao_sol_lua")
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    body.classList.add("modo-escuro")
    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro")
        header.classList.remove("modo-escuro-header")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        body.classList.add("modo-escuro")
        header.classList.add("modo-escuro-header")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});