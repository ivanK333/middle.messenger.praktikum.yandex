import { Props, InputContainer } from '.';
import { Rule } from '../../appConstants/validation';
import styles from '../../components/Input/styles.module.pcss';

export class FormValidator<V extends object = {}> {
  public form: HTMLFormElement;

  private fields: Record<keyof V, Rule[]>;

  private values: V;

  private readonly onSubmit: (values: V) => void;

  private inputContainers: InputContainer[] | [];

  constructor(props: Props<V>) {
    this.form = props.form;

    const { values, inputContainers } = this._registerInputs();

    this.inputContainers = inputContainers;

    this.fields = props.fields;
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
    let errors = {};
    this.inputContainers.forEach((inputContainer) => {
      const testResult = this._validateInput(inputContainer);
      errors = { ...errors, ...testResult };
    });

    return Object.keys(errors).length <= 0;
  }

  private _validateInput(inputContainer: InputContainer): Record<keyof V, string> | {} {
    const input = inputContainer.querySelector('input') as HTMLInputElement;
    const errorContainer = inputContainer.querySelector('span') as HTMLSpanElement;
    const fieldRules: Rule[] = this.fields[input.name as keyof V];
    let error: Record<keyof V, string> | {} = {};

    for (let i = 0; i < fieldRules.length; i++) {
      if (!fieldRules[i].rule.test(input.value)) {
        inputContainer.classList.add(styles.error);
        if (errorContainer) {
          errorContainer.textContent = fieldRules[i].message;
        }
        error = { ...error, [input.name]: fieldRules[i].message };
        break;
      }

      if (fieldRules[i].isEqualBy) {
        const referenceContainer = this.inputContainers.filter((containers: HTMLDivElement) => (
          (containers.querySelector('input') as HTMLInputElement).name === fieldRules[i].isEqualBy
        ))[0] as HTMLInputElement;

        const referenceInput = referenceContainer.querySelector('input') as HTMLInputElement;
        if (referenceInput.value !== input.value) {
          inputContainer.classList.add(styles.error);
          errorContainer.textContent = fieldRules[i].message;
          error = { ...error, [input.name]: fieldRules[i].message };
        }
        return error;
      }
      inputContainer.classList.remove(styles.error);
      if (errorContainer) {
        errorContainer.textContent = '';
      }
    }
    return error;
  }

  private _registerInputEvents() {
    this.inputContainers.forEach((inputContainer: HTMLDivElement) => {
      const input = inputContainer.querySelector('input') as HTMLInputElement;
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
    this.inputContainers.forEach((inputContainer: HTMLDivElement) => {
      const input = inputContainer.querySelector('input') as HTMLInputElement;
      input.removeEventListener('blur', () => this._validateInput(input));
      input.removeEventListener('input', () => this._validateInput(input));
    });
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();

    const isValid = this._validate();

    if (isValid) {
      this.onSubmit(this.values);
    }
  }

  public resetForm() {
    this.form.reset();
    this.values = {} as V;
    this.inputContainers = [];
  }
}
