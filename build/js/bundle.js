!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);function o(){$(".js__slider").slick({variableWidth:!0,lazyLoad:"ondemand",arrows:!0,dots:!0,appendArrows:$(".slider__nav"),appendDots:$(".slider__nav")}),$(".js__slider-for").slick({lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,infinite:!0,asNavFor:".js__slider-nav"}),$(".js__slider-nav").slick({lazyLoad:"ondemand",slidesToShow:4,slidesToScroll:1,asNavFor:".js__slider-for",dots:!1,focusOnSelect:!0,infinite:!1,arrows:!1,vertical:!1}),$(".js__slider-news").on("init",(function(){})),$(".js__slider-news").slick({lazyLoad:"ondemand",infinite:!1,slidesToShow:3.3,centerMode:!1,focusOnSelect:!1,slidesToScroll:1,appendArrows:$(".news__nav"),arrows:!0,responsive:[{breakpoint:1250,settings:{slidesToShow:3.2}},{breakpoint:1210,settings:{slidesToShow:2.5}},{breakpoint:980,settings:{slidesToShow:2.8}},{breakpoint:850,settings:{slidesToShow:2.3}},{breakpoint:630,settings:{slidesToShow:1.7}},{breakpoint:460,settings:{slidesToShow:1.15}}]})}$(document).ready(()=>{$(".footer__menu").on("click",(function(e){if(e.preventDefault(),$(e.target).hasClass("_open-list")){let n=$(e.target).parent().parent();n.find(".menu__list").toggleClass("hidden"),n.find("span").toggleClass("rotate")}})),$(".counter__minus").click((function(){var e=$(this).parent().find("input"),n=parseInt(e.val())-1;return n=n<1?1:n,e.val(n),e.change(),!1})),$(".counter__plus").click((function(){var e=$(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1})),$(".item__like").click((function(){$(this).toggleClass("_active")})),o(),$(".js__popap").magnificPopup({type:"inline",closeOnBgClick:!0})})}]);