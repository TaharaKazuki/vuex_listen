<template>
  <div class="counter">
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'counter',
    methods: {
      ...mapActions('counter',{
        increment: 'counterIncrement',
        decrement: 'counterDecrement'
      })
    }
  }
</script>
