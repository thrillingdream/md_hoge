<template>
    <body>
      <p class="blink"><Marquee>社会人やりながら大学院生やりながらバンドマンをやっている男のブログです（爆死）ゆっくりしていってね！</Marquee></p>
      <h4>記事一覧</h4>
      <div><router-link to='blog/0'><h1 v-html="ContentTitle(0)"></h1>
      <h2 v-html="ContentDate(0)"></h2>
      <h3>xvide○sから逃れるためにブログを開設した話</h3></router-link></div>
      <div><router-link to='blog/1'><h1 v-html="ContentTitle(1)"></h1>
      <h2 v-html="ContentDate(1)"></h2>
      <h3>JAIST社会人コースに合格した話</h3></router-link></div>
    </body>
</template>

<script>
  import ViewMd from './ViewMd.js'
  export default {
    compornents: {
        ViewMd
    },
    methods: {
      ContentTitle(num) {
        console.log(ViewMd.markedContentFromNum(num, 'Title'));
        return ViewMd.markedContentFromNum(num, 'Title');
      },
      ContentDate(num) {
        console.log(ViewMd.markedContentFromNum(num, 'Date'));
        return ViewMd.markedContentFromNum(num, 'Date');
      },
      ContentNum() {
        return ViewMd.getBlogTotal;
      },
      GetBlogPath(num_str) {
        return  'blog/'+ num_str;
      }
    },
  };
</script>


<style scoped>
    h1 {
        text-align:left;
        color:#DDDDDD;
        font-size: 11px;
    }
    h2 {
        text-align:left;
        color:#DDDDDDEE;
        font-size: 11px;
    }
    h3 {
        text-align:left;
        color:#DDDDDD;
        font-size: 11px;
    }
    h4 {
        margin : 15px 30px 5px 30px ;
        text-align:left;
        font-size: 15px;
    }
    body {
        height: 1980px;
    }
    div  {
        margin : 5px 30px 5px 30px ;
        padding : 15px ;
        border : 2px solid #DDDDDD ;
        background-color : #222222;
    }
    p {
        font-size: 15px;
    }
    .blink {
        -webkit-animation: blink 2s ease infinite;
        animation: blink 2s ease infinite;
    }
    @-webkit-keyframes blink {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes blink {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
</style>