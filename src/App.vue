<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer"

  export default {
      name: 'App',
      components: {Header, Footer},
      //タイトル系のスクリプト
      methods : {
        createTitleDesc : function(routeInstance){
            // タイトルを設定
            if(routeInstance.meta.title){
                var setTitle = routeInstance.meta.title + ' | 旅の途中とバンドマン';
                document.title = setTitle;
            } else {
                document.title = '旅の途中とバンドマン'
            }

            // メタタグdescription設定
            if(routeInstance.meta.desc){
                var setDesc = routeInstance.meta.desc + ' | 旅の途中とバンドマン';
                document.querySelector("meta[name='description']").setAttribute('content', setDesc)
            } else {
                document.querySelector("meta[name='description']").setAttribute('content', 'description is not set')
            }
        } 
      },
      mounted : function(){
          var routeInstance = this.$route;
          this.createTitleDesc(routeInstance);
      },
      watch: { 
          '$route' (routeInstance, from) {
              this.createTitleDesc(routeInstance);
          }
      }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffffd8;
    background-color: #000000;
  }
  * {
      margin: 0px;
      padding: 0px;
  }
  body {
      font-family: fot-tsukuardgothic-std, sans-serif;
      line-height: 1.5;
      font-size: 14px;
  }

  .container {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
  }

  @media (min-width: 768px) {
      .container {
          width: 700px;
          padding: 0;
          margin: 0 auto;
      }
  }

  @media (min-width: 1024px) {
      .container {
          width: 980px;
      }
  }
</style>
