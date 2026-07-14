# AGENTS.md

## Proyecto

Desarrollar una aplicación móvil de cumpleaños con React Native enfocada en una experiencia moderna, minimalista y elegante.

El objetivo es que los usuarios puedan registrarse, iniciar sesión y administrar una lista de personas para conocer cuándo será su próximo cumpleaños y cuántos días faltan.

---

# Stack tecnológico

- React Native
- Expo
- TypeScript
- NativeWind
- React Native Reanimated
- react-native-safe-area-context

---


# Objetivo principal

La aplicación permitirá:

- Registro de usuarios con firebase.
- Inicio de sesión con firebase.
- Acceso únicamente para usuarios autenticados con firebase.
- Crear personas con:
  - nombre
  - fecha de nacimiento
  - fotografía (opcional)
- Editar personas.
- Eliminar personas.
- Mostrar cuántos días faltan para cada cumpleaños.
- Detectar automáticamente quién cumple años hoy.
- Ordenar los próximos cumpleaños del año en curso.
- Cuando un cumpleaños ya haya pasado, calcular automáticamente el del siguiente año.

---

## Usuario no autenticado

- Login
- Registro

## Usuario autenticado

- Home (Listado de cumpleaños)
- Crear cumpleaños
- Editar cumpleaños
- Perfil (opcional)

---

# Pantalla Home

El listado debe dividirse en dos secciones.

## 🎂 Cumplen años hoy

Mostrar primero todas las personas cuyo cumpleaños sea el día actual.

## Próximos cumpleaños

Mostrar el resto ordenado por proximidad.

Cada tarjeta debe mostrar:

- Foto
- Nombre
- Fecha de nacimiento
- Edad que cumplirá
- Días restantes

Ejemplo

Hoy cumple años

María
🎉 Cumple hoy

Próximos

Juan
Faltan 3 días

Pedro
Faltan 12 días

---

# Reglas para calcular cumpleaños

Siempre trabajar con el año actual.

Si el cumpleaños ya pasó:

- calcular el cumpleaños del siguiente año.

Nunca mostrar días negativos.

---

# Diseño UI

La aplicación debe sentirse premium.

Características:

- Minimalista
- Elegante
- Mucho espacio en blanco
- Componentes limpios
- Diseño moderno
- Sin exceso de elementos

Evitar:

- colores saturados
- colores fuertes
- gradientes agresivos
- interfaces recargadas
- bordes gruesos
- sombras exageradas

---

# Estilo de componentes

Preferir:

- border-radius grande
- sombras muy suaves
- tarjetas limpias
- iconografía sencilla
- tipografía con buena jerarquía

No utilizar:

- bordes visibles si no son necesarios
- colores intensos
- botones pesados

---

# Paleta

Utilizar colores suaves.

Ejemplo:

Background

- blanco
- gris muy claro

Texto

- negro
- gris oscuro

Acentos

- azul suave
- verde suave
- morado pastel
- rosa pastel

Nunca utilizar colores demasiado llamativos.

---

# Animaciones

Todas las animaciones deben realizarse con:

react-native-reanimated

Priorizar:

- Fade
- Slide
- Scale
- Layout Animations

Animaciones rápidas y naturales.

---

# Safe Area

Toda pantalla debe utilizar:

react-native-safe-area-context

Nunca ignorar el Safe Area.

---

# Código

Siempre seguir:

- Componentes pequeños.
- Código reutilizable.
- Evitar duplicación.
- TypeScript estricto.
- Nombres descriptivos.
- Separación de responsabilidades.

---

# Arquitectura

Organizar el proyecto por funcionalidades.

Ejemplo

src/

- components/
- screens/
- navigation/
- hooks/
- services/
- utils/
- types/
- constants/
- assets/

---

# UX

La aplicación debe transmitir:

- tranquilidad
- organización
- simplicidad
- elegancia

Cada interacción debe sentirse fluida y rápida.

---