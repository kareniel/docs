"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4136],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},300:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"golang provider"},l=void 0,c={unversionedId:"flashbots-auction/searchers/libraries/golang",id:"flashbots-auction/searchers/libraries/golang",isDocsHomePage:!1,title:"golang provider",description:"This library is provided and maintained by a third-party rather than Flashbots. Please exercise caution.",source:"@site/docs/flashbots-auction/searchers/libraries/golang.md",sourceDirName:"flashbots-auction/searchers/libraries",slug:"/flashbots-auction/searchers/libraries/golang",permalink:"/flashbots-auction/searchers/libraries/golang",tags:[],version:"current",frontMatter:{title:"golang provider"},sidebar:"docs",previous:{title:"searcher sponsored tx",permalink:"/flashbots-auction/searchers/example-searchers/searcher-sponsored-tx"},next:{title:"ethers.js provider",permalink:"/flashbots-auction/searchers/libraries/ethers-js-provider"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This library is provided and maintained by a third-party rather than Flashbots. Please exercise caution."),"\nGolang library is a repository that provides a high-level access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," rpc endpoint on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-relay-js"},"mev-relay"),"."),(0,o.kt)("p",null,"Flashbots-enabled relays and miners expose two new jsonrpc endpoint: ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_callBundle"),". Since these are brand-new, non-standard endpoints, ethers.js and other libraries do not natively support these requests (like ",(0,o.kt)("inlineCode",{parentName:"p"},"getTransactionCount"),"). In order to interact with these endpoints, you will also need access to another full-featured (non-Flashbots) endpoint for nonce-calculation, gas estimation, and transaction status."),(0,o.kt)("p",null,"Access the Golang library repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cryptoriums/flashbot"},"here"),"."))}d.isMDXComponent=!0}}]);