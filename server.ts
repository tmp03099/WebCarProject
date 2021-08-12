import 'zone.js/node';

import * as express from 'express';
import { join } from 'path';
import { existsSync } from 'fs';

export function app() {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  server.engine('html', ngExpressEngine())

  return server;
}
