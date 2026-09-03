import { Router } from 'express';
import { TechStackController } from '../controllers/techStackController.js';

const router = Router();

router.get('/', TechStackController.getTechStack);

export default router;
