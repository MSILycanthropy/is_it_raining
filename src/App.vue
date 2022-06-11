<script setup>
import { reactive } from "@vue/reactivity";
import RainDisplay from "./components/RainDisplay.vue";
import { isItRaining } from "./helpers/is_it_raining";

let state = reactive({
  hasPerms: false,
  raining: false,
});

navigator.geolocation.getCurrentPosition(async ({ coords }) => {
  const { latitude, longitude } = coords;
  state.hasPerms = true;
  state.raining = await isItRaining(latitude, longitude);
});

if (navigator.permissions) {
  navigator.permissions
    .query({ name: "geolocation" })
    .then((permissionStatus) => {
      permissionStatus.onchange = () => {
        state.hasPerms = permissionStatus.state === "granted";
      };
    });
}
</script>

<template>
  <RainDisplay :has-perms="state.hasPerms" :raining="state.raining" />
</template>
