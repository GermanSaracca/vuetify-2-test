const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'build',
  transpileDependencies: [
    'vuetify'
  ]
})
