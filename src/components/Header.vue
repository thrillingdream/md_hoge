<template>
    <header>
        <!-- <h1><a href="/">ブログ</a></h1> -->
        <h1><a href="/"><img src="../assets/blog_name.png" title="title" width="200px"></a></h1> 
        <div id="form">
        <!-- ここは検索欄がはいる -->
        </div>
    </header>
</template>

<script>
    export default {
        name: 'site-header',
    }
</script>

<style scoped>
    header {
        background-color: #121212;
        color: #fff;
        height: 30px;
        display: grid;
        grid-template-columns: 20px 1fr 20px;
        grid-template-rows: 1fr;
        margin-bottom: 10px;
    }

    header > * {
        grid-row: 1;
        grid-column: 2;
    }

    h1 {
        /* position: fixed; */
        height: 25px;
        background-color: #121212;
        top: 15px;
        left: 10px;
    }

    h1 > a {
        color: #fff;
        text-decoration: none;
    }

    #form {
        justify-self: end;
        align-self: center;
        display: none;
    }

    @media (min-width: 768px) {
        header {
            grid-template-columns: 1fr 700px 1fr;
        }

        #form {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        header {
            grid-template-columns: 1fr 980px 1fr;
        }
    }
</style>