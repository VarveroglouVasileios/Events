export default {
  addEvent(state, data) {
    state.events.push(data);
  },
  search(state, data) {
    state.searchQuery = data;
  },
  setCurrentCategory(state, data) {
    state.currentCategory = data;
  },
  loadEvent(state, data) {
    state.events = data;
  },
};
