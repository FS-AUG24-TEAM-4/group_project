export const getSeparetedCapacity = (param: string) => {
  for (let i = 1; i < param.length; i++) {
    if (!Number.isInteger(+param[i]) && Number.isInteger(+param[i - 1])) {
      return param.slice(0, i) + ' ' + param.slice(i);
    }
  }
};
