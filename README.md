# Limpieza-Delincuencia App Backend

## API para obtener estadisticas y reportes de la información procesada

## Diagrama ER

![DER](assets/Diagrama%20ER%20Limpieza%20Delincuencia.png)

## Tecnologias

- NodeJS v16.15.1,
- NestJS
- TypeScript,
- ORM: TypeOrm,
- SQL server

## Run Locally

### 1. Clone repo

```
$ git https://github.com/jhonntantb/limpieza_y_delincuencia_app
$ cd limpieza_y_delincuencia_app
```

### 2. Instalar Dependencias

- Instalar paquetes y recursos necesarios usados en el proyecto

```
$ npm i
```

## 3. Conectarse a la Base de datos

- En este proyecto se uso una base de datos local, la cual se debe crear antes de iniciar el proyecto

### 4. Crear archivo .env

- Crear archivo .env en la raiz del proyecto
- Debe contener los siguientes datos:

```
DB_HOST=localhost
DB_PORT=1433
DB_USER=tu_nombre_de_usuario
DB_PASS=tu_contraseña
DB_NAME=tu_db
```

### 5. Iniciar El Proyecto

- El proyecto esta realizado con NestJs, por lo que requiere los siguientes comandos

- Parae jecutarlo como desarrollador y escuche los cambios

```
$ npm run start:dev
```

- Para ejecutar el proyecto como se encuentra

```
$ npm start
```

### 6. Ver Documentación de la API

- Ejecuta esto en su navegador: http://localhost:8080/docs
- Click en la ruta
- Ver Parametros
- Probar la API

## Support

- Contact Developer: [Jhonntan](mailto:Jhonntan.jhonntantb@gmail.com)
