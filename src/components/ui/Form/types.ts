import { RuleItem, ValidateError } from 'async-validator';

export type FormItemTrigger = 'blur' | 'change';

export type ValidationStatus = 'success' | 'error';

export type ValidationState = ValidationStatus | '';

export interface FormItemRule extends RuleItem {
  trigger?: FormItemTrigger;
}

export type FormRules = Record<string, FormItemRule[]>;

export type FormProps = {
  modelValue: object;
  rules: FormRules;
};

export type FormEmits = {
  (e: 'validate', field: string, status: ValidationStatus, message?: string): void;
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
  emit: FormEmits;
};
