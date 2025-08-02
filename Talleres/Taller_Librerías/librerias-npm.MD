## Registrarse en NPM

Lo primero que vamos a hacer es crear una nueva cuenta en: [NPM](https://www.npmjs.com/)

Necesitamos tener lista la cuenta para los siguientes pasos.

## Crear carpeta 

En este trabajo, vamos a trabajar con hasta 4 companieros para crear una calculadora.

Cada uno de los estudiantes va a seleccionar una operacion:

-  Sumar
-  Resta
-  Multiplicacion
-  Division

Puede ser 2 o hasta 4 operaciones en el grupo.

Cada uno de los estudiantes va a crear una `carpeta` en su repositorio con las iniciales de su nombre + este prefijo `2025a-swgr1-` + operacion. Al final el ejemplo completo seria de la persona Vicente Adrian Eguez Sarzosa:

-  Para la suma: `2025a-swgr1-vaes-suma`
-  Para la resta: `2025a-swgr1-vaes-resta`
-  Para la multiplicacion: `2025a-swgr1-vaes-multiplicacion`
-  Para la division: `2025a-swgr1-vaes-division`

## Login a npm
Vamos a logearnos en la terminal con el comando:

```bash
npm login
```

Se abre el navegador presionando `enter` y luego ya estamos logeados en nuestra cuenta.

## Crear proyecto npm

`Dentro` de la carpeta (por ejemplo, para la suma `2025a-swgr1-vaes-suma`) vamos a crear un nuevo proyecto de `npm` con el siguiente comando:

```bash
npm init
```

Nos va a solicitar algunas respuestas en la consola, serian estas (depende del modulo que esten haciendo, en este caso es `2025a-swgr1-vaes-suma`):

```
package name: (2025a-swgr1-vaes-suma)
version: (1.0.0)
description: 
entry point: (index.js)
test command: 
git repository: 
keywords: 
author: Vicente Adrian Eguez Sarzosa
license: (ISC)
Is this OK? (yes)
```

Al finalizar esto, vamos a ver que se creo un nuevo archivo `package.json` con este contenido:

```json
{
  "name": "2025a-swgr1-vaes-suma",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Vicente Adrian Eguez Sarzosa",
  "license": "ISC",
  "description": ""
}
```

## Crear archivo exportando la funcionalidad

Para exportar la funcionalidad debemos de usar el mismo archivo que pusimos como `main` en nuestro `package.json`. En nuestro caso dejamos el por defecto, que es `index.js`.

Creamos un nuevo archivo `index.js` y colocamos la logica pertinente (suma, resta, multiplicacion o division)

En mi caso voy a poner la logica de la suma, el ejemplo seria este:

```js
exports.suma = (numeroUno, numeroDos) => {
    const numeroUnoCasteado = Number(numeroUno);
    const numeroDosCasteado = Number(numeroDos);
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        throw new Error('No son numeros validos')
    }
    return numeroUnoCasteado + numeroDosCasteado;
}
```
## Publicar modulo localmente (solo en ese computador)

Vamos ahora a publicar el modulo para que cualquier persona pueda usarlo. Para esto vamos a usar el comando dentro de la misma carpeta:

```bash
npm link
```

Con esto vamos a poder usar localmente el paquete, lastimosamente para publicarlo deberiamos de usar el comando:

```bash
npm publish
```

Pero, hay un control de SPAM para los paquetes que no nos deja publicarlo facilmente.

## Instalar el modulo

Para usar el modulo vamos a crear otro archivo `package.json` y vamos a instalar los paquetes para usarlos.

En este caso yo voy a crear este nuevo modulo en una nueva carpeta llamada `librerias-usadas` con el comando `npm init` nuevamente. El nombre del paquete y lo demas no interesa en este caso:

```bash
npm init
```

El contenido del archivo con todo por defecto en mi caso es:

```bash
{
  "name": "librerias-usadas",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```

Ahora vamos a instalar el paquete con el siguiente comando (este comando depende del nombre del paquete que creamos anteriormente):

```bash
npm link 2025a-swgr1-vaes-suma
```

Aqui usamos otra vez el comando npm link con el nombre de nuestra libreria, esto va a instalarla localmente y podremos usarla.

## Usar el modulo

Para usar el modulo usamos un nuevo archivo `index.js` con el siguiente contenido:

```js
const paqueteSuma = require('2025a-swgr1-vaes-suma');

const respuesta = paqueteSuma.suma(1, 2);

console.log('La respuesta es: ', respuesta);
```

Notemos que estamos importando el modulo con el nombre que pusimos `2025a-swgr1-vaes-suma`. 

Ahora podemos ejecutar el archivo con este comando:

```bash
node index.js
```

y el resultado seria:

```
La respuesta es:  3
```