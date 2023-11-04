import { RuleItem, ValidateError } from 'async-validator';

export type FormItemTrigger = 'blur' | 'change';

export type ValidationState = 'success' | 'error' | '';

export interface FormItemRule extends RuleItem {
  trigger?: FormItemTrigger;
}

export type FormProps = {
  modelValue: object;
  rules: { [key: string]: FormItemRule[] };
};

export type FormItemProps = {
  field: string;
  label?: string;
  foreignError?: string;
};

export type FormItemContext = FormItemProps & {
  validate: (trigger?: FormItemTrigger) => boolean;
  validationState: ValidationState;
  errors: ValidateError[];
};

export type FormContext = FormProps & {
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
};
