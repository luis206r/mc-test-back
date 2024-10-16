# Prueba Técnica Fullstack Monstruo Creativo - Backend

## Descripción del Proyecto
Este proyecto es una aplicación web que gestiona usuarios con diferentes roles y controla el acceso a ciertas rutas en función del tipo de usuario. El backend está desarrollado utilizando Payload CMS, MongoDB, y Express, junto con TypeScript para garantizar un desarrollo eficiente y seguro.

## Objetivo
El objetivo principal es implementar un sistema de autenticación y gestión de roles que permita controlar el acceso a las rutas y datos según el rol del usuario.

## Tecnologías Utilizadas
- **Payload CMS**: CMS para la gestión de contenido y usuarios.
- **MongoDB**: Base de datos NoSQL para almacenar la información de los usuarios.
- **Express**: Framework para construir la API REST.
- **CORS**: Middleware para habilitar CORS y permitir solicitudes desde el front-end.
- **TypeScript**: Lenguaje de programación que permite un desarrollo más estructurado y con tipado estático.
- **Port**: El servidor se ejecuta en el puerto `3001`.

## Requerimientos del Proyecto

1. **Autenticación de Usuarios**
   - Implementación de un sistema de registro y login utilizando la funcionalidad nativa de autenticación de Payload CMS.
   - Los usuarios deben ser asignados a uno de los siguientes roles: Admin, EditorCatálogo o EditorAmbiente.
   - Control de acceso a las rutas protegidas basado en el rol del usuario.

2. **Roles y Permisos**
   - **Admin**: Acceso completo a todas las rutas en el backend.
   - **EditorCatálogo**: Acceso a rutas de lectura y funcionalidades de creación y edición en el catálogo de tienda (nombre del ítem, precio, etc.).
   - **EditorAmbiente**: Acceso a rutas de lectura y funciones de creación y edición en registros de consumo de agua por día (día de registro, cantidad en litros, etc.).

3. **Implementación de Rutas**
   - Definición de rutas para el registro y login de usuarios.
   - Rutas protegidas que validan el rol del usuario antes de permitir el acceso a datos sensibles.
   - Ruta para manejar el acceso no autorizado que redirige a los usuarios a `/unauthorized` si intentan acceder a rutas no permitidas.

## Instalación
1. Crear la base de datos en mongodb
2. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```
3. Editar o crear el archivo dotenv y agregar las variables de entorno respectivas:
   ```
    DATABASE_URI=mongodb://127.0.0.1/{nombre de la base de datos}
    PAYLOAD_SECRET={definir un secret}
    opcional: PAYLOAD_SEED=T //para sedear info. Hacer 1 vez. Los items se crearon manualmente pero se puede agregar logica para cargar data en seed.ts
   ```
4. habilitar las lineas de codigo de cors(Esto permite que los http request sean validos solo desde la ruta del front. para probar manualmente el cms, comentar):
   ```
   ...
   //usar solo cuando se testea el front
   //csrf: ["http://localhost:3000"],
   //cors: ["http://localhost:3000"],
   ...
   ```
5. Ejecutar el backed
   ```
    npm run dev
   ```
