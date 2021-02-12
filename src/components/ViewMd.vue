<template>
  <div v-html="markedContent">
  </div>
</template>

<script>
  import marked from 'marked';
  import markDownSource from '../assets/test.md';

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