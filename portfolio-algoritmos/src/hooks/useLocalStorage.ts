import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Estado para armazenar nosso valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Obter do localStorage pelo key
      const item = window.localStorage.getItem(key);
      // Analisar JSON armazenado ou, se não existir, retornar initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Se ocorrer um erro, retornar initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Função para atualizar o valor no localStorage
  const setValue = (value: T) => {
    try {
      // Permitir que value seja uma função para que tenhamos a mesma API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Salvar state
      setStoredValue(valueToStore);
      // Salvar no localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Atualizar o localStorage se a chave mudar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [key]);

  return [storedValue, setValue];
} 