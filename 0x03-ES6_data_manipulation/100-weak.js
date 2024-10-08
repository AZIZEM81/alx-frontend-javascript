export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  }

  const count = weakMap.get(endpoint);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  return count;
}
