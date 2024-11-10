export const concatTextInSections = (sectionText: string[]) => {
  return sectionText.length < 2
    ? sectionText
    : sectionText.reduce((acc, value) => acc + ` ${value}`);
};
