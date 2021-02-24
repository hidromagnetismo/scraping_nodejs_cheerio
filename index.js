
const cheerio = require('cheerio');
const request = require('request-promise');

async function init() {
    const $ = await request({
        uri: 'http://quotes.toscrape.com/',
        transform: body => cheerio.load(body)
    });
    
    const quotes = $('.quote span.text').each((i,el) => {
        // console.log(i, $(el).text());
        const quote_text = $(el).text();
        const quote = quote_text.replace(/(^\“|\”$)/g, "");
        console.log(i, quote);
    });
}

init();
