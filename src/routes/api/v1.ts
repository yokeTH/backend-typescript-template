import HealthController from '@controllers/health.controller';
import Route from '@interfaces/route.interface';
import { Router } from 'express';

class V1Route implements Route {
  public path = '/v1';
  public router = Router();

  private healthController = new HealthController();

  constructor() {
    this.initiateRoutes();
  }

  private initiateRoutes() {
    this.router.get(`${this.path}/health`, this.healthController.health);
  }
}

export default V1Route;
