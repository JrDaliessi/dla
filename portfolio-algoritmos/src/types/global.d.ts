declare global {
  interface Window {
    Prism: {
      highlightElement: (element: HTMLElement) => void;
      // Adicione outros métodos conforme necessário
    };
  }
}

export {}; 