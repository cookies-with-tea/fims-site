export const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  timeout = 300
  ): ((...args: T) => void) => {
  let timer: NodeJS.Timeout

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, args)
    }, timeout)
    console.log(timer)
  }
}
