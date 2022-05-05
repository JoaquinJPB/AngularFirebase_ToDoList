# Angular & Firebase To Do List - Joaquin Pastore Barrios

Requisitos:
- Angular 13.3.2
- Firebase 10.7.1
- Node 16.14.0
- Bootstrap 5.1.3
- Boxicons 2.1.2

Este proyecto se basa en una aplicación de ToDo List utilizando Angular como framework de desarrollo y Firebase como plataforma de base de datos.

Se ha hecho uso de componentes anidados, servicios, enrutamiento y naveganción, incluyendo lazy load.

Por comentar algunos aspectos, una To Do, que se compone de un titulo, una descripción y un estado de completado. Como principal componente encontraremos el todo, que se encarga de crear un todo y mostrar todos los todos que hay ya creados. También hay un componente de dashboard que muestra las todos que están en progreso actualmente. Estos dos componentes se pueden mostrar a través de dos botones de navegación que se encuentran en la parte de arriba de la aplicación.

En cuanto a la parte de Firebase, se esta usando la base de datos firestore.

Además se ha usado la herramienta de SonarQube para realizar un analisis del proyecto.


Se puede observar el funcionamiento de la siguente apliación en el siguiente enlace: https://joaquinjpb.github.io/AngularFirebase_ToDoList/dashboard
