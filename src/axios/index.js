import JsonP from 'jsonp';

export default class Axios {
  static jsonP = (opts) => {
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
}