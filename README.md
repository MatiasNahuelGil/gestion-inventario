```markdown
# 📊 Inventario de Productos

Este proyecto es una aplicación web desarrollada en **React.js** que permite gestionar un inventario de productos. Los usuarios pueden realizar acciones como:

- Visualizar productos existentes.
- Agregar nuevos productos al inventario.
- Editar la información de un producto.
- Eliminar productos.

El objetivo principal es proporcionar una interfaz intuitiva para la gestión eficiente del inventario.

---

## 🌐 Tecnologías Utilizadas

- **React.js**: Biblioteca principal para construir la interfaz de usuario.
- **React Router**: Navegación entre rutas de la aplicación.
- **Styled Components**: Estilizado de componentes utilizando CSS-in-JS.
- **Formik** y **Yup**: Manejo de formularios y validación de datos.
- **Axios**: Cliente HTTP para la comunicación con el backend.
- **React Bootstrap**: Componentes estilizados para el modal.
- **React Icons**: Iconos utilizados en la interfaz.

---

## 🔧 Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tu-repositorio
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia la aplicación:

   ```bash
   npm start
   ```

---

## 🎨 Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── context/         # Context API para manejar el estado global
│   ├── Form/            # Formularios para crear y editar productos
│   ├── Modal/           # Modal para editar productos
│   ├── Table/           # Tabla para mostrar productos
│   └── ItemTable/       # Fila de producto dentro de la tabla
├── routes/              # Configuración de rutas
├── services/            # Configuración de Axios
├── App.js               # Componente principal de la aplicación
├── App.css              # Estilos generales
└── index.js             # Punto de entrada de React
```

---

## 📈 Características

1. **Gestor de Inventario**:

   - Ver productos con información detallada como nombre, precio, stock y descripción.
   - Buscar productos por nombre mediante un campo de búsqueda.

2. **Creación de Productos**:

   - Formulario para agregar nuevos productos al inventario.
   - Validación de datos con mensajes de error claros.

3. **Edición de Productos**:

   - Modal interactivo para actualizar la información de un producto.

4. **Eliminación de Productos**:

   - Botón para eliminar productos con confirmación.

---

## ⚖️ Dependencias

Las principales dependencias utilizadas en este proyecto son:

- **React**: `^18.0.0`
- **React Router DOM**: `^6.0.0`
- **Formik**: `^2.2.9`
- **Yup**: `^1.0.0`
- **Axios**: `^1.3.4`
- **Styled Components**: `^5.3.10`
- **React Bootstrap**: `^2.7.2`
- **React Icons**: `^4.7.1`

---

## 🔒 Configuración de Axios

El cliente HTTP **Axios** está configurado para comunicarse con el backend. Puedes personalizar la URL base en el archivo `services/axios.config.js`:

```javascript
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api", // Cambia esta URL si es necesario
  headers: {
    "Content-Type": "application/json",
  },
});
```

---

## 🚀 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar esta aplicación:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```
4. Haz un push de tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request.

---



## 🙌 Autor

Desarrollado por **Gil Matias Nahuel**. Si tienes dudas o sugerencias, no dudes en contactarme.
```


