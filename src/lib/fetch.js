
import proxyConfig from '../proxy.config'
let env = 'prod'
let server = proxyConfig[env]
function constParams(params) {
  if (!params) return '';
  let paramsArray = [];
  Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));
  return paramsArray.join('&')
}
export default options => {
  return new Promise((resolve, reject) => {
    function request() {
      let opts = Object.assign({
        method: 'POST',
        header: {
          'content-type': options.form ? 'application/x-www-form-urlencoded' : 'application/json'
        }
      }, options)
      console.log('-----1111-----')
      env = 'dev'
      server = proxyConfig[env]

      if (opts.url) {
        let timeStr = `t=${Date.now()}`
        opts.url += /\?/.test(opts.url) ? '&' + timeStr : '?' + timeStr
        opts.url = server + opts.url
      }
      let fetchHead = {};
      // get
      if (opts.method == 'GET' || opts.method == 'get') {
        let paramsStr = constParams(opts.data)
        opts.url += /\?/.test(opts.url) ? '&' + paramsStr : '?' + paramsStr
        fetchHead = fetch(opts.url,{
          method: opts.method,
          headers: opts.headers
        });
      } else {
        // form
        if (opts.form) {
          paramsStr = constParams(opts.data)
          console.log(paramsStr)
          fetchHead = fetch(opts.url,{
            method: opts.method,
            headers: opts.headers,
            body: paramsStr
          });
        // post
        } else {
          fetchHead = fetch(opts.url,{
            method: opts.method,
            headers: opts.headers,
            body: JSON.stringify(opts.data)
          });
        }
        
      }
      fetchHead.then((response) => response.json())
      .then((responseJson) => {
        //todo success
        if (responseJson.code == '0') {
          resolve(responseJson.data)
        } else {
          reject(responseJson.msg)
        }
        
      })
      .catch((error) => {
        reject(error)
        //todo error
      });
      
    }

    request()
  })
}
