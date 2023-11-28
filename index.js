var setaesquerda = window.document.getElementById ("seta-esquerda")
var LEONARDO = window.document.getelementbyid ("leonardo")
var SAMANTHA = window.document.getElementById ("samantha")
var BRUNA = window.document.getElementById ("bruna")
var setadireita = window.document.getElementById ("seta-direita")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaesquerda.style ="display:flex"
    setadireita.style ="display:none"
}

function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaesquerda.style ="display:none"
    setadireita.style ="display:flex"
}