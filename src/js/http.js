/**
 * Created by chwech on 16-12-25.
 */
const OK = true
export default function requestData (url) {
  this.error = this.data = null
  this.loading = true
  this.$http.get(url)
    .then((response) => {
      response = response.body
      if (response.success === OK) {
        this.data = response.data
      }
      this.loading = false
    })
    .catch((response) => {
      console.log(response)
      this.error = true
      this.loading = false
    })
}
