# Cromo de NFt del perfil de usuario 
## Reto individual semana 2 del Summer Coding League de Nuwe
## Link al demo de la solución [ nuwe/mapping](https://nuwe-mapping.vercel.app)
### User stories 📝
```
Para este reto proponemos lo siguiente:

Task-1: Integrar una API de mapas en el front y visualizar un por pantalla un mapa que ocupe 2/3 de la pantalla y el otro 1/3 que lo ocupe un div para colocar un menu de selección y búsqueda.
Task-2: Maquetar la barra de búsquedas lateral sin incluir ningún tipo de funcionalidad
Task-3: Los elementos Destacados son botones de selección que permiten hacer búsquedas filtradas en la APIs. Estos botones al ser seleccionados deben cambiar de color y permancer así hasta que se vuelvan a clicar o se genere una nueva búsqueda.
Task-4: Al hacer clic en el botón buscar si no se ha encontrado nada debe aparecer un diálogo que se lo transmita al usuario. Después de esto, todos los filtros de búsqueda se tienen que reiniciar.
Task-5: Aplicación de filtros de búsqueda:
Al clicar en cada uno de los destacados debe mostrar los restaurantes, parques o bares que hay en un radio de unos 10Km al rededor del usaurio.
Si se hace click en varios, se tiene que volver a aplicar los filtros para ver tantos lugares como filtros se han seleccionado.
Por defecto si la distancia desde mi posición no ha sido movida, establecerla en 10km.
Task-6: Finalmente además de poder hacer búsqueda por filtros, el usuario debe poder hacer búsqueda por autocompletado a través de la barra de búsqueda.
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
