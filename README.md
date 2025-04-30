# Prueba Técnica - Módulo de Pagos

Este repositorio contiene la implementación de un sistema de creación de un pago

## 🧩 Funcionalidades
- Creación de un link de pago
- Consultar todas las transacciones

## Modificaciones principales
- Reorganizo la estructura de carpeta a la forma más recomendada y también las rutas

## Services
- Al `payment.service` eliminamos el contralador, definiamos una variable `inject` para la inyeccion de dependecias y asi realizar las peticiones y mejoramos los headers. 
- Separacion de los modelos del `payment` & `transaction`
- Se definio un servicio independiente para consultar las transacciones `transaction.service`
- Se desarrollo el servicio en `transaction.service` para realizar las peticiones a la paginacion

## Create Payment
- Al `create-payment.html` se agregaron div para mostrar los errores de validaciones en tiempo real
- Se reemplazo la variablde paymentUrl y lo definimos como `signal` para la el link de pago
- `paymentService` & `formularioBuilder` se definieron como `inject` para las inyecciones de dependencias
- Se rediseño en formulario para que se visualicen las inputs en 2 columnas en pantallas grandes

## Transactions
- Se creo un modelo (interface) independiente para tipar los datos que se van a enviar y las respuesta que nos da la api
- Se genero un archivo tipo service para manejar las peticiones de las transacciones
- Se usaron funciones mas actuales y recomendada por laravel como `signal`
- Se añadio para que reconociera las paginaciones tal cual como lo retorna la api
- Se diseño los botones de la paginacion
