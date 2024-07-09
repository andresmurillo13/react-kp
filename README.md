# React + Vite

Este proyecto utiliza Vite para configurar una aplicación de React con TailwindCSS y algunas reglas de ESLint.

## Sobre el Proyecto

- **Contexto**: Utiliza el `useContext` de React propio debido a la naturaleza pequeña del proyecto.
- **Reducer**: Implementa un reducer para manejar las acciones del chat.
- **Autenticación**: La autenticación maneja JWT. Al hacer login, el token se almacena en el local storage, gestionando las sesiones tanto del chat como del usuario.
- **Usuarios Creado**:
  - `test6@test.com` / `123456`
  - `test1@test.com` / `123456`
  - `test2@test.com` / `123456`
- **Diseño**: Utiliza TailwindCSS para el diseño de la aplicación.
- **Estructura**: La estructura de la aplicación es básica, con componentes, un enrutador dinámico con lazy load y un hook personalizado para la conexión con Socket.IO.

## Instalación y Configuración

Sigue estos pasos para levantar el proyecto:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/andresmurillo13/react-kp.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd react-kp
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Scripts Disponibles

En el proyecto, puedes ejecutar los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.

## Plugins Oficiales

Este proyecto utiliza el plugin oficial de Vite para React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para Fast Refresh.
