import { expect } from 'chai';
import sinon from 'sinon';
import { Props, Button } from '.';

describe('BUTTON', () => {
  const props: Props = {
    name: 'button',
    view: 'default',
    type: 'button',
    children: 'My button',
  };

  it('render children', () => {
    const button = new Button(props);

    const el = document.createElement('div');
    el.innerHTML = button.template;

    expect(el.textContent).to.eq(props.children);
  });

  it('Should be clickable', () => {
    const callback = sinon.stub();
    const button = new Button({ view: 'default', children: props.children, events: { click: callback } });

    const element = button.element as HTMLElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });
});
