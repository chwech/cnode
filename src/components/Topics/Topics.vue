<template>
  <div class="content-wraper">
    <div class="header">
      <ul>
        <li>
          <router-link to='/topics' exact>全部</router-link>
        </li>
        <li>
          <router-link to='/topics?tab=good' exact>精华</router-link>
        </li>
        <li>
          <router-link to='/topics?tab=share' exact>分享</router-link>
        </li>
        <li>
          <router-link to='/topics?tab=ask' exact>问答</router-link>
        </li>
        <li>
          <router-link to='/topics?tab=job' exact>招聘</router-link>
        </li>
      </ul>
      <router-link to="/login">登录</router-link>
    </div>
    <router-view></router-view>
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
  export default {
  }
</script>
