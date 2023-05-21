export function toCapitalize(str: string): string {
  if (str === '') {
    return '';
  }
  // console.log(str[0].toUpperCase() + str.slice(1))
  return str[0].toUpperCase() + str.slice(1);
}
