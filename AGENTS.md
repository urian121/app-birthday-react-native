# AGENTS.md

## Proyecto

App móvil de cumpleaños (Expo + React Native + TypeScript + NativeWind).

**UI lista.** No rediseñar pantallas. Siguiente: lógica (Firebase auth + CRUD).

Docs Expo: https://docs.expo.dev/versions/v57.0.0/

---

## Stack

- Expo 57 / React Native / TypeScript
- NativeWind + Tailwind
- Reanimated / Safe Area / React Navigation

---

## Idioma

UI siempre en **español**.

---

## Pantallas (no cambiar layout)

**Auth:** Login, Registro  

**App (tabs):** Cumpleaños | + Agregar | Meses (sin Settings)  

**Modales/stack:** Crear, Editar  

Avatar del usuario arriba a la derecha.

---

## Lógica pendiente

- Auth Firebase (registro, login, rutas solo autenticadas)
- CRUD personas: nombre, fecha nacimiento, foto opcional
- Días restantes, detectar “hoy”, orden por proximidad
- Si la fecha ya pasó → próximo año; nunca días negativos

---

## Colores

Fuente única: `src/constants/colors.json` (+ `colors.ts`).

- Fondo: `#152229`
- Inputs: `fieldDark`
- Botones: `button`
- Acento: lima (`accent`)
- Sin rosa

---

## Código

- Types en `src/types/birthday.ts`
- Estructura: `src/components`, `screens`, `navigation`, `hooks`, `services`, `utils`, `types`, `constants`
- Componentes pequeños, TypeScript estricto
- Animaciones con Reanimated (sutiles)
- Siempre Safe Area
- Iconos: `@react-native-vector-icons` (ionicons, material-design-icons)
