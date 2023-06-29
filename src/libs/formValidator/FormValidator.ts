import { Props, InputContainer } from '.';
import styles from '../../components/Input/styles.module.pcss';

export class FormValidator<V extends object = {}> {
  public form: HTMLFormElement;

  private values: V;

  private readonly onSubmit: (values: V) => void;

  public readonly inputContainers: InputContainer[];

  constructor(props: Props<V>) {
    this.form = props.form;

    const { values, inputContainers } = this._registerInputs();

    this.inputContainers = inputContainers;

    this.values = values as V;

    this.onSubmit = props.onSubmit;

    this._init();
  }

  private _init() {
    this._detach();
    this.form.addEventListener('submit', (e) => this._handleSubmit(e));
    this._registerInputEvents();
  }

  private _registerInputs() {
    const children = this.form.querySelectorAll('#input');

    const inputContainers: InputContainer[] = [];
    let values = {};

    children.forEach((child) => {
      const input = child.querySelector('input');
      if (input) {
        inputContainers.push(child as InputContainer);
        values = { ...values, [input.name]: input.value };
      }
    });

    return { inputContainers, values };
  }

  private _validate() {
    this.inputContainers.forEach((inputContainer) => {
      this._validateInput(inputContainer);
    });
  }

  private _validateInput(inputContainer: InputContainer): void {
    const input = inputContainer.querySelector('input');
    if (!input.value) {
      inputContainer.classList.add(styles.error);
    } else {
      inputContainer.classList.remove(styles.error);
    }
  }

  private _registerInputEvents() {
    this.inputContainers.forEach((inputContainer) => {
      const input = inputContainer.querySelector('input');
      input.addEventListener('blur', () => {
        this._validateInput(inputContainer);
      });
      input.addEventListener('input', () => {
        this._validateInput(inputContainer);
        this.values = {
          ...this.values,
          [input.name]: input.value,
        } as V;
      });
    });
  }

  private _detach() {
    this.form.removeEventListener('submit', (e) => this._handleSubmit(e));
    this.inputContainers.forEach((inputContainer) => {
      const input = inputContainer.querySelector('input');

      input.removeEventListener('blur', () => this._validateInput(input));
      input.removeEventListener('input', () => this._validateInput(input));
    });
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();

    this._validate();

    this.onSubmit(this.values);
  }
}
