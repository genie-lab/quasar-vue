import { api, axios } from "boot/axios";

const userRouter = `/api/member`;

const token = {
  create: null,
  duplicateCheck: null,
  update: null,
  remove: null,
  reset: null,
};

const create = async (form) => {
  try {
    if (token.create != null) {
      token.create = token.create.cancel("create cancel");
    }
    token.create = axios.CancelToken.source(); // 중복이벤트시 취소할수 있는 함수
    const result = await api.post(`${userRouter}`, form, {
      cancelToken: token.create.token,
    });
    return result;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};

const duplicateCheck = async (url) => {
  try {
    if (token.duplicateCheck != null) {
      token.duplicateCheck.cancel("duplicateCheck cancel");
    }
    token.duplicateCheck = axios.CancelToken.source();
    const result = await api.get(`${userRouter}${url}`, {
      cancelToken: token.duplicateCheck.token,
    });
    return result.data;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};

const update = async (payload) => {
  try {
    //token
    if (token.update != null) {
      token.update = token.update.cancel("update cancel");
    }
    token.update = axios.CancelToken.source();
    const id = payload.id;
    const result = api.put(`${memberRouter}/${id}`, payload, {
      cancelToken: token.update.token,
    });
    return result;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};

const remove = async (payload) => {
  try {
    //token
    if (token.remove != null) {
      token.remove = token.remove.cancel("remove cancel");
    }
    token.remove = axios.CancelToken.source();
    const id = payload.id;
    const result = api.delete(`${memberRouter}/${id}`, {
      cancelToken: token.remove.token,
    });
    return result;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};

const reset = async (payload) => {
  try {
    if (token.reset != null) {
      token.reset = token.reset.cancel("reset cancel");
    }
    token.reset = axios.CancelToken.source(); // 중복이벤트시 취소할수 있는 함수
    const result = await api.post(`${memberRouter}/reset`, payload, {
      cancelToken: token.reset.token,
    });
    return result;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};

export default { create, duplicateCheck, update, remove, reset };
