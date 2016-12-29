<template>
<div class="login">
  <div class="login-header">登录</div>
  <div class="login-panel">
    <input type="text" placeholder="accessToken" v-model='value'>
    <button @click='submit'>登录</button>
  </div>
</div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    .login-header
      text-align: center
    .login-panel
      input
        display: block
        width: 100%
        border-radius: 5px
        height: 30px
        border: 1px solid #80bd01
        margin-top: 20px
      button
        display: block
        width: 100%
        background-color: #80bd01
        height: 30px
        line-height: 30px
        border-radius: 3px
        border: none
        color: #fff
        margin-top: 20px
</style>
<script>
  export default {
    data () {
      return {
        value: ''
      }
    },

    methods: {
      submit () {
        this.$http.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: this.value})
          .then((response) => {
            console.log(response.body)
          })
      }
    }
  }
</script>
