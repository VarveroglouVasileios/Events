<template>
  <div class="btn">
    <router-link class="create__btn" to="/createForm">Create Event</router-link>
  </div>
</template>

<script></script>

<style scoped>
.create__btn {
  background-color: whitesmoke;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  border-radius: 5%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Adjust the values as needed */
  transition: all 0.48s ease;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
}

.create__btn:hover {
  background-color: cadetblue;
}
</style>
