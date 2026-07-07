
const quotes = [
   "Always forgive your enemies; nothing annoys them so much.",
   "In three words I can sum up everything I've learned about life: it goes on.",
    "Two things are infinite: the universe and human stupidity.",
    "A friend is someone who knows all about you and still loves you.",
    "Insanity is doing the same thing, over and over again.",
    "You only live once, but if you do it right, once is enough.",
    "I'm selfish, impatient and a little insecure. I make mistakes.",
    "So many books, so little time.",
    "Be the change that you wish to see in the world.",
    "A room without books is like a body without a soul.",
    "Be yourself; everyone else is already taken.",
    "We accept the love we think we deserve."

];

const secondLines = [
    "— Oscar Wilde.",
    "— Robert Frost.",
    "— Albert Einstein",
    "— Elbert Hubbard.",
    "— Narcotics Anonymous",
    "— Mae West",
    "— Marilyn Monroe.",
    "— Frank Zappa",
    "— Frank Zappa",
    "— Marcus Tullius Cicero.",
    "— Oscar Wilde.",
    "— Stephen Chbosky."
];


function showText() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("demo").innerHTML = quotes[randomIndex];
    document.getElementById("demo2").innerHTML = secondLines[randomIndex];
}
