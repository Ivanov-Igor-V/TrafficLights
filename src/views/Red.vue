<template>
  <div class="red">
    <div class="root">
      <div class="frame">
        <div class="frame__body">
          <div class="circle">
            <div
              class="circleColorRed"
              v-bind:class="{ unActive: this.on }"
            ></div>
          </div>
          <div class="circle">
            <div
              class="circleColorYellow"
              v-bind:class="{ unActive: true }"
            ></div>
          </div>
          <div class="circle">
            <div
              class="circleColorGreen"
              v-bind:class="{ unActive: true }"
            ></div>
          </div>
        </div>
        <div class="panel">
          <span class="clock"> Timer: {{ this.count }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Red",
  data() {
    return {
      address: "/yellow",
      count: 10,
      IntId: "",
    };
  },
  methods: {
    nextRoute() {
      this.$router.push(this.address);
    },
    timer() {
      this.IntId = setInterval(this.countDecrease, 1000);
    },
    countDecrease() {
      if (this.count > 0) {
        this.count--;
        if (this.count <= 3) {
          this.on = !this.on;
        }
      } else this.$router.push(this.address);
    },
  },
  mounted() {
    this.timer();
  },
  beforeUnmount() {
    clearInterval(this.IntId);
  },
};
</script>


<style scoped>
.unActive {
  opacity: 0.3;
}
</style>

