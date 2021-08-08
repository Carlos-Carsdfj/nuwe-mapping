# MAPPING, FIND YOUR PLACE
## Reto individual semana 3 del Summer Coding League de Nuwe
## Link al demo de la solución [ nuwe/mapping](https://nuwe-mapping.vercel.app)
### User stories 📝
```
Para este reto proponemos lo siguiente:

*Task-1: Integrar una API de mapas en el front y visualizar un por pantalla un mapa que ocupe 2/3 de 
la pantalla y el otro 1/3 que lo ocupe un div para colocar un menu de selección y búsqueda.
*Task-2: Maquetar la barra de búsquedas lateral sin incluir ningún tipo de funcionalidad
*Task-3: Los elementos Destacados son botones de selección que permiten hacer búsquedas 
filtradas en la APIs. Estos botones al ser seleccionados deben cambiar de color y permancer así 
hasta que se vuelvan a clicar o se genere una nueva búsqueda.
*Task-4: Al hacer clic en el botón buscar si no se ha encontrado nada debe aparecer un diálogo que se
lo transmita al usuario. Después de esto, todos los filtros de búsqueda se tienen que reiniciar.
*Task-5: Aplicación de filtros de búsqueda:
Al clicar en cada uno de los destacados debe mostrar los restaurantes, parques o bares que hay en un radio 
de unos 10Km al rededor del usaurio.
Si se hace click en varios, se tiene que volver a aplicar los filtros para ver tantos lugares como filtros se
han seleccionado.
Por defecto si la distancia desde mi posición no ha sido movida, establecerla en 10km.
*Task-6: Finalmente además de poder hacer búsqueda por filtros, el usuario debe poder hacer búsqueda por autocompletado
a través de la barra de búsqueda.
```


## Solución  al desafío 

  Tecnología usada
  ---------------
 
 * ### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `#Lenguaje`
    * Javascript
    * Css
    * Html
 * #### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Herramientas` 
    * **Next.js**: Framework construido sobre React. Next nos permite, instalando una sola dependencia, tener configurado todo lo que necesitamos para crear una aplicación de React usando Babel, Webpack, server render y muchas otras técnicas. Tiene la capacidad para generar sitios estáticos (SSG), usar server-side rendering (SSR) o una combinación de ambos según la necesidad de cada página.


* #### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) `Dependencias` 
    * **Material-ui/core**: Proporciona una serie de componentes para React js, agilizando el desarrollo 
del diseño de interfaz de usuario así como algunos otros componentes que facilitan algunos comportamientos extensos o repetitivo en material de código.

   * **Material-ui/icons**: Nos provee de todos los iconos que ofrece  **Material**.

   * **Material-ui/styles**: Solución de estilos de Material-ui puede ser usado con cualquier
          componente de React aún si no se esta utilizando material-ui/core en el 
          proyecto.  
   
   * **React-router-dom**: Colección de componentes de navegación para usar en Reac, con esta librería
          podemos obtener un enrutamiento dinámico es la magia por así decirlo que nos permite también renderizar componentes mediante rutas.        
  
   * **Mapbox-gl**: Colección de bibliotecas de código abierto desarrolladas por Mapbox para insertar los mapas deslizantes adaptables en las aplicaciones Web, móviles, y de escritorio.    

   * **Mapbox-gl**: Es una una libreria de componentes de React diseñado para proveer una Api de React compatible con **Mapbox-gl** e integrarlo de una manera mas facil a nuestros proyectos con **React**.

## Directorio en arbol del proyecto

```
├── next.config.js
├── package.json
├── package-lock.json
├── pages
│   ├── api
│   │   └── hello.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public
│   ├── favicon.ico
│   ├── food.svg
│   ├── locationIcon.svg
│   ├── Nuwe_Mono.svg
│   ├── Search.svg
│   ├── selectedFood.svg
│   ├── selectedSubtract.svg
│   ├── selectedUnion.svg
│   ├── Subtract.svg
│   ├── Union.svg
│   └── vercel.svg
├── README.md
├── src
│   ├── components
│   │   ├── FindYourPlace
│   │   │   ├── index.js
│   │   │   ├── SearchForm.js
│   │   │   └── SvgIcons.js
│   │   ├── MapContainer.js
│   │   └── Map.js
│   ├── context
│   │   └── useContext.js
│   ├── hooks
│   │   ├── useCheckButton.js
│   │   └── useSearch.js
│   └── service
│       └── placesSearch.js
├── styles
│   └── theme.js
└── yarn.lock

```

## Sobre la solución 

Para este desafio toma la desicion de trabajar con **Nextjs** por la facilidad con que este puede crearnos citios rapidos y con buen Seo,
tambien  use **Material-ui** para el diseño por lo que la estructura base de este proyecto fue siguiendo el ejemplo que mismo material ui nos provee 
en su pagina y que a su vez es siguiendo el ejemplo que nos entrega el mismo **Next.js**, [Material-ui/example](https://github.com/mui-org/material-ui/tree/master/examples/nextjs).

**Material-ui** Fue diseñado desde cero con la restricción del renderizado desde el lado del servidor pero hay que implementarlo correctamente en nuestro proyecto de **Nextjs** para aprovechar el uso de este Framework al maximo, y evitar el parpadeo que podemos observar en  algunas paginas en el que  el contenido html es cargado primero y luego espera al que el cliente inyecte el css requerido. 

Para lograr una perfecta integracion del renderizado  en el servidor se hace uso de [ServerStyleSheets](https://material-ui.com/es/styles/api/#serverstylesheet)
este lo implementaremos en el **_document.js** el cual es un archivo que se procesa solo del lado del servidor y se usa para Costumezar el Documento que viene por defecto en [next/Document](https://nextjs.org/docs/advanced-features/custom-document)
```
├── pages
│   ├── api
│   │   └── hello.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js

```
###
```
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../styles/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel='icon'href='/Nuwe_Mono.svg' />
          <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <body style={{ background: theme.palette.background.main }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


MyDocument.getInitialProps = async (ctx) => {
 
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

```
Lo que estamos haciendo aquí es recopilar los estilos CSS necesarios generados por Material-UI e inyectarlos en el documento como una cadena.
De esta forma evitamos cualquier parpadeo cuando el cliente recibe la página.



### Quitando css proveniente del lado del cliente
Ahora lo que necesitamos es evitar que next inyecte los estilos css en el lado del servidor que vienen del lado del cliente
