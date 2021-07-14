import {vDom} from './interfaces';
/* eslint-disable require-jsdoc */
export function unmount(vnode: vDom) {
  vnode.el.parentNode.removeChild(vnode.el);
}
