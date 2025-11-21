import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge class names.
 * Uses clsx to handle conditional classes and array inputs.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

