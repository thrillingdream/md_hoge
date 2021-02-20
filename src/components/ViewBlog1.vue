<template>
  <body><h1><div v-html="markedContent">
  </div></h1></body>
</template>

<script>
  import marked from 'marked';
  import markDownSource from '../assets/ブログを始めました.md';

  export default {
    computed: {
      source () {
        return markDownSource;
      },
      markedContent () {
        return marked(this.source);
      },
    },
  };
</script>


<style scoped>

  h1 {
    text-align:left;
    color: #DDDDDD;
    text-decoration: none;
    margin: auto;
    font-size: 10px;
  }
  body {
    height: 1980px;
  }
  div  {
     margin : 30px ;
     padding : 20px ;
     border : 2px solid #DDDDDD ;
     background-color : #222222;
}
</style>