/**
 * Catálogo de proyectos del Laboratorio Synalab.
 * Fuente: Documento Maestro v7.0 · Sección 4.1
 */

export type ProjectStatus = 'completo' | 'desarrollo' | 'revision';

export interface Project {
  slug: string;
  name: string;
  version?: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  featured: boolean;
  order: number;
}

export const PROJECTS: Project[] = [
  {
    slug: 'ordena-tu-dia',
    name: 'Ordena tu Día',
    version: 'v7',
    status: 'completo',
    tagline: 'Secuencias visuales con pictogramas para autonomía.',
    description:
      'Herramienta de secuencias visuales con pictogramas para estudiantes con TEA nivel 3. Compatible con SCORM para Moodle.',
    featured: true,
    order: 1,
  },
  {
    slug: 'neuro-arena',
    name: 'Neuro Arena',
    version: 'v2',
    status: 'completo',
    tagline: 'Plataforma de estimulación cognitiva para el aula.',
    description:
      'Seis módulos, 480 niveles. Diseñada para diversidad cognitiva en el aula.',
    featured: true,
    order: 2,
  },
  {
    slug: 'pseudocode-quest',
    name: 'PseudoCode Quest',
    status: 'completo',
    tagline: 'Aprende pseudocódigo y diagramas de flujo jugando.',
    description:
      'Herramienta interactiva para el aprendizaje de diagramas de flujo y pseudocódigo. 38 niveles. Compatible con SCORM.',
    featured: true,
    order: 3,
  },
  {
    slug: 'galaxia-de-bloques',
    name: 'Galaxia de Bloques',
    status: 'desarrollo',
    tagline: 'Programación sin código para diversidad cognitiva.',
    description:
      'Plataforma de introducción a la programación sin código para diversidad cognitiva. Siete módulos, 280 niveles.',
    featured: false,
    order: 4,
  },
  {
    slug: 'sigma',
    name: 'SIGMA',
    status: 'desarrollo',
    tagline: 'Sistema de gestión para semilleros de investigación.',
    description:
      'Sistema de gestión para semilleros de investigación estudiantil. Arquitectura replicable a cualquier colectivo con necesidades equivalentes de administración.',
    featured: false,
    order: 5,
  },
  {
    slug: 'doc-forge',
    name: 'Doc Forge',
    status: 'revision',
    tagline: 'Generación de documentos como aplicación web progresiva.',
    description:
      'Aplicación web progresiva para generación de documentos. En proceso de revisión de seguridad antes de su publicación.',
    featured: false,
    order: 6,
  },
];

/**
 * Devuelve los proyectos destacados para la página de Inicio,
 * ordenados según el campo `order`.
 */
export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

/**
 * Devuelve todos los proyectos ordenados.
 */
export function getAllProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => a.order - b.order);
}

/**
 * Busca un proyecto por su slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}