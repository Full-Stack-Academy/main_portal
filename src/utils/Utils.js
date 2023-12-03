import resolveConfig from "tailwindcss/resolveConfig";
import moment from "moment";

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig("./src/css/tailwind.config.js");
};

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export function getDayPeriod() {
  const momentDate = moment();

  const hour = momentDate.hour();

  const morningRange = { start: 0, end: 11 };
  const afternoonRange = { start: 12, end: 17 };
  const eveningRange = { start: 18, end: 23 };

  if (hour >= morningRange.start && hour <= morningRange.end) {
    return "Morning";
  } else if (hour >= afternoonRange.start && hour <= afternoonRange.end) {
    return "Afternoon";
  } else if (hour >= eveningRange.start && hour <= eveningRange.end) {
    return "Evening";
  } else {
    return "unknown";
  }
}
