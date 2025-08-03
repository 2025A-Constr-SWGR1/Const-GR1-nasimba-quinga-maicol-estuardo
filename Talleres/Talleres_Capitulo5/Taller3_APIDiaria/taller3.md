# Taller 3: "Diseña tu propia API diaria"

## 👥 Información del Grupo

- **Integrante 1**: Maicol Estuardo Nasimba Quinga
- **Integrante 2**: Francisco Andrés Sánchez Guerrero
- **Fecha**: 3 de Agosto, 2025

---

## 🎯 Rutina Seleccionada para API

**Responsable del análisis**: Maicol Estuardo Nasimba Quinga
**Rutina elegida**: Gestión académica y productividad estudiantil
**¿Por qué elegiste esta rutina?**: Es una rutina compleja que involucra múltiples sistemas (horarios, tareas, calificaciones, proyectos) y tiene potencial para automatización y optimización.

---

## 🏗️ Arquitectura General de la API

### Información Básica

**Nombre de la API**: `StudentLifeAPI`
**Versión**: `v1.0`
**Base URL**: `https://api.studentlife.dev/v1`
**Propósito**: Centralizar y optimizar la gestión académica personal de un estudiante universitario

### Recursos Principales Identificados

1. **Materias** (`/subjects`) - Gestión de cursos y materias
2. **Tareas** (`/assignments`) - Seguimiento de trabajos y deberes
3. **Horarios** (`/schedule`) - Calendarios de clases y actividades
4. **Calificaciones** (`/grades`) - Registro y análisis de notas
5. **Proyectos** (`/projects`) - Gestión de proyectos grupales e individuales
6. **Recursos** (`/resources`) - Materiales de estudio y referencias
7. **Recordatorios** (`/reminders`) - Notificaciones y alertas
8. **Métricas** (`/analytics`) - Análisis de rendimiento y productividad

---

## 📋 Documentación Detallada de Endpoints

### 1. Recurso: Materias (`/subjects`)

#### GET `/subjects`
**Propósito**: Obtener lista de todas las materias del semestre actual

**Respuesta exitosa (200)**:
```json
{
  "subjects": [
    {
      "id": "SWGR1-2025A",
      "name": "Construcción y Evolución del Software",
      "credits": 4,
      "professor": "Dr. García López",
      "schedule": {
        "days": ["Monday", "Wednesday"],
        "time": "08:00-10:00",
        "classroom": "Lab-Software-01"
      },
      "current_grade": 8.5,
      "status": "active",
      "created_at": "2025-01-15T00:00:00Z"
    },
    {
      "id": "DSTR-2025A", 
      "name": "Estructuras de Datos",
      "credits": 3,
      "professor": "MSc. Rodríguez Pérez",
      "schedule": {
        "days": ["Tuesday", "Thursday"],
        "time": "10:00-12:00",
        "classroom": "Aula-205"
      },
      "current_grade": 9.2,
      "status": "active",
      "created_at": "2025-01-15T00:00:00Z"
    }
  ],
  "total": 2,
  "semester": "2025-A"
}
```

#### POST `/subjects`
**Propósito**: Registrar una nueva materia

**Request Body**:
```json
{
  "name": "Base de Datos Avanzadas",
  "code": "BDA-2025A",
  "credits": 4,
  "professor": "PhD. Martinez Silva",
  "schedule": {
    "days": ["Monday", "Friday"],
    "time": "14:00-16:00",
    "classroom": "Lab-DB-02"
  }
}
```

**Respuesta exitosa (201)**:
```json
{
  "id": "BDA-2025A",
  "message": "Subject created successfully",
  "created_at": "2025-08-03T10:30:00Z"
}
```

### 2. Recurso: Tareas (`/assignments`)

#### GET `/assignments`
**Propósito**: Obtener todas las tareas pendientes y completadas

**Query Parameters**:
- `status`: `pending` | `completed` | `overdue` | `all` (default: `pending`)
- `subject_id`: Filtrar por materia específica
- `due_date_from`: Fecha desde (ISO 8601)
- `due_date_to`: Fecha hasta (ISO 8601)
- `priority`: `high` | `medium` | `low`

**Ejemplo Request**: `GET /assignments?status=pending&priority=high`

