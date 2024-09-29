import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore("global", {
    state: () => {
        return {
            version: "1.1.0",
        }
    },
    getters: {
        getVersion: (state) => {
            return state.version;
        }
    }
});