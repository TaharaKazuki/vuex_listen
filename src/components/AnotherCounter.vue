<template>
  <div class="another_counter">
    <button class="btn btn-primary" @click="asyncIncrement(100)">async Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement(50)">async Decrement</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'another-counter',
    methods: {
      ...mapActions('counter',{
        asyncIncrement:'counterAsyncIncrement',
        asyncDecrement:'counterAsyncDecrement'
      })
    }
  }
</script>
