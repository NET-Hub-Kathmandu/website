import { EventsModel } from '../models/eventsModel.js';

export const EventsController = {
  async getEvents(req, res, next) {
    try {
      const data = await EventsModel.getAll();
      return res.json({
        success: true,
        data
      });
    } catch (err) {
      next(err);
    }
  }
};
