import { Router } from 'express';
import { EventsController } from '../controllers/eventsController.js';

const router = Router();

router.get('/', EventsController.getEvents);

export default router;
