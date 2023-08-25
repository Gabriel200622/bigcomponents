export function randomId() {
  return `bigcomponents-${Math.random().toString(36).slice(2, 11)}`;
}
