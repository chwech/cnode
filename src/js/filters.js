/**
 * Created by chwech on 16-12-24.
 */
export default function lastReplyTime (lastReplyAt) {
  lastReplyAt = new Date(lastReplyAt).getTime()
  const now = new Date().getTime()
  const lastReplyTime = now - lastReplyAt
  const minute = 60 * 1000
  const hour = 60 * 60 * 1000
  const day = 24 * 60 * 60 * 1000
  const month = 30 * 24 * 60 * 60 * 1000
  const year = 365 * 24 * 60 * 60 * 1000
  if (lastReplyTime < minute) {
    lastReplyAt = '刚刚'
  } else if (lastReplyTime < hour) {
    const minuteTime = Math.floor(lastReplyTime / minute)
    lastReplyAt = minuteTime + '分钟前'
  } else if (lastReplyTime < day) {
    const hourTime = Math.floor(lastReplyTime / hour)
    lastReplyAt = hourTime + '小时前'
  } else if (lastReplyTime < month) {
    const dayTime = Math.floor(lastReplyTime / day)
    lastReplyAt = dayTime + '天前'
  } else if (lastReplyTime < year) {
    const monthTime = Math.floor(lastReplyTime / month)
    lastReplyAt = monthTime + '个月前'
  } else {
    const yearTime = Math.floor(lastReplyTime / year)
    lastReplyAt = yearTime + '年前'
  }
  return lastReplyAt
}