**Respuesta exitosa (200)**:
```json
{
  "assignments": [
    {
      "id": "assg-001",
      "title": "Implementar Calculadora con Microservicios",
      "description": "Desarrollar una calculadora distribuida usando Docker y NestJS",
      "subject_id": "SWGR1-2025A",
      "subject_name": "Construcción y Evolución del Software",
      "due_date": "2025-08-10T23:59:59Z",
      "priority": "high",
      "status": "in_progress",
      "estimated_hours": 12,
      "spent_hours": 4.5,
      "completion_percentage": 30,
      "tags": ["coding", "docker", "nestjs"],
      "created_at": "2025-08-01T09:00:00Z",
      "updated_at": "2025-08-03T14:20:00Z"
    },
    {
      "id": "assg-002",
      "title": "Análisis de Complejidad Algoritmica",
      "description": "Analizar y comparar algoritmos de ordenamiento",
      "subject_id": "DSTR-2025A",
      "subject_name": "Estructuras de Datos",
      "due_date": "2025-08-08T23:59:59Z",
      "priority": "medium",
      "status": "pending",
      "estimated_hours": 6,
      "spent_hours": 0,
      "completion_percentage": 0,
      "tags": ["analysis", "algorithms"],
      "created_at": "2025-08-02T11:00:00Z",
      "updated_at": "2025-08-02T11:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 2,
    "total_pages": 1
  }
}
```

#### PUT `/assignments/{id}/progress`
**Propósito**: Actualizar el progreso de una tarea

**Request Body**:
```json
{
  "completion_percentage": 60,
  "spent_hours": 8.5,
  "status": "in_progress",
  "notes": "Completé la configuración de Docker, trabajando en la lógica del negocio"
}
```

### 3. Recurso: Horarios (`/schedule`)

#### GET `/schedule/today`
**Propósito**: Obtener el horario del día actual

**Respuesta exitosa (200)**:
```json
{
  "date": "2025-08-03",
  "day_of_week": "Monday",
  "events": [
    {
      "id": "class-001",
      "type": "class",
      "title": "Construcción y Evolución del Software",
      "subject_id": "SWGR1-2025A",
      "start_time": "08:00",
      "end_time": "10:00",
      "location": "Lab-Software-01",
      "professor": "Dr. García López",
      "status": "scheduled"
    },
    {
      "id": "study-001",
      "type": "study_session",
      "title": "Revisar conceptos de Docker",
      "subject_id": "SWGR1-2025A",
      "start_time": "15:00",
      "end_time": "17:00",
      "location": "Biblioteca Central",
      "status": "planned"
    },
    {
      "id": "project-001",
      "type": "project_work",
      "title": "Trabajo grupal - Calculadora",
      "project_id": "proj-calc-001",
      "start_time": "19:00",
      "end_time": "21:00",
      "location": "Online - Discord",
      "participants": ["Maicol Nasimba", "Francisco Sánchez"],
      "status": "scheduled"
    }
  ],
  "daily_summary": {
    "total_events": 3,
    "class_hours": 2,
    "study_hours": 2,
    "project_hours": 2,
    "free_time_slots": [
      {"start": "10:00", "end": "15:00"},
      {"start": "17:00", "end": "19:00"}
    ]
  }
}
```

### 4. Recurso: Proyectos (`/projects`)

#### GET `/projects/{id}/collaboration`
**Propósito**: Obtener información de colaboración en un proyecto específico

**Respuesta exitosa (200)**:
```json
{
  "project": {
    "id": "proj-calc-001",
    "title": "Calculadora Distribuida con Microservicios",
    "description": "Implementar calculadora usando arquitectura de microservicios",
    "subject_id": "SWGR1-2025A",
    "due_date": "2025-08-15T23:59:59Z",
    "status": "in_progress"
  },
  "collaboration": {
    "team_members": [
      {
        "id": "user-001",
        "name": "Maicol Estuardo Nasimba Quinga",
        "role": "Backend Developer",
        "email": "maicol.nasimba@epn.edu.ec",
        "responsibilities": [
          "API Design",
          "Docker Configuration",
          "Microservices Architecture"
        ],
        "contribution_percentage": 45
      },
      {
        "id": "user-002", 
        "name": "Francisco Andrés Sánchez Guerrero",
        "role": "Frontend Developer & QA",
        "email": "francisco.sanchez@epn.edu.ec",
        "responsibilities": [
          "User Interface",
          "Testing Implementation",
          "Documentation"
        ],
        "contribution_percentage": 55
      }
    ],
    "communication_channels": [
      {
        "type": "discord",
        "channel": "Proyecto-Calculadora",
        "primary": true
      },
      {
        "type": "whatsapp",
        "group": "Equipo SWGR1",
        "primary": false
      }
    ],
    "shared_resources": [
      {
        "type": "github_repo",
        "url": "https://github.com/team-calc/distributed-calculator",
        "access_level": "admin"
      },
      {
        "type": "google_drive",
        "folder": "Proyecto Calculadora - Documentos",
        "access_level": "editor"
      }
    ]
  },
  "recent_activity": [
    {
      "timestamp": "2025-08-03T09:30:00Z",
      "user": "Francisco Sánchez",
      "action": "pushed_commit",
      "description": "Implementó tests unitarios para operaciones básicas"
    },
    {
      "timestamp": "2025-08-02T16:45:00Z",
      "user": "Maicol Nasimba", 
      "action": "updated_documentation",
      "description": "Documentó API endpoints para microservicio de suma"
    }
  ]
}
```

