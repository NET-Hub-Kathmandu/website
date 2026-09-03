import pool from '../config/db.js';
import { initialStats } from '../data/seedData.js';

export const StatsModel = {
  async getAll() {
    if (!pool) return initialStats;

    try {
      const [rows] = await pool.query(
        'SELECT id, target_number AS target, suffix, label, animation_delay AS delay FROM stats ORDER BY display_order ASC'
      );
      return rows.length > 0 ? rows : initialStats;
    } catch (err) {
      console.warn('DB query failed, using fallback stats:', err.message);
      return initialStats;
    }
  }
};
