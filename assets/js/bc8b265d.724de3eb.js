(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return a})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return d}));var n=i(3),r=i(7),o=(i(0),i(119)),s={title:"flashbots fair market principles"},a={unversionedId:"flashbots-core/miners/advanced/ffmp",id:"flashbots-core/miners/advanced/ffmp",isDocsHomePage:!1,title:"flashbots fair market principles",description:"This document aims to define a set of key principles and best practices upon which stakeholders of the Flashbots network can hold block producers (miners in ETH 1.0) accountable for their continued participation in the Flashbots Alpha.",source:"@site/docs/flashbots-core/miners/advanced/ffmp.md",slug:"/flashbots-core/miners/advanced/ffmp",permalink:"/flashbots-core/miners/advanced/ffmp",version:"current"},c=[{value:"Principles",id:"principles",children:[{value:"Correctness",id:"correctness",children:[]},{value:"Fairness",id:"fairness",children:[]},{value:"Finality",id:"finality",children:[]},{value:"Privacy",id:"privacy",children:[]}]},{value:"Best Practices",id:"best-practices",children:[{value:"Disclosure",id:"disclosure",children:[]},{value:"Reporting",id:"reporting",children:[]},{value:"Professionalism",id:"professionalism",children:[]},{value:"Incident Response",id:"incident-response",children:[]},{value:"Communication",id:"communication",children:[]}]},{value:"Penalty &amp; Remediation",id:"penalty--remediation",children:[]},{value:"Feedback &amp; Discussion",id:"feedback--discussion",children:[]},{value:"Disclaimer",id:"disclaimer",children:[]}],l={toc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document aims to define a set of key principles and best practices upon which stakeholders of the Flashbots network can hold block producers (miners in ETH 1.0) accountable for their continued participation in the Flashbots Alpha."),Object(o.b)("p",null,"Fair Market Principles for MEV is required in the Flashbots Alpha due to the technical limitations in the early stage of the project which are mitigated on the basis of trust. Flashbots aims to eliminate these trust requirements in ",Object(o.b)("a",{parentName:"p",href:"https://ethresear.ch/t/flashbots-frontrunning-the-mev-crisis/8251"},"future releases of the system"),"."),Object(o.b)("p",null,"Block producers connected to the Flashbots Alpha are expected to act in the ",Object(o.b)("a",{parentName:"p",href:"https://www.investopedia.com/what-is-the-sec-s-regulation-bi-best-interest-rule-4689542"},"best interest")," of the Flashbots network, the Ethereum network, and its various stakeholders. Namely, the Flashbots network aims to uphold the properties of fairness, efficiency, transparency, and permissionlessness. Block producers participating in the Flashbots Alpha are expected to collaborate in the development of an ecosystem for MEV extraction which reinforces the security and stability of the Ethereum network."),Object(o.b)("p",null,"In the event of a breach of these principles by one of the block producers, the Flashbots core devs may act on behalf of stakeholders in disabling the access to the Flashbots network until the breach is rectified. The Flashbots core devs aim to provide technical support to block producers on a best effort basis to help resolve any technical issues."),Object(o.b)("h2",{id:"principles"},"Principles"),Object(o.b)("h3",{id:"correctness"},"Correctness"),Object(o.b)("p",null,"Block producers are expected to operate an Ethereum node which complies with the latest version of the Ethereum specification and the latest version of the Flashbots core specification. Block producers are expected to follow the Flashbots core upgrade process and swiftly upgrade their nodes to meet latest requirements."),Object(o.b)("p",null,'Bad behavior includes any deviation from the specified node behavior. This includes, but is not limited to, implementation errors, intended omissions, and new "features" which change how the system operates.'),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/flashbots-core/miners/mev-geth-spec/v02"},"Flashbots core specification")),Object(o.b)("h3",{id:"fairness"},"Fairness"),Object(o.b)("p",null,"Block producers are expected never to act or enable third parties to act on sensitive information received through the Flashbots relay."),Object(o.b)("p",null,"Sensitive information includes the state of the MEV bundle queue, sealed bid, pending block, bundle simulation, bundle content, or bundle merging. Sensitive information excludes MEV bundles correctly included in a block and distributed over the public network with the intention of such block being included as a canonical block or as an uncle block."),Object(o.b)("p",null,"Bad behavior includes, but is not limited to, operating a trading bot which benefits from knowing the winning bid value of the bundle auction, operating a trading bot which steals or frontruns strategies from bundles, operating a bundle selection algorithm which prioritizes some searchers over others."),Object(o.b)("h3",{id:"finality"},"Finality"),Object(o.b)("p",null,"Block producers are expected to contribute to the consensus stability of Ethereum. This means minimizing the uncle rate and re-organization rate in an effort to provide finality as quickly as possible."),Object(o.b)("p",null,'Bad behavior includes, but is not limited to, re-ordering chain history in an attempt to extract MEV in what is called a "time-bandit attack", and prioritizing transmission of sealed blocks to subsets of the network in what is called "selfish mining".'),Object(o.b)("p",null,"In the future, we may additionally require participants in the Flashbots network to defend against such attacks actively, ensuring the long-term health of any networks supported by Flashbots and therefore the MEV ecosystem."),Object(o.b)("h3",{id:"privacy"},"Privacy"),Object(o.b)("p",null,"Block producers are expected to protect the confidentiality of the MEV bundles they receive from the Flashbots relay."),Object(o.b)("p",null,"Confidentiality includes both pre-trade privacy and failed-trade privacy:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Pre-trade privacy: No MEV bundle received by the miner is ever disclosed to any third party before the bundle is included in a block."),Object(o.b)("li",{parentName:"ul"},"Failed-trade privacy: No MEV bundle received by the miner is ever disclosed to any third party after it has not been selected for a block.")),Object(o.b)("p",null,"Bad behavior includes, but is not limited to, sending bundle information to third parties, and storing bundle information to persistent storage past their intended use."),Object(o.b)("h2",{id:"best-practices"},"Best Practices"),Object(o.b)("h3",{id:"disclosure"},"Disclosure"),Object(o.b)("p",null,"Block producers disclose if they are connected to the Flashbots network."),Object(o.b)("p",null,"Block producers disclose the coinbase address they are using."),Object(o.b)("p",null,"Block producers disclose how their MEV revenues are distributed to their stakeholders."),Object(o.b)("h3",{id:"reporting"},"Reporting"),Object(o.b)("p",null,"Block producers report the amount of hashrate they point to their Flashbots node."),Object(o.b)("p",null,"Block producers report the amount of revenue they received from the Flashbots network."),Object(o.b)("h3",{id:"professionalism"},"Professionalism"),Object(o.b)("p",null,"Block producers are diligent in swiftly and correctly implementing the latest versions of Flashbots core and Ethereum without unjustified delay."),Object(o.b)("p",null,"Block producers properly secure their node infrastructure to protect the integrity of their system. This includes, but is not limited to, making use of reverse proxies, firewalls, and strict access control to prevent information leaks."),Object(o.b)("h3",{id:"incident-response"},"Incident Response"),Object(o.b)("p",null,"Block producers quickly respond, mitigate, and remediate incidents causing unexpected behavior of their system."),Object(o.b)("h3",{id:"communication"},"Communication"),Object(o.b)("p",null,"Block producers actively monitor the Flashbots Discord and mev-geth Github repository to remain up to date with latest Flashbots core releases and core dev communication."),Object(o.b)("h2",{id:"penalty--remediation"},"Penalty & Remediation"),Object(o.b)("p",null,"Penalties for violating the Flashbots Fair Market Principles and Best Practices can range from a simple warning to being removed from the Flashbots relay until the violations are resolved.\nWarnings will be communicated to the offending block producer through the dedicated Flashbots Discord channel and are expected to be acknowledged within 24h."),Object(o.b)("p",null,"Block producers are expected to collaborate with Flashbots core devs to promptly resolve any issue as they arise."),Object(o.b)("p",null,'Flashbots core devs will provide technical support on a "best effort" basis in order to help bring the offending block producer back into compliance with the FFMP.'),Object(o.b)("h2",{id:"feedback--discussion"},"Feedback & Discussion"),Object(o.b)("p",null,"Please provide feedback on the FFMPs and engage in discussion in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/flashbots/pm/discussions/65"},"Flashbots forum"),"."),Object(o.b)("h2",{id:"disclaimer"},"Disclaimer"),Object(o.b)("p",null,"Flashbots core and Flashbots alpha is an open-source software stack, while we will attempt to provide support for any issues or test infrastructure we run, we cannot provide any guarantees associated with the use of Flashbots tools and encourage a miner-side diligence process for all network participants."))}d.isMDXComponent=!0},119:function(e,t,i){"use strict";i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return u}));var n=i(0),r=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},h=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(i),p=n,u=h["".concat(s,".").concat(p)]||h[p]||b[p]||o;return i?r.a.createElement(u,a(a({ref:t},l),{},{components:i})):r.a.createElement(u,a({ref:t},l))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<o;l++)s[l]=i[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);