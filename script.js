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
                afirmativa: "A IA é útil,"
            },
            {
                texto: "Não",
                afirmativa: "A IA não é útil,"
            }
        ]
    },
    {
        enunciado: "Você a utiliza com frequência?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "utilizo com frequência,"
            },
            {
                texto: "Não",
                afirmativa: "não utilizo com frequência,"
            }
        ]
    },
    {
        enunciado: "Ela pode ser utilizada nos estudos?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "ela pode ser utilizada nos estudos."
            },
            {
                texto: "Não",
                afirmativa: "ela não pode ser utilizada nos estudos."
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
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();