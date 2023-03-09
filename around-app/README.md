# Around US with React 👩‍💻

Este proyecto se basa en la refactorización del proyecto alrededor de los Estados Unidos utilizando React (https://github.com/aracely33/web_project_4_esp)

## Comenzando 🚀
copia es repositorio de (https://github.com/aracely33/around-react_es)


Mira **Deployment** para conocer como desplegar el proyecto.


### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Pre-requisitos 📋

#### Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment.

For information on using Node.js, see the [Node.js website][].

The Node.js project uses an [open governance model](./GOVERNANCE.md). The
[OpenJS Foundation][] provides support for the project.

Contributors are expected to act in a collaborative manner to move
the project forward. We encourage the constructive exchange of contrary
opinions and compromise. The [TSC](./GOVERNANCE.md#technical-steering-committee)
reserves the right to limit or block contributors who repeatedly act in ways
that discourage, exhaust, or otherwise negatively affect other participants.


## Despliegue GitHub Pages 📦
Instala el paquete gh-pages como una dependencia de desarrollo:
 npm install gh-pages --save-dev
  
Agrega un nuevo campo homepage a package.json y configúralo así:
 "homepage": "https://{username}.github.io/{repo-name}",
  
Aquí debes reemplazar {username} con tu nombre de usuario de GitHub, y {repo-name} con el nombre del repositorio (para este proyecto, debe ser around-react_es).
Agrega los scripts predeploy y deploy:
 "scripts": {
   ...
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
  }
  
Observa que ahora estamos usando el directorio build para el despliegue. Esta carpeta se crea automáticamente y se puebla con los archivos estáticos necesarios al ejecutarse el comando npm run build.
Ejecuta el comando npm run deploy. El contenido de la carpeta build se moverá a remote branch de gh-pages.
Ve a los ajustes de tu repositorio en GitHub, desplázate hacia abajo hasta la sección "Pages" y cambia la fuente (source) de branch a gh-pages.
Ahora tu proyecto está disponible en la URL que especificaste en el campo homepage de package.json.

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

- [React](https://reactjs.org/) - El framework web usado
- [NodeJs](https://nodejs.org/es/) - Manejador de dependencias







