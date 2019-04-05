# HotelsApp

La aplicación es un listado de hoteles con sus descripciones, con la posibilidad de filtrar (por nombre o por cantidad de estrellas).
Funciona con una API creada en NodeJs, por lo que requiere tener dicha api levantada.
El listado de hoteles muestra por ejemplo cuantas estrellas tiene cada hotel, sus amenities, su precio por noche, y una imagen de como se ve el hotel.


Para utilizar la aplicación se requiere tener levantada la Api de Node JS (https://github.com/Eihwazzz/hotels-api.git).
Se requiere tener instalado Angular CLI. Para instalar via npm se deberá tener instalado Node JS y ejecutar el comando 'npm install -g @angular/cli' para instalarlo a nivel global.


Utiliza el comando 'ng serve' dentro de la carpeta del proyecto para iniciar la aplicación en modo desarrollo.
Navega a 'http://localhost:4200/' para visualizar la aplicación


## Build

Utiliza el comando 'ng build' para compilar el proyecto. Se creará una carpeta 'dist/'. 
Para compilar en modo productivo utiliza el flag --prod (ng build --prod).
El código sera minificado y en cierto modo ofuscado.

Para correr la aplicación con el código productivo, puedes utilizar 'ng serve --prod'

