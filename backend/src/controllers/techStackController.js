import { TechStackModel } from '../models/techStackModel.js';

export const TechStackController = {
  async getTechStack(req, res, next) {
    try {
      const data = await TechStackModel.getAll();
      return res.json({
        success: true,
        data
      });
    } catch (err) {
      next(err);
    }
  }
};
