<template>
  <AppCard
    appName="觅语 AI"
    :iconPath="iconPath"
    :descriptions="descriptions"
    appStoreLink="https://apps.apple.com/cn/app/id6741455446"
    privacyPolicyLink="https://www.yuque.com/yueliang-lxofx/wk53ca/gr4q372fllo0778v"
    termsOfServiceLink="https://www.yuque.com/yueliang-lxofx/wk53ca/uwyszuhve001v9gr"
  />
</template>

<script>
import AppCard from './AppCard.vue'

export default {
  name: 'LoveChat',
  components: {
    AppCard
  },
  data() {
    return {
      iconPath: require('./imgs/love_chat_app_icon.jpg'),
      descriptions: [
        '觅语 AI 是一款情感交流辅助工具，致力于帮助用户提升情感沟通能力。应用提供情感咨询、表达优化和智能回复功能，辅助用户理解情感、改善人际关系、提升沟通技巧。',
        '用户可以获取情感分析和建议，学习恰当的表达方式，从而更好地处理日常社交和情感生活中的各种场景。'
      ]
    }
  }
}
</script> 