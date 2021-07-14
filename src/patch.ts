import {vDom} from './interfaces';
import {mount} from './mount';
import {unmount} from './unmount';

/* eslint-disable require-jsdoc */
export function patch(n1: vDom, n2: vDom) {
  const el = (n2.el = n1.el);

  /** case where the nodes are of different tag types */
  if (n1.tag !== n2.tag) {
    mount(el.parentNode)(n2);
    unmount(n1);
  } else {
    /** case where the nodes are the same tag type 
              v new virtual node has string type children */
    if (typeof n2.children === 'string') {
      el!.textContent = n2.children;
    } else {
      /** New virtual node has array children
                  Old virtual node has string children */
      if (typeof n1.children === 'string') {
        el!.textContent = '';
        n2!.children!.forEach((child) => mount(child, el!));
      } else {
        /** Case where the new vnode has string children */
        const c1 = n1.children;
        const c2 = n2.children;
        const commonLength = Math.min(c1.length, c2.length);
        let i = 0;
        /** Patch the children both nodes have in common */
        for (i; i < commonLength; i++) {
          patch(c1[i], c2[i]);
        }
        if (c1.length > c2.length) {
          /** Old children was longer
                      Remove the children that are not 'there' anymore */
          c1.slice(c2.length).forEach((child) => {
            unmount(child);
          });
        } else if (c2.length > c1.length) {
          /** Old children was shorter
                      Add the newly added children */
          c2.slice(c1.length).forEach((child) => {
            mount(child, el);
          });
        }
      }
    }
  }
}
