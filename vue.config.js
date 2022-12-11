module.exports = {
  publicPath: '/KIBAID/',
  "transpileDependencies": [
    "vuetify",    
    process.env.NODE_ENV === "production" ? "/" : "/"
  ],
}