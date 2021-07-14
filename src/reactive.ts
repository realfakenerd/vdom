/* eslint-disable require-jsdoc */

let activeEffect: unknown;

export function watchEffect(fn: Function) {
  const wrappedFn = () => {
    activeEffect = fn;
    fn();
    activeEffect = null;
  };
  wrappedFn();
}

class Observer {
  subscribers = new Set();
  
  depend() {
    if (activeEffect) this.subscribers.add(activeEffect);
  }

  notify() {
    this.subscribers.forEach((sub) => sub());
  }
}

export function reactive(obj) {
  Object.keys(obj).forEach((key) => {
    const dep = new Observer();
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        if (newValue !== value) {
          value = newValue;
          dep.notify();
        }
      },
    });
  });
  return obj;
}
