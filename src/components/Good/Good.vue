<template>
  <div class="good-wrap">
    <ul>
      <li v-for="item of good" class="topics">
        <img :src="item.author.avatar_url" width=30 height=30>
        <div class="count-wrap">
          <span class="count_of_replies">{{item.reply_count}}</span>
          <span class="count_of_visits">/{{item.visit_count}}</span>
        </div>
        <TypeIcon :class="[{good: item.good, top: item.top}, item.tab]"></TypeIcon>
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
<style>
</style>
<script>
  import TypeIcon from 'components/TypeIcon/TypeIcon'
  import lastReplyTime from 'src/js/filters'
  export default {
    props: ['data', 'good'],
    components: {
      TypeIcon
    },
    filters: {
      lastReplyTime
    }
  }
</script>
