<template>
  <div class="yellow">
    <the-device />
  </div>
</template>

<script>
import theDevice from "@/components/theDevice.vue";
export default {
  name: "Yellow",
  components: {
    theDevice,
  },
};
</script>


<style scoped>
.unActive {
  opacity: 0.3;
}
</style>


