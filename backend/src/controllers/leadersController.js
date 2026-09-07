import { LeadersModel } from '../models/leadersModel.js';

export const LeadersController = {
  async getLeaders(req, res, next) {
    try {
      const data = await LeadersModel.getAll();
      return res.json({
        success: true,
        data
      });
    } catch (err) {
      next(err);
    }
  }
};
