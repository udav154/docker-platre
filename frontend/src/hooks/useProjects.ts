import { useQuery } from '@tanstack/react-query';
import { IProject } from '@/interfaces';
import { getApiBaseUrl } from '@/lib/api';

const API_URL = getApiBaseUrl();;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN!;

export async function fetchProjects(): Promise<IProject[]> {
  const res = await fetch(`${API_URL}/api/news?populate=images`, {
    headers: {
      authorization: `bearer ${API_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error('Ошибка загрузки проектов');
  }

  const json = await res.json();
  return json.data;
}

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
}
