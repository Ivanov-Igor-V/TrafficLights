<template>
  <div id="nav">
    
    <router-link to="/red">Red</router-link> |
    <router-link to="/yellow">Yellow</router-link>  |
    <router-link to="/green">Green</router-link>
    
  </div>
   <!-- <keep-alive> -->
  <router-view v-bind:directionGr="directionGr" />
   <!-- </keep-alive> -->
</template>

<script>
export default {
  data() {
    return  {
     directionGr: {
       value: true}
  }
  }
}
  
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: #004242;
  padding: 30px;
  color: white
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.root {
  background: #004242;
  position: relative;
  top: 0;
  left: 0;
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
    align-content: center;
}

.frame__body {
  border-radius: 50px;
  flex-direction: column;
  background: black;
  border: 1px solid purple;
  /* width: 30%; */
  width: 200px;
  display: flex;
  align-items: center;

}

.circle {
  width: 160px;
  height: 160px;
  margin: 20px;
  border-radius: 50%;
  border: solid
  }


.panel {
 
    background: white;
    font-size: 30px;
    width: 250px;
    height: min-content;
    border-radius: 15px;
    margin: 0 20px ;
    
}

.clock {
  margin: 20px ;
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
