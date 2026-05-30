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
    tagline: 'Cada herramienta se entrega lista para funcionar en contexto real.',
    description:
      'Instalación, configuración y acompañamiento técnico bajo el protocolo de seguridad Synalab.',
    href: '/laboratorio',
    cta: 'Explorar el laboratorio',
  },
  {
    id: 'desarrollo-medida',
    name: 'Desarrollo a medida',
    tagline: '¿Existe un problema real que merezca su propia herramienta?',
    description:
      'Diseñamos y construimos software específico para cada contexto, con criterio contextual, protocolo de seguridad y acuerdos de servicio documentados.',
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