<template>
    <div id="vertical-parent">
        <div id="course-name">Linear Algebra</div>
        <div id="parent">
            <div id="table-of-content">
                <h2>Table of Contents</h2>
                <div class="contents-item" v-for="(item, index) in Array.from({length: 10}, (_, i) => i+1)" :key="index">
                    Section {{ item }}
                </div>
            </div>
            <div id="bar"></div>
            <div id="content" v-html="markdownToHtml"></div>
        </div>
    </div>
</template>

<script>
import { marked } from 'marked';
import Katex from "katex";
import extendedLatex from "marked-extended-latex";

export default {
    data() { 
        //Data shoul come from pinia add a method to the global store thats fetches whatever is given from the search menu
        return { markdown: `$\\sum_{n = 1}^{\\infty} \\frac{1}{n} $ $a+b=c$` }
    },
    computed: {
        markdownToHtml() {
            const options = {
                render: (formula , displayMode) => {
                    console.log(formula)
                    return Katex.renderToString(formula, { displayMode: true });
                }
            };

            marked.use(extendedLatex(options))
            return marked(this.markdown);
        }
    }
}
</script>
<style scoped>
#vertical-parent {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
#course-name {
    height: 20vw;
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    background-color: #D1E9F6;
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
}
#table-of-content h2 {
    text-align: center;
    margin-left: -7px;
    text-transform: uppercase;
}
#content {
  height: inherit;
  width: 80%;
  overflow-y: scroll;
  padding-left: 10px;
}
#bar {
    background-color: black;
    height: inherit;
    width: 2%;
}
.contents-item {
    width: 100%;
    background-color: gray;
    padding: 14px 0;
    padding-left: 12px;
    text-align: left;
    cursor: pointer;
    font-size: 18px;
}
</style>
<style>
#app:has(#parent) {
  padding: 1rem .5rem !important;
  margin: 0 !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
body:has(#parent) {
  margin: 0 auto;
}
</style>