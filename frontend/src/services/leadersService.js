import { fetchApi } from './apiClient';
import { leadershipData } from '../data/leadershipData';

export async function getLeadership() {
  const remoteData = await fetchApi('/leaders');
  if (remoteData && remoteData.success && remoteData.data) {
    return {
      ...leadershipData,
      leaders: remoteData.data
    };
  }
  return leadershipData;
}
