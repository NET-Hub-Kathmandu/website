import { StatsModel } from '../models/statsModel.js';

export const StatsController = {
  async getStats(req, res, next) {
    try {
      const data = await StatsModel.getAll();
      return res.json({
        success: true,
        data
      });
    } catch (err) {
      next(err);
    }
  }
};
