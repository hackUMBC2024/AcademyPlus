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
        <a href="javascript:;" v-on:click="logOut">Logout</a>
      </div>
    </div>
    <img src="/academywhite.png" height="150"></img>
    <div class="form-group">
      <input
        placeholder="Intro to Javascript...."
        v-model="searchQuery"
        required
        @keyup.enter="searchClicked"
      />
    </div>
    <div>
      <p id="version_tag">v{{ version }}</p>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useGlobalStore } from '@/stores/store';

export default {
  data() {
    let globalStore = useGlobalStore();
    return {
      searchQuery: '',
      loggedIn: globalStore.isLoggedIn,
      username: globalStore.username,
      version: globalStore.version
    };
  },
  methods: {
    searchClicked() {
      console.log("Search Clicked");
      this.$router.push({ path: '/map', query: { search: this.searchQuery } });
    },
    async logOut() {
      console.log("Logged Out");

      let fetchRespone = await fetch("/api/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      });

      let response = await fetchRespone.json();

      if(response.error) {
        console.log("Error code: " + response.error);
        console.log("Error content: " + response.content);
        //Handle Error here figure it out 
        return;
      }

      console.log("Success code:" + response.success);
      console.log("Success content: " + response.content);
    }
  },
  computed: {
    ...mapStores(useGlobalStore)

  }
};
</script>

<style>
img {
  margin-left:9rem;
}
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

#version_tag {
  padding-left: 10px;
  font-size: 10px;
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
