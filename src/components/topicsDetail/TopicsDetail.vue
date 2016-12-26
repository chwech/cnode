<template>
  <div class="topics">
    <div v-if='loading' class="loading">拼命加载中...</div>
    <div v-if='error' class="error">加载失败，请检查你的网络</div>
    <div v-if='data'>
      <div class="header">
        <TypeIcon :type='data' :class="[{good: data.good, top: data.top}, data.tab]"></TypeIcon>
        <span class="title">
        {{data.title}}
      </span>
        <div class="message">
        <span>
          发布于{{data.create_at | creatAt}}
        </span>
          <span>
          作者
          <a>{{data.author.loginname}}</a>
        </span>
          <span>
          {{data.visit_count}}次浏览
        </span>
          <!--<span>-->
          <!--最后一次编辑是{{}}-->
          <!--</span>-->
          <span>
          来自{{data | type | type2Chinese}}
        </span>
          <input type="submit" value="收藏" class='collect-btn'>
        </div>
      </div>
      <div class="topicsDetail" v-html='data.content'>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.topics
  .loading
  .error
    font-size: 16px
  .header
    .title
      font-size: 22px
      font-weight: 700
      margin: 8px 0
      display: inline-block
      line-height: 130%
      width: 75%
    .message
      font-size: 12px
      color: #838383
      span
        &:before
          content: '•'
      .collect-btn
        display: inline-block
        cursor: pointer
        border-radius: 3px
        background-color: #80bd01
        color: #fff
        padding: 3px 10px
        border: none
        font-size: 14px
        line-height: 2em
        vertical-align: middle
  .topicsDetail
    .markdown-text
      width: 80%
      margin: 0 auto
      font-size: 14px
      color: #333
      img
        cursor: pointer
        height: auto
        max-width: 100%
        vertical-align: middle
        border: 0
      h2
        font-size: 26px
        margin: 30px 0 15px
        border-bottom: 1px solid #eee

</style>

<script>
  import requestData from 'src/js/http'
  import TypeIcon from 'components/TypeIcon/TypeIcon'
  import creatAt from 'src/js/filters'
  import type2Chinese from 'src/js/type'
  const api = 'https://cnodejs.org/api/v1/topic/'
  export default {
    components: {
      TypeIcon
    },
    data () {
      return {
        loading: false,
        error: null,
        data: null
      }
    },
    created () {
      console.log(this.$route)
      console.log(this.$route.params.id)
      this.requestData(api + this.$route.params.id)
      // this.requestData('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312')
    },
    methods: {
      requestData
    },
    filters: {
      creatAt,
      type2Chinese,
      type (data) {
        return {
          tab: data.tab
        }
      }
    }
  }
</script>
