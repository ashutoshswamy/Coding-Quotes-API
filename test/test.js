const axios = require("axios");

const url = "https://coding-quotes-api.devashu397.repl.co/";

axios
  .get(url)
  .then((res) => {
    console.log(res.data.quote);
    console.log(res.data.author);
  })
  .catch((err) => {
    console.log(err);
  });
