export function humanize(val: string) {
  return val
    .replace(/_|-/g, ' ')
    .trim()
    .replace(/\b[A-Z][a-z]+\b/g, (word) => word.toLowerCase())
    .replace(/^[a-z]/g, (first) => first.toUpperCase());
}
