const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas:["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas:["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas:["Alternativa 1","Alternativa 2"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
}
