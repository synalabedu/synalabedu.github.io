---
name: "SIGMA"
status: "desarrollo"
category: "gestion"
license: "cc-by-nc-sa"
licenseVersion: "4.0"
tagline: "Sistema de gestión para semilleros de investigación."
description: "Plataforma específicamente diseñada para la administración de semilleros de investigación estudiantil. Cubre los flujos centrales —integrantes, proyectos, actividades, productos académicos— con una arquitectura modular replicable a otros colectivos con necesidades equivalentes de gestión."
problem: "Los semilleros de investigación estudiantil son espacios formativos clave en muchas instituciones, pero su gestión administrativa suele ser un caos artesanal: hojas de Excel duplicadas, papeles físicos extraviados, correos electrónicos como sistema de registro, y un coordinador que se desgasta administrando manualmente lo que debería estar automatizado. Los sistemas comerciales de gestión académica son inviables económicamente para semilleros de bajo presupuesto, y los sistemas existentes están sobre-dimensionados: pensados para programas académicos completos cuando un semillero necesita algo más simple, específico y a su escala."
solution: "SIGMA cubre los flujos centrales de un semillero de investigación: inscripción de integrantes, registro de actividades y reuniones, seguimiento de proyectos en curso, gestión de productos académicos (ponencias, artículos, publicaciones), reportes para coordinadores y exportación de datos para informes institucionales. Su arquitectura modular permite que cualquier colectivo con necesidades administrativas similares —clubes académicos, organizaciones estudiantiles, grupos culturales— lo adapte a su contexto sin reescribirlo desde cero. Pensado para instalarse en infraestructura propia de la institución, sin dependencia de servicios externos."
features:
  - title: "Gestión de integrantes"
    description: "Registro completo de miembros, asignación a proyectos, historial de participación y control de roles (director, coordinador, semillerista, asesor externo, etc.)."
  - title: "Seguimiento de proyectos"
    description: "Estado de cada proyecto activo, hitos planeados, productos esperados, fechas clave y responsables asignados. Visibilidad completa para coordinadores y participantes."
  - title: "Registro de actividades"
    description: "Reuniones, talleres, ponencias, capacitaciones y eventos. Control de asistencia, registro de resultados y archivo histórico consultable."
  - title: "Gestión de productos académicos"
    description: "Catálogo de ponencias, artículos publicados, participaciones en eventos científicos y otros productos. Trazabilidad por proyecto e integrante."
  - title: "Reportes para coordinación"
    description: "Métricas consolidadas para informes institucionales. Exportación a Excel y PDF para entregas formales a decanaturas o vicerrectorías."
  - title: "Arquitectura replicable"
    description: "Diseñado modularmente para adaptarse a otros colectivos con necesidades administrativas similares: clubes académicos, organizaciones estudiantiles, grupos culturales o artísticos."
techStack:
  - "HTML5"
  - "TypeScript"
  - "Node.js"
  - "SQLite"
  - "Tailwind CSS"
  - "Astro"
requirements: "Para uso individual de un coordinador: computador con Windows, Linux o macOS y navegador moderno. Para uso multiusuario en institución: servidor o computador dedicado con Node.js 20 o superior, mínimo 1 GB de espacio. Acceso desde cualquier navegador moderno una vez instalado. Posible despliegue en infraestructura propia de la institución sin necesidad de servicios cloud."
targetAudience: "Coordinadores y directores de semilleros de investigación estudiantil en instituciones de educación superior. También aplicable a clubes académicos, organizaciones estudiantiles, grupos culturales, colectivos artísticos y cualquier organización pequeña o mediana que necesite gestionar miembros, actividades y productos sin invertir en sistemas comerciales costosos."
scormCompatible: false
featured: false
order: 5
---

Proyecto en desarrollo activo. La arquitectura modular permitirá adaptarlo a contextos distintos al de semilleros de investigación con cambios mínimos. Las funcionalidades descritas reflejan el alcance objetivo de la versión 1.0; pueden ajustarse durante las pruebas piloto. Contenido editable desde el panel administrativo cuando esté disponible.