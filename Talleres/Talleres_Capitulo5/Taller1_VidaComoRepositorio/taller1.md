# Taller 1: "Tu vida como un repositorio de Git"

## 👥 Información del Grupo

- **Integrante 1**: Maicol Estuardo Nasimba Quinga
- **Integrante 2**: Francisco Andrés Sánchez Guerrero
- **Fecha**: 3 de Agosto, 2025

---

## 🎯 Actividad Elegida: Rutina de Estudio Universitario

**Responsable del análisis**: Maicol Estuardo Nasimba Quinga
**Actividad elegida**: Rutina de estudio para materias de Ingeniería en Software
**¿Por qué elegiste esta actividad?**: Porque es una actividad compleja que involucra múltiples componentes (teoría, práctica, proyectos) y es crucial para el éxito académico.

---

## 📦 Descomposición en Submódulos

### Submódulo 1: `planificacion-semanal/`
**¿Qué hace?**: Organiza las materias y temas a estudiar durante la semana
**Entradas**: 
- Syllabus de cada materia
- Fechas de exámenes y entregas
- Horarios de clases

**Salidas**:
- Calendario semanal organizado
- Lista de prioridades por día
- Tiempo estimado por actividad

**Dependencias**:
- `calendario-academico/` (submódulo externo)
- `notas-previas/` (para contexto)

### Submódulo 2: `estudio-teorico/`
**¿Qué hace?**: Procesa y asimila conceptos teóricos de las materias
**Entradas**:
- Libros y PDFs de referencia
- Apuntes de clase
- Videos educativos

**Salidas**:
- Resúmenes conceptuales
- Mapas mentales
- Flashcards para repaso

**Dependencias**:
- `planificacion-semanal/` (para saber qué estudiar)
- `herramientas-digitales/` (apps de mapas mentales)

### Submódulo 3: `practica-codigo/`
**¿Qué hace?**: Desarrolla habilidades prácticas de programación
**Entradas**:
- Ejercicios de laboratorio
- Proyectos asignados
- Tutoriales online

**Salidas**:
- Código funcional
- Repositorios organizados
- Documentación técnica

**Dependencias**:
- `estudio-teorico/` (base conceptual)
- `herramientas-desarrollo/` (IDE, Git, etc.)

### Submódulo 4: `evaluacion-continua/`
**¿Qué hace?**: Monitorea el progreso y identifica áreas de mejora
**Entradas**:
- Calificaciones obtenidas
- Tiempo invertido por tema
- Feedback de profesores

**Salidas**:
- Métricas de rendimiento
- Plan de mejoras
- Ajustes a la estrategia

**Dependencias**:
- Todos los submódulos anteriores (para datos)

### Submódulo 5: `trabajo-equipo/`
**¿Qué hace?**: Coordina actividades grupales y colaboración
**Entradas**:
- Proyectos grupales asignados
- Disponibilidad de compañeros
- Herramientas de colaboración

**Salidas**:
- Tareas distribuidas
- Cronograma conjunto
- Entregables integrados

**Dependencias**:
- `practica-codigo/` (para proyectos técnicos)
- `comunicacion-externa/` (WhatsApp, email, etc.)

---

## 🔄 Análisis de Flujo de Trabajo

### Workflow Principal: "Semana de Estudio"

```
1. planificacion-semanal/ 
   ↓ (genera calendario)
2. estudio-teorico/ 
   ↓ (proporciona base conceptual)
3. practica-codigo/ 
   ↓ (aplica conceptos)
4. trabajo-equipo/ (en paralelo con práctica)
   ↓ (colabora y valida)
5. evaluacion-continua/
   ↓ (retroalimenta al inicio)
```

### Dependencias Críticas Identificadas

**Dependencia más crítica**: `planificacion-semanal/` → `estudio-teorico/`
**¿Por qué?**: Sin una planificación clara, el estudio teórico se vuelve caótico y ineficiente.

**Dependencia problemática**: `estudio-teorico/` ↔ `practica-codigo/`
**Problema**: A veces necesito practicar para entender la teoría, pero también necesito teoría para practicar efectivamente.

### Cuellos de Botella

