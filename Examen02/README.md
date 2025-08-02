# Calculadora Completa - Examen 02

## Integrantes del Grupo

- **Maicol Estuardo Nasimba Quinga** (MENQ)
- **Francisco Andrés Sánchez Guerrero** (FASG)

## Descripción del Proyecto

Este proyecto implementa una calculadora completa usando 4 librerías NPM locales para las operaciones básicas de matemáticas, desarrollado como parte del Examen 02 basado en el taller de librerías NPM.

## Objetivos Cumplidos

- Crear 4 librerías NPM independientes para operaciones matemáticas básicas  
- Implementar trabajo colaborativo con 2 integrantes  
- Usar el sistema de publicación local de NPM (`npm link`)  
- Desarrollar un proyecto principal que consume todas las librerías  
-  Validar las operaciones específicas solicitadas

## Estructura del Proyecto

```text
Examen02/
├── 2025a-swgr1-fasg-suma/          # Librería de suma (Francisco Sánchez)
├── 2025a-swgr1-fasg-resta/         # Librería de resta (Francisco Sánchez)
├── 2025a-swgr1-menq-multiplicacion/ # Librería de multiplicación (Maicol Nasimba)
├── 2025a-swgr1-menq-division/      # Librería de división (Maicol Nasimba)
├── calculadora-completa/           # Proyecto principal
│   ├── package.json
│   └── index.js
└── README.md                       # Documentación del proyecto
```

## Operaciones Implementadas y Validadas

- **suma(2,1)** → resultado: **3** ✓
- **resta(3,2)** → resultado: **1** ✓
- **multiplicacion(2,5)** → resultado: **10** ✓
- **division(9,3)** → resultado: **3** ✓

## Distribución del Trabajo

| Integrante | Iniciales | Librerías Desarrolladas |
|------------|-----------|------------------------|
| Francisco Andrés Sánchez Guerrero | FASG | • 2025a-swgr1-fasg-suma<br>• 2025a-swgr1-fasg-resta |
| Maicol Estuardo Nasimba Quinga | MENQ | • 2025a-swgr1-menq-multiplicacion<br>• 2025a-swgr1-menq-division |

## Proceso de Desarrollo Realizado

### 1. Creación de Librerías NPM

Cada integrante creó sus librerías correspondientes siguiendo la nomenclatura:
`2025a-swgr1-[iniciales]-[operacion]`

**Características implementadas en cada librería:**
- Validación de entrada (números válidos)
- Manejo de errores personalizado
- Exportación usando CommonJS (`exports`)
- División con validación de división por cero

### 2. Publicación Local

Se utilizó `npm link` para publicar las librerías localmente:
```bash
cd [carpeta-libreria]
npm link
```

### 3. Proyecto Principal

Se creó el proyecto `calculadora-completa` que:
- Instala todas las 4 librerías usando `npm link [nombre-libreria]`
- Importa y utiliza cada operación
- Ejecuta las operaciones específicas solicitadas
- Muestra resultados formateados en consola

### 4. Validación de Funcionamiento

El proyecto fue probado exitosamente ejecutando:
```bash
cd calculadora-completa
node index.js
```

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **NPM**: Gestión de paquetes y publicación local
- **JavaScript (CommonJS)**: Lenguaje de programación
- **Git**: Control de versiones

## Resultados Obtenidos

El proyecto cumple completamente con los requerimientos del examen:

1. - **4 operaciones matemáticas implementadas**
2. - **Uso de librerías NPM locales**
3. - **Estructura modular y reutilizable**
```bash
$ node index.js
=== EXAMEN 2do Bimestre ===

Operaciones solicitadas:
suma(2, 1) = 3
resta(3, 2) = 1
multiplicacion(2, 5) = 10
division(9, 3) = 3

=== TODAS LAS OPERACIONES COMPLETADAS EXITOSAMENTE ===

--- Librerías utilizadas ---
• Suma: 2025a-swgr1-fasg-suma (Francisco Sánchez)
• Resta: 2025a-swgr1-fasg-resta (Francisco Sánchez)
• Multiplicación: 2025a-swgr1-menq-multiplicacion (Maicol Nasimba)
• División: 2025a-swgr1-menq-division (Maicol Nasimba)
```

## Cómo Ejecutar el Proyecto

1. Navegar a la carpeta del proyecto principal:
   ```bash
   cd calculadora-completa
   ```

2. Ejecutar la calculadora:
   ```bash
   npm start
   # o
   node index.js
   ```

3. Ver los resultados de todas las operaciones en consola

## Aprendizajes Obtenidos

- Creación y publicación de paquetes NPM locales
- Trabajo colaborativo en desarrollo de software
- Modularización de código usando librerías independientes
- Gestión de dependencias entre proyectos
- Validación y manejo de errores en JavaScript
