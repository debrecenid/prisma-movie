import 'source-map-support/register';
import 'reflect-metadata';

// std
import * as http from 'http';

// 3p
import { Config, createApp, displayServerURL } from '@foal/core';

// App
import { AppController } from './app/app.controller';

// Apollo Server
import { getApolloMiddleware } from './apollo'

async function main() {
  const app = await createApp(AppController, { preMiddlewares: [getApolloMiddleware()] });

  const httpServer = http.createServer(app);
  const port = Config.get('port', 'number', 3001);
  httpServer.listen(port, () => displayServerURL(port));
}

main()
  .catch(err => { console.error(err.stack); process.exit(1); });
