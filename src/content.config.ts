import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección: PROYECTOS DEL LABORATORIO
 * Fuente: Documento Maestro v7.0 · Sección 4
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    version: z.string().optional(),
    status: z.enum(['completo', 'desarrollo', 'revision']),
    category: z.enum(['educacion', 'gestion', 'productividad']).default('educacion'),
    tagline: z.string(),
    description: z.string(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    techStack: z.array(z.string()).optional(),
    requirements: z.string().optional(),
    targetAudience: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    downloadUrl: z.string().optional(),
    documentationUrl: z.string().optional(),
    scormCompatible: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    publishedAt: z.date().optional(),
  }),
});

/**
 * Colección: EQUIPO DEL ESTUDIO
 */
const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    initials: z.string(),
    photo: z.string().optional(),
    bio: z.string(),
    longBio: z.array(z.string()),
    motivation: z.string().optional(),
    specialties: z.array(z.string()),
    socials: z.object({
      linkedin: z.string().optional(),
      github: z.string().optional(),
      email: z.string().email().optional(),
    }),
    isFounder: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

/**
 * Colección: SERVICIOS PRINCIPALES
 */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    href: z.string(),
    cta: z.string(),
    order: z.number().default(99),
  }),
});

/**
 * Colección: TEXTOS EDITABLES DE PÁGINAS ESTÁTICAS
 * Cada archivo representa los textos del hero/descripción de una página.
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    heroEyebrow: z.string().optional(),
    heroTitle: z.string(),
    heroDescription: z.string(),
    seoDescription: z.string().optional(),
  }),
});

/**
 * Colección: PILARES FORMATIVOS
 * Cuatro áreas formativas de Synalab. Cada una puede tener varias modalidades.
 */
const pillars = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pillars' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    modalities: z.array(z.object({
      type: z.enum(['tutoria', 'intensivo', 'taller']),
      name: z.string(),
      description: z.string(),
      duration: z.string().optional(),
      format: z.string().optional(),
    })).default([]),
    signature: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects, team, services, pages, pillars };