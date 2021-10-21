<template>

  <div class="yellow">
   <div class="root">
    <div class="frame">
      <div class="frame__body">
        <div class="circle" > <div class="circleColorRed" v-bind:class="{ unActive: true}"> </div> </div>
        <div class="circle" > <div class="circleColorYellow" v-bind:class="{ unActive: this.on}"> </div> </div>
        <div class="circle" > <div class="circleColorGreen" v-bind:class="{ unActive: true}"> </div> </div>
      </div>
      <router-view />
     <div class='panel'> <span class="clock"> Timer:  {{ this.count }} </span> </div>
  </div>
  </div>
  </div>
</template>

<script>


export default {
  name: 'Yellow',
  props: ['directionGr'], 
  data() {
    return {
      address: '',
      count: 3,
      IntId2: ''
      }
    }, 
   methods: {
       
        timer() {
           this.IntId2 = setInterval(this.countDecrease, 1000)
        },
        countDecrease() {
              if (this.count > 0) {
                this.count--}
              else {
          if (this.directionGr.value === true) {this.address = '/green'}
          else {this.address = '/red'}
          this.$router.push(this.address)
              }
          }
        },
    mounted() {
              // clearTimeout(this.empty)
              this.timer()
    },
    beforeUnmount() {
      this.directionGr.value = !this.directionGr.value
       clearInterval(this.IntId2)
    },
}
</script>


<style scoped>
.unActive {
  opacity: 0.3;
}

</style>


