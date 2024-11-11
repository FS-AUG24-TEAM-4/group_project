export const replaceParamsInPathname = (
  pathname: string,
  currentCapacity: string,
  newCapacity: string,
) => {
  const validCurrentCapacity = currentCapacity
    .replace('GB', 'gb')
    .replace('TB', 'tb');
  const validNewCapacity = newCapacity.replace('GB', 'gb').replace('TB', 'tb');

  return pathname.replace(validCurrentCapacity, validNewCapacity);
};
