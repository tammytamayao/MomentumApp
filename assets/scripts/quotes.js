const defaultQuotes = [
    {
        person: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken."
    },
    {
        person: "Mae West",
        quote: "You only live once, but if you do it right, once is enough."
    },
    {
        person: "Mahatma Gandhi",
        quote: "Be the change that you wish to see in the world."
    },
    {
        person: "Mark Twain",
        quote: "If you tell the truth, you don't have to remember anything."
    },
    {
        person: "Elbert Hubbard",
        quote: "A friend is someone who knows all about you and still loves you."
    },
    {
        person: "Oscar Wilde",
        quote: "To live is the rarest thing in the world. Most people exist, that is all."
    },
    {
        person: "Mahatma Gandhi",
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever."
    },
    {
        person: "Stephen Chbosky",
        quote: "We accept the love we think we deserve."
    },
    {
        person: "Friedrich Nietzsche",
        quote: "Without music, life would be a mistake."
    },
    {
        person: "Ralph Waldo Emerson",
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    }
];

class Quote {
    constructor(person, quote) {
        this.person = person;
        this.quote = quote;
    }
};

const localQuotesArray = JSON.parse(localStorage.getItem('quotes'));

if (!localQuotesArray) {
    localStorage.setItem('quotes', JSON.stringify(defaultQuotes))
}

function addQuote() {
    let quote = prompt("Enter a quote: ");
    let person = prompt("Enter the person that made that quote: ");

    if (quote && person) {
        const newQuote = new Quote(person, quote);
        localQuotesArray.push(newQuote);
        localStorage.setItem('quotes', JSON.stringify(localQuotesArray));
    }
}

function setRandomQuote() {
    const quotes = JSON.parse(localStorage.getItem('quotes'));
    const quoteSpan = document.querySelector(".random-quote");
    const quotePersonSpan = document.querySelector(".person");

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteSpan.textContent = `"${randomQuote.quote}"`;
    quotePersonSpan.textContent = `${randomQuote.person}`;
}

const quoteShuffle = document.querySelector("#quote-shuffle");
quoteShuffle.addEventListener("click", setRandomQuote);

setRandomQuote();
