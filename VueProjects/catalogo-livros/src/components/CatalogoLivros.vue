<template>
  <div class="catalogo-livros"> 
      <h1>catalogo-livrosComponent</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class CatalogoLivrosComponent extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

<style scoped lang="scss">
  .catalogo-livros {

  }
</style>
