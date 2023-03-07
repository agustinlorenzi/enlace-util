# Ecommerce de Libreria llamado ENLACE ÚTIL.
#### Creado por Agustin Lorenzi.

* LINK AL REPOSITORIO : https://github.com/agustinlorenzi/enlace-util
* LINK AL DEPLOY: https://keen-cranachan-ce8048.netlify.app/

## Explicación del Proyecto.

Se trata de una tienda de libreria virtual, la misma cuenta con un catalogo de productos que puede verse completo
o filtrado por categorias. Como asi tambien cada producto puede observarse en mas detalle para luego ser agregado
en el carrito de compras en la cantidad que el usuario desee y el stock permita.
Ya sea al catalogo, las categorias o el carrito se puede acceder en cualquier momento en el trayecto de la compra.
En el carrito de compra puede observarse cada item elegido con su cantidad, subtotal y el total de la compra. Como
asi tambien un Formulario para que el usuario pueda completar sus datos, confirmar estos y luego la compra.

## Instalaciones para el Proyecto.

### En la creación del proyecto.

En primera medida para su creación, abri la carpeta del proyecto en el Visual Studio Code e instale React con 
npx create-react-app enlace-util.

### Durante el desarrollo del proyecto.

* npm install react-router-dom, para organizar el enrrutado en mi app.
* npm install react-bootstrap bootstrap para darle estilo al proyecto. Tambien use piezas claves de esta libreria tales como: Navbar, Card, Botones, etc.
* npm install sweetalert2 para los alert personalizados, en los que les aviso al usuario que sucede a partir de
ciertas acciones de este.
* npm install firebase, usado como base de datos, para guardar los productos con todas sus caracteristicas y stock.
Tambien las ordenes de compra de los clientes. Cada vez que se confirma una orden de compra el stock se actualiza en la SPA.

## Lo que se hizo durante el proceso de construcción de la SPA.

* Busque modularizar lo mas coherentemente la aplicación entre distintos componente padres e hijos para que cada uno tenga una tarea bien definida. 
* Use distintos tipos de hook para hacer persistentes datos, traer información y renderizar ciertos elementos
en ciertos momentos definidos.
* Se usa Intercambiabilidad para cambiar de botones en el detalle del carrito. Cuando se presiona "Agregar al carrito", este boton desaparece y en su lugar aparecen dos botones, "Terminar Compra" y "Seguir Comprando",
que permite facilmente al usuario tomar una desición hacia que camino seguir.
* Cree un contexto (CartContext.js) para incluir en el funciones que iban a usarse por varios componentes.
* Se utilizaron todas las funciones necesarias para la conformación y manipulación del carro de compras como: 
  - Agregar cantidades de productos calculando subtotales y totales.
  - Se puede eliminar productos individualmente o vaciar todo el carro.
  - Confirmar la compra, guardarla en Firebase y descontar el stock que luego se actualizara en la app.
  - Agregar Stock en el carro de un mismo producto, pero controlando que no se pase el agregado y lo ya puesto del
  stock existente.
  - Hay un boton que permite retornar al catalogo en cualquier momento.
  - El circulo del simbolo del carrito desaparece cuando el carrito esta vacio o en cero, y aparece con el numero
  de items sumados en cantidad total cuando el usuario compra algo.
* Agregue un componente Loader para avisar al usuario de las esperas en la carga de productos.
* El Navbar se encuentra en una posición muy convenientemente ubicado en la parte superior, peromitiendo el acceso
claro a todos los sectores de la app. 



# Getting Started with Create React App

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
