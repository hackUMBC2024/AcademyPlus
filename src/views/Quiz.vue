<template>
    <div>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: null
        }
    },
    methods: {
        checkAnswer() {

        }
    }
}
</script>

<style scoped>

</style>