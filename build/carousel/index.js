(()=>{var e,o={827:(e,o,l)=>{"use strict";const r=window.wp.blocks,n=window.wp.blockEditor,s=window.wp.components,a=window.wp.i18n,t=window.wp.element,i=window.wp.data;var c=l(942),d=l.n(c);const p=window.ReactJSXRuntime,u=["cb/slide"],b=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"cb/carousel","version":"1.0.0","title":"Carousel","category":"design","description":"Create a customizable slideshow of content with this carousel block.","attributes":{"slidesToShow":{"type":"number","default":3},"slidesToScroll":{"type":"number","default":1},"arrows":{"type":"boolean","default":true},"dots":{"type":"boolean","default":true},"infinite":{"type":"boolean","default":true},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":3000},"speed":{"type":"number","default":300},"rtl":{"type":"boolean","default":false},"responsiveWidth":{"type":"number","default":768},"responsiveSlides":{"type":"number","default":1},"responsiveSlidesToScroll":{"type":"number","default":1},"slides":{"type":"number","default":4},"scrollGroup":{"type":"boolean","default":false},"slidePadding":{"type":"boolean","default":true},"arrowColor":{"type":"string","default":"#000000"},"arrowBackground":{"type":"string","default":"#ffffff"},"arrowHoverColor":{"type":"string","default":"#000000"},"arrowHoverBackground":{"type":"string","default":"#ffffff"}},"supports":{"align":["wide","full"],"html":false,"anchor":true},"textdomain":"carousel-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),h=(0,p.jsxs)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",children:[(0,p.jsx)("path",{d:"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"}),(0,p.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]});(0,r.registerBlockType)("cb/carousel",{...b,icon:h,edit:function({attributes:e,setAttributes:o,clientId:l}){const{slidesToShow:r,slidesToScroll:c,speed:b,arrows:h,dots:g,infinite:v,autoplay:f,autoplaySpeed:w,rtl:m,responsiveWidth:x,responsiveSlides:S,responsiveSlidesToScroll:C,slides:_,scrollGroup:y,slidePadding:k,arrowColor:j,arrowBackground:T,arrowHoverColor:B,arrowHoverBackground:O}=e,P=(0,i.useSelect)((e=>e("core/block-editor").getBlock(l).innerBlocks.length)),A=(0,n.useBlockProps)({className:d()(`cb-shows-${r}-slides`,`cb-responsive-${S}-slides`,{"cb-padding":k},P+1>r?"cb-show-scrollbar":"cb-hide-scrollbar")}),H=(0,p.jsx)("div",{className:"cb-carousel-placeholder",children:(0,a.__)("Click plus (+) to add slides","cb")});return(0,p.jsxs)(t.Fragment,{children:[(0,p.jsxs)(n.InspectorControls,{children:[(0,p.jsxs)(s.PanelBody,{title:(0,a.__)("Carousel Settings","cb"),initialOpen:!0,children:[(0,p.jsx)(s.RangeControl,{label:(0,a.__)("Slides to Show","cb"),value:r,onChange:e=>o({slidesToShow:e}),min:1,max:10}),(0,p.jsx)(s.RangeControl,{label:(0,a.__)("Slides to Scroll","cb"),value:c,onChange:e=>o({slidesToScroll:e}),min:1,max:10}),(0,p.jsx)(s.RangeControl,{label:(0,a.__)("Animation Speed (ms)","cb"),value:b,onChange:e=>o({speed:e}),min:100,max:3e3,step:100}),(0,p.jsx)(s.ToggleControl,{label:(0,a.__)("Show Arrows","cb"),checked:h,onChange:e=>o({arrows:e})}),h&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"components-base-control",children:[(0,p.jsx)("label",{className:"components-base-control__label",children:(0,a.__)("Arrow Color","cb")}),(0,p.jsx)(s.ColorPalette,{value:j,onChange:e=>o({arrowColor:e})})]}),(0,p.jsxs)("div",{className:"components-base-control",children:[(0,p.jsx)("label",{className:"components-base-control__label",children:(0,a.__)("Arrow Background","cb")}),(0,p.jsx)(s.ColorPalette,{value:T,onChange:e=>o({arrowBackground:e})})]}),(0,p.jsxs)("div",{className:"components-base-control",children:[(0,p.jsx)("label",{className:"components-base-control__label",children:(0,a.__)("Arrow Hover Color","cb")}),(0,p.jsx)(s.ColorPalette,{value:B,onChange:e=>o({arrowHoverColor:e})})]}),(0,p.jsxs)("div",{className:"components-base-control",children:[(0,p.jsx)("label",{className:"components-base-control__label",children:(0,a.__)("Arrow Hover Background","cb")}),(0,p.jsx)(s.ColorPalette,{value:O,onChange:e=>o({arrowHoverBackground:e})})]})]}),(0,p.jsx)(s.ToggleControl,{label:(0,a.__)("Show Dots","cb"),checked:g,onChange:e=>o({dots:e})}),(0,p.jsx)(s.ToggleControl,{label:(0,a.__)("Infinite Loop","cb"),checked:v,onChange:e=>o({infinite:e})}),(0,p.jsx)(s.ToggleControl,{label:(0,a.__)("Autoplay","cb"),checked:f,onChange:e=>o({autoplay:e})}),f&&(0,p.jsx)(s.RangeControl,{label:(0,a.__)("Autoplay Speed (ms)","cb"),value:w,onChange:e=>o({autoplaySpeed:e}),min:1e3,max:1e4,step:500}),(0,p.jsx)(s.ToggleControl,{label:(0,a.__)("RTL Mode","cb"),checked:m,onChange:e=>o({rtl:e})}),(0,p.jsx)(s.RangeControl,{label:(0,a.__)("Total Slides","cb"),value:_,onChange:e=>o({slides:e}),min:1,max:20}),(0,p.jsx)(s.ToggleControl,{label:(0,a.__)("Enable Scroll Group","cb"),checked:y,onChange:e=>o({scrollGroup:e})}),(0,p.jsx)(s.ToggleControl,{label:(0,a.__)("Enable Slide Padding","cb"),checked:k,onChange:e=>o({slidePadding:e})})]}),(0,p.jsxs)(s.PanelBody,{title:(0,a.__)("Responsive Settings","cb"),initialOpen:!1,children:[(0,p.jsx)(s.RangeControl,{label:(0,a.__)("Breakpoint Width (px)","cb"),value:x,onChange:e=>o({responsiveWidth:e}),min:320,max:1200,step:1}),(0,p.jsx)(s.RangeControl,{label:(0,a.__)("Slides to Show (Mobile)","cb"),value:S,onChange:e=>o({responsiveSlides:e}),min:1,max:5}),(0,p.jsx)(s.RangeControl,{label:(0,a.__)("Slides to Scroll (Mobile)","cb"),value:C,onChange:e=>o({responsiveSlidesToScroll:e}),min:1,max:5})]})]}),(0,p.jsx)("div",{...A,children:(0,p.jsx)(n.InnerBlocks,{orientation:"horizontal",allowedBlocks:u,templateLock:!1,renderAppender:n.InnerBlocks.ButtonBlockAppender,placeholder:H})})]})},save:function({attributes:e}){const{slidesToShow:o,slidesToScroll:l,arrows:r,dots:s,infinite:a,autoplay:t,autoplaySpeed:i,speed:c,rtl:u,responsiveWidth:b,responsiveSlides:h,responsiveSlidesToScroll:g,slidePadding:v,scrollGroup:f,arrowColor:w,arrowBackground:m,arrowHoverColor:x,arrowHoverBackground:S}=e,C={slidesToShow:parseInt(o),slidesToScroll:parseInt(l),arrows:r,dots:s,infinite:a,autoplay:t,autoplaySpeed:parseInt(i),speed:parseInt(c),rtl:u,responsive:[{breakpoint:parseInt(b)+1,settings:{slidesToShow:parseInt(h),slidesToScroll:parseInt(g)}}]},_=n.useBlockProps.save({className:d()("slick-slider",{"cb-single-slide":1===o},{"cb-padding":v}),"data-slick":JSON.stringify(C),"data-arrow-color":w,"data-arrow-background":m,"data-arrow-hover-color":x,"data-arrow-hover-background":S,dir:u?"rtl":void 0});return(0,p.jsx)("div",{..._,children:(0,p.jsx)(n.InnerBlocks.Content,{})})}})},942:(e,o)=>{var l;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(e=a(e,s(l)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var l in e)r.call(e,l)&&e[l]&&(o=a(o,l));return o}function a(e,o){return o?e?e+" "+o:e+o:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(o,[]))||(e.exports=l)}()}},l={};function r(e){var n=l[e];if(void 0!==n)return n.exports;var s=l[e]={exports:{}};return o[e](s,s.exports,r),s.exports}r.m=o,e=[],r.O=(o,l,n,s)=>{if(!l){var a=1/0;for(d=0;d<e.length;d++){for(var[l,n,s]=e[d],t=!0,i=0;i<l.length;i++)(!1&s||a>=s)&&Object.keys(r.O).every((e=>r.O[e](l[i])))?l.splice(i--,1):(t=!1,s<a&&(a=s));if(t){e.splice(d--,1);var c=n();void 0!==c&&(o=c)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[l,n,s]},r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var l in o)r.o(o,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={704:0,200:0};r.O.j=o=>0===e[o];var o=(o,l)=>{var n,s,[a,t,i]=l,c=0;if(a.some((o=>0!==e[o]))){for(n in t)r.o(t,n)&&(r.m[n]=t[n]);if(i)var d=i(r)}for(o&&o(l);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},l=globalThis.webpackChunkcarousel_block=globalThis.webpackChunkcarousel_block||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var n=r.O(void 0,[200],(()=>r(827)));n=r.O(n)})();