<template>
  <div v-if="data">
    <ul>
      <li v-for="item of data" class="topics">
        <img :src="item.author.avatar_url" width=30 height=30>
        <div class="count-wrap">
          <span class="count_of_replies">{{item.reply_count}}</span>
          <span class="count_of_visits">/{{item.visit_count}}</span>
        </div>
        <TypeIcon :class="[{good: item.good, top: item.top}, item.tab]"></TypeIcon>
        <a href="https://cnodejs.org/api/v1/topics/581b0c4ebb9452c9052e7acb" class="title">
          {{item.title}}
        </a>
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
  export default {
    props: ['data'],
    components: {
      TypeIcon
    }
  }
</script>
