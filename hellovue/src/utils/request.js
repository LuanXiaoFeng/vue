import axios from 'axios';
import createError from './createError';
import qs from 'qs';
// const config = require('../../config');

axios.defaults.baseURL = process.env.API
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
/**
 * 模拟form表单提交，对应的 参数为json对象
 * 用于后台 从 RequestParam 中获得参数
 * @param path
 * @param body
 */
export function postForm (path, body = {}) {
  console.log(body)
  return (
    axios
      .post(`${path}`, qs.stringify(body), {withCredentials: true,timeout:30*1000,cancelToken: source.token})
      .then(response => response)
      .then(main => {
        console.log(main);
        if (main.success === 0) {
          throw createError(main.msg);
        } else {
          return main.data || '{}';
        }
      })
      .catch(error => {
        if (error instanceof SyntaxError) {
          //   warning(false, 'JSON 解析错误');
          throw createError('SYNTAX_JSON');
        }

        // 超时
        if (error.code === 'ECONNABORTED') {
          //   warning(false, '网络请求超时');
          throw createError('ECONNABORTED');
        }

        if (error.code !== undefined) {
          throw error;
        }

        // warning(false, '未知错误');
        throw createError('ERROR');
      })
  )
}

/**
 * 模拟 post json 请求，对应的 参数为json对象
 * 用于后台 从 RequestBody 中获得参数
 * @param path
 * @param body
 */
export function postJson (path, body = {}) {
  console.log(body)
  return (
    axios
      .post(`${path}`, body, {withCredentials: true,timeout:30*1000,cancelToken: source.token})
      .then(response => response)
      .then(main => {
        console.log(main);
        if (main.success === 0) {
          throw createError(main.msg);
        } else {
          return main || '{}';
        }
      })
      .catch(error => {
        if (error instanceof SyntaxError) {
          //   warning(false, 'JSON 解析错误');
          throw createError('SYNTAX_JSON');
        }

        // 超时
        if (error.code === 'ECONNABORTED') {
          //   warning(false, '网络请求超时');
          throw createError('ECONNABORTED');
        }

        if (error.code !== undefined) {
          throw error;
        }

        // warning(false, '未知错误');
        throw createError('ERROR');
      })
  )
}

/**
 * get 请求，传输url 对应的 参数，可以在 path 中进行绑定，或者 RequestParam 中进行绑定
 * @param path
 * @param body
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export function getJson (path, body = {}) {
  console.log(body);
  console.log(JSON.stringify(body));

  return (
    axios
      .get(`${path}`, {params: body, withCredentials: true,timeout:30*1000,cancelToken: source.token})
      .then(response => response)
      .then(main => {
        console.log(main);
        if (main.success === 0) {
          throw createError(main.msg);
        } else {
          return main.data || '{}';
        }
      })
      .catch(error => {
        if (error instanceof SyntaxError) {
          //   warning(false, 'JSON 解析错误');
          throw createError('SYNTAX_JSON');
        }

        // 超时
        if (error.code === 'ECONNABORTED') {
          //   warning(false, '网络请求超时');
          throw createError('ECONNABORTED');
        }

        if (error.code !== undefined) {
          throw error;
        }

        // warning(false, '未知错误');
        throw createError('ERROR');
      }));
}

/**
 * get 请求，传输url 对应的 参数，可以在 path 中进行绑定，或者 RequestParam 中进行绑定
 * @param path
 * @param method 支持方法 head、delete、put、patch、get ，默认为 get
 * @param body 参数信息
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export function sendJson (path, method = 'get', body = {}) {
  console.log(body);

  method = method || 'get';

  switch (method) {
    case 'head':
      return (
        axios
          .head(`${path}`, {params: body})
          .then(response => response)
          .then(main => {
            console.log(main);
            if (main.success === 0) {
              throw createError(main.msg);
            } else {
              return main.data || '{}';
            }
          })
          .catch(error => {
            if (error instanceof SyntaxError) {
              //   warning(false, 'JSON 解析错误');
              throw createError('SYNTAX_JSON');
            }

            // 超时
            if (error.code === 'ECONNABORTED') {
              //   warning(false, '网络请求超时');
              throw createError('ECONNABORTED');
            }

            if (error.code !== undefined) {
              throw error;
            }

            // warning(false, '未知错误');
            throw createError('ERROR');
          })
      )
    case 'delete':
      return (
        axios
          .delete(`${path}`, {params: body, withCredentials: true})
          .then(response => response)
          .then(main => {
            console.log(main);
            if (main.success === 0) {
              throw createError(main.msg);
            } else {
              return main.data || '{}';
            }
          })
          .catch(error => {
            if (error instanceof SyntaxError) {
              //   warning(false, 'JSON 解析错误');
              throw createError('SYNTAX_JSON');
            }

            // 超时
            if (error.code === 'ECONNABORTED') {
              //   warning(false, '网络请求超时');
              throw createError('ECONNABORTED');
            }

            if (error.code !== undefined) {
              throw error;
            }

            // warning(false, '未知错误');
            throw createError('ERROR');
          })
      )
    case 'put':
      return (
        axios
          .put(`${path}`, body, {withCredentials: true})
          .then(response => response)
          .then(main => {
            console.log(main);
            if (main.success === 0) {
              throw createError(main.msg);
            } else {
              return main.data || '{}';
            }
          })
          .catch(error => {
            if (error instanceof SyntaxError) {
              //   warning(false, 'JSON 解析错误');
              throw createError('SYNTAX_JSON');
            }

            // 超时
            if (error.code === 'ECONNABORTED') {
              //   warning(false, '网络请求超时');
              throw createError('ECONNABORTED');
            }

            if (error.code !== undefined) {
              throw error;
            }

            // warning(false, '未知错误');
            throw createError('ERROR');
          })
      )
    case 'patch':
      return (
        axios
          .patch(`${path}`, body, {withCredentials: true})
          .then(response => response)
          .then(main => {
            console.log(main);
            if (main.success === 0) {
              throw createError(main.msg);
            } else {
              return main.data || '{}';
            }
          })
          .catch(error => {
            if (error instanceof SyntaxError) {
              //   warning(false, 'JSON 解析错误');
              throw createError('SYNTAX_JSON');
            }

            // 超时
            if (error.code === 'ECONNABORTED') {
              //   warning(false, '网络请求超时');
              throw createError('ECONNABORTED');
            }

            if (error.code !== undefined) {
              throw error;
            }

            // warning(false, '未知错误');
            throw createError('ERROR');
          })
      )
    default:
      return (
        axios
          .get(`${path}`, {params: body, withCredentials: true})
          .then(response => response)
          .then(main => {
            console.log(main);
            if (main.success === 0) {
              throw createError(main.msg);
            } else {
              return main.data || '{}';
            }
          })
          .catch(error => {
            if (error instanceof SyntaxError) {
              //   warning(false, 'JSON 解析错误');
              throw createError('SYNTAX_JSON');
            }

            // 超时
            if (error.code === 'ECONNABORTED') {
              //   warning(false, '网络请求超时');
              throw createError('ECONNABORTED');
            }

            if (error.code !== undefined) {
              throw error;
            }

            // warning(false, '未知错误');
            throw createError('ERROR');
          }));
  }
}
