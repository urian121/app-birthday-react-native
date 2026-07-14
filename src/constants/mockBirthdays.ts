import type { Birthday, MonthGroup } from '../types/birthday';

export const MOCK_USER = {
  name: 'Urian',
  photoUri: 'https://i.pravatar.cc/150?img=12',
};

export const MOCK_BIRTHDAYS: Birthday[] = [
  {
    id: '1',
    name: 'Chloe Whitman',
    birthDate: '1996-06-10',
    photoUri: 'https://i.pravatar.cc/150?img=5',
    daysUntil: 0,
    turningAge: 30,
    isToday: true,
  },
  {
    id: '2',
    name: 'Daniela Ruiz',
    birthDate: '1992-06-14',
    photoUri: 'https://i.pravatar.cc/150?img=9',
    daysUntil: 4,
    turningAge: 34,
    isToday: false,
  },
  {
    id: '3',
    name: 'Mateo Solís',
    birthDate: '1988-07-09',
    photoUri: 'https://i.pravatar.cc/150?img=11',
    daysUntil: 29,
    turningAge: 38,
    isToday: false,
  },
  {
    id: '4',
    name: 'Laura Chen',
    birthDate: '1999-07-20',
    photoUri: 'https://i.pravatar.cc/150?img=32',
    daysUntil: 40,
    turningAge: 27,
    isToday: false,
  },
  {
    id: '5',
    name: 'Andrés Vega',
    birthDate: '1994-08-02',
    photoUri: 'https://i.pravatar.cc/150?img=15',
    daysUntil: 53,
    turningAge: 32,
    isToday: false,
  },
];

const MONTH_META: Record<number, { label: string; emoji: string }> = {
  1: { label: 'Enero', emoji: '❄️' },
  2: { label: 'Febrero', emoji: '❤️' },
  3: { label: 'Marzo', emoji: '☘️' },
  4: { label: 'Abril', emoji: '☁️' },
  5: { label: 'Mayo', emoji: '🌸' },
  6: { label: 'Junio', emoji: '☀️' },
  7: { label: 'Julio', emoji: '🌊' },
  8: { label: 'Agosto', emoji: '🔥' },
  9: { label: 'Septiembre', emoji: '🍂' },
  10: { label: 'Octubre', emoji: '🎃' },
  11: { label: 'Noviembre', emoji: '🍁' },
  12: { label: 'Diciembre', emoji: '🎄' },
};

export const MOCK_MONTH_GROUPS: MonthGroup[] = [
  {
    month: 2,
    label: MONTH_META[2].label,
    emoji: MONTH_META[2].emoji,
    count: 2,
    items: [
      { id: 'm1', day: 11, name: 'Chloe Whitman' },
      { id: 'm2', day: 26, name: 'Olivia Harper' },
    ],
  },
  {
    month: 3,
    label: MONTH_META[3].label,
    emoji: MONTH_META[3].emoji,
    count: 3,
    items: [
      { id: 'm3', day: 4, name: 'Ryan Brooks' },
      { id: 'm4', day: 15, name: 'Sofia Anders' },
      { id: 'm5', day: 28, name: 'Ethan Cole' },
    ],
  },
  {
    month: 4,
    label: MONTH_META[4].label,
    emoji: MONTH_META[4].emoji,
    count: 1,
    items: [{ id: 'm6', day: 9, name: 'Maya Jensen' }],
  },
  {
    month: 6,
    label: MONTH_META[6].label,
    emoji: MONTH_META[6].emoji,
    count: 2,
    items: [
      { id: 'm7', day: 10, name: 'Chloe Whitman' },
      { id: 'm8', day: 14, name: 'Daniela Ruiz' },
    ],
  },
];
