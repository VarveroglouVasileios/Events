import { createStore } from "vuex";
import eventsModule from "./modules/events";

const store = createStore({
  modules: {
    events: eventsModule,
  },
});

export default store;
