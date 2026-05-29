/**
 * Catálogo de miembros del estudio Synalab.
 * Para añadir un miembro nuevo: agrega un objeto al array TEAM siguiendo
 * la misma estructura. Aparecerá automáticamente en la página /estudio.
 */

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  bio: string;
  longBio: string[];
  specialties: string[];
  motivation?: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  isFounder?: boolean;
  order: number;
}

export const TEAM: TeamMember[] = [
  {
    slug: 'jader-castro',
    name: 'Jader Castro',
    role: 'Fundador, desarrollador y formador',
    initials: 'JC',
    photo: '/team/jader.jpg',
    bio: 'Educador con enfoque en inclusión, docente de tecnología con más de siete años de experiencia y creador de software y herramientas impulsadas por inteligencia artificial. Desde el aula comprendo las necesidades; desde el laboratorio diseño soluciones con impacto real y propósito.',
    longBio: [
      'Mi camino nace y continúa en el aula. Trabajo diariamente con estudiantes con diversidad cognitiva, y esa experiencia me ha permitido comprender que la tecnología, por sí sola, no basta: se requiere criterio pedagógico para que una herramienta aporte valor real y trascienda la simple novedad.',
      'Esa experiencia me impulsó a construir herramientas para resolver necesidades que las plataformas existentes no cubrían. Algunos proyectos nacen en contextos de inclusión y diversidad cognitiva; otros, de desafíos institucionales, académicos u organizacionales que requieren soluciones claras y funcionales. Con el tiempo, el enfoque dejó de limitarse al aula y se convirtió en una forma de crear software útil para cualquier entorno donde exista un problema real por resolver.',
      'La inteligencia artificial cambió la escala de lo que una sola persona puede crear. Lo que antes requería equipos completos, hoy puede construirse con criterio, visión y propósito claros. Esa es la oportunidad que impulsa Synalab: desarrollar tecnología con impacto real, pensamiento pedagógico y soluciones aplicables más allá de un único contexto.',
    ],
    motivation: 'Quiero que la tecnología llegue a quien la necesita con la calidad que merece. Sin pretensiones, sin humo, sin dependencias innecesarias. Software que se instala, funciona y respeta a quien lo usa.',
    specialties: [
      'Educación inclusiva',
      'Construcción de software con IA',
      'Pensamiento computacional',
      'Tecnología educativa',
      'Desarrollo web',
      'Diseño de herramientas accesibles',
    ],
    socials: {
      github: 'https://github.com/synalabedu',
      email: 'synalabedu@outlook.com',
    },
    isFounder: true,
    order: 1,
  },
];

export function getTeamMembers(): TeamMember[] {
  return [...TEAM].sort((a, b) => a.order - b.order);
}

export function getFounder(): TeamMember | undefined {
  return TEAM.find((m) => m.isFounder);
}

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return TEAM.find((m) => m.slug === slug);
}