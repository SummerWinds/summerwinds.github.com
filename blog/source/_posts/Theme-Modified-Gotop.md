title: 主题修改 之 返回顶部按扭
date: 2015-02-13 12:47:13
categories: Hexo
tags: [Hexo, Theme]
---

参考Landscape-F  

增加文件到主题目录

``` bash
themes/pacman/layout/_partial/bottom-btn.ejs
themes/pacman/source/css/_partial/bottom-btn.styl
themes/pacman/source/js/gotop.js
```

bottom-btn.ejs

``` js
<div class="bottom-btn">
<% if (theme.go_top){ %>
    <a class="icon-gotop" href="javascript:void(0)" title="返回顶部"></a>
	<%- js('js/gotop') %>
	<!--
	<script src="<%- config.root %>js/gotop.js"></script>
	-->
<% } %>
</div>
```

bottom-btn.styl

``` css
.bottom-btn
  z-index 2
  position fixed
  _position absolute
  bottom 1%
  right 1%
  width 36px;
  
if gotop
  .icon-gotop
    width 36px
    height 36px
    cursor pointer
    border-radius 2px
    box-shadow 0 1px 3px rgba(0,0,0,.2)
    margin-bottom 10px
    text-decoration none
    background-color #444
    background-color rgba(0,0,0,0.7)
    color #fff
    line-height 36px
    font-size 30px
    text-align center
    display inline-block
    font-family FontAwesome
    font-style normal
    font-weight normal
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
  .icon-gotop
    &:before
      content "\f077"
  .icon-gotop
    &:active
      background-color rgba(0,0,0,.75)
  .icon-gotop
    &:hover
      background-color rgba(0,0,0,.75)
  
if tocaside
  .icon-toc-toggle
    width 36px
    height 26px
    cursor pointer
    border-radius 2px
    box-shadow 0 1px 3px rgba(0,0,0,.2)
    text-decoration none
    background-color #444
    background-color rgba(0,0,0,0.7)
    color #fff
    line-height 26px
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
      background-color rgba(0,0,0,.75)
```

修改 themes/pacman/layout/_partial/after-footer.ejs,增加


``` js
<%- partial('bottom-btn') %>
```

修改 themes/pacman/source/css/_base/varialbles.styl,增加


``` css
gotop = hexo-config("go_top")
```

修改 themes/pacman/source/css/style.styl,增加

``` css
@import "_partial/bottom-btn"
```
