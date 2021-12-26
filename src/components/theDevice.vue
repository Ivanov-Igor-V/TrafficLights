<template>
  <div class="green">
    <div class="root">
      <div class="frame">
        <div class="frame__body">
          <div class="circle">
            <div
              class="circleColorRed"
              v-bind:class="{ test: isActive }"
              ref="red"
            ></div>
          </div>
          <div class="circle">
            <div class="circleColorYellow" ref="yellow"></div>
          </div>
          <div class="circle">
            <div
              class="circleColorGreen"
              ref="green"
              v-bind:class="{ test: isActive }"
            ></div>
          </div>
        </div>
        <div class="panel">
          <span class="clock"> Timer: {{ this.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapState(["curColor", "count"]),
    colorChanger() {
      if (this.curColor === "red") {
        this.$refs.red.style.opacity = 1;
      } else if (this.curColor === "yellow") {
        this.$refs.yellow.style.opacity = 1;
      } else if (this.curColor === "green") {
        this.$refs.green.style.opacity = 1;
      }
    },
    giveMeCount() {
      return this.$store.getters.COUNT_VALUE;
    },
  },
  watch: {
    giveMeCount(val) {
      if (this.count < 5) this.isActive = !this.isActive;
    },
  },
  mounted() {
    this.colorChanger;
  },
};
</script>

<style>
.circle {
  width: 160px;
  height: 160px;
  margin: 20px;
  border-radius: 50%;
  border: solid;
}

.root {
  background: #004242;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
}
.frame {
  justify-content: center;
  margin: 0 auto;
  display: flex;
  width: 70%;
  max-height: 100%;
  padding-top: 30px;
  align-items: center;
  flex-direction: column;
}

.frame__body {
  border-radius: 50px;
  flex-direction: column;
  background: black;
  border: 1px solid purple;
  width: 200px;
  display: flex;
  align-items: center;
  margin: 20px;
}
.circleColorRed {
  background: red;
  height: 100%;
  border-radius: 50%;
  opacity: 0.3;
}
.circleColorYellow {
  background: yellow;
  height: 100%;
  border-radius: 50%;
  opacity: 0.3;
}
.circleColorGreen {
  background: green;
  height: 100%;
  border-radius: 50%;
  opacity: 0.3;
}

.test {
  opacity: 0.3 !important;
}
</style>