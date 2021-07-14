import {v} from '../v';
import {mount} from '../mount';

describe('VDOM', () => {
  let node: any;
  beforeEach(() => {
    node = v('div', {id: 'app'}, 'Hello World');
  });
  it('should returns an object representation of the DOM', () => {
    expect(node).toEqual({
      tag: 'div',
      props: {id: 'app'},
      children: 'Hello World',
    });
  });

  it('should mount the node into the real DOM', () => {
    const app = document.getElementById('app') as HTMLDivElement;

    expect(mount(node, app)).toBe({});
  });

  it.todo('should unmount the node from the DOM');
});
