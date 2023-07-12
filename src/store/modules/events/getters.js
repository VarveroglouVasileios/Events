export default {
  getEvents(state) {
    let filteredEvents = state.events;

    // Filter by search query
    if (state.searchQuery) {
      filteredEvents = filteredEvents.filter((item) =>
        item.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }

    // Filter by category
    switch (state.currentCategory) {
      case "coding":
        filteredEvents = filteredEvents.filter((event) => event.coding);
        break;
      case "music":
        filteredEvents = filteredEvents.filter((event) => event.music);
        break;
      default:
        break; // no need to filter when category is 'all'
    }

    return filteredEvents;
  },
};
