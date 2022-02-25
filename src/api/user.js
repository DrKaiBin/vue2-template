import request from "@/utils/axios/index";

export function login(data) {
  return request(
    {
      url: "/user/login",
      method: "post",
      data,
    },
    { loading: true }
  );
}

export function getUserInfo(data) {
  return request({
    url: "/user/info",
    method: "post",
    data,
  });
}
