<template>
  <div class="about">
    <div id="userContent">
      <div v-if="!loggedIn">
        <RouterLink to="/">login</RouterLink>
        or
        <RouterLink to="/signup">sign up</RouterLink>
      </div>
      <div v-else>
        <p>@{{ username }}</p>
      </div>
    </div>
    <div class="form-group">
      <input
        placeholder="Intro to Javascript...."
        v-model="searchQuery"
        required
        @keyup.enter="searchClicked"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      loggedIn: false,
      username: "John"
    };
  },
  methods: {
    searchClicked() {
      console.log("Search Clicked");
      this.$router.push({ path: '/map', query: { search: this.searchQuery } });
    }
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

#userContent {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
}

input {
  width: 30rem;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 40px;
  box-sizing: border-box;
  transition: border-color 0.3s;
  font-weight: bold;
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
