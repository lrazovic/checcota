import type { Handle } from '@sveltejs/kit';

// Preload fonts (adjust matcher to your font path/filenames)
export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event, {
    preload: ({ type, path }) => {
      if (type === 'font' || path.endsWith('.woff2')) return true;
      return false;
    }
  });
};
