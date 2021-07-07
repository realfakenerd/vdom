export type prop = Record<string, string | null | undefined | (() => void)>;
export type child = vDom[] | string | Array<any>;

export interface vDom {
  tag: string;
  props?: prop;
  children?: child;
}
