<template>
  <div class="content-wraper">
    <div class="header">
      <ul>
        <li>
          <router-link to='/all'>全部</router-link>
        </li>
        <li @click='toGood'>
          <router-link to='/good'>精华</router-link>
        </li>
        <li @click="toShare">
          <router-link to='/share'>分享</router-link>
        </li>
        <li @click="toAsk">
          <router-link to='/ask'>问答</router-link>
        </li>
        <li @click="toJob">
          <router-link to='/job'>招聘</router-link>
        </li>
      </ul>
    </div>
    <router-view :data="data" :good="good" :share="share" :ask="ask" :job="job"></router-view>
  </div>
</template>
<style lang="stylus">
  .content-wraper
    .header
      padding: 10px
      border-radius: 3px 3px 0 0
      background-color: #f6f6f6
      ul
        li
          display: inline-block
          margin-left: 10px
          margin-right: 10px
          font-size: 0
          a
            font-size: 14px
            color: #80bd01
            &.active
              padding: 3px 4px
              border-radius: 3px
              color: #fff
              background-color: #80bd01
</style>
<script>
  const OK = true
  export default {

    data () {
      return {
        data: {},
        good: {},
        share: {},
        ask: {},
        job: {}
      }
    },
    methods: {
      toGood () {
        console.log('hi')
        this.$http.get('https://cnodejs.org/api/v1/topics?limit=20&tab=good')
        .then((response) => {
          response = response.body
          if (response.success === OK) {
            this.good = response.data
          }
        })
      },
      toShare () {
        console.log('hi')
        this.$http.get('https://cnodejs.org/api/v1/topics?limit=20&tab=share')
        .then((response) => {
          response = response.body
          if (response.success === OK) {
            this.share = response.data
          }
        })
      },
      toAsk () {
        console.log('hi')
        this.$http.get('https://cnodejs.org/api/v1/topics?limit=20&tab=ask')
        .then((response) => {
          response = response.body
          if (response.success === OK) {
            this.ask = response.data
          }
        })
      },
      toJob () {
        console.log('hi')
        this.$http.get('https://cnodejs.org/api/v1/topics?limit=20&tab=job')
        .then((response) => {
          response = response.body
          if (response.success === OK) {
            this.job = response.data
          }
        })
      }
    },
    created () {
      this.$http.get('https://cnodejs.org/api/v1/topics?limit=20')
      .then((response) => {
        response = response.body
        if (response.success === OK) {
          this.data = response.data
        }
      })
    }
  }
</script>
