export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function truncate(str: string, trail: string = '...') {
  return str + trail;
}
