<template>
    <div class="map">
      <h1>{{ searchQuery }}</h1>
      <div class="roadmap">
        <div class="course-node" id="course1" style="margin-left: 0;">Course 1</div>
        <div class="course-node" id="course2" style="margin-left: 20px;">Course 2</div>
        <div class="course-node" id="course3" style="margin-left: 40px;">Course 3</div>
        <div class="course-node" id="course4" style="margin-left: 60px;">Course 4</div>
        <div class="course-node" id="course5" style="margin-left: 80px;">Course 5</div>
        <svg class="connections"></svg>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from "gsap";
  
  export default {
    data() {
      return {
        searchQuery: "",
      };
    },
    mounted() {
      this.searchQuery = this.$route.query.search || "";
      this.animateNodes();
      this.$nextTick(() => {
        this.drawLines();
        this.setupNodeClick();
      });
    },
    methods: {
      drawLines() {
        const svg = document.querySelector(".connections");
        const nodes = document.querySelectorAll(".course-node");
  
        nodes.forEach((node, index) => {
          if (index < nodes.length - 1) {
            const nextNode = nodes[index + 1];
  
            const x1 = node.getBoundingClientRect().right + window.scrollX; 
            const y1 = node.getBoundingClientRect().top + window.scrollY + 25; 
            const x2 = nextNode.getBoundingClientRect().left + window.scrollX; 
            const y2 = nextNode.getBoundingClientRect().top + window.scrollY + 25; 
  
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke", "white");
            line.setAttribute("stroke-width", "3");
            svg.appendChild(line);
          }
        });
      },
      animateNodes() {
        gsap.from(".course-node", {
          duration: 0.5,
          scale: 0,
          opacity: 0,
          stagger: 0.1,
        });
      },
      setupNodeClick() {
        document.querySelectorAll(".course-node").forEach((node) => {
          node.addEventListener("click", () => {
            gsap.to(node, {
              duration: 0.5,
              scale: 1.1,
              backgroundColor: "#e94e77",
              ease: "bounce.out",
              yoyo: true,
              repeat: 1,
            });
          });
        });
      },
    },
  };
  </script>
  
  <style>
  .map {
    position: relative;
    height: 25rem;
  }
  
  .course-node {
    width: 100px;
    height: 50px;
    background-color: #4a90e2;
    color: white;
    text-align: center;
    line-height: 50px;
    border-radius: 10px;
    position: absolute;
    z-index: 2;
  }
  
  #course1 { top: 0px; left: 0px; }
  #course2 { top: 100px; left: -200px; }
  #course3 { top: 200px; left: 100px; }
  #course4 { top: 300px; left: -200px; }
  #course5 { top: 400px; left: 80px; }
  
  .connections {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  h1 {
    color: var(--color-heading);
    text-align: center;
  }
  </style>
  