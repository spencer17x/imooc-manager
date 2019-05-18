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
    const isBaseApi = options.isBaseApi;
    const method = options.method || 'get';
    const loading = document.querySelector('#ajaxLoading');
    if (options.data && options.data.isShowLoading) {
      loading.style.display = 'block';
    }
    return new Promise((resolve, reject) => {
      axios({
        url: method.toLowerCase() === 'get' ? options.url + options.data.params : options.url,
        baseURL: isBaseApi ? baseApi : '',
        method,
        data: options.data,
        timeout: 3000
      }).then(response => {
        loading.style.display = 'none';
        if (response.status === 200) {
          let res = response.data;
          console.log(res);
          if (res.code === 20000 || res.success) {
            resolve(res)
          } else {
            Modal.info({
              title: '提示',
              content: res.msg || res.info
            })
          }
        } else {
          reject(response.data);
        }
      }).catch(err => reject(err))
    })
  }
}