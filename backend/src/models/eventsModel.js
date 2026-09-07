import pool from '../config/db.js';
import { initialEvents } from '../data/seedData.js';

export const EventsModel = {
  async getAll() {
    if (!pool) return initialEvents;

    try {
      const [rows] = await pool.query(
        'SELECT id, tag, title, description, animation_delay AS delay FROM events ORDER BY display_order ASC'
      );
      return rows.length > 0 ? rows : initialEvents;
    } catch (err) {
      console.warn('DB query failed, using fallback events:', err.message);
      return initialEvents;
    }
  }
};
