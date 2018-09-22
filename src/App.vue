<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <Result/>
        <AnotherResult/>
        <hr>
        <Counter/>
        <AnotherCounter/>
        <hr>
        <input type="text" :value="value" @input="updateValue($event.target.value)">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import AnotherCounter from './components/AnotherCounter.vue';
  // import Result from './components/Result.vue';
  import Result from './components/Result';
  import AnotherResult from './components/AnotherResult.vue';
  import { mapActions, mapGetters } from 'vuex';


  export default {
    name: 'app',
    computed: {
      ...mapGetters('value',['value'])
    },
    methods: {
      ...mapActions('value',['updateValue'])
    },
    components: {
      Counter,
      AnotherCounter,
      Result,
      AnotherResult
    },
  }
</script>

<style>

</style>
