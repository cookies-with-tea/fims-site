import { inject } from 'vue';
import { formContextInjectionKey, formItemContextInjectionKey } from '@/constants/injectionKeys';

export function useFormContext() {
  const formContext = inject(formContextInjectionKey);
  const formItemContext = inject(formItemContextInjectionKey);

  return { formContext, formItemContext };
}
