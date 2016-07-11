// the polyfills must be the first thing imported in node.js
import 'angular2-universal/polyfills';

//Express imports
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { expressEngine } from 'angular2-universal';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', expressEngine);
app.set('views', path.resolve(__dirname) );
app.set('view engine', 'html');

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use('/frontend', express.static(path.join(ROOT, 'frontend'), {index: false}));
app.use('/editor',express.static(path.join(ROOT, 'editor'), {index: false}));

import { getPageData } from './api';
// Our API for demos only
app.get('/data.json', getPageData);

import frontEnd from '../clients/frontEnd/main.node';
import editor from '../clients/editor/main.node';
// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/editor*', editor());
app.get('/*', frontEnd());

app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

// Server
app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});
