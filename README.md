# Ejercicio de evaluación de Angular

Este proyecto es una aplicación de gestión de lista de tareas en Angular. Permite agregar, eliminar y marcar como completada tareas, y utiliza JSON-Server para simular una API personalizada.

Hay 3 usos en la aplicacion:

-Agregar tarea: Escribe una tarea en el campo de entrada y haz clic en el botón "Agregar".

-Eliminar tarea: Haz clic en el botón "Eliminar" junto a la tarea que deseas eliminar.

-Alternar estado de tarea: Marca o desmarca la casilla de verificación para cambiar el estado de completado de la tarea(true or false).

## Requisitos del Proyecto

Este proyecto cumple con los siguientes requisitos mínimos:

- *Mínimo de Componentes*: Incluye al menos 2 componentes principales y 1 componente hijo.
- *Comunicación entre Componentes*: Utiliza Input y Output Binding para la comunicación entre componentes.
- *Directivas*: Emplea las directivas *ngFor y *ngIf para estructurar la interfaz.
- *Navegación Básica*: Implementa la navegación entre al menos 2 páginas utilizando Angular Router.
- *Simulación de Datos*: Utiliza un servicio y HttpClient para simular una API con JSON-Server.

## Componentes

1. **AppComponent**: El componente principal que maneja la lógica general.
2. **ListaTareasComponent**: Un componente que renderiza la lista de tareas.
3. **ItemTareaComponent**: Un componente que representa cada tarea individualmente.

## Servicios

- **TareaService**: Este servicio maneja toda la gestión de tareas utilizando HttpClient para interactuar con JSON-Server.

## Instalación y Ejecución

Hay que seguir los siguientes pasos si lo quieres ejecutar en local:

1. Instalar la dependencia
    Al tener ya bajado los archivos del GitHub(https://github.com/Guillermo1907/lista-tareas-gpr.git) hay que poner por bash
    la instalación de la dependencia: *npm install*.

2. Iniciar el servidor JSON

    Para que las tareas del Json salgan hay que inciar el servidor, para eso ponemos: *json-server --watch db.json*

3. Iniciar servidor

    Para poder ver nuestro proyecto hay que inciar el servidor y veremos como queda: *ng serve*


