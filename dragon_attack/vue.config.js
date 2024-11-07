const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DragonAttack/' // Reemplaza <nombre-del-repositorio> con el nombre de tu repositorio en GitHub
    : '/'
} 