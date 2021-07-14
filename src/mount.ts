/* eslint-disable require-jsdoc */
import {vDom} from './interfaces';

export function mount(container: HTMLElement) {
  return (vnode: vDom): void => {
    const el = (vnode.el = document.createElement(vnode.tag));
    for (const key in vnode.props) {
      if (Object.prototype.hasOwnProperty.call(vnode.props, key)) {
        el.setAttribute(key, vnode.props[key] as string);
      }
    }

    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children;
    } else {
      if (Array.isArray(vnode.children)) {
        vnode.children.forEach((child: vDom) => {
          mount(el)(child);
        });
      }
    }
    container.appendChild(el);
  };
}
