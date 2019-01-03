import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd'

export default class Axios {
  static jsonP (opts) {
    return new Promise((resolve, reject) => {
      JsonP(opts.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status === 'success') {
          resolve(response);
        } else {
          reject(response.message);
        }
      })
    });
  }

  static ajax(options) {
    const baseApi = 'https://easy-mock.com/mock/5c07d5c95a35be334b3a4f09/mockapi';
    let loading;
    if (options.data && options.data.isShowLoading) {
      loading = document.querySelector('#ajaxLoading');
      loading.style.display = 'block';
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        baseURL: baseApi,
        method: options.method || 'get',
        params: (options.data && options.data.params) || '',
        timeout: 3000
      }).then(response => {
        loading.style.display = 'none';
        if (response.status === 200) {
          let res = response.data;
          if (res.code === 20000) {
            resolve(res)
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(response.data);
        }
      }).catch(err => reject(err))
    })
  }
}