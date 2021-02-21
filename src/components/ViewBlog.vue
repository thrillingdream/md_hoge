<template>
  <body>
    <a><router-link :to="{ name: 'Menu' }"> back </router-link></a>
    <h1><div v-html="Content(id)"></div></h1>
  </body>
</template>

<script>
  import ViewMd from './ViewMd.js'

  export default {
    props: {
      id: Number
    },
    components: {
        ViewMd
    },
    methods: {
      Content:function(num) {
        return ViewMd.markedContentFromNum(num,'All');
      },
    },
  }
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