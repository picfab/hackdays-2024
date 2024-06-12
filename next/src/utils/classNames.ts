export type ClassName = string | undefined | boolean;

export const classNames = (...c: ClassName[]): string =>
  c.filter((elt: ClassName) => typeof elt === 'string' && elt.trim()).join(' ');