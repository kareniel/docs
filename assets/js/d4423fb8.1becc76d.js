"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4160],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(t),f=o,h=b["".concat(c,".").concat(f)]||b[f]||u[f]||i;return t?n.createElement(h,a(a({ref:r},p),{},{components:t})):n.createElement(h,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3568:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return b}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={title:"web3.py provider"},c=void 0,l={unversionedId:"flashbots-auction/searchers/libraries/web3py-provider",id:"flashbots-auction/searchers/libraries/web3py-provider",isDocsHomePage:!1,title:"web3.py provider",description:"web3-flashbots is a repository containing a library that works by injecting a new module in the web3.py instance, which allows",source:"@site/docs/flashbots-auction/searchers/libraries/web3py-provider.md",sourceDirName:"flashbots-auction/searchers/libraries",slug:"/flashbots-auction/searchers/libraries/web3py-provider",permalink:"/flashbots-auction/searchers/libraries/web3py-provider",tags:[],version:"current",frontMatter:{title:"web3.py provider"},sidebar:"docs",previous:{title:"ethers.js provider",permalink:"/flashbots-auction/searchers/libraries/ethers-js-provider"},next:{title:"other resources",permalink:"/flashbots-auction/other-resources"}},p=[],u={toc:p};function b(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'web3-flashbots is a repository containing a library that works by injecting a new module in the web3.py instance, which allows\nsubmitting "bundles" of transactions directly to miners. This is done by also creating\na middleware which captures calls to ',(0,i.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_callBundle"),", and sends\nthem to an RPC endpoint which you have specified, which corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"mev-geth"),"."),(0,i.kt)("p",null,"To apply correct headers we use FlashbotProvider which injects the correct header on post"),(0,i.kt)("p",null,"Access the web3-flashbots repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/web3-flashbots"},"here"),"."))}b.isMDXComponent=!0}}]);