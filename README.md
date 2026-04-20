# PlanetTravel API

_Backend de la aplicación planetTravel, información de países y cálculo de distancias._

## Descripción general

planetTravel API es el backend de la aplicación planetTravel. Proporciona información sobre países y permite calcular la distancia aproximada entre dos países utilizando su ubicación geográfica.

Esta API consume datos en tiempo real desde una fuente externa y los expone mediante endpoints REST simples y eficientes para ser utilizados por el frontend u otros clientes.

---

### API externa utilizada

- **Datos de países:** [restcountries.com](https://restcountries.com/)

---

## Funcionalidades principales

- Consultar todos los países
- Obtener información detallada de un país, accediendo por codigo unico o nombre
- Calcular la distancia aproximada entre dos países

---

## Endpoints

### 1. Obtener todos los países

Obtiene la lista completa de países con su información básica.

```
GET /countries
```

---

### 2️. Obtener país por código

Obtiene la información de un país específico a partir de su código único.

```
GET /countries/:code
```

- **Parámetros:**
  - `code`: Código único del país (por ejemplo: `COL`, `USA`)


---

### 3️. Buscar país por nombre

Obtiene la información de un país específico a partir de su nombre.

```
GET /countries/search?name=Colombia
```

- **Query params:**
  - `name`: Nombre del país a buscar


---

### 4️. Calcular distancia entre dos países

Calcula la distancia aproximada entre dos países accediendo a ellos por sus nombre. El cálculo se basa en las coordenadas geográficas (latitud y longitud) de cada país.

```
GET /countries/distance?from=Colombia&to=Peru
```

- **Query params:**
  - `from`: País de origen
  - `to`: País destino

---

### Tecnologías

- **Lenguaje principal:** Node js.
- **Framework:** Express.
- **Arquitectura:** Clean architecture.
- **API externa:** [restcountries.com](https://restcountries.com/)
- **Estilo:** RESTful API

---

## Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SkynetProyect/planetTravelBack.git
   cd planetTravelBack
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Iniciar el servidor:
   ```
   npm start
   ```
4. Ejecutar en modo desarrollo:
   ```
   npm run dev
   ```

   ---

   ## Variables de entorno

### Archivo requerido
Se debe crear el archivo:

- `planetTravelBack/.env`

### Lista de variables necesarias (`planetTravelBack/.env`)

```bash
PORT=3000
```

### ¿Para qué se usa?
- `PORT`: Se define el puerto desde el cual se va a consumir el API.

---


