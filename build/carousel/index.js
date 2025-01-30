(()=>{var e,t={658:(e,t,o)=>{"use strict";const l=window.React,n=window.wp.blocks,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"cb/carousel","version":"1.0.0","title":"Carousel","category":"design","description":"Create a customizable slideshow of content with this carousel block.","attributes":{"slidesToShow":{"type":"number","default":3},"slidesToScroll":{"type":"number","default":1},"arrows":{"type":"boolean","default":true},"dots":{"type":"boolean","default":true},"infinite":{"type":"boolean","default":true},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":3000},"speed":{"type":"number","default":500},"rtl":{"type":"boolean","default":false},"responsiveWidth":{"type":"number","default":768},"responsiveSlides":{"type":"number","default":1},"responsiveSlidesToScroll":{"type":"number","default":1}},"supports":{"align":["wide","full"],"html":false,"anchor":true},"textdomain":"carousel-block","editorScript":"file:./index.js","editorStyle":"file:./editor.css","style":"file:./style.css","viewScript":"file:./view.js"}'),a=window.wp.blockEditor,s=window.wp.components,i=window.wp.i18n,c=window.wp.element,d=window.wp.data;var p=o(942),u=o.n(p);const b=["cb/slide"],h=(0,l.createElement)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"}),(0,l.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}));(0,n.registerBlockType)("cb/carousel",{...r,icon:h,edit:function({attributes:e,setAttributes:t,clientId:o}){const{slidesToShow:n,slidesToScroll:r,speed:p,arrows:h,dots:m,infinite:f,autoplay:g,autoplaySpeed:v,rtl:w,responsiveWidth:S,responsiveSlides:y,responsiveSlidesToScroll:k}=e,_=(0,d.useSelect)((e=>e("core/block-editor").getBlock(o).innerBlocks.length)),C=(0,a.useBlockProps)({className:u()(`cb-shows-${n}-slides`,_+1>n?"cb-show-scrollbar":"cb-hide-scrollbar")}),E=(0,l.createElement)("div",{className:"cb-carousel-placeholder"},(0,i.__)("Click plus (+) to add slides","cb"));return(0,l.createElement)(c.Fragment,null,(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,i.__)("Carousel Settings","cb"),initialOpen:!0},(0,l.createElement)(s.RangeControl,{label:(0,i.__)("Slides to Show","cb"),value:n,onChange:e=>t({slidesToShow:e}),min:1,max:10}),(0,l.createElement)(s.RangeControl,{label:(0,i.__)("Slides to Scroll","cb"),value:r,onChange:e=>t({slidesToScroll:e}),min:1,max:10}),(0,l.createElement)(s.RangeControl,{label:(0,i.__)("Animation Speed (ms)","cb"),value:p,onChange:e=>t({speed:e}),min:100,max:3e3,step:100}),(0,l.createElement)(s.ToggleControl,{label:(0,i.__)("Show Arrows","cb"),checked:h,onChange:e=>t({arrows:e})}),(0,l.createElement)(s.ToggleControl,{label:(0,i.__)("Show Dots","cb"),checked:m,onChange:e=>t({dots:e})}),(0,l.createElement)(s.ToggleControl,{label:(0,i.__)("Infinite Loop","cb"),checked:f,onChange:e=>t({infinite:e})}),(0,l.createElement)(s.ToggleControl,{label:(0,i.__)("Autoplay","cb"),checked:g,onChange:e=>t({autoplay:e})}),g&&(0,l.createElement)(s.RangeControl,{label:(0,i.__)("Autoplay Speed (ms)","cb"),value:v,onChange:e=>t({autoplaySpeed:e}),min:1e3,max:1e4,step:500}),(0,l.createElement)(s.ToggleControl,{label:(0,i.__)("RTL Mode","cb"),checked:w,onChange:e=>t({rtl:e})})),(0,l.createElement)(s.PanelBody,{title:(0,i.__)("Responsive Settings","cb"),initialOpen:!1},(0,l.createElement)(s.RangeControl,{label:(0,i.__)("Breakpoint Width (px)","cb"),value:S,onChange:e=>t({responsiveWidth:e}),min:320,max:1200,step:1}),(0,l.createElement)(s.RangeControl,{label:(0,i.__)("Slides to Show (Mobile)","cb"),value:y,onChange:e=>t({responsiveSlides:e}),min:1,max:5}),(0,l.createElement)(s.RangeControl,{label:(0,i.__)("Slides to Scroll (Mobile)","cb"),value:k,onChange:e=>t({responsiveSlidesToScroll:e}),min:1,max:5}))),(0,l.createElement)("div",{...C},(0,l.createElement)(a.InnerBlocks,{orientation:"horizontal",allowedBlocks:b,templateLock:!1,renderAppender:a.InnerBlocks.ButtonBlockAppender,placeholder:E})))},save:function({attributes:e}){const{slidesToShow:t,slidesToScroll:o,arrows:n,dots:r,infinite:s,autoplay:i,autoplaySpeed:c,speed:d,rtl:p}=e,u={slidesToShow:parseInt(t),slidesToScroll:parseInt(o),arrows:n,dots:r,infinite:s,autoplay:i,autoplaySpeed:parseInt(c),speed:parseInt(d)},b=a.useBlockProps.save({className:"slick-slider","data-slick":JSON.stringify(u),dir:p?"rtl":void 0});return(0,l.createElement)("div",{...b},(0,l.createElement)(a.InnerBlocks.Content,null))}})},942:(e,t)=>{var o;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=a(e,r(o)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)l.call(e,o)&&e[o]&&(t=a(t,o));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,o,n,r)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){for(var[o,n,r]=e[d],s=!0,i=0;i<o.length;i++)(!1&r||a>=r)&&Object.keys(l.O).every((e=>l.O[e](o[i])))?o.splice(i--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,n,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={704:0,200:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[a,s,i]=o,c=0;if(a.some((t=>0!==e[t]))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(i)var d=i(l)}for(t&&t(o);c<a.length;c++)r=a[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(d)},o=globalThis.webpackChunkcarousel_block=globalThis.webpackChunkcarousel_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=l.O(void 0,[200],(()=>l(658)));n=l.O(n)})();