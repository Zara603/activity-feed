import 'ignore-styles';
import express from "express";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/src/App';
import path from 'path';

import cors from "cors";
const app = express();
const port = 3300;

import fs from "fs";

function readJsonFileSync(filepath, encoding = "utf8") {
  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

function getData(file) {
  var filepath = __dirname + "/" + file;
  return readJsonFileSync(filepath);
}


const data = getData("activities.json");

const router = express.Router();
// root (/) should always serve our server rendered page
router.use('^/$', (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', 'client', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(React.createElement(App));

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
});

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'client', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
app.use(router);

app.use(cors());

app.get("/data", (req, res) => res.send(data));



app.listen(port, () => console.log(`listen on  ${port}!`));