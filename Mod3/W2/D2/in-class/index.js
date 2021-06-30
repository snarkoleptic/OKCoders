const axios = require("axios")
const cheerio = require("cheerio")

var urlScrape = "https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States"


axios.get(urlScrape)
    .then(response => {
        const $ = cheerio.load(response.data)
        var presTable = $('table[class=wikitable] tr');
        
    })
    .catch(error => {
        console.log(error)
    })
