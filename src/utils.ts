function setTwoDigit(val: number) {
  return (val > 9 ? "" : "0") + val;
}

export function formatDate(date: Date) {
  return (
    setTwoDigit(date.getDate()) +
    "/" +
    setTwoDigit(date.getMonth() + 1) +
    "/" +
    date.getFullYear()
  );
}
export const today = () => formatDate(new Date());
