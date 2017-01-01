<template>
  <div class="content-wraper">
    <sticky>
      <x-header
        :left-options="{backText: backText, showBack: showBack}"
        style='background-color: #444'
      >cnode社区</x-header>
      <tab active-color='#80bd01'>
        <tab-item :selected="demo1 === '全部'" @click="demo1 = '全部'">
          <router-link to='/topics' exact>全部</router-link>
        </tab-item>
        <tab-item :selected="demo1 === '精华'" @click="demo1 = '精华'">
          <router-link to='/topics?tab=good' exact>精华</router-link>
        </tab-item>
        <tab-item :selected="demo1 === '分享'" @click="demo1 = '分享'">
          <router-link to='/topics?tab=share' exact>分享</router-link>
        </tab-item>
        <tab-item :selected="demo1 === '问答'" @click="demo1 = '问答'">
          <router-link to='/topics?tab=ask' exact>问答</router-link>
        </tab-item>
        <tab-item :selected="demo1 === '招聘'" @click="demo1 = '招聘'">
          <router-link to='/topics?tab=job' exact>招聘</router-link>
        </tab-item>
        <tab-item :selected="demo1 === '登录'" @click="demo1 = '登录'">
          <router-link to='/login' exact>登录</router-link>
        </tab-item>
      </tab>
    </sticky>
    <router-view></router-view>
  </div>
</template>
<style lang="stylus" scoped>
  .content-wraper
    a
      display: block
      font-size: 14px
      color: #333
      &.active
        color: #80bd01
</style>
<script>
  import sticky from 'vuxx-components/sticky'
  import tab from 'vuxx-components/tab/tab'
  import tabItem from 'vuxx-components/tab/tab-item'
  import xHeader from 'vuxx-components/x-header'
  export default {
    data () {
      return {
        demo1: '全部',
        backText: '返回',
        showBack: true
      }
    },
    components: {
      tab,
      sticky,
      'tab-item': tabItem,
      'x-header': xHeader

    }
  }
</script>
