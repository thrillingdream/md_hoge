<template>
    <footer>
        <p>Copyright 2021 Ibuki Noro.</p>
        <ul>
            <li><a href="https://twitter.com/Norotororo">Twitter</a></li>
            <li><a href="mailto:thrillingdream@gmail.com">Mail</a></li>
            <li><a href="https://github.com/thrillingdream">Github</a></li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: 'site-footer'
    }
</script>

<style scoped>
    footer {
        background-color: #121212;
        color: #ffffffd8;
        padding: 0 20px;
        margin-top: 160px;
    }
    ul > li {
        display: inline-block;
        margin-right: 2em;
    }
    ul a {
        color: #fff;
        text-decoration: none;
    }
    @media (min-width: 768px) {
        footer {
            padding: 0;
            height: 50px;
            display: grid;
            grid-template-columns: 1fr 700px 1fr;
            grid-template-rows: 1fr;
        }
        footer > * {
            grid-column: 2;
            grid-row: 1;
        }
        p {
            justify-self: start;
            align-self: center;
        }
        ul {
            justify-self: end;
            align-self: center;
        }
    }
    @media (min-width: 1024px) {
        footer {
            grid-template-columns: 1fr 980px 1fr;
        }
    }
</style>