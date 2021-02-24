
const cheerio = require('cheerio');
const request = require('request-promise');

async function init() {
    const response = await request('http://quotes.toscrape.com/');
    console.log(response);
}

init();