**Cuello de botella principal**: `evaluacion-continua/`
**Razón**: Solo evalúo progreso los fines de semana, causando que problemas se acumulen durante la semana.

**Propuesta de solución**: Implementar evaluaciones micro-diarias (5 minutos al final de cada día).

---

## 🐛 Bugs y Issues Identificados

### Bug #1: "Procrastination Loop"
**Descripción**: Cuando una tarea se vuelve muy compleja, tiendo a postponerla indefinidamente.
**Submódulo afectado**: `practica-codigo/`
**Frecuencia**: 2-3 veces por semana
**Impacto**: Alto - retrasa todo el flujo
**Propuesta de fix**: Implementar "decomposición recursiva" - dividir tareas grandes en subtareas de máximo 25 minutos.

### Bug #2: "Context Switching Overhead"
**Descripción**: Cambiar entre materias diferentes me toma más tiempo del esperado.
**Submódulo afectado**: `estudio-teorico/`
**Frecuencia**: Al cambiar de materia (4-5 veces por día)
**Impacto**: Medio - pérdida de 10-15 minutos por cambio
**Propuesta de fix**: Crear "ritual de transición" de 2 minutos entre materias.

### Bug #3: "Dependency Hell"
**Descripción**: A veces `trabajo-equipo/` requiere avances en `practica-codigo/` que aún no tengo.
**Submódulos afectados**: `trabajo-equipo/` y `practica-codigo/`
**Frecuencia**: 1-2 veces por sprint grupal
**Impacto**: Alto - bloquea al equipo
**Propuesta de fix**: Implementar "branch de desarrollo personal" para avanzar en paralelo.

### Bug #4: "Memory Leak"
**Descripción**: Información estudiada se "olvida" si no se repasa en 48-72 horas.
**Submódulo afectado**: `estudio-teorico/`
**Frecuencia**: Constante
**Impacto**: Medio - requiere re-estudio
**Propuesta de fix**: Sistema de "garbage collection" con repasos espaciados.

---

## 🚀 Mejoras Propuestas (Pull Requests)

### PR #1: "Implementar Pomodoro Integration"
**Submódulo objetivo**: `estudio-teorico/` y `practica-codigo/`
**Descripción**: Integrar técnica Pomodoro (25 min trabajo + 5 min descanso)
**Beneficio esperado**: Reducir fatiga mental y mejorar concentración
**Esfuerzo estimado**: 1 semana de adaptación
**Métricas a mejorar**: 
- Tiempo efectivo de concentración: +30%
- Nivel de cansancio al final del día: -25%

### PR #2: "Add Daily Standup Feature"
**Submódulo objetivo**: `evaluacion-continua/`
**Descripción**: Implementar revisión diaria de 5 minutos al final del día
**Beneficio esperado**: Detectar problemas temprano y ajustar curso
**Esfuerzo estimado**: 2 semanas para formar hábito
**Métricas a mejorar**:
- Tiempo para detectar problemas: -5 días
- Estrés por exámenes sorpresa: -40%

### PR #3: "Refactor Study Material Pipeline"
**Submódulo objetivo**: `estudio-teorico/`
**Descripción**: Estandarizar formato de notas y resúmenes (Markdown + Obsidian)
**Beneficio esperado**: Búsqueda más rápida y conexiones entre temas
**Esfuerzo estimado**: 3 semanas (incluye migración de notas existentes)
**Métricas a mejorar**:
- Tiempo para encontrar información: -60%
- Conexiones entre temas: +200%

### PR #4: "Parallel Processing for Group Work"
**Submódulo objetivo**: `trabajo-equipo/`
**Descripción**: Implementar trabajo en ramas paralelas que se integran al final
**Beneficio esperado**: Reducir bloqueos por dependencias entre compañeros
**Esfuerzo estimado**: Negociación con equipo (1 semana)
**Métricas a mejorar**:
- Tiempo de espera por compañeros: -70%
- Calidad de integración final: +50%

---

## 🎯 Plan de Implementación

### Sprint 1 (Semana 1-2): Foundation
- [ ] Implementar Daily Standup Feature
- [ ] Configurar herramientas básicas (Obsidian, timer Pomodoro)
- [ ] Definir métricas baseline

