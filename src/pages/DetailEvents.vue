<template>
  <base-card style="margin-top: 8rem">
    <div class="main__content">
      <h1 class="main__title">{{ title }}</h1>
      <p class="main__date">{{ date }}</p>
      <p class="main__time">{{ time }}</p>
      <router-link :to="allEvents" class="back__btn">All Events</router-link>
    </div>
  </base-card>
</template>

<style scoped>
.main__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
}

.main__title {
  font-size: 2rem;
  font-weight: 400;
  color: red;
  text-decoration: underline;
  text-decoration-color: blue;
}

.main__date {
  font-size: 2rem;
  color: gold;
}

.main__time {
  font-size: 2rem;
  color: chocolate;
}

.back__btn {
  text-decoration: none;
  font-size: 2rem;
}
</style>

<script>
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  computed: {
    allEvents() {
      return "events";
    },
    title() {
      return this.event.title;
    },
    date() {
      return this.event.created_at;
    },
    time() {
      return this.event.time;
    },
  },
  async created() {
    await this.$store.dispatch("events/loadData");
    this.event = this.$store.getters["events/getEvents"].find(
      (event) => event.id === this.id
    );
  },
};
</script>
