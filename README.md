<p align="center">
  <img src="./public/logos/Logo-blanco.webp" alt="Synalab" width="120" />
</p>

<h1 align="center">Synalab</h1>

<p align="center">
  <strong>Educación Tecnológica Consciente</strong><br/>
  <sub>Estudio independiente de creación de software funcional impulsado por inteligencia artificial.</sub><br/>
  <sub><em>Desde la educación, para problemas reales.</em></sub>
</p>

<p align="center">
  <a href="https://synalabedu.github.io">
    <img src="https://img.shields.io/badge/sitio_web-synalabedu.github.io-00C8D7?style=for-the-badge" alt="Sitio web" />
  </a>
</p>

<p align="center">
  <a href="https://instagram.com/synalabedu"><img src="https://img.shields.io/badge/Instagram-@synalabedu-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" /></a>
  <a href="https://facebook.com/synalabedu"><img src="https://img.shields.io/badge/Facebook-synalabedu-1877F2?style=flat-square&logo=facebook&logoColor=white" alt="Facebook" /></a>
  <a href="mailto:synalabedu@outlook.com"><img src="https://img.shields.io/badge/Email-synalabedu@outlook.com-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

## ¿Qué es Synalab?

Estudio independiente con sede en **Cali, Colombia**, dedicado a la creación de software funcional con propósito pedagógico. Combinamos formación tecnológica con desarrollo de herramientas reales para instituciones educativas y profesionales del aprendizaje.

> Conoce el manifiesto completo en [synalabedu.github.io/manifiesto](https://synalabedu.github.io/manifiesto)

## Acerca de este repositorio

Código fuente del **sitio web oficial de Synalab**, construido como sitio estático y desplegado automáticamente en GitHub Pages.

### Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build/) 6.x |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Tipado | TypeScript estricto |
| CMS | [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (sin backend) |
| Búsqueda | [Pagefind](https://pagefind.app/) (índice estático) |
| Analítica | [GoatCounter](https://goatcounter.com/) (sin cookies) |
| Formularios | [Formspree](https://formspree.io/) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

### Filosofía técnica

- **Local-first** — todo el contenido se sirve desde el navegador del usuario
- **Privacidad por diseño** — sin tracking invasivo, sin cookies de terceros
- **Estático** — generado en build, servido como HTML/CSS/JS plano
- **Seguridad como práctica continua** — CSP, SRI, HSTS, security.txt, Dependabot, CodeQL

## Estructura del repositorio

\`\`\`
src/
├── pages/           # Páginas del sitio (Astro routing)
├── content/         # Contenido editorial (markdown + frontmatter)
│   ├── posts/       # Bitácora
│   ├── projects/    # Laboratorio
│   ├── resources/   # Recursos descargables
│   ├── team/        # Equipo del estudio
│   └── ...
├── components/      # Componentes Astro reutilizables
├── layouts/         # Layouts base
└── lib/             # Constantes y utilidades

public/
├── admin/           # Panel administrativo (Sveltia CMS)
└── uploads/         # Recursos multimedia
\`\`\`

## Desarrollo local

**Requisitos:** Node.js 22+ y npm

\`\`\`bash
# Instalar dependencias
npm install

# Servidor de desarrollo (hot-reload)
npm run dev
# → http://localhost:4321

# Build de producción + índice de búsqueda
npm run build

# Preview del build (necesario para probar Pagefind)
npm run preview
\`\`\`

## Despliegue

Cada push a la rama \`main\` activa el workflow de GitHub Actions que construye el sitio y lo despliega a GitHub Pages. Tiempo total: 1-2 minutos.

Pipeline en \`.github/workflows/\`.

## Administración del contenido

El sitio incluye un panel administrativo en [/admin](https://synalabedu.github.io/admin/) basado en [Sveltia CMS](https://github.com/sveltia/sveltia-cms). Permite editar contenido (bitácora, laboratorio, recursos, manifiesto, etc.) directamente desde el navegador sin tocar código. Los cambios se commitean automáticamente al repositorio.

## Seguridad

- **Headers HTTP estrictos** (CSP, HSTS, X-Content-Type-Options, Referrer-Policy)
- **Subresource Integrity (SRI)** en scripts externos
- **Dependabot** activo para actualizaciones automáticas semanales
- **CodeQL** corriendo análisis de seguridad en cada push
- \`security.txt\` (RFC 9116) en [/.well-known/security.txt](https://synalabedu.github.io/.well-known/security.txt)
- Reporte responsable de vulnerabilidades vía email

## Licencia

El **código** de este repositorio está bajo licencia [a definir — sugerencia: MIT o Apache 2.0].

El **contenido editorial** (textos, imágenes, recursos pedagógicos) tiene licencias específicas indicadas en cada proyecto/recurso, generalmente Creative Commons.

## Contacto

**Jader Castro** — Fundador y desarrollador principal

📧 [synalabedu@outlook.com](mailto:synalabedu@outlook.com)  
📍 Cali, Colombia  
🌐 [synalabedu.github.io](https://synalabedu.github.io)

## Redes

- Instagram: [@synalabedu](https://instagram.com/synalabedu)
- Facebook: [synalabedu](https://facebook.com/synalabedu)
- GitHub: [@synalabedu](https://github.com/synalabedu)

---

<p align="center">
  <sub>Construido con propósito.</sub><br/>
  <sub>Documentado con disciplina.</sub><br/>
  <sub>Pensado para durar.</sub>
</p>