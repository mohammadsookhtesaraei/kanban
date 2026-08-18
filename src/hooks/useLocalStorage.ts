import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);

    // اگر کلید وجود نداشت یا مقدار نامعتبر بود
    if (saved === null || saved === 'undefined' || !saved.trim()) {
      return initialValue;
    }
    // جلوی کرش برنامه رو بگیره
    try {
      return JSON.parse(saved) as T;
    } catch {
      console.error(`Failed to parse localStorage value for key "${key}"`);

      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
