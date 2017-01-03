<template>
<div>
  <loading :show='loading' :text='loadingText'></loading>
  <toast :show='error' type='text' width='15em'>网络错误，加载失败</toast>
  <div v-if='data'>
    <div class="userinfo">
      <img :src='data.avatar_url'>
      <span>{{data.loginname}}</span>
      <p>{{data.score}}积分</p>
      <p><a :href="'https://github.com/' + data.githubUsername" target="_blank">{{data.githubUsername}}</p>
      <p>注册时间{{data.create_at | creatAt}}</p>
    </div>
    <div class="recent-topics">
      <div class="header">
        最近创建的话题
      </div>
      <ul>
        <li v-for="item of data.recent_topics" class="topics">
          <router-link :to="{name:'user', params: {loginname: item.author.loginname}}">
            <img :src="item.author.avatar_url" width=30 height=30>
          </router-link>
          <div class="count-wrap">
            <span class="count_of_replies">{{item.reply_count}}</span>
            <span class="count_of_visits">/{{item.visit_count}}</span>
          </div>
          <TypeIcon :class="[{good: item.good, top: item.top}, item.tab]" :type="item"></TypeIcon>
          <router-link :to="{name: 'topicsDetail',params: {id:item.id}}" exact class='title'>{{item.title}}</router-link>
          <time class="last-reply-time">
            {{item.last_reply_at | creatAt }}
          </time>
        </li>
      </ul>
    </div>
    <div class="recent-replies">
      <div class="header">
        最近参与的话题
      </div>
      <ul>
        <li v-for="item of data.recent_replies" class="topics">
          <router-link :to="{name:'user', params: {loginname: item.author.loginname}}">
            <img :src="item.author.avatar_url" width=30 height=30>
          </router-link>
          <div class="count-wrap">
            <span class="count_of_replies">{{item.reply_count}}</span>
            <span class="count_of_visits">/{{item.visit_count}}</span>
          </div>
          <TypeIcon :class="[{good: item.good, top: item.top}, item.tab]" :type="item"></TypeIcon>
          <router-link :to="{name: 'topicsDetail',params: {id:item.id}}" exact class='title'>{{item.title}}</router-link>
          <time class="last-reply-time">
            {{item.last_reply_at | creatAt }}
          </time>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
<script>
  import TypeIcon from 'components/TypeIcon/TypeIcon'
  import loading from 'vuxx-components/loading'
  import toast from 'vuxx-components/toast'
  import requestData from 'src/js/http'
  import creatAt from 'src/js/filters'
  const userURL = 'https://cnodejs.org/api/v1/user/'
  export default {
    components: {
      TypeIcon,
      loading,
      toast
    },
    data () {
      return {
        data: null,
        loadingText: '拼命加载中',
        loading: false,
        error: null
      }
    },
    created () {
      this.requestData(userURL + this.$route.params.loginname)
    },
    methods: {
      requestData
    },
    filters: {
      creatAt
    }
  }
</script>
