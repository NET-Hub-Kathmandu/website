/**
 * Base API Client configured for future Node.js / Express backend
 * Easily toggleable via environment variables (e.g. VITE_API_URL)
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export async function fetchApi(endpoint, options = {}) {
  if (!API_BASE_URL) {
    // Backend not yet connected; signals services to use dynamic local data
    return null;
  }

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.warn(`Fallback to local data due to API error:`, err.message);
    return null;
  }
}
