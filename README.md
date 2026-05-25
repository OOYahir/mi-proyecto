# Proyecto React Native

## ¿Qué es React Native?

React Native es un framework desarrollado por Meta que permite crear aplicaciones móviles para Android y iOS utilizando JavaScript y TypeScript.  
Con React Native se puede usar una sola base de código para diferentes plataformas.

---

# Buenas prácticas

- Mantener el código ordenado.
- Usar nombres descriptivos en variables.
- Separar estilos del código principal.
- Utilizar componentes reutilizables.
- Comentar partes importantes del código.
- Usar TypeScript para evitar errores.

---

# Estructura del Proyecto

```bash
mi-proyecto/
│
├── assets/
├── node_modules/
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## Explicación

- `assets/` → Contiene imágenes y recursos.
- `node_modules/` → Librerías instaladas.
- `App.tsx` → Archivo principal de la aplicación.
- `package.json` → Dependencias del proyecto.
- `tsconfig.json` → Configuración de TypeScript.
- `README.md` → Documentación del proyecto.

---

# Tipos de datos

## String

```tsx
const nombre: string = "Yahir Orduña";
const carrera: string = "Ing. en Sistemas Computacionales";
```

## Number

```tsx
const cuatrimestre: number = 9;
const promedio: number = 8.5;
```

## Boolean

```tsx
const titulado: boolean = false;
```

---

# Código en View

```tsx
<Text style={styles.titulo}>{nombre}</Text>
<Text style={styles.subtitulo}>{carrera}</Text>
<Text style={styles.dato}>Cuatrimestre: {cuatrimestre}</Text>
<Text style={styles.dato}>Promedio: {promedio}</Text>
<Text style={styles.dato}>Titulado: {String(titulado)}</Text>
```
