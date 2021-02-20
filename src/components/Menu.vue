<template>
    <body>
      <p class="blink"><Marquee>社会人やりながら大学院生やりながらバンドマンをやっている男のブログです（爆死）ゆっくりしていってね！</Marquee></p>
      <div><router-link to="/blog_1"><h1 v-html="markedContentHead1"></h1>
      <h2 v-html="markedContentDate1"></h2>
      <h3>xvide○sから逃れるためにブログを開設した話</h3></router-link></div>
      <div><router-link to="/blog_2"><h1 v-html="markedContentHead2"></h1>
      <h2 v-html="markedContentDate2"></h2>
      <h3>JAIST社会人コースに合格した話</h3></router-link></div>
    </body>
</template>

<script>
  import marked from 'marked';
  import markDownSource1 from '../assets/ブログを始めました.md';
  import markDownSource2 from '../assets/JAIST社会人コース合格体験記.md';

  export default {
    computed: {
      source1 () {
        return markDownSource1;
      },
      head1 () {
        var str = markDownSource1;
        return str.split(/\r\n|\r|\n/)[0];
      },
    　date1 () {
        var str = markDownSource1;
        return str.split(/\r\n|\r|\n/)[1];
      },
      markedContent1 () {
        return marked(this.source1);
      },
      markedContentHead1 () {
        return marked(this.head1);
      },
      markedContentDate1 () {
        return marked(this.date1);
      },
            source1 () {
        return markDownSource1;
      },
      head2 () {
        var str = markDownSource2;
        return str.split(/\r\n|\r|\n/)[0];
      },
    　date2 () {
        var str = markDownSource2;
        return str.split(/\r\n|\r|\n/)[1];
      },
      markedContent2 () {
        return marked(this.source2);
      },
      markedContentHead2 () {
        return marked(this.head2);
      },
      markedContentDate2 () {
        return marked(this.date2);
      },
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
        text-align:left;
        font-size: 8px;
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