import { Router } from 'express';
import { HealthyController } from 'interfaces/controllers/healthy.controller';
const indRoutes = new HealthyController();

const router = Router();
router.get('/readiness', indRoutes.readiness);
router.get('/healthy', indRoutes.health);
router.get('/', indRoutes.get);

export { router };
