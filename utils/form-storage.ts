export function loadFormData<T>(key: string): T {
  const savedData = localStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : ({} as T);
}

export function saveFormData(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function clearFormData(key: string) {
  localStorage.removeItem(key);
}