### 5. Recurso: Métricas y Analytics (`/analytics`)

#### GET `/analytics/productivity`
**Propósito**: Obtener métricas de productividad académica

**Query Parameters**:
- `period`: `week` | `month` | `semester` (default: `week`)
- `subject_id`: Filtrar por materia específica

**Respuesta exitosa (200)**:
```json
{
  "period": "week",
  "date_range": {
    "start": "2025-07-28",
    "end": "2025-08-03"
  },
  "productivity_metrics": {
    "study_hours": {
      "total": 28.5,
      "daily_average": 4.1,
      "target": 30,
      "achievement_percentage": 95
    },
    "assignments_completed": {
      "count": 3,
      "on_time": 2,
      "late": 1,
      "average_completion_time": 5.2
    },
    "grade_performance": {
      "average": 8.7,
      "trend": "improving",
      "best_subject": "Estructuras de Datos",
      "needs_attention": ["Cálculo Integral"]
    },
    "focus_analysis": {
      "most_productive_hours": ["09:00-11:00", "15:00-17:00"],
      "distraction_incidents": 12,
      "deep_work_sessions": 8,
      "average_session_length": 45
    }
  },
  "subject_breakdown": [
    {
      "subject_id": "SWGR1-2025A",
      "subject_name": "Construcción y Evolución del Software", 
      "hours_spent": 12.5,
      "assignments_completed": 1,
      "current_grade": 8.5,
      "effort_vs_performance": "balanced"
    },
    {
      "subject_id": "DSTR-2025A",
      "subject_name": "Estructuras de Datos",
      "hours_spent": 10.0,
      "assignments_completed": 2,
      "current_grade": 9.2,
      "effort_vs_performance": "efficient"
    }
  ],
  "recommendations": [
    "Incrementar tiempo de estudio en Cálculo Integral",
    "Mantener horario de estudio matutino (9-11 AM)",
    "Reducir distracciones durante sesiones de estudio",
    "Considerar técnica Pomodoro para sesiones más largas"
  ]
}
```

---

## 🔄 Casos de Uso Avanzados

### Caso de Uso 1: Planificación Automática de Estudio

**Endpoint**: `POST /schedule/auto-plan`

**Request Body**:
```json
{
  "target_date": "2025-08-15",
  "priorities": [
    {
      "subject_id": "SWGR1-2025A",
      "weight": 0.6,
      "reason": "Proyecto final próximo"
    },
    {
      "subject_id": "DSTR-2025A", 
      "weight": 0.4,
      "reason": "Parcial en 2 semanas"
    }
  ],
  "constraints": {
    "max_daily_hours": 6,
    "preferred_time_slots": ["09:00-12:00", "15:00-18:00"],
    "break_intervals": 15,
    "weekend_availability": true
  }
}
```

**Respuesta**:
```json
{
  "study_plan": {
    "total_hours": 45,
    "daily_distribution": [
      {
        "date": "2025-08-04",
        "sessions": [
          {
            "subject_id": "SWGR1-2025A",
            "topic": "Microservices Implementation",
            "start_time": "09:00",
            "end_time": "11:30",
            "type": "coding_practice"
          },
          {
            "subject_id": "DSTR-2025A",
            "topic": "Binary Trees Review", 
            "start_time": "15:00",
            "end_time": "17:00",
            "type": "theory_review"
          }
        ]
      }
    ],
    "success_probability": 0.85,
    "alternative_plans": 2
  }
}
```

### Caso de Uso 2: Análisis de Colaboración en Tiempo Real

**Endpoint**: `GET /projects/{id}/realtime-status`

**WebSocket Connection**: `wss://api.studentlife.dev/v1/projects/proj-calc-001/live`

