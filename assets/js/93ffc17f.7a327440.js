"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4749],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),h=l(r),f=o,d=h["".concat(c,".").concat(f)]||h[f]||u[f]||a;return r?n.createElement(d,s(s({ref:e},p),{},{components:r})):n.createElement(d,s({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3240:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={title:"quick start"},c=void 0,l={unversionedId:"flashbots-protect/api/quick-start",id:"flashbots-protect/api/quick-start",isDocsHomePage:!1,title:"quick start",description:"Flashbots Protect API",source:"@site/docs/flashbots-protect/api/quick-start.md",sourceDirName:"flashbots-protect/api",slug:"/flashbots-protect/api/quick-start",permalink:"/flashbots-protect/api/quick-start",tags:[],version:"current",frontMatter:{title:"quick start"},sidebar:"docs",previous:{title:"overview",permalink:"/flashbots-protect/overview"},next:{title:"json rpc",permalink:"/flashbots-protect/api/json-rpc"}},p=[{value:"Flashbots Protect API",id:"flashbots-protect-api",children:[]},{value:"Questions?",id:"questions",children:[]}],u={toc:p};function h(t){var e=t.components,r=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"flashbots-protect-api"},"Flashbots Protect API"),(0,a.kt)("p",null,"The Flashbots Protect API provides a simple way for developers to integrate Flashbots into their dApps."),(0,a.kt)("p",null,"Currently the API supports multiple ways to connect and send transactions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JSON RPC"),": HTTP requests sent to the Protect API JSON RPC endpoint at ",(0,a.kt)("inlineCode",{parentName:"li"},"https://protection.flashbots.net/v1/rpc"),". Learn more ",(0,a.kt)("a",{parentName:"li",href:"/flashbots-protect/api/json-rpc"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Websockets"),": use socket.io to send transactions to the Protect API websocket endpoints at ",(0,a.kt)("inlineCode",{parentName:"li"},"wss://protection.flashbots.net/v1/ws"),". Learn more ",(0,a.kt)("a",{parentName:"li",href:"/flashbots-protect/api/websockets"},"here"),".")),(0,a.kt)("p",null,"In either case the Flashbots Protect API will take your transactions and handle their submission to Flashbots, repeatedly submitting each block and monitoring for their inclusion. The major difference between the two integrations is that if you use the JSON RPC endpoint you will need to query to derive the status of a transaction (pull), whereas the websocket SDK will push you updates as they occur (push)."),(0,a.kt)("p",null,"You will find here guides on how to use each method. We've also added a guide on how to build and sign a transaction before sending it to the Flashbots Protect API if you are building a web application."),(0,a.kt)("p",null,"Lastly, please note that while transactions using Flashbots for frontrunning protection should in theory never reach the public mempool, there is a chance that transactions are made public through uncled blocks. Please read ",(0,a.kt)("a",{parentName:"p",href:"/flashbots-protect/api/uncle-bandits"},"here")," to learn more about uncle bandits and how to mitigate this risk."),(0,a.kt)("h2",{id:"questions"},"Questions?"),(0,a.kt)("p",null,"Please reach out in the #flashbots-protect channel in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/7hvTycdNcK"},"Flashbots discord"),"."))}h.isMDXComponent=!0}}]);