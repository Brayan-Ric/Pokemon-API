# API Pokémon

¡Bienvenido a la API Pokémon! Esta API está desarrollada en JavaScript utilizando Express y algunas librerías populares para pruebas.

## Librerías utilizadas

- **Chai**: Utilizamos Chai como nuestra biblioteca de aserciones para escribir pruebas claras y legibles.
    - Install: npm install -D mocha chai

- **Chai Superagent**: Chai Superagent es una extensión de Chai que facilita la realización de pruebas de integración para solicitudes HTTP con Superagent.
    - Install: npm install chai-superagent superagent

- **Supertest**: Supertest es una librería de pruebas de integración para Node.js que proporciona una API para realizar solicitudes HTTP y asertar sobre las respuestas.
    - Install: npm install supertest --save-dev

- **Express**: Express es un marco web de Node.js que nos ayuda a construir fácilmente nuestra API y manejar rutas, solicitudes y respuestas de manera efectiva.
    - Install: npm install express

**Nota**: No es necesario instalar cada biblioteca individualmente. Puedes instalar todas las librerías a la vez utilizando el comando `npm install`. Este comando está diseñado para facilitar la instalación de las dependencias necesarias para los proyectos de los alumnos de Mastermind.

## Cómo empezar

1. **Instalación de dependencias**:
   Asegúrate de tener Node.js y npm instalados. Luego, ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

2. **Ejecutar la aplicación**:
   Inicia la aplicación con el siguiente comando:

   ```bash
   npm start (Aun no valido, el proyecto no esta terminado)
   ```

   La aplicación estará disponible en `http://localhost:3000`.

3. **Ejecutar pruebas**:
   Utilizamos pruebas automatizadas para garantizar el correcto funcionamiento de nuestra API. Ejecuta las pruebas con:

   ```bash
   npm run test 
   ```

   Esto ejecutará las pruebas definidas en el directorio de pruebas y te informará sobre los resultados.

## Rutas disponibles

- **GET /**: Retorna un saludo "Hello World!".

- **POST /team/pokemons**: Endpoint para agregar Pokémon al equipo.

- **GET /team**: Obtiene información sobre el equipo Pokémon.

- **DELETE /team/pokemons:pokeid**: Elimina un Pokémon específico del equipo.

- **PUT /team**: Actualiza la información del equipo Pokémon.

¡Diviértete explorando y desarrollando con la API Pokémon!




