module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-chat-app/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}