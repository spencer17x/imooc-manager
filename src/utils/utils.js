export default (date) => {
  if (!date) { return '' }
  const time = new Date(date);
  const Y = time.getFullYear();
  const M = time.getMonth() + 1;
  const D = time.getDate();
  const H = time.getHours();
  const Minutes = time.getMinutes();
  const S = time.getSeconds();
  return Y + '-' + M + '-' + D + ' ' + H + ":" + Minutes + ':' + S;
}