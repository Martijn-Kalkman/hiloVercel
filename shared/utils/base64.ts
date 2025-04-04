export const encodeBase64 = (str) => {
    if (typeof window !== 'undefined' && window.btoa) {
      return window.btoa(str);
    } else if (typeof Buffer !== 'undefined') {
      return Buffer.from(str).toString('base64');
    } else {
      throw new Error('Base64 encoding not supported');
    }
  };