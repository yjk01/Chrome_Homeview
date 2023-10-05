const quotes = [
{
    quote: "If it is late, it is too late1",
    author: "YJ1"
},
{
    quote: "If it is late, it is too late2",
    author: "YJ2"
},
{
    quote: "If it is late, it is too late3",
    author: "YJ3"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
