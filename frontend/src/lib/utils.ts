import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getMediaUrl(path: string | null | undefined): string {
  if (!path) return '';
  const base = process.env.NEXT_PUBLIC_CLIENT_API_URL || '';
  return path.startsWith('/') ? `${base}${path}` : path;
}