<template>
  <div class="green">
    <div class="root">
    
    <div class="frame">
      <!-- <button class="btn" @click="this.active"> Запуск! </button> -->
      <!-- <button class="btn" @click="$router.push('/yellow')"> Стоп! </button> --> 
      <div class="frame__body">
        <div class="circle" > <div class="circleColorRed" v-bind:class="{ unActive: true}"> </div> </div>
        <div class="circle" > <div class="circleColorYellow" v-bind:class="{ unActive: true}"> </div> </div>
        <div class="circle" > <div class="circleColorGreen" v-bind:class="{ unActive: this.on}"> </div> </div>
        <!-- <img  src="./assets/red-light.jpg" alt="нету" v-bind:class="{ unActive: true }"> 
        <img  src="./assets/yellow-light.jpg" alt="нету" v-bind:class="{unActive: true}"> 
        <img  src="./assets/green-light.jpg" alt="нету" v-bind:class="{ unActive: false}" >  -->
        <!-- <img  src="./assets/red-light.jpg" alt="нету"  class='red'> 
        <img  src="./assets/yellow-light.jpg" alt="нету"   class='yellow'> 
        <img  src="./assets/green-light.jpg" alt="нету"   class='green'>  -->
      </div>
       <div class='panel'> <span class="clock"> Timer:  {{ this.count }} </span> </div>
    </div>
    
  </div>
  </div>
  
</template>

<script>

export default {
  name: 'Green',
 
 data() {
    return {
      // timer: 1000,
      address: '/yellow',
      count: 15,
       IntId3: ''
      }
    },
    methods: {
         nextRoute() {
        this.$router.push(this.address)
        },
        timer() {
           this.IntId3 = setInterval(this.countDecrease, 1000)
            //  return this.nextRoute()
          },
          countDecrease() {
              if (this.count > 0) {
                this.count--
                if (this.count <= 3) {
                  this.on = !this.on
                  }
                }
                
              else this.$router.push(this.address)
            }
        },
        
        mounted() {
            this.timer()
              
              
    },
    beforeUnmount() {
          clearInterval(this.IntId3)
        },

}
</script>


<style scoped>
.unActive {
  opacity: 0.3;
}

</style>


