import pool from '../config/db.js';
import { initialTechStack } from '../data/seedData.js';

export const TechStackModel = {
  async getAll() {
    if (!pool) return initialTechStack;

    try {
      const [rows] = await pool.query(
        'SELECT id, title, description, animation_delay AS delay FROM tech_stack ORDER BY display_order ASC'
      );
      return rows.length > 0 ? rows : initialTechStack;
    } catch (err) {
      console.warn('DB query failed, using fallback tech stack:', err.message);
      return initialTechStack;
    }
  }
};
