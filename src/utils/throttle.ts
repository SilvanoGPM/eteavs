export function throttle(func: () => void, delay: number) {
  let timeout: NodeJS.Timeout | null = null;

  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        func();
        timeout = null;
      }, delay);
    }
  };
}
