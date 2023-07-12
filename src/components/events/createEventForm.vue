<template>
  <base-card>
    <div class="form__event">
      <h2 class="title__text">Create Event</h2>
      <form @submit.prevent="handleData" class="form">
        <div class="form__control">
          <label class="form__text-title" for="title">Title</label>
          <input
            placeholder="Event Title"
            type="text"
            name="title"
            v-model.trim="enteredTitle"
          />
        </div>
        <div class="form__control">
          <label class="form__text-title" for="file">Image</label>
          <input
            type="file"
            name="file"
            accept=".img , .jpg , .png , .gif"
            ref="fileInput"
          />
        </div>
        <div class="form__control">
          <label class="form__text-title" for="date">Date of the Event</label>
          <input type="date" name="date" v-model.trim="enteredDate" />
        </div>
        <div class="form__control">
          <label class="form__text-title" for="time">Time of the event</label>
          <input type="time" name="time" v-model.trim="enteredTime" />
        </div>
        <div class="form__control">
          <label for="events">Category of the event</label>
          <label
            ><input
              type="checkbox"
              name="music"
              value="Music"
              v-model.trim="music"
            />
            Music</label
          >
          <label
            ><input
              type="checkbox"
              name="coding"
              value="Coding"
              v-model.trim="coding"
            />
            Coding</label
          >
        </div>
        <div class="form__btn">
          <button class="btn">Submit</button>
        </div>
      </form>
    </div>
  </base-card>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      music: null,
      coding: null,
      enteredTitle: "",
      enteredDate: "",
      enteredTime: "",
    };
  },
  methods: {
    handleData() {
      console.log(this.music, this.coding);
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];
      const data = {
        id: new Date().getTime,
        title: this.enteredTitle,
        time: this.enteredTime,
        date: this.enteredDate,
        file: file.name,
        music: this.music,
        coding: this.coding,
      };
      this.$emit("save-data", data);
      console.log(this.categories);
      this.$router.push("/events");
    },
  },
};
</script>

<style scoped>
.title__text {
  font-size: 2.5rem;
}
input:focus {
  outline: none;
}
.form__text-title {
  font-size: 1.4em;
  font-weight: 500;
}
input[type="file"] {
  padding: 0 0 0 13rem;
  width: 100%;
}

input[type="time"] {
  width: 138%;
}
input[type="date"] {
  width: 118%;
}
.form__event {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  margin: 4rem 0rem 3rem 0;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.form__control {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.form__control label {
  width: 100px; /* Set a fixed width for labels to create consistent alignment */
}

.btn {
  background: none;
  border: none;
  font-size: 2rem;
  margin-top: 1.2rem;
  color: green;
  text-transform: uppercase;
  transition: all 0.45s ease;
}

.btn:hover {
  color: red;
  transform: scale(1.2);
}
</style>
