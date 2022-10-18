const frases = [
    'Não desanime, as piores coisas da vida ainda estão chegando por aí!', 
    'Nunca é tarde demais para errar mais uma vez!', 
    'A vida é realmente muito mais difícil para quem é um completo idiota.', 
    'Pare de tratar como lição mais uma das suas falhas', 
    'Mais um dia que se inicia e novas oportunidades para errar surgem com esse novo amanhecer!', 
    'Pare e pense: todas as suas falhas tem o mesmo causador em comum: Você!'];

const autores = [
    'Albert Einstein',
    'Cora Coralina',
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

