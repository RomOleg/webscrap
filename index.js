const axios = require('axios');
const cheerio = require('cheerio');
const { data } = require('cheerio/lib/api/attributes');

const url = "https://news.ycombinator.com/";
// отправляем запрос на url
axios.get(url)
    // получаем данные
    .then(res => {

        let getData = html => {
            let data = []
            // альтернатива jquery
            const $ = cheerio.load(html)
            // отбор заголовка и ссылки на статью
            $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
                data.push({
                    title: $(elem).text(),
                    link: $(elem).find('a.storylink').attr('href')
                })
            })
            console.log(data);
        }
        getData(res.data)

    })
    .catch(error => {
        console.log(error);
    })