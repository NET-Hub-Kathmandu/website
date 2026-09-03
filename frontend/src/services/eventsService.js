import { fetchApi } from './apiClient';
import { eventsData } from '../data/eventsData';

export async function getEvents() {
  const remoteData = await fetchApi('/events');
  if (remoteData && remoteData.success && remoteData.data) {
    return {
      ...eventsData,
      events: remoteData.data
    };
  }
  return eventsData;
}
