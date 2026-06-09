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
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
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
    license: z.enum([
      'cc-by',
      'cc-by-sa',
      'cc-by-nc',
      'cc-by-nc-sa',
      'cc-by-nd',
      'cc-by-nc-nd',
      'cc0',
      'proprietary',
      'mit',
      'gpl-3',
    ]).default('cc-by-nc-sa'),
    licenseVersion: z.string().default('4.0'),
    accessModel: z.enum(['libre', 'acuerdo']).default('libre'),
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

/**
 * Colección: BITÁCORA (BLOG)
 * Artículos editoriales del laboratorio.
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.preprocess(
      (val) => (val === '' || val == null ? undefined : val),
      z.coerce.date().optional()
    ),
    coverImage: z.string().optional(),
    category: z.enum(['reflexion', 'tutorial', 'caso-de-uso', 'anuncio']).default('reflexion'),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Jader Castro'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/**
 * Colección: RECURSOS DESCARGABLES
 * Guías, plantillas, documentos y enlaces curados.
 */
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['guia', 'plantilla', 'documento', 'video', 'enlace']).default('documento'),
    category: z.enum(['educacion', 'gestion', 'productividad', 'general']).default('general'),
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    coverImage: z.string().optional(),
    downloadUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    fileFormat: z.string().optional(),
    fileSize: z.string().optional(),
    isFree: z.boolean().default(true),
    price: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects, team, services, pages, pillars, posts, resources };