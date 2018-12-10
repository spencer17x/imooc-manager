export default {
  formateDate (date) {
    if (!date) { return '' }
    const time = new Date(date);
    const Y = time.getFullYear();
    const M = time.getMonth() + 1;
    const D = time.getDate();
    const H = time.getHours();
    const Minutes = time.getMinutes();
    const S = time.getSeconds();
    return Y + '-' + M + '-' + D + ' ' + H + ":" + Minutes + ':' + S;
  },
  pagination (data, callback) {
    let page = {
      onChange: (current) => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total,
      showTotal: () => {
        return `共${data.result.total}条`
      },
      showQuickJumper: true
    }
    return page;
  }
}