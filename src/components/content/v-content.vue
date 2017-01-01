<template>
  <div>
    <loading :show='loading' :text='loadingText'></loading>
    <toast :show='error' type='text' width='15em'>网络错误，加载失败</toast>
    <ul>
      <li v-for="item of data" class="topics">
        <router-link :to="{name:'user', params: {loginname: item.author.loginname}}">
          <img :src="item.author.avatar_url" width=30 height=30>
        </router-link>
        <div class="count-wrap">
          <span class="count_of_replies">
            {{item.reply_count}}
          </span>
          <span class="count_of_visits">
            /{{item.visit_count}}
          </span>
        </div>
        <TypeIcon :class="[{good: item.good, top: item.top}, item.tab]" :type="item"></TypeIcon>
        <router-link :to="{name: 'topicsDetail',params: {id:item.id}}" exact class='title'>
          {{item.title}}
        </router-link>
        <time class="last-reply-time">
          {{item.last_reply_at | lastReplyTime }}
        </time>
      </li>
    </ul>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topics
    display: block
    padding: 10px
    height: 30px
    img
      vertical-align: middle
      font-size: 0
    .title
      width: 70%
      margin-left: 10px
      display: inline-block
      font-size: 16px
      font-weight: normal
      color: #333
      vertical-align: middle
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
    .last-reply-time
      font-size: 12px
      vertical-align: middle
    .count-wrap
      display: inline-block
      width: 70px
      height: 30px
      line-height: 30px
      text-align: center
      .count_of_replies
        color: #9e78c0
        font-size: 14px
        vertical-align: middle
      .count_of_visits
        color: #b4b4b4
        font-size: 10px
        vertical-align: middle
</style>
<script>
  import TypeIcon from 'components/TypeIcon/TypeIcon'
  import loading from 'vuxx-components/loading'
  import toast from 'vuxx-components/toast'
  import lastReplyTime from 'src/js/filters'
  import requestData from 'src/js/http'
  const allDataUrl = 'https://cnodejs.org/api/v1/topics?limit=40'
  export default {
    name: 'v-content',
    components: {
      TypeIcon,
      loading,
      toast
    },
    data () {
      return {
        loading: false,
        loadingText: '拼命加载中',
        error: null,
        data: null
      }
    },
    created () {
      this.requestData(allDataUrl)
    },
    watch: {
      '$route' (to, from) {
        for (const key in to.query) {
          var query = key + '=' + to.query[key]
        }
        const url = allDataUrl + '&' + query
        console.log(url)
        this.requestData(url)
      }
    },
    methods: {
      requestData
    },
    filters: {
      lastReplyTime
    }
  }
</script>
