<template>
  <span class="icon-type">
    {{type | iconText}}
  </span>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .icon-type
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
  export default {
    props: ['type'],
    filters: {
      iconText (type) {
        if (type.top) {
          return '置顶'
        }
        if (type.good) {
          return '精华'
        }
        if (type.tab === 'ask') {
          return '问答'
        }
        if (type.tab === 'share') {
          return '分享'
        }
        if (type.tab === 'job') {
          return '招聘'
        }
      }
    }
  }
</script>
