import Vue from "vue";

const skills = [
  {
    "titleGruop": "Frontend",
	"skillsCont": {
      "Html5": 90,
      "css3": 85,
      "javaScript & jQuery": 50
		 
	 }

  },
  {
    titleGruop: "Backend",
	"skillsCont": {
      "PHP": 10,
      "mySQL": 30,
      "Node.js": 40,
      "Mongo.db": 50 
		 
	 }
   
  },
  {
    titleGruop: "Workflow",
	"skillsCont": {
		"Git": 50,
		 "Gulp": 30,
		 "Bower": 20
		 
	 }
  
  }
];



const skill = {
  template: "#skills-row-item",
  props: {
	titleSkills: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
	  const circle = this.$refs["color-circle"];
	  const dash = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
	  );
      const persents =(dash/100) * (100 - this.skillPercents);
	 
      circle.style.strokeDashoffset = persents;
		
	  	}
  },
  mounted() {
	
    this.drawCircle();
  }  
};
const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#aboutme__skills-block",
  components: {
    skillsRow
  },
  data: {
    skillscontent: {}
  },
  created() {
    const dataSkills = skills;
    this.skillscontent = dataSkills;
   
  },
	
  template: "#skills-section", 
  methods: {
 findblock() {	 
     const skillBlock = this.$refs["skills-block"];
  
    window.onscroll = function() {
    const posTop = skillBlock.getBoundingClientRect().top
	const fff = skillBlock.offsetTop;
    const exactTop = posTop.toFixed();
    console.log(exactTop);
	if (exactTop > 200 && exactTop < 210) {
	  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa");
//		skill.methods.drawCircle();
		}
}
	  

  }
  },
	
  mounted() {
	  this.findblock();
  }
 

  });