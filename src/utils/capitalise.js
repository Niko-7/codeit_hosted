export const capitalise = (str) => {
  let newStr = str;
  return newStr[0].toUpperCase() + newStr.slice(1).toLowerCase();
};
