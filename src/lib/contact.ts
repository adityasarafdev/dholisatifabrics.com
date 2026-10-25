// wa.me needs the full international number without "+", so India's 91 prefix is required.
export const whatsappNumber = "919661870000";

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
