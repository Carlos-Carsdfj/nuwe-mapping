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

   * **React-map-gl**: Es una una libreria de componentes de React diseñado para proveer una Api de React compatible con **Mapbox-gl** e integrarlo de una manera mas facil a nuestros proyectos con **React**.

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



<img src="https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/readmeImagenes%2Fbuscar.svg?alt=media&token=9129a939-ecd5-4e3a-bfa7-ec8d028598dd" width="200" height="200" />


 ## Calidad del codigo
 Ve el el resultado del analicis del codigo generado para este reto
### [CodeFactor](https://www.codefactor.io/repository/github/carlos-carsdfj/nuwe-mapping)
### [Sonarcloud](https://sonarcloud.io/dashboard?id=Carlos-Carsdfj_nuwe-mapping)


## Sobre la solución 
<img src="https://miro.medium.com/max/2000/1*8mjuQTYRCSniAAK9jJeOSA.png" width="400" height="200" />


Para este desafio toma la desicion de trabajar con **Nextjs** por la facilidad con que este puede crearnos citios rapidos y con buen Seo,
tambien  use **Material-ui** para el diseño por lo que la estructura base de este proyecto fue siguiendo el ejemplo que mismo material ui nos provee 
en su pagina y que a su vez es siguiendo el ejemplo que nos entrega el mismo **Next.js**, [Material-ui/example](https://github.com/mui-org/material-ui/tree/master/examples/nextjs).

**Material-ui** Fue diseñado desde cero con la restricción del renderizado en  el lado del servidor pero hay que implementarlo correctamente en nuestro proyecto de **Nextjs** para aprovechar el uso de este Framework al maximo, y evitar el parpadeo que podemos observar en si  el contenido html es cargado primero y luego espera al que el cliente inyecte el css requerido . 

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
#
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
De esta forma mandamos el css necesario al cliente y  evitamos cualquier parpadeo cuando el cliente recibe la página y solo tenga que diseñarla.



### Quitando css proveniente del lado del cliente:
Ahora lo que necesitamos es eliminar los  estilos css en el lado del servidor que se inyectaron desde el lado del cliente
con un useEffect  eliminamos dichos estilos y esto lo hacemos en el _app.js .


```
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme.js'
import { MapContextProvider } from '../src/context/useContext.js'
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Nuwe</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MapContextProvider>
          <Component {...pageProps} />
        </MapContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
```

Al hacer esto, permitimos que el cliente se encargue de diseñar la aplicación tan pronto como esté lista.





### Renderizando un mapa en nuestra aplicación con Mapbox:
<img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mapbox_logo_2017.svg" width="200" height="200" />
Se utilizo este proovedor de mapas en linea por por la cantidad de de herramientas, librerias y Sdk que posee, tambien por  la personalizacion y el estilo que nos ofrece , es un proovedor que no nos limita tanto como **Google map** y otras plataformas, utiliza la base de datos tanto de   **OpenStreetMap** como de la **NASA**.

Si bien es verdad que **google map**  es una poderosa plataforma y que a demas de rapida posee buena documentación y tiene buenas herramientas nos limita el desarrollo de aplicaciones y ademas por la  información bancaria que aunque no fueramos  a necesitar nunca pagar nada tenemos que estar obligados a proveerle si por que si, por esta razon fue desplazado como opcion viable para este proyecto.


### Utilizando React-map-gl:

El mayor uso de esta libreria y sus componentes estan en el archivo **Map.js**.


```
│   ├── components
│   │   └── Map.js
```
#
Las dependencias claves de este componente son estos:
```
import { useState } from "react"
import ReactMapGL, { Marker, Popup, GeolocateControl} from "react-map-gl"
import useMapContext from '../context/useContext.js'
```
#
Una de las primeras cosas que podemos notar en este este componente  es el uso de un useState para guardar propiedades
que se le pasaran a otro  componente que renderizara el mapa, al **ReactMapGL**
esto debido a que el dicho componente necisita cambiar sus valores constantemente dependiendo de la interacción que tenemos con el mapa y para ver los cambios en tiempo real en una app es imprescindible el uso de usState en toda propiedad que cambie y se renderice dicho cambio al instante 

```
  const [ viewport, setViewport] = useState({
  // The latitude and longitude of the center of London
    width:'100%',
    height:'100%', 
    latitude: 51.5974,
    longitude: -0.1278,
    zoom: 10,
  });
```
 
#
```
  const { currentLocation, setCurrentLocation } = useMapContext()
```
Este es el estado que representa el punto inicial de nuestra localizacion 
por defecto viene con los mismo datos latitud y longitud con el que iniciamos las props del 
**ReactMapGL** pero veremos mas adelante que estos datos pueden cambiar y necesitaremos en siempre los datos 
actuales del punto centro de nuestra localizacion para ser usados mas adelante en este componente y en el servicio **placesSearch.js**
por lo que los datos los tendremos en un estado global echo con useContext para ser compartido de forma mas facil y eficiente 
#

```
 <ReactMapGL
  {...viewport}
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken={process.env.NEXT_PUBLIC_KEY}
  onViewportChange={setViewport}
  >
 ```
 Este es el ejecutador de la magia principal el **ReactMapGl**
 le pasamos las props configuradas antes en el useState y le pasamos tambien el 
 control de dicho stado ademas del token publico necesario que nos provee mapbox como usuario 
 para que el componente pueda hacer las peticiones necesarias y funcionar sin problemas 
 
 ademas podemos elegir el tipo de estilos todo esto lo tienes mejor definido en la documentación 
 [mapbox-styles](https://docs.mapbox.com/studio-manual/guides/map-styling/) y [react-map-gl/getstarted](https://visgl.github.io/react-map-gl/docs/get-started/get-started)
#

### Geolocalizacion:
<img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Relojlaboral124.png" width="200" height="200" />
Lo sencillo de usar el componente **ReactMapGL** es que podemos pasarle como hijo ciertos componente que el detectara como componentes de control,componentes  de navegacion, marcado entre otros .  Asi mismo podemos pasarle el **GeolocateControl**.

   ```
   <GeolocateControl
      style={geolocateControlStyle}
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={true}
      onGeolocate={handler}
      auto
    />
   ```
   
 [GeolocateControl](https://visgl.github.io/react-map-gl/docs/api-reference/geolocate-control), este componente nos sirve para la geolocalización y asi mismo la reubicación de nuestro punto central en el mapa en **onGeolocate** la pasamos una funcion con el que podemos recuperar una serie de datos cuando ocurre la geolocalizacion en tre ellos la latitud y longitud que guardaremos en nuestro **setCurrentLocation**
 #
 
 
 ### Marcando el mapa:
   las **Marker** nos sirve para dibujar en el mapa 
   
   ```
      <Marker latitude={currentLocation[1]} longitude={currentLocation[0]}
        offsetLeft={0}
        offsetTop={0}
      >
        <Image src='/locationIcon.svg' alt='current location icon' 
          width={20}
          height={20}
        />
      </Marker>
   ```
   Con la **currentLocation** podemos marcar el lugar central de donde estamos localizados para no perdernos de vista en ningun momento
   
   
   ```
         locations.map((location) => (
        <div key={location.id}>
          <Marker 
            latitude={location.center[1]}
            longitude={location.center[0]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <IconButton 
              className={classes.iconButton} 
              onClick={() => {
                setSelectedLocation(location)
              }}
            >  {location.type_search === 'pub' && <DrinkIcon className={classes.pubIcon} />}
              {location.type_search === 'park' && <NatureIcon  className={classes.parkIcon} />}
              {location.type_search === 'restaurant' && <RestaurantIcon className={classes.restIcon}/>}
            </IconButton>           
          </Marker>
          {selectedLocaton.id === location.id ?
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={ location.center[1] }
              longitude={ location.center[0]}
            >
              {location.place_name}
            </Popup> 
            : false            
          }
        </div>
   ```
   Aprovechando la funcionalidad de las **Marker**
   marcamos todos los lugares que se encuentran en el **locations**,  este es un array  que podemos recuperar de nuestro **useMapContext**
   y que tiene todos los resultados de la busqueda de lugares  esto sera  relevante mas adelante,
  tambien colocamos cierto icono caracteristico dependiente del **type_search** en el objeto recuperado de la iteración del array. 
  
  Le colocamos tambien un **Popup** ligado en cada iteración para pode ver información de cada lugar  al seleccionarlo    
 
 
 ### Haciendo peticiones de busqueda:
 
 La petición  de los lugares que deseamos encontrar
 se hace en el siguiente archivo 
 
 ```
  │── service
       └── placesSearch.js
 
 ```
 ```
  const  placesSearch= async ({ place, bbox }) =>{

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?bbox=${bbox[0][0]},${bbox[0][1]},${bbox[1][0]},${bbox[1][1]}&access_token=pk.eyJ1IjoiY2Fyc2QtZmoiLCJhIjoiY2twZnlwN3RzMDNyajJybXpobDQxbzNoMiJ9.u2-iSz39PdqG5BRvZVZ2ag`
 
  try{
   const resp =  await fetch(url).then(response =>response.text()).then(res => JSON.parse(res))
    return resp.features.map(res =>{
      return {
        ...res,
        type_search:place
      }
    })
  } catch(error){
    console.error(error)
    return 
  }
     
}

export default placesSearch
 ```
 En este url tenemos **place** que es el tipo de lugar que buscamos, **bbox**que es el rango que busqueda desde nuestra localizacion actual 
 y el token de acceso el cual como se dijo antes es un token publico y no hay problema el exponerlo 
 requcperamos los datos de dicha petición y returnamos un  array.map le agregamos a cada objeto del array la información del tipo de lugar del que se realizo la busqueda esto se hace porque  nuestro **locations**(array contenido en  **useMapContext** )tendra varios tipos de busqueda de varios lugares y necesitamos diferenciarlos de alguna forma.
