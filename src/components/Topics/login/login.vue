<template>
<div class="login">
  <divider>
    <span style="color: #80bd01">登录</span>
  </divider>
  <div class="login-panel">
    <input type="text" placeholder="accessToken" v-model='value'>
    <a @click='login'>登录</a>
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
  import divider from 'vuxx-components/divider'
  export default {
    components: {
      divider
    },
    data () {
      return {
        value: ''
      }
    },
    methods: {
      login () {
        this.$http.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: this.value})
          .then((response) => {
            console.log(response)
            this.$router.push({name: 'user', params: {loginname: response.body.loginname}})
          })
          .catch((response) => {
            console.log(response)
          })
      }
    }
  }
</script>
