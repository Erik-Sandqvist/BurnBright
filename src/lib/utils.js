import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const displayFontStyle = {
  fontFamily: '"above-the-sky-condensed","Adore You","Geist Variable",sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
}

export const headingFontStyle = {
  fontFamily: '"Bahnschrift","Segoe UI","Inter","Geist Variable",sans-serif',
  fontWeight: 600,
}
