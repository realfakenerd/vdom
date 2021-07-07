/* eslint-disable require-jsdoc */
import {vDom} from '.interfaces'
import { vDom } from './interfaces';

export function mount(vnode: vDom, container:any) {
  const el = (vnode.el = document.createElement(vnode.tag));
  for (const key in vnode.props) {
    el.setAttribute(key, vnode.props[key]);
  }
  if (typeof vnode.children === 'string') {
    el.textContent = vnode.children;
  } else {
    vnode.children.forEach((child) => {
      mount(child, el);
    });
  }
  container.appendChild(el);
}
