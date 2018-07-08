const blog = {
  state: {
    article: [
	  {
        title: "",
        date: "",
        content: ""
      }
	]
  },
  mutations: {
	fillUpBlog(state, blog) {
      state.article = blog;
    },
    addSkill(state, skill) {
      state.article.push(blog);
    },
  },
  actions: {
    loadArticle(state) {
      const params = {
        title: this.article.title,
        date: this.article.date,
        content: this.article.content
      };
      console.log(params);
      console.log("hi from storage");
      const url =
        "http://webdev-api.loftschool.com/posts?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL2xvZ2luIiwiaWF0IjoxNTMxMDA1OTYwLCJleHAiOjE1MzEwMjM5NjAsIm5iZiI6MTUzMTAwNTk2MCwianRpIjoiQW44RWZ3MEg1akZEWlJiaCJ9.tzrEFIyvRI-tQqm6QHBEG5VM6O77D2JrgAGfD4rKGsc";
      fetch(url).then(res => res.json())
        .then(res => {
		  console.log(this.article);  
      })
    }
  },
  getters: {}
}

export default blog;