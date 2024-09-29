<template>
  <div class="map">
    <h1>{{ searchQuery }}</h1>
    <div class="roadmap">
      <div class="course-node" id="course1">
        <div class="cube">
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="face front"></div>
          <div class="face back"></div>
        </div>
      </div>
      <div class="course-node" id="course2">        <div class="cube">
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="face front"></div>
          <div class="face back"></div>
        </div></div>
      <div class="course-node" id="course3">        <div class="cube">
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="face front"></div>
          <div class="face back"></div>
        </div></div>
      <div class="course-node" id="course4">        <div class="cube">
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="face front"></div>
          <div class="face back"></div>
        </div></div>
      <div class="course-node" id="course5">        <div class="cube">
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="face front"></div>
          <div class="face back"></div>
        </div></div>
      <svg class="connections">
        <line id="line1"></line>
        <line id="line2"></line>
        <line id="line3"></line>
        <line id="line4"></line>
      </svg>
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
    this.$nextTick(() => {
      this.setLineCoordinates();
      this.animateNodes();
      this.animateLines();
      this.setupNodeClick();
    });
  },
  methods: {
    setLineCoordinates() {
      const nodes = [
        document.getElementById("course1"),
        document.getElementById("course2"),
        document.getElementById("course3"),
        document.getElementById("course4"),
        document.getElementById("course5"),
      ];

      const lines = [
        document.getElementById("line1"),
        document.getElementById("line2"),
        document.getElementById("line3"),
        document.getElementById("line4"),
      ];

      for (let i = 0; i < lines.length; i++) {
        const startNode = nodes[i];
        const endNode = nodes[i + 1];

        const startX = startNode.offsetLeft + startNode.offsetWidth / 2;
        const startY = startNode.offsetTop + startNode.offsetHeight / 2;

        const endX = endNode.offsetLeft + endNode.offsetWidth / 2;
        const endY = endNode.offsetTop + endNode.offsetHeight / 2;

        lines[i].setAttribute("x1", startX);
        lines[i].setAttribute("y1", startY);
        lines[i].setAttribute("x2", endX);
        lines[i].setAttribute("y2", endY);
      }
    },
    animateLines() {
      const lines = document.querySelectorAll(".connections line");
      lines.forEach((line, index) => {
        const length = line.getTotalLength();
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 0.5,
          delay: index * 0.2,
          ease: "power2.inOut",
        });
      });
    },
    animateNodes() {
    gsap.from(".course-node", {
      duration: 0.5,
      scale: 0,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: "bounce.out",
    });
  },
    setupNodeClick() {
      document.querySelectorAll(".course-node").forEach((node) => {
        node.addEventListener("click", () => {
          gsap.to(node, {
            duration: 0.5,
            scale: 1.1,
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
  height: 700px;
  width: 500px;
}

.course-node {
  width: 80px;
  height: 80px;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  line-height: 80px;
  border-radius: 10px;
  position: absolute;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3),
    -3px -3px 5px rgba(255, 255, 255, 0.3);
  border: 1px solid #ccc;
  perspective: 500px;
  margin: 100px;
}
#course1 {
  top: 100px;
  left: 200px;
}
#course2 {
  top: 250px;
  left: 0px;
}
#course3 {
  top: 350px;
  left: 400px;
}
#course4 {
  top: 450px;
  left: 0px;
}
#course5 {
  top: 650px;
  left: 200px;
}

.connections {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.connections line {
  stroke: white;
  stroke-width: 3;
}

.cube {
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center;
  transform: rotateX(-45deg) rotateY(-45deg);
}


.face {
  width: 100px;
  height: 100px;
  background: skyblue;
  border: 2px solid black;
  position: absolute;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 2rem;
}

.front {
  transform: translateZ(50px) translateY(50px);
  height: 50px;
}

.back {
  transform: translateZ(150px) translateY(50px);
  height: 50px;
}

.left {
  transform: rotateY(-90deg) translateX(-100px);
}

.right {
  transform: rotateY(90deg) translateX(100px);
}

.top {
  transform: rotateX(90deg) translateY(100px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(50px) translateX(0px) translateY(-100px);
}

h1 {
  color: var(--color-heading);
  text-align: center;
  margin-top: -100px;
}
</style>
