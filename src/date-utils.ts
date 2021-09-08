import { EventData } from "./types";

const daylen = 60 * 60 * 24 * 1000;

export const yyyymmdd = (date: Date): string => date.toISOString().slice(0, 10);

export const str2date = (date: string): Date => new Date(Date.parse(date));

export function getDate(offset?: number): Date {
  const now = new Date().getTime();
  const unixTime = now - (now % daylen) + 1;
  if (offset) {
    return new Date(unixTime + offset * daylen);
  }
  return new Date(unixTime);
}

export const withinDaterange = (
  item: EventData,
  from: Date,
  to: Date
): Boolean =>
  str2date(item.date) <= to && str2date(item.enddate || item.date) >= from;
