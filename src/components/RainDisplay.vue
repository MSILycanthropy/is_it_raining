<script setup>
defineProps({
  raining: {
    default: false,
    type: Boolean,
  },
  hasPerms: {
    default: false,
    type: Boolean,
  },
});
</script>

<template>
  <div
    v-if="hasPerms"
    class="rain-display"
    :class="raining ? 'raining' : 'not-raining'"
  >
    <div v-if="raining" class="text">Yes</div>
    <div v-else class="text">No</div>
  </div>
  <div v-else class="rain-display needs-perms">
    <div class="text">
      <div>Please allow</div>
      <div>location services</div>
    </div>
  </div>
</template>

<style scoped>
.rain-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.needs-perms {
  background-color: #6a706e;
}
.raining {
  background-color: #57886c;
}
.not-raining {
  background-color: #da2c38;
}
.text {
  padding: 2rem;
  font-size: 2rem;
  background-color: #031926;
  color: #d9cfc1;
  min-width: 25%;
  width: fit-content;
  text-align: center;
  text-transform: uppercase;
  font-weight: semibold;
}
</style>
