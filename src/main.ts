/* eslint-disable require-jsdoc */
import { mount } from './mount';
import { v } from './v';

const node = v('div', undefined, [
  v('ul', undefined, [
    v('li', undefined, 'Hello'),
    v('li', undefined, [v('p', undefined, 'World')]),
  ]),
]);

const app = mount(document.getElementById('app'));

app(node);
