const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const bory = document.querySelector("body");
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")
botaoAlterarTema.addEventListener("click", () => {
    bory.classList.add("modo-escuro")
    imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png")
});