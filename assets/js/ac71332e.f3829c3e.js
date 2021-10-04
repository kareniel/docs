"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4354],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},255:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"how it works?"},c=void 0,l={unversionedId:"flashbots-auction/miners/how-it-works",id:"flashbots-auction/miners/how-it-works",isDocsHomePage:!1,title:"how it works?",description:"Demo",source:"@site/docs/flashbots-auction/miners/how-it-works.md",sourceDirName:"flashbots-auction/miners",slug:"/flashbots-auction/miners/how-it-works",permalink:"/flashbots-auction/miners/how-it-works",tags:[],version:"current",frontMatter:{title:"how it works?"},sidebar:"docs",previous:{title:"onboarding",permalink:"/flashbots-auction/miners/quick-start"},next:{title:"discord setup",permalink:"/flashbots-auction/miners/discord-setup"}},p=[{value:"Demo",id:"demo",children:[]},{value:"MEV-Geth: a proof of concept",id:"mev-geth-a-proof-of-concept",children:[]},{value:"Why MEV-Geth?",id:"why-mev-geth",children:[]},{value:"Design goals",id:"design-goals",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Differences between MEV-Geth and vanilla geth",id:"differences-between-mev-geth-and-vanilla-geth",children:[]},{value:"Moving towards version 1.0",id:"moving-towards-version-10",children:[]}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"demo"},"Demo"),(0,i.kt)("p",null,"mev-geth-demo is a repository that launches an MEV-Geth node, and shows how a miner may profit from it by accepting MEV\nbundles either via direct ",(0,i.kt)("inlineCode",{parentName:"p"},"block.coinbase")," payments, or with extra transactions that pay\nthe block's coinbase if it's known ahead of time."),(0,i.kt)("p",null,"Access the mev-geth-demo repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth-demo"},"here"),"."),(0,i.kt)("h3",{id:"mev-geth-a-proof-of-concept"},"MEV-Geth: a proof of concept"),(0,i.kt)("p",null,"We have designed and implemented a proof of concept for permissionless MEV extraction called MEV-Geth. It is a sealed-bid block space auction mechanism for communicating transaction order preference. While our proof of concept has incomplete trust guarantees, we believe it's a significant improvement over the status quo. The adoption of MEV-Geth should relieve a lot of the network and chain congestion caused by frontrunning and backrunning bots."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Guarantee"),(0,i.kt)("th",{parentName:"tr",align:"center"},"PGA"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Dark-txPool"),(0,i.kt)("th",{parentName:"tr",align:"center"},"MEV-Geth"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Permissionless"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Efficient"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pre-trade privacy"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Failed trade privacy"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Complete privacy"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Finality"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,i.kt)("h3",{id:"why-mev-geth"},"Why MEV-Geth?"),(0,i.kt)("p",null,"We believe that without the adoption of neutral, public, open-source infrastructure for permissionless MEV extraction, MEV risks becoming an insiders' game. We commit as an organization to releasing reference implementations for participation in fair, ethical, and politically neutral MEV extraction. By doing so, we hope to prevent the properties of Ethereum from being eroded by trust-based dark pools or proprietary channels which are key points of security weakness. We thus release MEV-Geth with the dual goal of creating an ecosystem for MEV extraction that preserves Ethereum properties, as well as starting conversations with the community around our research and development roadmap."),(0,i.kt)("h3",{id:"design-goals"},"Design goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Permissionless"),"\nA permissionless design implies there are no trusted intermediary which can censor transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Efficient"),"\nAn efficient design implies MEV extraction is performed without causing unnecessary network or chain congestion."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pre-trade privacy"),"\nPre-trade privacy implies transactions only become publicly known after they have been included in a block. Note, this type of privacy does not exclude privileged actors such as transaction aggregators / gateways / miners."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Failed trade privacy"),"\nFailed trade privacy implies loosing bids are never included in a block, thus never exposed to the public. Failed trade privacy is tightly coupled to extraction efficiency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Complete privacy"),"\nComplete privacy implies there are no privileged actors such as transaction aggregators / gateways / miners who can observe incoming transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Finality"),"\nFinality implies it is infeasible for MEV extraction to be reversed once included in a block. This would protect against time-bandit chain re-org attacks.")),(0,i.kt)("p",null,"The MEV-Geth proof of concept relies on the fact that searchers can withhold bids from certain miners in order to disincentivize bad behavior like stealing a profitable strategy. We expect a complete privacy design to necessitate some sort of private computation solution like SGX, ZKP, or MPC to withhold the transaction content from miners until it is mined in a block. One of the core objective of the Flashbots organization is to incentivize and produce research in this direction."),(0,i.kt)("p",null,"The MEV-Geth proof of concept does not provide any finality guarantees. We expect the solution to this problem to require post-trade execution privacy through private chain state or strong economic infeasibility. The design of a system with strong finality is the second core objective of the MEV-Geth research effort."),(0,i.kt)("h3",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,'MEV-Geth introduces the concepts of "searchers", "transaction bundles", and "block template" to Ethereum. Effectively, MEV-Geth provides a way for miners to delegate the task of finding and ordering transactions to third parties called "searchers". These searchers compete with each other to find the most profitable ordering and bid for its inclusion in the next block using a standardized template called a "transaction bundle". These bundles are evaluated in a sealed-bid auction hosted by miners to produce a "block template" which holds the ',(0,i.kt)("a",{parentName:"p",href:"https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture"},"information about transaction order required to begin mining"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/B1fWz7rcD.png",alt:null})),(0,i.kt)("p",null,"The MEV-Geth proof of concept is compatible with any regular Ethereum client. The Flashbots Auction devs are maintaining ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth"},"a reference implementation")," for the go-ethereum client."),(0,i.kt)("h3",{id:"differences-between-mev-geth-and-vanilla-geth"},"Differences between MEV-Geth and ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/ethereum/go-ethereum"},(0,i.kt)("em",{parentName:"a"},"vanilla")," geth")),(0,i.kt)("p",null,"You can find a detailed list of changes ",(0,i.kt)("a",{parentName:"p",href:"/flashbots-auction/miners/advanced/source-code"},"here")),(0,i.kt)("h3",{id:"moving-towards-version-10"},"Moving towards version 1.0"),(0,i.kt)("p",null,"We believe a sustainable solution to MEV existential risks requires complete privacy and finality, which the proof of concept does not address. We hope to engage community feedback throughout the development of this complete version of MEV-Geth."))}h.isMDXComponent=!0}}]);