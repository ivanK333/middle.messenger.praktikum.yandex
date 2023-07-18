export const accessCheck = (value: string | symbol) => {
  let i = 0;
  if (typeof value === 'string') {
    while (value.charAt(i) === '_') {
      i += 1;
    }
  }

  return i !== 1;
};
