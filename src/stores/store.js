import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore("global", {
    state: () => {
        return {
            version: "1.1.0",
            isLoggedIn: false,
            username: "Test",
            currentTitles: [],
            currentSearchQuery: "",
            currentPagesLoaded: [],
            currentQuiz: {}
        }
    },
    getters: {
        getVersion: (state) => {
            return state.version;
        }
    },
    actions: {
        setCurrentTitles(parsedTitles) {
            this.currentTitles = parsedTitles;
        }
    }
});