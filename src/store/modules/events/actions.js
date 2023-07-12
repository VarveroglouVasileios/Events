export default {
  async addEvent(context, payload) {
    const id = new Date().getTime();

    const data = {
      id: id,
      title: payload.title,
      image: payload.file,
      created_at: payload.date,
      time: payload.time,
      music: payload.music,
      coding: payload.coding,
    };

    await fetch(
      `https://events-1a62a-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );

    context.commit("addEvent", data);
  },

  search(context, payload) {
    context.commit("search", payload);
  },
  selectCoding(context) {
    context.commit("setCurrentCategory", "coding");
  },
  selectMusic(context) {
    context.commit("setCurrentCategory", "music");
  },
  selectAll(context) {
    context.commit("setCurrentCategory", "all");
  },

  async loadData(context) {
    try {
      const res = await fetch(
        `https://events-1a62a-default-rtdb.europe-west1.firebasedatabase.app/events.json`
      );
      const data = await res.json();

      const event = [];
      for (const key in data) {
        const events = {
          id: key,
          title: data[key].title,
          image: data[key].image,
          time: data[key].time,
          created_at: data[key].created_at,
          music: data[key].music,
          coding: data[key].coding,
        };
        event.push(events);
      }
      context.commit("loadEvent", event);
      // console.log(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  },
};
