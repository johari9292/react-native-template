import AxiosUtils from '../../utils/axiosUtils';
//token and name is string
//params are object e.g {key:value}

export const getData = (token, name, params) => {
  const request = new AxiosUtils(token);
  return new Promise(async (res, rej) => {
    try {
      const {data} = await request.get(name, params || {});

      res(data);
    } catch (error) {
      rej(error);
      console.log(error);
    }
  });
};

export const postData = (token, name, params) => {
  const request = new AxiosUtils(token);
  return new Promise(async (res, rej) => {
    try {
      const data = await request.post(name, params);
      res(data);
    } catch (error) {
      rej(error.response.data);
      console.log(error);
    }
  });
};
export const patchData = (token, name, params) => {
  const request = new AxiosUtils(token);
  return new Promise(async (res, rej) => {
    try {
      const data = await request.patch(name, params);
      res(data);
    } catch (error) {
      rej(error.response.data);
      console.log(error);
    }
  });
};
export const deleteData = (token, name) => {
  const request = new AxiosUtils(token);
  return new Promise(async (res, rej) => {
    try {
      const data = await request.delete(name);
      res(data);
    } catch (error) {
      rej(error.response.data);
      console.log(error);
    }
  });
};

export const updateData = (token, name, values) => {
  const request = new AxiosUtils(token);
  return new Promise(async (res, rej) => {
    try {
      const {data} = await request.put(name, values);
      res(data);
    } catch (error) {
      rej(error.response.data);
    }
  });
};
