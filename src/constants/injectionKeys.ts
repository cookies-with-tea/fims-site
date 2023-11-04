import { InjectionKey } from 'vue';
import { FormContext, FormItemContext } from '@/components/ui/Form/types';

export const formContextInjectionKey = Symbol('formInjectionKey') as InjectionKey<FormContext>;

export const formItemContextInjectionKey = Symbol('formItemContextInjectionKey') as InjectionKey<FormItemContext>;
