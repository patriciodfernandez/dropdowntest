# Challenge TuGerente

Este challenge fue creado con React [Link ](https://tugerentechallenge.netlify.app/).

## API solicitada

Estuve con unos problemas para consultar la API que me dieron, así que decidí utilizar otra.
En est caso es una que trae un array con 5000 elementos.

[API ](https://jsonplaceholder.typicode.com/photos/)

### Problemas con la API

Si bien, desde postman podía hacer perfectamente el pedido, desde el código NO. Me salía
error 401 de authenticación. Trate de varias formas(sintacticas), en distintas funciones establecer un
header para la petición pero no pude. Por lo que tuve que acudir a solicitar la data de otra API sin
HEADER de Authenticacion.

### Problemas con la Paginación

Aplique un modulo de React para paginación llamado "react-paginate"
npm i react-paginate --save.

["react-paginate" ](https://www.npmjs.com/package/react-paginate)

En un principio me anduvo. Pero al modificar unos datos de los hooks no me hacia el calculo de páginas.
Si bien con un poco mas de tiempo se que podría modificalo a gusto.

### Dialogo personal

Pido disculpas por la demora. La verdad es que me metí a ver lo de la petición a la APi
y la investigación me llevo mas tiempo que el necesario. Pienso que estoy fallando en unas
lineas de código para que me authorize y pueda hacer el pedido que quiera. Lo bueno es que aprendí
bastante desde los dos lados Back y front en cuanto a Autorizaciones, hastta la configuración de un Proxi. La paginación se que puedo dominarlo solo que necesito mas tiempo. Sin más les agradezco por esta oportunidad de
aprender y mejorar. Saludo.
