const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const quotes = [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "Java is to JavaScript what car is to Carpet.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    "Ruby is rubbish! PHP is phpantastic!",
    "Code is like humor. When you have to explain it, it's bad.",
    "Fix the cause, not the symptom.",
    "Optimism is an occupational hazard of programming: feedback is the treatment.",
    "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
    "Simplicity is the soul of efficiency.",
    "Before software can be reusable it first has to be usable.",
  ];

  const authors = [
    "Martin Fowler",
    "John Johnson",
    "Oscar Wilde",
    "Chris Heilmann",
    "Dan Salomon",
    "Nikita Popov",
    "Cory House",
    "Steve Maguire",
    "Kent Beck",
    "Martin Fowler",
    "Austin Freeman",
    "Ralph Johnson",
  ];

  const random = Math.floor(Math.random() * 12);

  res.send({
    quote: `${quotes[random]}`,
    author: `${authors[random]}`,
    status: 200,
  });
});

app.listen(3000, () => {
  console.log("Listening to http://localhost:3000");
});
