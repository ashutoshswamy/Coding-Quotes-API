# Coding Quotes API

This is an API which returns coding quotes from different authors

**API Endpoint** - *https://coding-quotes-api.ashutoshswamy397.repl.co/*

# Example

```js
const axios = require("axios");

const url = "https://coding-quotes-api.ashutoshswamy397.repl.co/";

axios
  .get(url)
  .then((res) => {
    console.log(res.data.quote);
    console.log(res.data.author);
  })
  .catch((err) => {
    console.log(err);
  });

//returns with a coding quote
//and returns author of that quote
```
