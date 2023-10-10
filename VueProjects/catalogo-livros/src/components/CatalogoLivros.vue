<template>
  <div>
  <h2>Meus Livros Lidos</h2>
  <ul>
  <li v-for="(livro, index) in livros" :key="index">{{ livro }}</li>
  </ul>
  </div>
  </template>
  
  <script>
  export default {
  data() {
  return {
  livros: [
  'Livro 1',
  'Livro 2',
  'Livro 3',
  // Adicione mais livros aqui
  ]
  };
  }
  };
  </script>