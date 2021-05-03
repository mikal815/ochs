const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const puppeteer = require('puppeteer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


async function scrapeIt(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="outer_table"]/tbody/tr[3]/td[2]/table/tbody/tr[6]/td');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log({ rawTxt });
}

scrapeIt('https://www.capeatlanticleague.org/g5-bin/client.cgi?cwellOnly=1&G5statusflag=view&schoolname=&school_id=15&G5button=13&G5genie=344&vw_schoolyear=1&vw_agl=15-1-17,&manual_access=1');



// if (apps.env.NODE_ENV === "production") {

app.use(express.static('client/public'));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client'))
// });

// }



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})

