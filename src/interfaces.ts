export type prop = Record<string, string | number | null | undefined>;
export type child = vDom[] | string;

export interface vDom {
  tag: string;
  props?: prop;
  children?: child;
  el?: HTMLElement;
}
