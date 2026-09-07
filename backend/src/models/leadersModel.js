import pool from '../config/db.js';
import { initialLeaders } from '../data/seedData.js';

export const LeadersModel = {
  async getAll() {
    if (!pool) return initialLeaders;

    try {
      const [rows] = await pool.query(
        'SELECT id, name, role, bio, avatar_text AS avatarText, linkedin_url AS linkedin, animation_delay AS delay FROM leaders ORDER BY display_order ASC'
      );
      return rows.length > 0 ? rows : initialLeaders;
    } catch (err) {
      console.warn('DB query failed, using fallback leaders:', err.message);
      return initialLeaders;
    }
  }
};
