const quotes = [
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

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)].quote;

const quoteDiv = document.querySelector(".random-quote");
quoteDiv.textContent = `"${randomQuote}"`;
