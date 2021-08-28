const formatCurrency = currency => {
  const point = currency.toFixed(2);
  const arr = point.split('');
  if (arr.length > 6) {
    arr.splice(arr.length - 6, 0, ' ');
    if (arr.length > 10) {
      arr.splice(arr.length - 10, 0, ' ');
    }
  }
  return arr.join('');
};
export default formatCurrency;
