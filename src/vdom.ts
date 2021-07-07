import {vDom, prop, child} from './interfaces';

/**
 * Helper function to represent a DOM node
 * @param {string} tag - tag node name
 * @param {prop=} props - properties of the node
 * @param {child=} children - child nodes for 'nodeinception'
 * @return {vDom} a virtual representation of the DOM
 */
export function v(tag: string, props?: prop, children?: child): vDom {
  let key;
  if (props?.key) {
    key = props.key as string | null | undefined;
    delete props.key;
  }
  return {
    tag,
    props,
    children,
  };
}
