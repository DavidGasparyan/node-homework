export function delay(data: any, timer = 300): any {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, timer);
  })
}