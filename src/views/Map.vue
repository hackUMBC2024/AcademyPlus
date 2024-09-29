<template>
  <div class="map">
    <h1 id="search-query">{{ searchQuery }}</h1>
    <div class="roadmap">
      <router-link to="/content" class="course-node" id="course1">
        <div class="cube">
          <div class="face top" :class="{ gold: completedNodes[0] }" id="start-cube">Start</div>
          <div class="face bottom" :class="{ gold: completedNodes[0] }"></div>
          <div class="face front" :class="{ gold: completedNodes[0] }"></div>
          <div class="face back" :class="{ gold: completedNodes[0] }"></div>
        </div>
      </router-link>
      <div class="course-node" id="course2" @click="completeNode(1)">
        <div class="cube">
          <div class="face top " :class="{ gold: completedNodes[1] }"></div>
          <div class="face bottom" :class="{ gold: completedNodes[1] }"></div>
          <div class="face front" :class="{ gold: completedNodes[1] }"></div>
          <div class="face back" :class="{ gold: completedNodes[1] }"></div>
        </div>
      </div>
      <div class="course-node" id="course3" @click="completeNode(2)">
        <div class="cube" :class="{ gold: completedNodes[2] }">
          <div class="face top" :class="{ gold: completedNodes[2] }"></div>
          <div class="face bottom" :class="{ gold: completedNodes[2] }"></div>
          <div class="face front" :class="{ gold: completedNodes[2] }"></div>
          <div class="face back" :class="{ gold: completedNodes[2] }"></div>
        </div>
      </div>
      <div class="course-node" id="course4" @click="completeNode(3)">
        <div class="cube" :class="{ gold: completedNodes[3] }">
          <div class="face top" :class="{ gold: completedNodes[3] }"></div>
          <div class="face bottom" :class="{ gold: completedNodes[3] }"></div>
          <div class="face front" :class="{ gold: completedNodes[3] }"></div>
          <div class="face back" :class="{ gold: completedNodes[3] }"></div>
        </div>
      </div>
      <div class="course-node" id="course5" @click="completeNode(4)">
        <div class="cube" :class="{ gold: completedNodes[4] }">
          <div class="face top" :class="{ gold: completedNodes[4] }"></div>
          <div class="face bottom" :class="{ gold: completedNodes[4] }"></div>
          <div class="face front" :class="{ gold: completedNodes[4] }"></div>
          <div class="face back" :class="{ gold: completedNodes[4] }"></div>
        </div>
      </div>
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
      completedNodes: [true, false, false, false, false],
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
          delay: index * 0.35,
          ease: "power2.inOut",
        });
      });
    },
    animateNodes() {
      gsap.from(".course-node", {
        duration: 1,
        scale: 0,
        opacity: 0,
        y: 20,
        stagger: 0.22,
      });
    },
    setupNodeClick() {
      document.querySelectorAll(".course-node").forEach((node) => {
        node.addEventListener("click", () => {
          gsap.to(node, {
            duration: 1,
            scale: 1.1,
            repeat: 1,
          });
        });
      });
    },
    completeNode(index) {
      if (index === 0 || this.completedNodes[index - 1]) {
    this.$set(this.completedNodes, index, true);
    if (index < this.completedNodes.length - 1) {
      this.$set(this.completedNodes, index + 1, true);
    }
  }
    },
  },
};
</script>

<style>
/*Need to update all of these to be responsive, but for the purposes of this demo it will be okay */
#start-cube {
  text-transform: uppercase;
}
#search-query {
  text-transform: capitalize;
}
.roadmap {
  position: relative;
  height: 700px;
  width: 500px;
  margin-top: -150px;
  margin-right: 100px;
}

.course-node {
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  border-radius: 10px;
  position: absolute;
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
  left: 300px;
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
  margin-top: -100px;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(-45deg);
}

.face {
  width: 100px;
  height: 100px;
  background: rgb(33, 33, 33);
  border: 2px solid black;
  position: absolute;
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

#course1 .cube {
  margin-left: 50px;
}
#course2 .cube {
  margin-left: 50px;
}

#course3 .cube {
  margin-left: 50px;
}

#course4 .cube {
  margin-left: 50px;
}

#course5 .cube {
  margin-top: -150px;
}

h1 {
  color: var(--color-heading);
  text-align: center;
  margin-top: -100px;
}

.gold {
  background-color: gold;
}
</style>
