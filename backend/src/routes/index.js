import { Router } from 'express';
import statsRoutes from './statsRoutes.js';
import eventsRoutes from './eventsRoutes.js';
import leadersRoutes from './leadersRoutes.js';
import techStackRoutes from './techStackRoutes.js';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

router.use('/stats', statsRoutes);
router.use('/events', eventsRoutes);
router.use('/leaders', leadersRoutes);
router.use('/tech-stack', techStackRoutes);

export default router;
