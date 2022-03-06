const quotes = [
  {
    quote:
      "You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future",
    author: "Steve Jobs",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    author: "James Cameron",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant",
    author: "Robert Louis Stevenson",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light",
    author: "Aristotle",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up",
    author: "Thomas A. Edison",
  },
  {
    quote: "Life is ours to be spent, not to be saved",
    author: "D. H. Lawrence",
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well",
    author: "John D. Rockefeller Jr.",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` | By ${todaysQuote.author}`;
