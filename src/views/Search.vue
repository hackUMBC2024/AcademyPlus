<template>
  <div class="about">
    <div class="form-group">
      <input
        placeholder="Search...."
        v-model="searchQuery"
        required
      />
      <button @click="search">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      this.$router.push({ path: '/map', query: { search: this.searchQuery } });
    },
  },
};
</script>

<style>
#signin {
  text-align: left;
  justify-content: left;
}

h1 {
  color: var(--color-heading);
  margin-bottom: 20px;
  text-align: center;
}

input {
  width: 20rem;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

input:focus {
  border-color: var(--color-border-hover);
}

button {
  padding: 0.6rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 4px;
}

button:hover {
  background-color: var(--color-accent-dark);
}
</style>
