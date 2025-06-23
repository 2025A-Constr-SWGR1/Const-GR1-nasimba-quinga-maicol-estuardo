# Taller - Conversor de Moneda

## Nombre: Maicol Nasimba
## Conceptos de Clean Code aplicados


- **Nombres claros y descriptivos:**  
  - Clases, métodos y variables usan nombres que expresan claramente su propósito.  
  - Ejemplo: `MonedaService`, `convertir`, `ConvertirMonedaDto`  
  - Archivos:  
    - `src/moneda.service.ts`  
    - `src/moneda.controller.ts`  
    - `src/dto/convertir-moneda.dto.ts`

- **Funciones con una sola responsabilidad:**  
  - Cada función/método realiza una única tarea específica.  
  - Ejemplo: El método `convertir` en el servicio solo realiza la conversión de moneda.  
  - Archivo:  
    - `src/moneda.service.ts`

- **Separación de responsabilidades:**  
  - La lógica de negocio está separada del controlador y del DTO.  
  - Archivos:  
    - `src/moneda.controller.ts`  
    - `src/moneda.service.ts`  
    - `src/dto/convertir-moneda.dto.ts`

- **Validación y manejo explícito de errores:**  
  - Se valida si la moneda es soportada y se lanza un error claro si no lo es.  
  - Archivo:  
    - `src/moneda.service.ts`

- **Código limpio y sin duplicidad:**  
  - No se deja código comentado o sin usar.  
  - Archivo:  
    - Todo el código fuente

- **Pruebas unitarias claras:**  
  - Los tests usan nombres descriptivos y verifican el comportamiento esperado.  
  - Archivo:  
    - `src/moneda.controller.spec.ts`




