import { fetchApi } from './apiClient';
import { statsData } from '../data/statsData';

export async function getStats() {
  const remoteData = await fetchApi('/stats');
  if (remoteData && remoteData.success && remoteData.data) {
    return remoteData.data;
  }
  return statsData;
}
