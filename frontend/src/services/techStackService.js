import { fetchApi } from './apiClient';
import { techStackData } from '../data/techStackData';

export async function getTechStack() {
  const remoteData = await fetchApi('/tech-stack');
  if (remoteData && remoteData.success && remoteData.data) {
    return {
      ...techStackData,
      items: remoteData.data
    };
  }
  return techStackData;
}
