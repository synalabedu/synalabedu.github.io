/**
 * Constantes globales del sitio Synalab.
 * Centralizadas para que cualquier cambio (correo, redes, navegación)
 * se haga en UN solo lugar y se propague a todo el sitio.
 */

export const SITE = {
  name: 'Synalab',
  descriptor: 'Educación Tecnológica Consciente',
  description:
    'Estudio independiente de creación de software funcional impulsado por inteligencia artificial. Desde la educación, para problemas reales.',
  url: 'https://synalabedu.github.io',
  email: 'synalabedu@outlook.com',
  location: 'Cali, Colombia',
  founder: 'Jader Castro',
  language: 'es',
} as const;

export const SOCIAL = {
  instagram: 'https://instagram.com/synalabedu',
  facebook: 'https://facebook.com/synalabedu',
  github: 'https://github.com/synalabedu',
} as const;

/**
 * Navegación principal del Header.
 * El logo siempre enlaza al inicio, así que no incluimos "Inicio" aquí.
 */
export const NAVIGATION = [
  { label: 'Laboratorio', href: '/laboratorio' },
  { label: 'Formación', href: '/formacion' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Bitácora', href: '/bitacora' },
  { label: 'Contacto', href: '/contacto' },
] as const;

/**
 * Enlaces secundarios del Footer, agrupados por categoría.
 */
export const FOOTER_LINKS = {
  estudio: [
    { label: 'Manifiesto', href: '/manifiesto' },
    { label: 'Estudio', href: '/estudio' },
  ],
  legal: [
    { label: 'Aviso legal', href: '/legal/aviso-legal' },
    { label: 'Política de privacidad', href: '/legal/privacidad' },
    { label: 'Términos de uso del sitio', href: '/legal/terminos-sitio' },
    { label: 'Términos de uso del software', href: '/legal/terminos-software' },
    { label: 'Licencias y derechos de uso', href: '/legal/licencias' },
  ],
} as const;