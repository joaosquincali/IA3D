const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "A Inteligência Artificial é útil?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    },
    {
        enunciado: "Você a utiliza com frequência?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    },
    {
        enunciado: "Ela pode ser utilizada nos estudos?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    }
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
        }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmativa;
    respostas += afirmacoes;
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();