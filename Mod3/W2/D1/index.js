const axios = require('axios');
const cheerio = require('cheerio');
let $;
axios.get('https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States')
    .then((response) => {
        //handle the success condition of all the html on the page.
        $ = cheerio.load(response);
        console.log($);
    })
    .catch((error) => {
        //handle an error
        console.log(error);
    })
    .then(() => {
        //optional, but without a status to check this always happens
    });