<template>
    <div>
        <div
          v-for="(item, index) in currentQuiz"
          :key="index"
        >
          {{ Number(index) + 1 }}. {{ item["question"] }}
          <br>
          a.{{ item["a"] }}
          <br>
          b.{{ item["b"] }}
          <br>
          c.{{ item["c"] }}
          <br>
          <p>Enter Answer:</p>
          <input @click="checkAnswer(index)" v-model="inputModels[index].value">
          <div v-if="inputModels[index].value.toLowerCase() == item['correct_answer']">Correct Answer</div>
          <hr />
        </div>
    </div>
</template>

<script>
import { useGlobalStore } from '@/stores/store';
import { version } from 'vue';

export default {
    data() {
        let globalStore = useGlobalStore();

        return {
            currentQuiz: {
                "0": {
                    "question": "What is the wave function of a quantum system, often used to describe the probability of finding a particle in a particular state?",
                    "a": "A fixed value that determines the energy of a particle",
                    "b": "A mathematical function that describes the probability distribution of a particle's position and momentum",
                    "c": "A measure of the uncertainty principle",
                    "correct_answer": "b"
                },
                "1": {
                    "question": "In the Heisenberg Uncertainty Principle, what is the minimum amount of time over which you can know both the position and momentum of a particle?",
                    "a": "100 ps",
                    "b": "10^-8 s",
                    "c": "10^-16 s",
                    "correct_answer": "c"
                },
                "2": {
                    "question": "What is the fundamental principle that states it is impossible to know both the exact position and momentum of a particle at the same time?",
                    "a": "The observer effect",
                    "b": "The wave function collapse",
                    "c": "The Heisenberg Uncertainty Principle",
                    "correct_answer": "c"
                }
            },
            inputModels: [
                {id: 0, value: ""},
                {id: 1, value: ""},
                {id: 2, value: ""}
            ]
        }
    },
    methods: {
        checkAnswer(index) {
            console.log(this.inputModels[index]);
            console.log("Hello from " + index);
        }
    }
}
</script>

<style scoped>

</style>