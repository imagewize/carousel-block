(()=>{var e,o={827:(e,o,l)=>{"use strict";const t=window.wp.blocks,n=window.wp.blockEditor,r=window.wp.components,s=window.wp.i18n,a=window.wp.element,i=window.wp.data;var c=l(942),d=l.n(c);const p=window.ReactJSXRuntime,u=["cb/slide"],h=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"cb/carousel","version":"1.0.0","title":"Carousel","category":"design","description":"Create a customizable slideshow of content with this carousel block.","attributes":{"slidesToShow":{"type":"number","default":3},"slidesToScroll":{"type":"number","default":1},"arrows":{"type":"boolean","default":true},"dots":{"type":"boolean","default":true},"infinite":{"type":"boolean","default":true},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":3000},"speed":{"type":"number","default":500},"rtl":{"type":"boolean","default":false},"responsiveWidth":{"type":"number","default":768},"responsiveSlides":{"type":"number","default":1},"responsiveSlidesToScroll":{"type":"number","default":1}},"supports":{"align":["wide","full"],"html":false,"anchor":true},"textdomain":"carousel-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),b=(0,p.jsxs)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",children:[(0,p.jsx)("path",{d:"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"}),(0,p.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]});(0,t.registerBlockType)("cb/carousel",{...h,icon:b,edit:function({attributes:e,setAttributes:o,clientId:l}){const{slidesToShow:t,slidesToScroll:c,speed:h,arrows:b,dots:f,infinite:g,autoplay:v,autoplaySpeed:w,rtl:S,responsiveWidth:m,responsiveSlides:y,responsiveSlidesToScroll:x}=e,k=(0,i.useSelect)((e=>e("core/block-editor").getBlock(l).innerBlocks.length)),_=(0,n.useBlockProps)({className:d()(`cb-shows-${t}-slides`,k+1>t?"cb-show-scrollbar":"cb-hide-scrollbar")}),j=(0,p.jsx)("div",{className:"cb-carousel-placeholder",children:(0,s.__)("Click plus (+) to add slides","cb")});return(0,p.jsxs)(a.Fragment,{children:[(0,p.jsxs)(n.InspectorControls,{children:[(0,p.jsxs)(r.PanelBody,{title:(0,s.__)("Carousel Settings","cb"),initialOpen:!0,children:[(0,p.jsx)(r.RangeControl,{label:(0,s.__)("Slides to Show","cb"),value:t,onChange:e=>o({slidesToShow:e}),min:1,max:10}),(0,p.jsx)(r.RangeControl,{label:(0,s.__)("Slides to Scroll","cb"),value:c,onChange:e=>o({slidesToScroll:e}),min:1,max:10}),(0,p.jsx)(r.RangeControl,{label:(0,s.__)("Animation Speed (ms)","cb"),value:h,onChange:e=>o({speed:e}),min:100,max:3e3,step:100}),(0,p.jsx)(r.ToggleControl,{label:(0,s.__)("Show Arrows","cb"),checked:b,onChange:e=>o({arrows:e})}),(0,p.jsx)(r.ToggleControl,{label:(0,s.__)("Show Dots","cb"),checked:f,onChange:e=>o({dots:e})}),(0,p.jsx)(r.ToggleControl,{label:(0,s.__)("Infinite Loop","cb"),checked:g,onChange:e=>o({infinite:e})}),(0,p.jsx)(r.ToggleControl,{label:(0,s.__)("Autoplay","cb"),checked:v,onChange:e=>o({autoplay:e})}),v&&(0,p.jsx)(r.RangeControl,{label:(0,s.__)("Autoplay Speed (ms)","cb"),value:w,onChange:e=>o({autoplaySpeed:e}),min:1e3,max:1e4,step:500}),(0,p.jsx)(r.ToggleControl,{label:(0,s.__)("RTL Mode","cb"),checked:S,onChange:e=>o({rtl:e})})]}),(0,p.jsxs)(r.PanelBody,{title:(0,s.__)("Responsive Settings","cb"),initialOpen:!1,children:[(0,p.jsx)(r.RangeControl,{label:(0,s.__)("Breakpoint Width (px)","cb"),value:m,onChange:e=>o({responsiveWidth:e}),min:320,max:1200,step:1}),(0,p.jsx)(r.RangeControl,{label:(0,s.__)("Slides to Show (Mobile)","cb"),value:y,onChange:e=>o({responsiveSlides:e}),min:1,max:5}),(0,p.jsx)(r.RangeControl,{label:(0,s.__)("Slides to Scroll (Mobile)","cb"),value:x,onChange:e=>o({responsiveSlidesToScroll:e}),min:1,max:5})]})]}),(0,p.jsx)("div",{..._,children:(0,p.jsx)(n.InnerBlocks,{orientation:"horizontal",allowedBlocks:u,templateLock:!1,renderAppender:n.InnerBlocks.ButtonBlockAppender,placeholder:j})})]})},save:function({attributes:e}){const{slidesToShow:o,slidesToScroll:l,arrows:t,dots:r,infinite:s,autoplay:a,autoplaySpeed:i,speed:c,rtl:d}=e,u={slidesToShow:parseInt(o),slidesToScroll:parseInt(l),arrows:t,dots:r,infinite:s,autoplay:a,autoplaySpeed:parseInt(i),speed:parseInt(c)},h=n.useBlockProps.save({className:"slick-slider","data-slick":JSON.stringify(u),dir:d?"rtl":void 0});return(0,p.jsx)("div",{...h,children:(0,p.jsx)(n.InnerBlocks.Content,{})})}})},942:(e,o)=>{var l;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(e=s(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var l in e)t.call(e,l)&&e[l]&&(o=s(o,l));return o}function s(e,o){return o?e?e+" "+o:e+o:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(o,[]))||(e.exports=l)}()}},l={};function t(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return o[e](r,r.exports,t),r.exports}t.m=o,e=[],t.O=(o,l,n,r)=>{if(!l){var s=1/0;for(d=0;d<e.length;d++){for(var[l,n,r]=e[d],a=!0,i=0;i<l.length;i++)(!1&r||s>=r)&&Object.keys(t.O).every((e=>t.O[e](l[i])))?l.splice(i--,1):(a=!1,r<s&&(s=r));if(a){e.splice(d--,1);var c=n();void 0!==c&&(o=c)}}return o}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[l,n,r]},t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var l in o)t.o(o,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={704:0,200:0};t.O.j=o=>0===e[o];var o=(o,l)=>{var n,r,[s,a,i]=l,c=0;if(s.some((o=>0!==e[o]))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(i)var d=i(t)}for(o&&o(l);c<s.length;c++)r=s[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},l=globalThis.webpackChunkcarousel_block=globalThis.webpackChunkcarousel_block||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var n=t.O(void 0,[200],(()=>t(827)));n=t.O(n)})();