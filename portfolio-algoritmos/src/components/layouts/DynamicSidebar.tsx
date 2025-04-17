import dynamic from 'next/dynamic';

// Importa o Sidebar dinamicamente com SSR desabilitado
const DynamicSidebar = dynamic(
  () => import('./Sidebar'),
  { ssr: false }
);

export default DynamicSidebar; 