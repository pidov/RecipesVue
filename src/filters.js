const moment = require('moment')

export default {
  init (Vue) {
    Vue.filter('duration', function (value) {
      moment.locale('bg')
      return moment.duration(value * 60000).humanize()
    })
  }
}
