title: 主题修改 之 增加Github链接
date: 2015-02-13 12:23:49
categories: Hexo
tags: [Hexo,Theme]
---

参考Landscape-F  

修改 themes/pacman/_config.yml,增加


```
github: https://github.com/summerwinds
```

修改 themes/pacman/layout/_partial/header.ejs,增加


```  
<nav id="sub-nav">
  <% if (theme.github){ %>
	<a id="nav-github-link" class="nav-icon" href="<%- theme.github %>" title="SummerWinds's Github" target="_blank"></a>
  <% } %>
</nav>  
```

修改 themes/pacman/source/css/_partial/header.styl,增加


```
#sub-nav
  float: right
  margin-right: .5em
  margin-top: 0em
  padding-top: 0em
  a
    &:hover:before
      color color-nav
      text-shadow 0 0 10px rgba(0,0,0,0.5)
      
#nav-github-link
  &:before
    content: "\f09b"
  
$nav-link
  float: left
  color: #fff
  opacity: 0.6
  text-decoration: none
  text-shadow: 0 1px rgba(0, 0, 0, 0.2)
  transition: opacity 0.2s
  display: block
  padding: 20px 15px
  &:hover
  opacity: 1
  
.nav-icon
  @extend $nav-link
  font-family: font-icon-family
  text-align: center
  font-size: nav-icon-font-size
  width: nav-icon-font-size
  height: nav-icon-font-size
  padding: 0px 0px
  position: relative
  cursor: pointer
```
  