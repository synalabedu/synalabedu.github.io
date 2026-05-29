/**
 * Catálogo de servicios principales de Synalab.
 * Fuente: Documento Maestro v7.0 · Sección 3.4 y 6
 */

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
}

export const SERVICES: Service[] = [
  {
    id: 'formacion',
    name: 'Formación y tutorías',
    tagline: 'Aprende tecnología y construcción de software con criterio.',
    description:
      'Tutorías individuales, programas intensivos y talleres grupales en pensamiento computacional, programación práctica, construcción de software con IA y tecnología inclusiva.',
    href: '/formacion',
    cta: 'Ver pilares de formación',
  },
  {
    id: 'implementacion',
    name: 'Implementación acompañada',
    tagline: 'No te entregamos código, te entregamos una solución funcional.',
    description:
      'Cada herramienta se entrega con instalación, configuración y capacitación. Software listo para usar bajo el protocolo de seguridad Synalab.',
    href: '/laboratorio',
    cta: 'Explorar el laboratorio',
  },
  {
    id: 'desarrollo-medida',
    name: 'Desarrollo a medida',
    tagline: '¿Tienes un problema real que merezca su propia herramienta?',
    description:
      'Diseñamos y construimos software específico para tu contexto, con criterio pedagógico, protocolo de seguridad y acuerdo de servicio documentado.',
    href: '/contacto',
    cta: 'Solicitar cotización',
  },
];

/**
 * Devuelve todos los servicios principales en orden de declaración.
 */
export function getAllServices(): Service[] {
  return SERVICES;
}