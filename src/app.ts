import type Route from '@interfaces/route.interface';
import { errorMiddleware } from '@middlewares/error.middleware';
import express, { type Application } from 'express';

class App {
  app: Application;
  port: number = Number(process.env.APP_PORT) || 9000;
  constructor(routes: Route[]) {
    this.app = express();
    this.initiateMiddlewares();
    this.initiateRoutes(routes);
    this.initiateErrorHandler();
  }

  private initiateMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initiateRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }

  private initiateErrorHandler() {
    this.app.use(errorMiddleware);
  }

  public listen() {
    this.app.listen(this.port, () => {
      // logger.info(`=================================`);
      // logger.info(`App listening on the port ${this.port}`);
      // logger.info(`=================================`);
    });
  }
}

export default App;
