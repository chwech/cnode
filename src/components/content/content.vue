<template>
  <div>
    <ul>
      <li v-for="item of data" class="topics">
        <img :src="item.author.avatar_url" width=30 height=30>
        <div class="count-wrap">
          <span class="count_of_replies">{{item.reply_count}}</span>
          <span class="count_of_visits">/{{item.visit_count}}</span>
        </div>
        <TypeIcon :class="[{good: item.good, top: item.top}, item.tab]" :type="item"></TypeIcon>
        <a href="https://cnodejs.org/api/v1/topics/581b0c4ebb9452c9052e7acb" class="title">
          {{item.title}}
        </a>
        <time class="last-reply-time">
          {{item.last_reply_at | lastReplyTime }}
        </time>
      </li>
    </ul>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .topics
    display: block
    padding: 10px
    height: 30px
    font-size: 0
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
  import lastReplyTime from 'src/js/filters'
  const OK = true
  const allDataUrl = 'https://cnodejs.org/api/v1/topics?limit=20'
  export default {
  // 注册组件
    components: {
      TypeIcon
    },
    data () {
      return {
        data: null
      }
    },
    created () {
      this.requestData(allDataUrl)
    },
    watch: {
      '$route' (to, from) {
        this.data = null
        for (const key in to.query) {
          var query = key + '=' + to.query[key]
        }
        const url = allDataUrl + '&' + query
        console.log(url)
        this.requestData(url)
      }
    },
    methods: {
      requestData (url) {
        this.$http.get(url)
        .then((response) => {
          response = response.body
          if (response.success === OK) {
            this.data = response.data
          }
        })
      }
    },
    filters: {
      lastReplyTime
    }
  }
</script>
