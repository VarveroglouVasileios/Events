<template>
  <div class="mainEvents">
    <div class="categories">
      <button
        class="category__btn"
        :class="{ active: activeCategory === 'all' }"
        @click="selectCategory('all')"
      >
        All Events
      </button>
      <button
        class="category__btn"
        :class="{ active: activeCategory === 'music' }"
        @click="selectCategory('music')"
      >
        Music
      </button>
      <button
        class="category__btn"
        :class="{ active: activeCategory === 'coding' }"
        @click="selectCategory('coding')"
      >
        Coding
      </button>
    </div>

    <ul>
      <TransitionGroup class="list" name="list" tag="div">
        <li class="list__items" v-for="event in events" :key="event.id">
          <img class="list__img" :src="event.image" alt="Event Image" />
          <h2 class="list__title">{{ event.title }}</h2>
          <p class="list__date">{{ event.created_at }} {{ event.time }}</p>
          <router-link :to="'events' + '/' + event.id" class="list__btn"
            >more details</router-link
          >
        </li>
      </TransitionGroup>
    </ul>
  </div>
</template>

<style scoped>
.category__btn {
  background: none;
  border: none;
  font-size: 1.6rem;
  transition: all 0.42s ease;
}
.categories {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
  gap: 3rem;
}
.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 2fr);
  row-gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.list__items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2.5rem;
  border-radius: 10%;
  list-style: none;
  align-self: center;
  justify-self: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Adjust the values as needed */
}
.active {
  border-bottom: 0.2rem solid lightskyblue;
  color: lightskyblue; /* or any color you prefer */
}

.list__btn {
  text-decoration: none;
  font-size: 1.2rem;
  color: green;
  text-transform: uppercase;
  transition: all 0.44s ease;
}

.list__btn:hover {
  color: red;
  transform: scale(1.2);
}
</style>

<script>
export default {
  data() {
    return {
      activeCategory: "all",
    };
  },
  computed: {
    events() {
      return this.$store.getters["events/getEvents"];
    },
  },
  methods: {
    selectCategory(category) {
      this.activeCategory = category;
      this.$store.dispatch(
        `events/select${category.charAt(0).toUpperCase() + category.slice(1)}`
      );
    },
  },
  created() {
    this.$store.dispatch("events/loadData");
  },
};
</script>
