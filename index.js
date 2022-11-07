const frases = [
    'Não desanime, as piores coisas da vida ainda estão chegando por aí!', 
    'Nunca é tarde demais para errar mais uma vez!', 
    'A vida é realmente muito mais difícil para quem é um completo idiota.', 
    'Pare de tratar como lição mais uma das suas falhas', 
    'Mais um dia que se inicia e novas oportunidades para errar surgem com esse novo amanhecer!', 
    'Pare e pense: todas as suas falhas tem o mesmo causador em comum: Você!',
    'Não se preocupe se você perder, nós não esperávamos mais de você!',
    'Mais um dia que se inicia e novas oportunidades para errar surgem com esse novo amanhecer!',
    'A Inabilidade de um Time, tem um impacto muito maior que a soma das inabilidades individuais de seus componentes!',
    'Uma coisa é certa: sem luta não há derrota!',
    'Nenhum obstáculo é grande demais para quem desiste!',
    'Não sabendo que era impossível, foi lá e descobriu!'
    ];

const autores = [
    'Albert Einstein',
    'Clarice Lispector',
    'Nicola Tesla',
    'Fernando Henrique Cardoso',
    'Tio Bastiao',
    'Padre Miguel'
]

const quote = document.querySelector(".quote");
const button = document.querySelector("button");
const author = document.querySelector(".name");

function returnRandom (array) {
    let frasesIndice = array.length;
    let randomNumber = Math.floor(Math.random() * frasesIndice);
    return array[randomNumber];
}

function printQuote () {
    quote.innerHTML = returnRandom(frases);
    author.innerHTML = returnRandom(autores);
};

button.addEventListener("click", printQuote);

