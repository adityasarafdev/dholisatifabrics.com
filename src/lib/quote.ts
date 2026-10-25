export type QuoteProductOption = { slug: string; title: string };

export type QuoteRequest = {
  name: string;
  phone: string;
  productSlug: string;
  otherProduct?: string;
  email: string;
  message: string;
  sourcePath?: string;
  // Honeypot and timing fields used for spam checks.
  website?: string;
  elapsedMs?: number;
};

export const OTHER_PRODUCT_SLUG = "other";

export const fieldLimits = {
  name: 80,
  phone: 20,
  otherProduct: 160,
  email: 120,
  message: 1000,
  sourcePath: 200,
} as const;

// Accepts 10 digit Indian mobile numbers, with or without +91 / 0 prefix and spaces.
export function normalizeIndianPhone(input: string): string | null {
  let digits = input.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export function isValidEmail(input: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}
