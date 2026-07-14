export type Birthday = {
  id: string;
  name: string;
  birthDate: string;
  photoUri?: string;
  daysUntil: number;
  turningAge: number;
  isToday: boolean;
};

export type MonthGroup = {
  month: number;
  label: string;
  emoji: string;
  count: number;
  items: Array<{
    id: string;
    day: number;
    name: string;
  }>;
};
