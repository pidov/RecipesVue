const moment = require('moment')

export default {
  init (Vue) {
    Vue.filter('duration', function (value) {
      return moment.duration(value * 60000).humanize()
    })
  }
}