**Mensaje en tiempo real**:
```json
{
  "event": "team_member_active",
  "timestamp": "2025-08-03T14:25:00Z",
  "data": {
    "user": "Francisco Sánchez",
    "activity": "coding",
    "file": "calculator-service.ts",
    "location": "line 45-67",
    "duration_minutes": 12
  }
}
```

### Caso de Uso 3: Integración con Sistemas Externos

**Endpoint**: `POST /integrations/sync`

**Request Body**:
```json
{
  "sources": [
    {
      "type": "moodle",
      "url": "https://moodle.epn.edu.ec",
      "credentials_id": "moodle-cred-001",
      "sync_types": ["assignments", "grades", "announcements"]
    },
    {
      "type": "google_calendar",
      "calendar_id": "primary",
      "sync_types": ["classes", "study_sessions"]
    },
    {
      "type": "github",
      "username": "maicol-nasimba",
      "repositories": ["distributed-calculator", "data-structures-practice"],
      "sync_types": ["commits", "issues", "pull_requests"]
    }
  ]
}
```

---

## 🛡️ Aspectos de Seguridad y Autenticación

### Autenticación

**Endpoint**: `POST /auth/login`

**Request Body**:
```json
{
  "email": "maicol.nasimba@epn.edu.ec",
  "password": "SecurePassword123!",
  "device_info": {
    "type": "mobile",
    "os": "Android 13",
    "app_version": "1.2.0"
  }
}
```

