# Usa la imagen oficial de Node.js v22.15.0
FROM node:22.15.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

 
# Copiar los archivos de la aplicación al contenedor
COPY package*.json  ./ 
 
# Instalar las dependencias
RUN npm install
 
# Copiar los archivos dist, package.json y package-lock.json al contenedor
COPY dist ./

# Compila el código TypeScript
RUN npx tsc

# Expone el puerto 3000 (ajusta si tu app usa otro)
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "dist/main.js"]