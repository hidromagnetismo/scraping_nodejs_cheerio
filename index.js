
const cheerio = require('cheerio');
const request = require('request-promise');

async function init() {
    const $ = await request({
        uri: 'http://quotes.toscrape.com/',
        transform: body => cheerio.load(body)
    });
    
    $('.quote').each((i, el) => {
        const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g, "");
        const author = $(el).find('span small.author').text();
        const tags = [];
        $(el).find('.tags a.tag').each((i, el) => tags.push($(el).text()));
        console.log(tags.join(','));
    });
}

init();
