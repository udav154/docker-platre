import { IProject } from '@/interfaces';

/**
 * Возвращает корректный baseUrl в зависимости от среды (сервер/клиент)
 */
export function getApiBaseUrl() {
  const isServer = typeof window === 'undefined';

  const clientUrl = process.env.NEXT_PUBLIC_CLIENT_API_URL;;
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_API_URL;

  if (isServer) {
    if (!serverUrl) throw new Error('❌ STRAPI_API_URL_SERVER is not defined in .env');
    return serverUrl;
  } else {
    if (!clientUrl) throw new Error('❌ NEXT_PUBLIC_STRAPI_API_URL is not defined in .env');
    return clientUrl;
  }
}

/**
 * Получение списка проектов с populate=images
 */
export async function getProjects(): Promise<IProject[]> {
  const baseUrl = getApiBaseUrl();
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!token) throw new Error('❌ STRAPI_API_TOKEN is not defined in .env');

  const url = `${baseUrl}/api/news?populate=images`;

  if (typeof window === 'undefined') {
    console.log('[server] Fetching projects from:', url);
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('[getProjects] Fetch failed:', res.status, res.statusText);
    throw new Error(`❌ Ошибка загрузки проектов: ${res.status}`);
  }

  const json = await res.json();
  return json.data;
}


export async function getProject(id: string): Promise<IProject> {
  const baseUrl = getApiBaseUrl();
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!token) throw new Error('❌ STRAPI_API_TOKEN is not defined in .env');

  const url = `${baseUrl}/api/news/${id}?populate=images`;

  if (typeof window === 'undefined') {
    console.log('[server] Fetching projects from:', url);
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch project ${id}: ${res.status}`);
  }

  const json = await res.json();
  return json.data;
}