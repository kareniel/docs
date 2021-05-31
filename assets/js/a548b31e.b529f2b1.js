(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(119)),o={title:"how it works?"},c={unversionedId:"flashbots-core/miners/how-it-works",id:"flashbots-core/miners/how-it-works",isDocsHomePage:!1,title:"how it works?",description:"Demo",source:"@site/docs/flashbots-core/miners/how-it-works.md",slug:"/flashbots-core/miners/how-it-works",permalink:"/flashbots-core/miners/how-it-works",version:"current",sidebar:"docs",previous:{title:"onboarding",permalink:"/flashbots-core/miners/quick-start"},next:{title:"discord setup",permalink:"/flashbots-core/miners/discord-setup"}},s=[{value:"Demo",id:"demo",children:[]},{value:"MEV-Geth: a proof of concept",id:"mev-geth-a-proof-of-concept",children:[]},{value:"Why MEV-Geth?",id:"why-mev-geth",children:[]},{value:"Design goals",id:"design-goals",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Differences between MEV-Geth and vanilla geth",id:"differences-between-mev-geth-and-vanilla-geth",children:[]},{value:"Moving towards version 1.0",id:"moving-towards-version-10",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"demo"},"Demo"),Object(i.b)("p",null,"mev-geth-demo is a repository that launches an MEV-Geth node, and shows how a miner may profit from it by accepting MEV\nbundles either via direct ",Object(i.b)("inlineCode",{parentName:"p"},"block.coinbase")," payments, or with extra transactions that pay\nthe block's coinbase if it's known ahead of time."),Object(i.b)("p",null,"Access the mev-geth-demo repository ",Object(i.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth-demo"},"here"),"."),Object(i.b)("h3",{id:"mev-geth-a-proof-of-concept"},"MEV-Geth: a proof of concept"),Object(i.b)("p",null,"We have designed and implemented a proof of concept for permissionless MEV extraction called MEV-Geth. It is a sealed-bid block space auction mechanism for communicating transaction order preference. While our proof of concept has incomplete trust guarantees, we believe it's a significant improvement over the status quo. The adoption of MEV-Geth should relieve a lot of the network and chain congestion caused by frontrunning and backrunning bots."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Guarantee"),Object(i.b)("th",{parentName:"tr",align:"center"},"PGA"),Object(i.b)("th",{parentName:"tr",align:"center"},"Dark-txPool"),Object(i.b)("th",{parentName:"tr",align:"center"},"MEV-Geth"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Permissionless"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Efficient"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Pre-trade privacy"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Failed trade privacy"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Complete privacy"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Finality"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c")))),Object(i.b)("h3",{id:"why-mev-geth"},"Why MEV-Geth?"),Object(i.b)("p",null,"We believe that without the adoption of neutral, public, open-source infrastructure for permissionless MEV extraction, MEV risks becoming an insiders' game. We commit as an organization to releasing reference implementations for participation in fair, ethical, and politically neutral MEV extraction. By doing so, we hope to prevent the properties of Ethereum from being eroded by trust-based dark pools or proprietary channels which are key points of security weakness. We thus release MEV-Geth with the dual goal of creating an ecosystem for MEV extraction that preserves Ethereum properties, as well as starting conversations with the community around our research and development roadmap."),Object(i.b)("h3",{id:"design-goals"},"Design goals"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Permissionless"),"\nA permissionless design implies there are no trusted intermediary which can censor transactions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Efficient"),"\nAn efficient design implies MEV extraction is performed without causing unnecessary network or chain congestion."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pre-trade privacy"),"\nPre-trade privacy implies transactions only become publicly known after they have been included in a block. Note, this type of privacy does not exclude privileged actors such as transaction aggregators / gateways / miners."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Failed trade privacy"),"\nFailed trade privacy implies loosing bids are never included in a block, thus never exposed to the public. Failed trade privacy is tightly coupled to extraction efficiency."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Complete privacy"),"\nComplete privacy implies there are no privileged actors such as transaction aggregators / gateways / miners who can observe incoming transactions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Finality"),"\nFinality implies it is infeasible for MEV extraction to be reversed once included in a block. This would protect against time-bandit chain re-org attacks.")),Object(i.b)("p",null,"The MEV-Geth proof of concept relies on the fact that searchers can withhold bids from certain miners in order to disincentivize bad behavior like stealing a profitable strategy. We expect a complete privacy design to necessitate some sort of private computation solution like SGX, ZKP, or MPC to withhold the transaction content from miners until it is mined in a block. One of the core objective of the Flashbots organization is to incentivize and produce research in this direction."),Object(i.b)("p",null,"The MEV-Geth proof of concept does not provide any finality guarantees. We expect the solution to this problem to require post-trade execution privacy through private chain state or strong economic infeasibility. The design of a system with strong finality is the second core objective of the MEV-Geth research effort."),Object(i.b)("h3",{id:"how-it-works"},"How it works"),Object(i.b)("p",null,'MEV-Geth introduces the concepts of "searchers", "transaction bundles", and "block template" to Ethereum. Effectively, MEV-Geth provides a way for miners to delegate the task of finding and ordering transactions to third parties called "searchers". These searchers compete with each other to find the most profitable ordering and bid for its inclusion in the next block using a standardized template called a "transaction bundle". These bundles are evaluated in a sealed-bid auction hosted by miners to produce a "block template" which holds the ',Object(i.b)("a",{parentName:"p",href:"https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture"},"information about transaction order required to begin mining"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://hackmd.io/_uploads/B1fWz7rcD.png",alt:null})),Object(i.b)("p",null,"The MEV-Geth proof of concept is compatible with any regular Ethereum client. The Flashbots core devs are maintaining ",Object(i.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth"},"a reference implementation")," for the go-ethereum client."),Object(i.b)("h3",{id:"differences-between-mev-geth-and-vanilla-geth"},"Differences between MEV-Geth and ",Object(i.b)("a",{parentName:"h3",href:"https://github.com/ethereum/go-ethereum"},Object(i.b)("em",{parentName:"a"},"vanilla")," geth")),Object(i.b)("p",null,"You can find a detailed list of changes ",Object(i.b)("a",{parentName:"p",href:"/flashbots-core/miners/advanced/source-code"},"here")),Object(i.b)("h3",{id:"moving-towards-version-10"},"Moving towards version 1.0"),Object(i.b)("p",null,"We believe a sustainable solution to MEV existential risks requires complete privacy and finality, which the proof of concept does not address. We hope to engage community feedback throughout the development of this complete version of MEV-Geth."))}b.isMDXComponent=!0}}]);