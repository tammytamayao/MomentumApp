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
        person = (person !== "") ? person : "Unknown";
        this.person = person;
        this.quote = quote;
    }
};

function getLocalQuotes() {
    if (JSON.parse(localStorage.getItem('quotes')) === null) {
        localStorage.setItem('quotes', JSON.stringify(defaultQuotes));
    }

    return JSON.parse(localStorage.getItem('quotes'));
}

function setRandomQuote() {
    const quotes = getLocalQuotes();
    const quoteSpan = document.querySelector(".random-quote");
    const quotePersonSpan = document.querySelector(".person");

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteSpan.textContent = `"${randomQuote.quote}"`;
    quotePersonSpan.textContent = `${randomQuote.person}`;
}

function showQuoteList() {
    const quoteList = document.querySelector(".quote-list");
    const localQuotesArray = getLocalQuotes();
    for(let i = 0; i < localQuotesArray.length; i++) {
        quoteItem = document.createElement("li");
        quoteItem.classList.add("quote-item");
    
        quoteBody = document.createElement("span");
        quoteBody.classList.add("quote-body");
        quoteBody.textContent = `"${localQuotesArray[i].quote}"`;
    
        quotePerson = document.createElement("span");
        quotePerson.classList.add("quote-person");
        quotePerson.textContent = `${localQuotesArray[i].person}`;
    
        quoteItem.appendChild(quoteBody);
        quoteItem.appendChild(quotePerson);
        quoteList.appendChild(quoteItem);
    }
}


function addQuote() {
    let newQuote = document.querySelector("#new-quote").value;
    let newPerson = document.querySelector("#new-person-quote").value;
    const localQuotesArray = getLocalQuotes();

    if (newQuote) {
        const addedQuote = new Quote(newPerson, newQuote);
        localQuotesArray.push(addedQuote);
        localStorage.setItem('quotes', JSON.stringify(localQuotesArray));
        showQuoteList();
        toggleAddQuotePopup();
    }
}

function toggleAddQuotePopup() {
    const addQuotePopup = document.querySelector("#add-quote-popup");
    const overlay = document.querySelector(".overlay");
    addQuotePopup.classList.toggle("hide");
    overlay.classList.toggle("hide");
}

const quoteShuffle = document.querySelector("#quote-shuffle");
quoteShuffle.addEventListener("click", setRandomQuote);

const closeQuoteBtn = document.querySelector("#add-quote-close");
const addQuoteBtn = document.querySelector("#add-quote");
closeQuoteBtn.addEventListener("click", toggleAddQuotePopup);
addQuoteBtn.addEventListener("click", toggleAddQuotePopup);

setRandomQuote();
showQuoteList();