<template>
  <div class="job-wrap">
    <ul>
      <li v-for="item of job" class="topics">
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
<style>
</style>
<script>
  import TypeIcon from 'components/TypeIcon/TypeIcon'
  export default {
    props: ['data', 'job'],
    components: {
      TypeIcon
    }
  }
</script>
