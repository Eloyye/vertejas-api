export function uniformSample<T>(collections: T[]): T | null {
  return collections.length > 0
    ? collections[Math.floor(Math.random() * collections.length)]!
    : null;
}
