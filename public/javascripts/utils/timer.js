export function timer(callback, time = 2000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(args), time);
  };
}