### Sprint 2 (Semana 3-4): Core Improvements  
- [ ] Desplegar Pomodoro Integration
- [ ] Iniciar migración a Study Material Pipeline
- [ ] Negociar Parallel Processing con equipo

### Sprint 3 (Semana 5-6): Optimization
- [ ] Completar migración de notas
- [ ] Implementar Parallel Processing
- [ ] Medir impacto de cambios

### Sprint 4 (Semana 7-8): Stabilization
- [ ] Ajustar configuraciones basado en métricas
- [ ] Documentar lessons learned
- [ ] Planificar siguiente fase de mejoras

---

## 📊 Métricas de Éxito Definidas

| Métrica | Baseline Actual | Objetivo | Herramienta de Medición |
|---------|----------------|----------|-------------------------|
| Horas efectivas de estudio/día | 4.5h | 6h | Time tracking app |
| Calificación promedio | 7.8/10 | 8.5/10 | Sistema académico |
| Nivel de estrés (1-10) | 7/10 | 5/10 | Auto-evaluación diaria |
| Tareas completadas a tiempo | 70% | 90% | Lista de tareas |
| Tiempo para encontrar notas | 5 min | 2 min | Cronómetro manual |
| Proyectos grupales sin conflictos | 60% | 85% | Retrospectivas grupales |

---

## 💭 Reflexión Personal

### ¿Qué aprendiste sobre tu rutina al analizarla como un sistema de software?

Al ver mi rutina como un repositorio Git, me di cuenta de que tengo muchos "merge conflicts" entre diferentes actividades. También noté que no tengo un buen sistema de "versionado" - no documento qué funciona y qué no para poder revertir cambios malos.

### ¿Qué mejoras son más realistas de implementar?

Las más realistas son el Daily Standup y la integración con Pomodoro porque solo requieren cambio de hábitos personales. La reorganización de material de estudio tomará más tiempo pero es muy necesaria.

### ¿Qué patrones de tu rutina se parecen a patrones de desarrollo de software?

- **Hot fixes**: Cuando estudio de último momento para un examen
- **Technical debt**: Cuando postergo organizar notas y luego es más difícil encontrar información
- **Code review**: Cuando Francisco y yo revisamos el código del otro en proyectos
- **Continuous integration**: Cuando voy integrando conocimiento nuevo con lo que ya sabía

### ¿Cómo cambió tu perspectiva sobre la organización personal?

Ahora veo que la organización personal también necesita arquitectura, documentación y métricas. No es suficiente con "hacer las cosas" - hay que pensar en cómo hacerlas de manera sostenible y escalable.

---

## 🤝 Comentarios del Compañero

**Evaluador**: Francisco Andrés Sánchez Guerrero

### ¿Qué te llamó más la atención del análisis de tu compañero?

Me impresionó que Maicol identificara el "Context Switching Overhead" porque yo también lo sufro pero nunca lo había nombrado así. Su idea del ritual de transición es muy práctica.

### ¿Qué mejora sugerirías adicional?

Sugiero que agregue un submódulo de "salud-bienestar/" porque he notado que cuando no duerme bien o no hace ejercicio, su rendimiento en todos los otros submódulos baja.

### ¿Qué aprendiste para aplicar en tu propia rutina?

La idea de hacer "branches de desarrollo personal" para no bloquear el trabajo grupal. También me gusta su enfoque de métricas cuantitativas - yo soy más cualitativo en mis evaluaciones.

---

## 📈 Conclusiones

### Mayor insight obtenido

La rutina de estudio es un sistema complejo con muchas interdependencias, y pequeños cambios pueden tener efectos grandes (tanto positivos como negativos). Es importante tratar las mejoras como experimentos controlados.

### Próximos pasos

1. Implementar Daily Standup esta semana
2. Negociar con Francisco el sistema de branches paralelas
3. Investigar herramientas específicas para el Study Material Pipeline
4. Establecer métricas baseline antes de hacer cambios mayores

### Aplicabilidad a otros contextos

Este enfoque de "vida como repositorio" se puede aplicar a:
- Rutina de ejercicio (submódulos: cardio, fuerza, flexibilidad, nutrición)
- Administración de finanzas personales
- Desarrollo de habilidades profesionales
