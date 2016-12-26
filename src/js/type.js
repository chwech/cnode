/**
 * Created by chwech on 16-12-25.
 */
// type为请求回来的数据对象
export default function type2Chinese (type) {
  if (type.top) {
    return '置顶'
  }
  if (type.good) {
    return '精华'
  }
  if (type.tab === 'ask') {
    return '问答'
  }
  if (type.tab === 'share') {
    return '分享'
  }
  if (type.tab === 'job') {
    return '招聘'
  }
}
