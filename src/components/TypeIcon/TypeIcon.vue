<template>
    <span class="icon-type">
      {{tab.good}}
    </span>
    <!--<span class="top icon-type">置顶</span>-->
    <!--<span class="good icon-type">精华</span>-->
    <!--<span class="ask icon-type">问答</span>-->
    <!--<span class="share icon-type">分享</span>-->
    <!--<span class="job icon-type">招聘</span>-->
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
          job: '招聘'
        }
      }
    }
  }
</script>
