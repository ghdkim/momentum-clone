const quotes = [
  {
    quote: "You did not wake up to be mediocre.",
    author: "Robin Arzón",
  },
  {
    quote: "I am, I can, I will, I do.",
    author: "Christine D’Ercole",
  },
  {
    quote: "There’s no limit to what you can do.",
    author: "Adrian Williams",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote: "You can’t hate yourself into change. Love yourself into greatness.",
    author: "Emma Lovewell",
  },
  {
    quote: "We’re all about progress, not perfection.",
    author: "Selena Samuela",
  },
  {
    quote: "You are a rockstar. Treat yourself accordingly.",
    author: "Hannah Corbin",
  },
  {
    quote: "If it doesn’t challenge you, it doesn’t change you.",
    author: "Fred DeVito",
  },
  {
    quote: "Bring it. Build it. Become it.",
    author: "Sam Yo",
  },
  {
    quote:
      "Don’t be defined by other people’s expectations. Define your own strengths.",
    author: "Susie Chan",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
