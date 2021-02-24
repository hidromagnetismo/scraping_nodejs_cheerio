
const cheerio = require('cheerio');
const request = require('request-promise');

async function init() {
    const $ = await request({
        uri: 'http://quotes.toscrape.com/',
        transform: body => cheerio.load(body)
    });
    
    const webSiteTitle = $('title');
    console.log(webSiteTitle.html());
}

init();
