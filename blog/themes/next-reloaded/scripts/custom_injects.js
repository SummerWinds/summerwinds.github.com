hexo.extend.filter.register('theme_inject', function(injects) {
  // 自定义文件路径相对于Hexo根目录
  injects.style.push('source/_data/_custom/custom.styl')
})
