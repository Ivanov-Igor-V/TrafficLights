<template>
  <div class="green">
    <the-device />
  </div>
</template>

<script>
import theDevice from "@/components/theDevice.vue";
export default {
  name: "Green",
  components: {
    theDevice,
  },
  data() {
    return {};
  },
};
</script>


<style scoped>
.unActive {
  opacity: 0.3;
}
</style>


