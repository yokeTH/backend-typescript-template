import Route from '@/interfaces/route.interface';
import { Router } from 'express';
import V1Route from './api/v1';

class ApiRoute implements Route {
  public path = '/api';
  public router = Router();

  private v1 = new V1Route();

  constructor() {
    this.initiateRoutes();
  }

  private initiateRoutes() {
    this.router.use(`${this.path}/`, this.v1.router);
  }
}

export default ApiRoute;
