import { Router } from 'express';
import { LeadersController } from '../controllers/leadersController.js';

const router = Router();

router.get('/', LeadersController.getLeaders);

export default router;
