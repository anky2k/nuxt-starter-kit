const parseBody = async (res, type = 'json') => {  
  debugger
  switch (type) {
    case 'blob': return res.blob();
    case 'text': return res.text();
    case 'arraybuffer': return res.arrayBuffer();
    default: return res;
  }
};

const handleError = async res => {
  debugger
  if (res.ok) return;

  const body = await parseBody(res);
  const error = new Error(body.message || body);
  error.statusCode = res.status;
  error.code = body.code;
  throw error;
};

const parseResponse = async res => {
  debugger
  if (!res.ok) return handleError(res);
  return {
    message: res.statusText,
    success: res.ok,
    status: res.status,
    headers: res.headers,
    data: await parseBody(res)
  };
};

export default parseResponse;
