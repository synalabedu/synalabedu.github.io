---
title: "Las quince reglas de seguridad del laboratorio"
excerpt: "Cada línea de código que sale de Synalab pasa por el mismo protocolo. Estas son las quince reglas que lo definen."
publishedAt: 2025-02-01
category: "tutorial"
tags: ["seguridad", "protocolo", "ia"]
author: "Jader Castro"
featured: false
draft: false
---

El protocolo de seguridad de Synalab no es una lista de buenas prácticas opcional. Es un filtro obligatorio que cada herramienta atraviesa antes de salir del laboratorio. Aquí están las quince reglas, en orden de aplicación.

**1. Validación de entrada en todos los puntos.** Nunca se confía en datos del usuario sin validar tipo, rango y formato.

**2. Sanitización antes de almacenamiento.** Cualquier dato que se persista pasa por sanitización contra inyecciones.

**3. Sin secrets en código.** Tokens, claves, credenciales nunca van en el código fuente.

**4. Almacenamiento local sobre cloud.** Por diseño, los datos del usuario quedan en su dispositivo siempre que sea técnicamente posible.

**5. Sin telemetría sin consentimiento.** Cualquier envío de datos requiere autorización explícita.

**6. Cifrado en datos sensibles.** Datos personales identificables se cifran en reposo.

**7. Manejo defensivo de errores.** Los errores no exponen información del sistema.

**8. Logging sin datos sensibles.** Los logs nunca contienen información identificable.

**9. Dependencias auditadas.** Cada paquete externo se revisa antes de incorporarse.

**10. Actualizaciones controladas.** Las dependencias se actualizan solo después de evaluar el cambio.

**11. Permisos mínimos.** El software solo solicita los permisos estrictamente necesarios.

**12. Tests con casos adversariales.** Las pruebas incluyen intentos de uso malicioso.

**13. Documentación de límites.** Las limitaciones del software están documentadas explícitamente.

**14. Plan de respuesta a incidentes.** Cada proyecto tiene plan para qué hacer si algo falla en producción.

**15. Auditoría final antes de publicación.** Ningún proyecto sale al público sin revisión completa contra las catorce reglas anteriores.

Estas reglas no son ideales aspiracionales: son la línea base. Un proyecto que no cumple las quince no sale del laboratorio, independientemente de cuán urgente sea publicarlo.