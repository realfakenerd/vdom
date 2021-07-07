/* eslint-disable require-jsdoc */
import {vDom} from './interfaces';

export function mount(vnode: vDom, container: HTMLElement): void {
  const el: HTMLElement = (vnode.el = document.createElement(vnode.tag));
  for (const key in vnode.props) {
    if (Object.prototype.hasOwnProperty.call(key, vnode.props)) {
      el.setAttribute(key, vnode.props[key]);
    }
  }

  if (typeof vnode.children === 'string') el.textContent = vnode.children;

  if (vnode.children) {
    vnode.children.forEach((child?) => {
      mount(child, el);
    });
  }
  container.appendChild(el);
}
