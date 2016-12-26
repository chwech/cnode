<template>
  <span class="icon-type">
    {{type | type2Chinese}}
  </span>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .icon-type
    display: inline-block
    width: 24px
    border-radius: 3px
    padding: 2px 4px
    font-size: 12px
    vertical-align: middle
  span.top
  span.good
    background-color: #80bd01
    color: #fff
  .ask
  .share
  .job
    background-color: #e5e5e5
    color: #999
</style>
<script>
  import type2Chinese from 'src/js/type'
  export default {
    props: ['type'],
    filters: {
      type2Chinese
    }
  }
</script>
