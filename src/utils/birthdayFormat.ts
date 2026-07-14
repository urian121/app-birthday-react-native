export function formatBirthdayWeekday(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);
  const formatted = date.toLocaleDateString('es-ES', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return formatted.replace(/\./g, '').replace(/^./, (char) => char.toUpperCase());
}

export function formatDaysLabel(daysUntil: number, isToday: boolean) {
  if (isToday || daysUntil === 0) {
    return '¡Hoy!';
  }

  return `${daysUntil} ${daysUntil === 1 ? 'día' : 'días'}`;
}

export function formatMonthCount(count: number) {
  return String(count).padStart(2, '0');
}
