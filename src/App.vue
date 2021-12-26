<template>
  <div id="app">
    <div id="nav">
      <router-link to="/red">Red</router-link>
      | <router-link to="/yellow">Yellow</router-link> |
      <router-link to="/green">Green</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    timer() {
      this.IntId3 = setInterval(this.countDecrease, 1000);
    },
    countDecrease() {
      if (this.count > 1) {
        this.$store.commit("DECREMENT_COUNT");
      } else {
        this.$router.push(this.$store.getters.COLOR_CALC);
      }
    },
    curRoute(route) {
      console.log(route);
      this.$store.commit("CURRENT_ROUTE_TO_CUR_COLOR", route);
    },
  },
  computed: {
    ...mapState(["curColor", "nextColor", "count"]),
  },
  watch: {
    $route(newVal, oldVal) {
      this.$store.commit("DECREMENT_START_VALUE", {
        old: oldVal.name,
        new: newVal.name,
      });
    },
  },
  mounted() {
    this.timer();
    this.$router.push("red");
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e2e9f0;
  height: 100%;
  margin: 0 auto;
}

body,
html {
  width: 100%;
  height: 100%;
  background: #004242;
}

.green {
  margin: 0 auto;
}

#nav {
  background: #004242;
  padding: 30px;
  color: white;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.panel {
  background: white;
  font-size: 30px;
  width: 250px;
  height: min-content;
  border-radius: 15px;
  margin: 0 20px;
}

.clock {
  margin: 20px;
  color: #004242;
}

.circleColorRed {
  background: red;
  height: 100%;
  border-radius: 50%;
}
.circleColorYellow {
  background: yellow;
  height: 100%;
  border-radius: 50%;
}
.circleColorGreen {
  background: green;
  height: 100%;
  border-radius: 50%;
}
</style>
