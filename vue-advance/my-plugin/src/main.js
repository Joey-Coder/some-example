import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 验证插件
const myPlugin = {
  install (Vue) {
    Vue.mixin({
      created () {
        // 获取实例的rules配置项
        const rules = this.$options.rules
        if (rules) {
          // rules支持多个规则，需要循环
          Object.keys(rules).forEach(key => {
            const rule = rules[key]
            // 使用watch不断监听值的变化
            this.$watch(key, newValue => {
              const valid = rule.validate(newValue)
              if (!valid) {
                console.log(rule.message)
              }
            })
          })
        }
      }
    })
  }
}
Vue.use(myPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
