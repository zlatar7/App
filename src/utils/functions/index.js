export const sumTotal = (items) => {
  const sumItem = items.map((item) => item.price * item.quantity);
  const subtotal = sumItem.reduce((acc, curr) => acc + curr, 0);
  const result = subtotal.toFixed(2);
  return result;
};
