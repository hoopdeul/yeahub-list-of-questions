export const toggleInArray = (arr, value) =>
  arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

export const toggleRange = (arr, values) => {
  const allSelected = values.every((v) => arr.includes(v));
  return allSelected ? arr.filter((v) => !values.includes(v)) : [...arr, ...values];
};

export const toggleSingle = (current, value) => (current === value ? null : value);
