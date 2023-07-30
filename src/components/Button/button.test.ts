import { expect } from 'chai';
import { Button } from './Button';

describe('BUTTON', () => {
  it('render children', () => {
    const children = 'My button';

    // const button = new Button({
    //   name: 'button',
    //   view: 'default',
    //   type: 'button',
    //   children: 'children',
    // });
    console.log(123, Button);

    const el = document.createElement('div');
    // el.innerHTML = button.template;

    expect(el.textContent).to.eq(children);
  });
});
