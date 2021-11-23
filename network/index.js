import parseResponse from './parse-response';

const options = (body, params = {}) => ({
  ...body && { body: JSON.stringify(body) }  
});

// eslint-disable-next-line max-len
const createFetcher = methodName => async (libInstance, url, body, params) => {
  let response = {}
  try {
    response = await libInstance[methodName](url, options(body, params))
    response.ok = true
  } catch (err) {
    response.ok = false
    response = {...response, ...err}
  }
  return parseResponse(response);
  
};
export const get = createFetcher('$get');
export const post = createFetcher('$post');
export const put = createFetcher('$put');
export const patch = createFetcher('$patch');
export const del = createFetcher('$delete');
