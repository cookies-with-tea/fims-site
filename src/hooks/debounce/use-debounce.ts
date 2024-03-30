import { useCallback , useRef } from 'react'

export const useDebounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay = 300
  ): ((...args: T) => void) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return useCallback((...args)=> {
      clearTimeout(timerRef.current as NodeJS.Timeout)
      timerRef.current = setTimeout(() => func.apply(this, args), delay)
    },[func, delay]
  )
}
