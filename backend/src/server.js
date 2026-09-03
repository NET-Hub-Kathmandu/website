import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
  ┌────────────────────────────────────────────────┐
  │   .NET Hub Kathmandu — Backend API             │
  │   Running at: http://localhost:${PORT}           │
  │   Press Ctrl+C to stop                         │
  └────────────────────────────────────────────────┘
  `);
});
