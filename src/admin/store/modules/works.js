const works = {
  state: {
    works: []
  },
  mutations: {},
   
  actions: {
    addNewWork(store, work) {
      return this.$axios.post("/works", work).then(response => {
        console.log("ok")
	  }).catch(e => console.error(e));
	}
  },
  
  getters: {}
}

export default works;