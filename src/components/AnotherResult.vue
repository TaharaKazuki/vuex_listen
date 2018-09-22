<template>
  <div class="another_counter">
    <p>Counter is: {{ counter }}</p>
    <p>Number of Clicks: {{ clickCounter }}</p>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    name:'another-counter',
    computed: {
      ...mapGetters('counter',{
        counter:'doubleCounter',
        clickCounter:'clickCounter'
      })
    }
  }
</script>
