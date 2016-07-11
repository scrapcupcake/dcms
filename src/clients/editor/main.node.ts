// the polyfills must be the first thing imported in node.js
// import 'angular2-universal/polyfills'; // polyfills are moved to server.ts
import { bootstrap } from "../bootstrap.node";

// Application
import {App} from './app.component';
import routes from './routes';

function middleware(req, res) {
  res.render("editor", this(req.originalUrl));
}

function makeMiddleWare(){
  var config = bootstrap(App, [], routes);
  return middleware.bind(config);
}

export default makeMiddleWare;