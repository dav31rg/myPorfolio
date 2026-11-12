export interface DateDuration {
  years: number;
  months: number;
}

const createLocalDate = (year: number, month: number, day: number) => {
  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
    ? date
    : null;
};

const parseDate = (value: string | Date): Date | null => {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime())
      ? null
      : new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  const normalized = value.trim();
  const isoDate = normalized.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);

  if (isoDate) {
    return createLocalDate(
      Number(isoDate[1]),
      Number(isoDate[2]),
      Number(isoDate[3]),
    );
  }

  const slashDate = normalized.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (slashDate) {
    return createLocalDate(
      Number(slashDate[3]),
      Number(slashDate[2]),
      Number(slashDate[1]),
    );
  }

  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime())
    ? null
    : new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
};

export const getMonthYear = (
  value: string | Date,
  locale: "en" | "es" = "en",
): string | null => {
  const date = parseDate(value);

  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
};

export const calculateDateDuration = (
  startDate: string | Date,
  endDate?: string | Date,
): DateDuration => {
  const start = parseDate(startDate);
  const isCurrentDate =
    typeof endDate === "string" &&
    (!endDate.trim() || /^(present|actualidad|current|now)$/i.test(endDate.trim()));
  const end = !endDate || isCurrentDate ? new Date() : parseDate(endDate);

  if (!start || !end || end < start) {
    return { years: 0, months: 0 };
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years: Math.max(years, 0), months: Math.max(months, 0) };
};
