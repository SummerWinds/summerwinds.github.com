title: 主题修改 之 文章目录切换
date: 2015-02-13 15:24:36
categories: Hexo
tags: [Hexo, Theme]
---

参考Landscape-F  

## 增加文件到主题目录 

``` bash
themes/pacman/source/js/toc_aside_toggle.js
```

## 修改 bottom-btn.ejs  
themes/pacman/layout/_partial/bottom-btn.ejs,增加


``` js
<% if (is_post()&& (page.toc !== false) && theme.toc.aside){ %>
    <a class="icon-toc-toggle" href="javascript:void(0)" title="文章目录"></a>
	<!--
	<script src="<%- config.root %>js/toc_aside_toggle.js"></script>
	-->
	<%- js('js/toc_aside_toggle') %>
<% } %>
```

注：此步聚的前提是之前添加过 返回顶部功能。如果没有，请增加 bottom-btn.ejs 和 修改 after-footer.ejs。  

## 修改 sidebar.ejs  
themes/pacman/layout/_partial/sidebar.ejs,增加


``` js
<aside id="sidebar" class="clearfix">
```

## 修改 varialbles.styl  
themes/pacman/source/css/_base/varialbles.styl,增加


``` css
sidebar = hexo-config("sidebar")
tocaside = hexo-config("toc.aside")
```

## 修改 bottom-btn.styl  
themes/pacman/source/css/bottom-btn.styl,增加

``` css
if tocaside
  .icon-toc-toggle
    width 36px
    height 36px
    cursor pointer
    border-radius 2px
    box-shadow 0 1px 3px rgba(0,0,0,.2)
    text-decoration none
    background-color #444
    background-color rgba(0,0,0,0.7)
    color #fff
    line-height 36px
    font-size 22px
    text-align center
    display inline-block
    font-family FontAwesome
    font-style normal
    font-weight normal
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
  .icon-toc-toggle
    &:before
      content "\f00b"
  .icon-toc-toggle
    &:active
      background-color rgba(0,0,0,.75)
  .icon-toc-toggle
    &:hover
      background-color rgba(211,18,102,.95)
```

注：此步聚的前提是之前添加过 返回顶部功能。如果没有，请增加 bottom-btn.ejs 和 bottom-btn.styl 并修改 after-footer.ejs将bottom-btn.ejs包含。

## 修改 helper.styl  
themes/pacman/source/css/_partial/helper.styl <font color=red>****</font>部分



``` css
#toc.toc-aside
  display none
  width 13%
  position fixed
  right 2%
  top 320px
  **max-height: 68%**
  **overflow auto**
  line-height 1.5em
  font-size 1em
```


``` css
.toc-title
  cursor pointer
  display block
  margin .5em 0
```

