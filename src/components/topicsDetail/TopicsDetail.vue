<template>
  <div class="topics">
    <loading :show='loading' :text='loadingText'></loading>
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
          <router-link :to="{name:'user',params: {loginname: data.author.loginname}}">{{data.author.loginname}}</router-link>
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
      <div class="comments">
        <div class="comments-header">{{data.replies.length}}回复</div>
        <ul>
          <li v-for='(comment, index) of data.replies' class="coments-content">
            <router-link :to="{name:'user',params: {loginname: comment.author.loginname}}">
              <img :src='comment.author.avatar_url' width=30 height=30 style='border-radius: 3px'>
            </router-link>
            <router-link class="author-id" :to="{name:'user',params: {loginname: comment.author.loginname}}">
              {{comment.author.loginname}}
            </router-link>
            <a>{{index + 1}}楼•{{comment.create_at | creatAt}}</a>
            <span>{{comment.ups.length}}赞</span>
            <div class="comments-content" v-html='comment.content'>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
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

  .comments
    .comments-header
      padding: 10px
      background-color: #f6f6f6
      border-radius: 3px 3px 0 0
      font-size: 14px
    .coments-content
      padding: 10px
      border-top: 1px solid #f0f0f0
      background-color: #fff


</style>

<script>
  import loading from 'vux-components/loading'

  import TypeIcon from 'components/TypeIcon/TypeIcon'
  import requestData from 'src/js/http'
  import creatAt from 'src/js/filters'
  import type2Chinese from 'src/js/type'
  const api = 'https://cnodejs.org/api/v1/topic/'
  export default {
    components: {
      TypeIcon,
      loading
    },
    data () {
      return {
        loading: false,
        error: null,
        data: null
      }
    },
    created () {
      this.requestData(api + this.$route.params.id)
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
