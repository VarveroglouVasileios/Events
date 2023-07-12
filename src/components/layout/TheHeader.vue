<template>
  <div class="header">
    <header>
      <div class="searchBar">
        <label class="search__label" for="search">E-vents</label>
        <input
          @input="updateSearchQuery"
          placeholder="Search"
          v-model.trim="searchQuery"
          type="search"
          name="search"
          id="search"
        />
      </div>

      <div class="createEvent">
        <create-event></create-event>
      </div>
    </header>
  </div>
</template>

<script>
import CreateEvent from "../events/CreateEventButton.vue";
export default {
  components: { CreateEvent },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    searchResults() {
      return this.$store.getters["events/getEvents"];
    },
  },
  methods: {
    updateSearchQuery() {
      this.$store.dispatch("events/search", this.searchQuery);
    },
  },
};
</script>

<style scoped>
input[type="search"] {
  font-size: 1.2rem;
  padding: 0.6rem;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border: 0.2rem solid lightgray;
}
input:focus {
  outline: none;
}
.searchBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.search__label {
  font-size: 1.5rem;
}
.header {
  background-color: whitesmoke;
  padding: 1.5rem 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Adjust the values as needed */
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 25rem;
  align-items: center;
}
</style>
