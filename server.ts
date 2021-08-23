import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as nodemailer from 'nodemailer';

const bodyParser = require('body-parser');

const domino = require("domino");
const fs = require("fs");
const path = require("path");
const templateA = fs
  .readFileSync(path.join("dist/WebCarProject/browser", "index.html"))
  .toString();
const win = domino.createWindow(templateA);

win.Object = Object;
win.Math = Math;

global["window"] = win;
global["Event"] = win.Event;
global["document"] = win.document;

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/WebCarProject/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.use(bodyParser.urlencoded({extended: true}));
  server.use(bodyParser.json());
  server.post('/api/email', async (req, res) => {
    console.log(req.body);

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'toyotaangiang.pt', // generated ethereal user
        pass: 'Tien@231093' // generated ethereal password
      },
    });

    var mailOptions = {
      from: 'toyotaangiang.pt@gmail.com',
      to: 'toyotaangiang.pt@gmail.com',
      subject: req.body.subject,
      text: req.body.text
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.send('');
  });

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  server.get('/api/**', (req, res) => {
    console.log("get");
    res.status(404).send('data requests are not yet supported');
  });

  // Serve static files from /browser123
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
