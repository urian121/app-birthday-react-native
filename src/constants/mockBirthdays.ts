import type { Birthday, MonthGroup } from '../types/birthday';

export const MOCK_USER = {
  name: 'Urian',
  photoUri: 'https://i.pravatar.cc/150?img=12',
};

export const MOCK_BIRTHDAYS: Birthday[] = [
  {
    id: '1',
    name: 'Chloe Whitman',
    birthDate: '1996-07-22',
    photoUri: 'https://i.pravatar.cc/150?img=5',
    daysUntil: 0,
    turningAge: 30,
    isToday: true,
  },
  {
    id: '2',
    name: 'Daniela Ruiz',
    birthDate: '1992-07-26',
    photoUri: 'https://i.pravatar.cc/150?img=9',
    daysUntil: 4,
    turningAge: 34,
    isToday: false,
  },
  {
    id: '3',
    name: 'Mateo Solís',
    birthDate: '1988-08-20',
    photoUri: 'https://i.pravatar.cc/150?img=11',
    daysUntil: 29,
    turningAge: 38,
    isToday: false,
  },
  {
    id: '4',
    name: 'Laura Chen',
    birthDate: '1999-03-15',
    photoUri: 'https://i.pravatar.cc/150?img=32',
    daysUntil: 236,
    turningAge: 27,
    isToday: false,
  },
  {
    id: '5',
    name: 'Andrés Vega',
    birthDate: '1994-05-10',
    photoUri: 'https://i.pravatar.cc/150?img=15',
    daysUntil: 292,
    turningAge: 32,
    isToday: false,
  },
  {
    id: '6',
    name: 'Sofía Anders',
    birthDate: '1995-07-28',
    photoUri: 'https://i.pravatar.cc/150?img=20',
    daysUntil: 6,
    turningAge: 31,
    isToday: false,
  },
  {
    id: '7',
    name: 'Ryan Brooks',
    birthDate: '1990-08-02',
    photoUri: 'https://i.pravatar.cc/150?img=14',
    daysUntil: 11,
    turningAge: 36,
    isToday: false,
  },
  {
    id: '8',
    name: 'Maya Jensen',
    birthDate: '2001-08-08',
    photoUri: 'https://i.pravatar.cc/150?img=25',
    daysUntil: 17,
    turningAge: 25,
    isToday: false,
  },
  {
    id: '9',
    name: 'Ethan Cole',
    birthDate: '1987-08-15',
    photoUri: 'https://i.pravatar.cc/150?img=33',
    daysUntil: 24,
    turningAge: 39,
    isToday: false,
  },
  {
    id: '10',
    name: 'Olivia Harper',
    birthDate: '1998-08-25',
    photoUri: 'https://i.pravatar.cc/150?img=47',
    daysUntil: 34,
    turningAge: 28,
    isToday: false,
  },
  {
    id: '11',
    name: 'Lucas Fernández',
    birthDate: '1993-09-01',
    photoUri: 'https://i.pravatar.cc/150?img=52',
    daysUntil: 41,
    turningAge: 33,
    isToday: false,
  },
  {
    id: '12',
    name: 'Valentina Mora',
    birthDate: '1997-09-12',
    photoUri: 'https://i.pravatar.cc/150?img=44',
    daysUntil: 52,
    turningAge: 29,
    isToday: false,
  },
  {
    id: '13',
    name: 'Noah Patel',
    birthDate: '1989-09-20',
    daysUntil: 60,
    turningAge: 37,
    isToday: false,
  },
  {
    id: '14',
    name: 'Camila Ortiz',
    birthDate: '2000-10-05',
    photoUri: 'https://i.pravatar.cc/150?img=16',
    daysUntil: 75,
    turningAge: 26,
    isToday: false,
  },
  {
    id: '15',
    name: 'Diego Navarro',
    birthDate: '1991-10-18',
    photoUri: 'https://i.pravatar.cc/150?img=18',
    daysUntil: 88,
    turningAge: 35,
    isToday: false,
  },
  {
    id: '16',
    name: 'Emma Sullivan',
    birthDate: '1996-11-03',
    photoUri: 'https://i.pravatar.cc/150?img=27',
    daysUntil: 104,
    turningAge: 30,
    isToday: false,
  },
  {
    id: '17',
    name: 'Tomás Herrera',
    birthDate: '1985-11-22',
    photoUri: 'https://i.pravatar.cc/150?img=59',
    daysUntil: 123,
    turningAge: 41,
    isToday: false,
  },
  {
    id: '18',
    name: 'Isabella Cruz',
    birthDate: '1994-12-09',
    photoUri: 'https://i.pravatar.cc/150?img=29',
    daysUntil: 140,
    turningAge: 32,
    isToday: false,
  },
  {
    id: '19',
    name: 'Gabriel Torres',
    birthDate: '1986-01-08',
    photoUri: 'https://i.pravatar.cc/150?img=60',
    daysUntil: 170,
    turningAge: 41,
    isToday: false,
  },
  {
    id: '20',
    name: 'Ava Mitchell',
    birthDate: '1999-02-14',
    photoUri: 'https://i.pravatar.cc/150?img=31',
    daysUntil: 207,
    turningAge: 27,
    isToday: false,
  },
  {
    id: '21',
    name: 'Martín Rojas',
    birthDate: '1992-03-03',
    photoUri: 'https://i.pravatar.cc/150?img=13',
    daysUntil: 224,
    turningAge: 34,
    isToday: false,
  },
  {
    id: '22',
    name: 'Luna Beltrán',
    birthDate: '1998-04-18',
    photoUri: 'https://i.pravatar.cc/150?img=41',
    daysUntil: 270,
    turningAge: 28,
    isToday: false,
  },
  {
    id: '23',
    name: 'Jack Reynolds',
    birthDate: '1990-05-25',
    daysUntil: 307,
    turningAge: 36,
    isToday: false,
  },
  {
    id: '24',
    name: 'Paula Méndez',
    birthDate: '1995-06-05',
    photoUri: 'https://i.pravatar.cc/150?img=36',
    daysUntil: 318,
    turningAge: 31,
    isToday: false,
  },
  {
    id: '25',
    name: 'Sebastián Díaz',
    birthDate: '1988-06-30',
    photoUri: 'https://i.pravatar.cc/150?img=68',
    daysUntil: 343,
    turningAge: 38,
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

function buildMonthGroups(birthdays: Birthday[]): MonthGroup[] {
  const byMonth = new Map<
    number,
    Array<{ id: string; day: number; name: string }>
  >();

  for (const birthday of birthdays) {
    const [, monthStr, dayStr] = birthday.birthDate.split('-');
    const month = Number(monthStr);
    const day = Number(dayStr);
    const items = byMonth.get(month) ?? [];
    items.push({ id: birthday.id, day, name: birthday.name });
    byMonth.set(month, items);
  }

  return [...byMonth.entries()]
    .sort(([a], [b]) => a - b)
    .map(([month, items]) => {
      const sorted = [...items].sort((a, b) => a.day - b.day);
      return {
        month,
        label: MONTH_META[month].label,
        emoji: MONTH_META[month].emoji,
        count: sorted.length,
        items: sorted,
      };
    });
}

export const MOCK_MONTH_GROUPS: MonthGroup[] = buildMonthGroups(MOCK_BIRTHDAYS);
