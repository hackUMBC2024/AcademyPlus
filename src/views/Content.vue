<template>
  <div id="parent">
    <div id="table-of-content">
      SHOULD BE A VERTICAL LIST FULL OF TITLED
    </div>
    <div id="content"> 
      SHOULD BE RENDERED USING TEXME
    </div>
  </div>
</template>

<script>
export default {
    data() {
      //Data shoul come from pinia add a method to the global store thats fetches whatever is given from the search menu
    }
}
</script>

<style>
#app:has(> #parent) {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
body:has(#parent) {
  margin: 10px;
  margin-bottom: 0;
}
</style>

<style scoped>
#parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
#table-of-content {
  border-right: 1rem solid black;
  height: inherit;
  width: 40%;
}
#content {
  border-left: 1rem solid black;
  height: inherit;
  width: 60%;
}
</style>