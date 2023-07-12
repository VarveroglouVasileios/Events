<template>
  <createEventForm @save-data="SaveData"></createEventForm>
</template>

<script>
import createEventForm from "../components/events/createEventForm.vue";
export default {
  components: { createEventForm },
  methods: {
    SaveData(data) {
      this.$store.dispatch("events/addEvent", data);
    },
  },
};
</script>
