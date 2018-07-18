const blog = {
  state: {},
  mutations: { },
  actions: {
    loadArticle(store, article) {
//		XHR
//      const xhr = new XMLHttpRequest();
//      const url =
//        "http://webdev-api.loftschool.com/posts?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI0LCJpc3MiOiJodHRwOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9sb2dpbiIsImlhdCI6MTUzMTEyMTgzMywiZXhwIjoxNTMxMTM5ODMzLCJuYmYiOjE1MzExMjE4MzMsImp0aSI6IlZRQkVzWUxZT2t0RnBjclIifQ.d9krV10KIzsrTSI0W5rpxHz8r-f92-sJbMADdsyMtek";
//      xhr.open("post", url, true);
//      xhr.send();
//      xhr.onreadystatechange = function() {
//        if (xhr.status == 200) {
//         
//          console.log("ok");
//        }
//        if (xhr.status == 302) {
//         
//          console.log("error");
//        }
//      };
		
//		AXIOS
//      const axios = require('axios');
////	  axios.defaults.headers["Authorization"] = `Bearer
////       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL2xvZ2luIiwiaWF0IjoxNTMxMTIwMzkyLCJleHAiOjE1MzExMzgzOTIsIm5iZiI6MTUzMTEyMDM5MiwianRpIjoiV3VxOHFuc01yc0paTmdSMyJ9.WSnwycRTvU2-MIp_fR7s1BcHEZAgnHU5hFOZbPcFU_U"`;
//      const url =
//        "http://webdev-api.loftschool.com/posts?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL2xvZ2luIiwiaWF0IjoxNTMxMTIwMzkyLCJleHAiOjE1MzExMzgzOTIsIm5iZiI6MTUzMTEyMDM5MiwianRpIjoiV3VxOHFuc01yc0paTmdSMyJ9.WSnwycRTvU2-MIp_fR7s1BcHEZAgnHU5hFOZbPcFU_U";
//      axios.post(url, article).then(function (response) {
//        console.log(response);
//      }).catch(function (error) {
//        console.log(error);
//      });
		
//		FETCH
		
       const url =
        "http://webdev-api.loftschool.com/posts?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI0LCJpc3MiOiJodHRwOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9sb2dpbiIsImlhdCI6MTUzMTEyMTgzMywiZXhwIjoxNTMxMTM5ODMzLCJuYmYiOjE1MzExMjE4MzMsImp0aSI6IlZRQkVzWUxZT2t0RnBjclIifQ.d9krV10KIzsrTSI0W5rpxHz8r-f92-sJbMADdsyMtek";
        fetch(url ,{
          method: 'POST',
          body: article
      }).then(res => res.json())
        .then(res => {
	  }).catch(e => console.error(e));
//		
		
//		AXIOS - variant 2
		
//      axios({
//        method: "post",
//        url: "http://webdev-api.loftschool.com/posts?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL2xvZ2luIiwiaWF0IjoxNTMxMTIwMzkyLCJleHAiOjE1MzExMzgzOTIsIm5iZiI6MTUzMTEyMDM5MiwianRpIjoiV3VxOHFuc01yc0paTmdSMyJ9.WSnwycRTvU2-MIp_fR7s1BcHEZAgnHU5hFOZbPcFU_U",
//        data: {
//           article
//        }
//      })
//      .then(function(response) {
//
//          console.log(response);
//
//      })
//      .catch(function (error) {
//          console.log(error);
//      });
    }
  },
  getters: {}
}
export default blog;
