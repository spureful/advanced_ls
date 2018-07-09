import axios from "axios";

axios.defaults.baseURL = "http://webdev-api.loftschool.com";
axios.defaults.headers["Authorization"] = `Bearer
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL2xvZ2luIiwiaWF0IjoxNTMxMTIwMzkyLCJleHAiOjE1MzExMzgzOTIsIm5iZiI6MTUzMTEyMDM5MiwianRpIjoiV3VxOHFuc01yc0paTmdSMyJ9.WSnwycRTvU2-MIp_fR7s1BcHEZAgnHU5hFOZbPcFU_U`;

axios.interceptors.response.use(
  response => {
    console.log("response in interceptor", response);
    return response;
  },
  error => {
    const ttl = parseInt(localStorage.getItem("ttl"));
    const DateNow = Math.floor(Date.now() / 1000);
    const originalRequest = error.config;
    if (DateNow > ttl && error.response.status === 401) {
      axios.post("/refreshToken").then(response => {
        const token = response.data.token;
        const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
        localStorage.setItem("token", token);
        localStorage.setItem("ttl", ttl);
        axios.defaults.headers["Authorization"] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL2xvZ2luIiwiaWF0IjoxNTMxMTIwMzkyLCJleHAiOjE1MzExMzgzOTIsIm5iZiI6MTUzMTEyMDM5MiwianRpIjoiV3VxOHFuc01yc0paTmdSMyJ9.WSnwycRTvU2-MIp_fR7s1BcHEZAgnHU5hFOZbPcFU_U`;
        originalRequest.headers["Authorization"] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL2xvZ2luIiwiaWF0IjoxNTMxMTIwMzkyLCJleHAiOjE1MzExMzgzOTIsIm5iZiI6MTUzMTEyMDM5MiwianRpIjoiV3VxOHFuc01yc0paTmdSMyJ9.WSnwycRTvU2-MIp_fR7s1BcHEZAgnHU5hFOZbPcFU_U`;

        return axios(originalRequest);
      });
    }

    return Promise.reject(error);
  }
);

export default axios;
