/**
 * Convierte un texto en un slug URL-friendly.
 * Elimina acentos, convierte espacios y caracteres especiales a guiones.
 *
 * Ejemplos:
 *   "Educación inclusiva" → "educacion-inclusiva"
 *   "IA & Pedagogía"      → "ia-pedagogia"
 *   "C++"                 → "c"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // elimina diacríticos (acentos, tildes)
    .replace(/[^a-z0-9]+/g, '-')     // reemplaza no-alfanuméricos con guión
    .replace(/^-+|-+$/g, '');         // limpia guiones al inicio o fin
}