**Respuesta exitosa (200)**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4...",
  "expires_in": 3600,
  "user": {
    "id": "user-001",
    "name": "Maicol Estuardo Nasimba Quinga",
    "email": "maicol.nasimba@epn.edu.ec",
    "student_id": "202012345",
    "university": "Escuela Politécnica Nacional",
    "career": "Ingeniería en Software"
  }
}
```

### Autorización y Permisos

```json
{
  "permissions": {
    "own_data": ["read", "write", "delete"],
    "shared_projects": ["read", "write"],
    "analytics": ["read"],
    "integrations": ["read", "write", "sync"]
  },
  "rate_limits": {
    "requests_per_hour": 1000,
    "sync_operations_per_day": 10,
    "file_uploads_per_day": 50
  }
}
```

---

## 🚨 Manejo de Errores

### Códigos de Error Estándar

```json
{
  "error": {
    "code": "ASSIGNMENT_NOT_FOUND",
    "message": "The requested assignment does not exist or has been deleted",
    "details": {
      "assignment_id": "assg-999",
      "user_id": "user-001",
      "timestamp": "2025-08-03T14:30:00Z"
    },
    "suggestions": [
      "Verify the assignment ID is correct",
      "Check if the assignment belongs to your enrolled subjects",
      "Contact support if you believe this is an error"
    ]
  }
}
```

### Estados HTTP y Significados

| Código | Significado | Casos de Uso |
|--------|-------------|--------------|
| 200 | OK | Operación exitosa |
| 201 | Created | Recurso creado exitosamente |
| 400 | Bad Request | Datos de entrada inválidos |
| 401 | Unauthorized | Token de acceso inválido o expirado |
| 403 | Forbidden | Sin permisos para el recurso |
| 404 | Not Found | Recurso no encontrado |
| 409 | Conflict | Conflicto con estado actual (ej: horarios duplicados) |
| 429 | Too Many Requests | Límite de rate limiting excedido |
| 500 | Internal Server Error | Error interno del servidor |

---

## 📊 Métricas y Monitoreo de la API

### Endpoints de Salud del Sistema

**GET `/health`**
```json
{
  "status": "healthy",
  "timestamp": "2025-08-03T14:30:00Z",
  "version": "1.0.0",
  "services": {
    "database": {"status": "up", "response_time_ms": 12},
    "cache": {"status": "up", "response_time_ms": 3},
    "external_integrations": {"status": "degraded", "response_time_ms": 156}
  },
  "uptime_seconds": 8640000
}
```

### Métricas de Uso Personal

**GET `/user/api-usage`**
```json
{
  "period": "current_month",
  "usage_stats": {
    "total_requests": 2847,
    "daily_average": 91.8,
    "most_used_endpoints": [
      {"endpoint": "/assignments", "count": 645},
      {"endpoint": "/schedule/today", "count": 589},
      {"endpoint": "/analytics/productivity", "count": 234}
    ],
    "peak_usage_hours": ["08:00-09:00", "17:00-18:00"],
    "data_sync_operations": 28,
    "automation_triggers": 156
  },
  "efficiency_metrics": {
    "time_saved_hours": 12.5,
    "tasks_automated": 67,
    "manual_vs_api_ratio": 0.23
  }
}
```

---

## 💡 Reflexión sobre el Diseño

### ¿Qué aspectos de tu rutina fueron más fáciles de convertir en API?

Los aspectos más estructurados como horarios de clases y tareas con fechas límite fueron naturales de convertir en endpoints REST. La información tabular (materias, calificaciones) se mapea muy bien a recursos con operaciones CRUD.

### ¿Qué fue más desafiante?

Lo más desafiante fue modelar los aspectos colaborativos y las interacciones en tiempo real. Cosas como "trabajar en equipo" o "sentirse motivado" son difíciles de representar como datos estructurados. También fue complejo diseñar la lógica de planificación automática.

### ¿Cómo balanceaste la simplicidad vs. la funcionalidad?

Empecé con endpoints básicos (GET/POST simples) y luego agregué funcionalidad avanzada como analytics y planificación automática. Mantuve la API REST para operaciones básicas pero agregué WebSockets para colaboración en tiempo real.

### ¿Qué patrones de diseño de APIs utilizaste?

- **REST**: Para operaciones CRUD básicas
- **Pagination**: Para listas grandes de recursos
- **Filtering/Searching**: Query parameters para refinar búsquedas
- **Versioning**: En la URL para compatibilidad futura
- **Rate Limiting**: Para proteger el sistema
- **WebSockets**: Para updates en tiempo real
- **Batch Operations**: Para sincronización eficiente

---

## 🤝 Evaluación del Compañero

**Evaluador**: Francisco Andrés Sánchez Guerrero

### ¿Qué te pareció más impresionante del diseño?

Me impresionó muchísimo el endpoint de `/analytics/productivity` - es súper completo y realmente útil. También me gustó cómo integró WebSockets para colaboración en tiempo real. El diseño está muy pensado para casos de uso reales.

### ¿Usarías esta API en tu vida real?

¡Absolutamente sí! De hecho, creo que podríamos implementar una versión simplificada para nuestro uso personal. Los endpoints de planificación automática y análisis de productividad me serían muy útiles.

### ¿Qué agregarías o cambiarías?

Sugiero agregar:
- Endpoint para gestión de salud mental y bienestar
- Integración con apps de fitness para correlacionar ejercicio con rendimiento académico  
- Sistema de gamificación con puntos y logros
- Endpoints para gestión de finanzas estudiantiles (materiales, transporte, etc.)

### ¿Cómo calificarías la documentación?

**9/10** - Muy completa y con ejemplos realistas. Los casos de uso avanzados están muy bien pensados. Solo agregaría más ejemplos de manejo de errores.

---

## 📈 Conclusiones y Aprendizajes

### Mayor insight sobre tu rutina

Al diseñar esta API me di cuenta de que mi rutina académica es mucho más compleja de lo que pensaba. Hay muchas interacciones entre diferentes aspectos (horarios afectan productividad, colaboración afecta calidad de trabajo, etc.) que normalmente no considero explícitamente.

### ¿Cómo cambió tu perspectiva sobre APIs?

Ahora veo las APIs no solo como interfaces técnicas, sino como formas de modelar y optimizar procesos complejos. Una buena API puede revelar ineficiencias en los procesos que modela.

### ¿Qué automatizarías realmente?

Basado en este diseño, definitivamente implementaría:
1. **Sincronización automática** con Moodle y Google Calendar
2. **Recordatorios inteligentes** basados en prioridades y horarios
3. **Análisis de productividad** para identificar patrones
4. **Planificación de estudio** automática para optimizar tiempo

### Aplicabilidad a otras rutinas

Este enfoque se podría aplicar a:
- **Gestión de salud personal**: APIs para ejercicio, nutrición, sueño
- **Finanzas personales**: APIs para gastos, inversiones, presupuestos  
- **Desarrollo profesional**: APIs para skills, certificaciones, networking
- **Vida social**: APIs para eventos, relaciones, actividades

### Lecciones sobre diseño de sistemas

1. **Empezar simple**: Los endpoints básicos son la base, la complejidad se agrega gradualmente
2. **Pensar en integraciones**: Los sistemas raramente existen aislados
3. **Datos como primera clase**: Los analytics y métricas son tan importantes como la funcionalidad básica
4. **Flexibilidad para el futuro**: El versionado y la extensibilidad son cruciales
5. **Experiencia del usuario**: Hasta en APIs, la facilidad de uso importa

Esta API ficticia me ayudó a entender mejor tanto mi rutina académica como los principios de buen diseño de APIs. ¡Definitivamente voy a implementar algunas partes en la vida real!
