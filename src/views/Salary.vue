<template>
    <div id="salary">
        <h1>Career Projections</h1>
        <h2>Career Option 1</h2>
        <p>$103,450</p>
        <h2>Career Option 2</h2>
        <p>$145,450</p>
        <h2>Career Option 3</h2>
        <p>$160,450</p>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useGlobalStore } from '@/stores/store';

export default {
  data() {
    return {
        
    };
  },
  computer: {
    ...mapStores(useGlobalStore)
  }
}
</script>

<style scoped>
#salary {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
}

#salary > p {
    font-weight: bold;
    color: 	#3e9c35;
}
</style>