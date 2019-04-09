Las 2 aplicaciones se suben por separado para que la api pueda ser reutilizable por otra aplicación.


# hotels-api

Rest Api para filtro y listado de Hoteles.

IMPORTANTE: Para levantar la api se debe tener instalado NodeJs

Se debe situar en el path donde se encuentra index.js, y en la consola de comandos (ej: git bash), 
es necesario instalar las dependencias declaradas en package.json, dicha tarea se realiza utilizando el comando 'npm install'.

Luego de que se descarguen las dependencias, se inicia la aplicación con el comando 'node index' (situado en el mismo path).

Al finalizar se informará por consola que la aplicación esta escuchando en el puerto '3000', ya se inició la aplicación y la 
api esta disponible para ser utilizada.


# hotels-app

La aplicación es un listado de hoteles con sus descripciones, con la posibilidad de filtrar (por nombre o por cantidad de estrellas).
Funciona con una API creada en NodeJs, por lo que requiere tener dicha api levantada.
El listado de hoteles muestra por ejemplo cuantas estrellas tiene cada hotel, sus amenities, su precio por noche, y una imagen de como se ve el hotel.


Para utilizar la aplicación se requiere tener levantada la Api de Node JS (https://github.com/Eihwazzz/hotels-api.git).

Aclaración: la carpeta dist, al igual que otros archivos, no son excluidos (utilizando .gitignore) por motivo de la entrega.


Para correr la aplicación con el código productivo, se debe estar dentro del path /hotels-app y correr el comando 'node server', luego ingresar a la url 'http://localhost:3002/'.

