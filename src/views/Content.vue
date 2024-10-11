<template>
  <div id="vertical-parent">
    <div id="course-name">Academy+</div>
    <div id="parent">
      <div id="table-of-content">
        <h3 class="toc">Table of Contents</h3>
        <div
          class="contents-item"
          :class="{ highlighted: currentIndex === index }"
          @click="highlight(index); getCourseContent(index);"
          v-for="(item, index) in contents"
          :key="index"
        >
          {{ Number(index) + 1 }}. {{ item }}
          <hr />
        </div>
        <div class="contents-item" @click="">
          Quiz
        </div>
      </div>
      <div id="bar"></div>
      <div v-if="currentIndex !== null && fetchedContent === ''" id="content" class="loading">Loading...</div>
      <div v-else id="content" v-html="markdownToHtml"></div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
import Katex from "katex";
import extendedLatex from "marked-extended-latex";
import { useGlobalStore } from '@/stores/store';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
export default {
  data() {
    let globalStore = useGlobalStore();
    //Data should come from pinia add a method to the global store thats fetches whatever is given from the search menu
    return {
      currentIndex: null,
      contents: globalStore.currentTitles,
      fetchedContent: '',
    };
  },
  computed: {
    markdown() {
      return String.raw`${this.fetchedContent}`;
    },
    markdownToHtml() {
      const options = {
        render: (formula, _displayMode) => {
          return Katex.renderToString(formula, {
            displayMode: true,
            output: "mathml",
          });
        },
      };

      marked.use(extendedLatex(options));
      return marked(this.markdown);
    },
  },
  methods: {
    highlight(index) {
      this.currentIndex = index;
    },
    async getCourseContent(index) {
      console.log('getting course content for ' + this.contents[index]);
      let globalStore = useGlobalStore();
      if (globalStore.currentPagesLoaded[index] !== undefined) {
        this.fetchedContent = globalStore.currentPagesLoaded[index];
        return;
      }
      // Clear the fetched content
      this.fetchedContent = '';
      const title = this.contents[index];
      const response = await fetch('/api/searchContent', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
      });

      const json = await response.json();


      if (json.error) {
        console.log('Error code: ' + response.error);
        console.log('Error content: ' + response.content);
        return;
      }
      const courseContent = json.content.replace(/\$\$/g, "$");
      globalStore.currentPagesLoaded[index] = courseContent;
      this.fetchedContent = courseContent;
      return courseContent;
    },
    async getCourseQuiz() {
      let title = this.contents[index];

      let global = useGlobalStore();

      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
      });

      const json = await response.json();

      if (json.error) {
        console.log('Error code: ' + response.error);
        console.log('Error content: ' + response.content);
        return;
      }

      //Do whatever here with the returned quiz
      global.currentQuiz = json.content;
    }
  },
  mounted() {
    let globalStore = useGlobalStore();
    globalStore.currentPagesLoaded = new Array(10);
  }
};
</script>
<style scoped>
#vertical-parent {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.toc {
  text-align: center;
}

hr {
  width: 120%;
  margin-left: -20px;
}
#course-name {
  height: 20vw;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  background-color: #d1e9f6;
  color: black;
}
#parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vw;
}

.katex-html {
  color: red;
}

#table-of-content {
  height: inherit;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: scroll;
  overflow-x: hidden;
  font-weight: bold;
}

.highlighted {
  overflow: wrap;  
  color: rgb(243, 255, 163);
}

#table-of-content h2 {
  text-align: center;
  text-transform: uppercase;
  text-overflow:clip;
  font-weight: bold;
}

#content {
  height: inherit;
  width: 80%;
  overflow-y: scroll;
  padding-left: 10px;
  padding-top: 240px;
}

#bar {
  background-color: black;
  height: inherit;
  width: 0.2%;
}

.contents-item {
  width: 98%;
  padding: 14px 0;
<<<<<<< HEAD
  padding-left: 6px;
=======
  padding-left: 8px;
>>>>>>> 58c4e381a5e3b6f673d8837dcb465e7919f85612
  text-align: left;
  cursor: pointer;
  font-size: 16px;
}
.loading {
  font-weight: bold;
  font-size: 36px;
  font-style: italic;
}
</style>

<style>
#app:has(#vertical-parent) {
  padding: 1rem 0.5rem !important;
  margin: 0 !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  max-width: fit-content !important;
}
body:has(#vertical-parent) {
  margin: 0 auto;
}
</style>
