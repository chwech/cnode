<template>
  <span class="icon-type">
    {{iconText}}
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
    data () {
      return {
        tab: {
          good: '精华',
          ask: '问答',
          share: '分享',
          job: '招聘',
          top: '置顶'
        }
      }
    },
    computed: {
      iconText () {
        return this.tab.good
      }
    }
  }
</script>
