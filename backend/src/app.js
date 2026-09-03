import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root welcome endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to .NET Hub Kathmandu API',
    endpoints: {
      health: '/api/health',
      stats: '/api/stats',
      events: '/api/events',
      leaders: '/api/leaders',
      techStack: '/api/tech-stack'
    }
  });
});

// Mount API routes
app.use('/api', routes);

// 404 & Error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
