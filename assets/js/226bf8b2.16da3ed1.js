(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,u=b["".concat(c,".").concat(h)]||b[h]||d[h]||i;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(129)),c=["components"],o={title:"codebase - deep dive"},s={unversionedId:"flashbots-data/mev-inspect-rs/inspect-codebase-deep-dive",id:"flashbots-data/mev-inspect-rs/inspect-codebase-deep-dive",isDocsHomePage:!1,title:"codebase - deep dive",description:"A deep dive into the codebase, particularly for those who are looking to get familiar with both Rust and the inspect codebase",source:"@site/docs/flashbots-data/mev-inspect-rs/inspect-codebase-deep-dive.mdx",slug:"/flashbots-data/mev-inspect-rs/inspect-codebase-deep-dive",permalink:"/flashbots-data/mev-inspect-rs/inspect-codebase-deep-dive",version:"current",sidebar:"docs",previous:{title:"codebase - design",permalink:"/flashbots-data/mev-inspect-rs/inspect-codebase-design"},next:{title:"sample flow - liquidation tx",permalink:"/flashbots-data/mev-inspect-rs/inspect-inspector-example"}},l=[{value:"<code>main.rs</code>",id:"mainrs",children:[{value:"<code>main()</code>",id:"main",children:[]},{value:"<code>run()</code>",id:"run",children:[]},{value:"Inspecting a tx",id:"inspecting-a-tx",children:[]},{value:"Inspecting a block",id:"inspecting-a-block",children:[]},{value:"<code>src/prices.rs</code>",id:"srcpricesrs",children:[]},{value:"Sample inspector - <code>src/inspectors/aave.rs</code>",id:"sample-inspector---srcinspectorsaavers",children:[]},{value:"Deriving from Traits",id:"deriving-from-traits",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A deep dive into the codebase, particularly for those who are looking to get familiar with both Rust and the inspect codebase"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Notes courtesy of Will Drevo, ",Object(i.b)("a",{parentName:"em",href:"https://github.com/worldveil/mev-inspect-rs/blob/master/NOTES.md"},"source"))),Object(i.b)("h2",{id:"mainrs"},Object(i.b)("inlineCode",{parentName:"h2"},"main.rs")),Object(i.b)("h3",{id:"main"},Object(i.b)("inlineCode",{parentName:"h3"},"main()")),Object(i.b)("p",null,"This is where the execution begins, in the ",Object(i.b)("inlineCode",{parentName:"p"},"main()")," function. Note it is an async function, which returns a Future. ",Object(i.b)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/01_getting_started/04_async_await_primer.html"},"Read more here"),"."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://docs.rs/gumdrop/0.5.0/gumdrop/trait.Options.html"},"gumdrop::Options")," package (crate) is used for command line option parsing. The order of arguments here matters:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# will work\n./target/release/mev-inspect -u http://localhost:8080 tx 0xa72072f5041bcde89c560ba12cc00b22a87779ee369dbff81a78bba26d35e989\n\n# won\'t parse url\n./target/release/mev-inspect tx 0xa72072f5041bcde89c560ba12cc00b22a87779ee369dbff81a78bba26d35e989 -u http://localhost:8080\n# will return "unrecognized option `-u`"\n')),Object(i.b)("p",null,"We parse the arguments with ",Object(i.b)("inlineCode",{parentName:"p"},"Opts::parse_args_default_or_exit()"),". Next we want to retrieve a tx from a provider (ETH node), but we want to check if it's in the cache."),Object(i.b)("p",null,"We use this line ",Object(i.b)("inlineCode",{parentName:"p"},"let Some(ref cache) = opts.cache")," to test for this. ",Object(i.b)("inlineCode",{parentName:"p"},"opts.cache")," is an ",Object(i.b)("inlineCode",{parentName:"p"},"Option<PathBuf>"),", meaning it either has no value (null), or is a ",Object(i.b)("inlineCode",{parentName:"p"},"PathBuf"),". ",Object(i.b)("inlineCode",{parentName:"p"},"Some(&Option<PathBuf>)")," returns true if the reference is non-null. Additionally, these two are the same:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"// using ref operator\nlet Some(ref cache) = opts.cache\n// is identical to\nlet Some(cache) = &opts.cache\n")),Object(i.b)("p",null,"Then we create a provider, either the ",Object(i.b)("a",{parentName:"p",href:"https://docs.rs/ethers-providers/0.2.2/ethers_providers/struct.Provider.html"},"ethers::providers::Provider"),", or the cached version, which reads from disk."),Object(i.b)("h3",{id:"run"},Object(i.b)("inlineCode",{parentName:"h3"},"run()")),Object(i.b)("p",null,"This is a complex function definition:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"async fn run<M: Middleware + Clone + 'static>(provider: M, opts: Opts) -> anyhow::Result<()> { ... }\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"takes the provider & options as input"),Object(i.b)("li",{parentName:"ul"},"returns an ",Object(i.b)("a",{parentName:"li",href:"https://docs.rs/anyhow/1.0.0/anyhow/type.Result.html"},"anyhow:::Result"),", which is some nice syntactic sugar around catching and printing context and a backtrace if something goes wrong. See ",Object(i.b)("a",{parentName:"li",href:"https://docs.rs/anyhow/1.0.0/anyhow/trait.Context.html"},"here")," specifically for how to add context inside a function."),Object(i.b)("li",{parentName:"ul"},"defines a type ",Object(i.b)("inlineCode",{parentName:"li"},"M")," that accepts any type that implements the Middleware, Clone, and ",Object(i.b)("a",{parentName:"li",href:"https://doc.rust-lang.org/rust-by-example/scope/lifetime/static_lifetime.html#trait-bound"},"static lifetime")," traits. This is like an interface in Java. In our code, you can see how this was done for ",Object(i.b)("inlineCode",{parentName:"li"},"CachedProvider")," (src/cached_provider.rs).")),Object(i.b)("p",null,"We wrap our provider in a reference counter ",Object(i.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/sync/struct.Arc.html"},"std::styc::Arc"),", which is the ",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/a/49834496"},"C++ equvilent of std::shared_ptr"),", inorder to prevent memory leaks."),Object(i.b)("p",null,"We create a ",Object(i.b)("inlineCode",{parentName:"p"},"mev_inspect::HistoricalPrice")," object, giving it a provider, the price coming from Uniswap."),Object(i.b)("p",null,"The inspectors are added to a vector. They are encased in ",Object(i.b)("inlineCode",{parentName:"p"},"std::Box"),"es, which tells Rust to put these objects on the heap. This might seem silly at first (...after all, elements in a variable sized data structure like ",Object(i.b)("inlineCode",{parentName:"p"},"Vec")," (vector) ",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/a/43642518"},"are stored in the heap"),"), but since we are using generics to hold a list of objects of a different type but all implement the same interface (ie: ",Object(i.b)("inlineCode",{parentName:"p"},"Vec<Box<dyn Inspector>>"),"), the Box has the additional benefit of preventing the compiler from complaining about not knowing how much memory to set aside a prioi. If you remove the std::Box encasement, you'll get:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"the size for values of type `dyn mev_inspect::Inspector` cannot be known at compilation time\n\ndoesn't have a size known at compile-time\n")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/keyword.dyn.html"},Object(i.b)("inlineCode",{parentName:"a"},"dyn")," keyword")," isn't strictly necessary (the compiler will make this trait dynamically dispatched), but know that it's depcrated and you'll get a warning."),Object(i.b)("p",null,"Next we create a vector of reducers."),Object(i.b)("p",null,"After that, we create a processor."),Object(i.b)("p",null,"The connection between these different types seems to be:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Inspectors"),' are "parsers" that know how a given contract is set up, and are able to extract necessary fields'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Reducers"),' are "checkers" that examine extracted fields for different MEV actions'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Processor")," is a coordinating object that takes inspectors and parsers to inspect transactions")),Object(i.b)("p",null,"Next we create a database connection."),Object(i.b)("p",null,"Next we match on command, but if it's a tx, we inspect."),Object(i.b)("h3",{id:"inspecting-a-tx"},"Inspecting a tx"),Object(i.b)("p",null,"We create a ",Object(i.b)("inlineCode",{parentName:"p"},"mev_inspect::types::Inspection"),". This seems to choose the correct inspector and from that extracts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"status (success/fail)"),Object(i.b)("li",{parentName:"ul"},"actions that happened, which can be any of the ones described ",Object(i.b)("a",{parentName:"li",href:"inspect-codebase-design"},"here")),Object(i.b)("li",{parentName:"ul"},"protocols involved"),Object(i.b)("li",{parentName:"ul"},"the sender, contract (if any), and proxy contract (if any) of the tx"),Object(i.b)("li",{parentName:"ul"},"tx hsh & block height")),Object(i.b)("p",null,"We query the provider for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the gas_used (from receipt)"),Object(i.b)("li",{parentName:"ul"},"the gas_price (from tx)")),Object(i.b)("p",null,"With the inspection, gas_price, gas_used, and pricing in hand, we can coalesce into a ",Object(i.b)("inlineCode",{parentName:"p"},"mev_inspect::types::Evaluation")," struct which holds:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("inlineCode",{parentName:"li"},"mev_inspect::types::Inspection")," object"),Object(i.b)("li",{parentName:"ul"},"gas_used, gas_price"),Object(i.b)("li",{parentName:"ul"},"actions involved"),Object(i.b)("li",{parentName:"ul"},"profit made!")),Object(i.b)("p",null,"Finally, we insert the evaluation into the database."),Object(i.b)("h3",{id:"inspecting-a-block"},"Inspecting a block"),Object(i.b)("p",null,"If the command is instead for a range of blocks, we iterate through this range one by one and process the block given the usual suspects:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"process_block(&mut lock, block, &provider, &processor, &mut db, &prices).await?\n")),Object(i.b)("h3",{id:"srcpricesrs"},Object(i.b)("inlineCode",{parentName:"h3"},"src/prices.rs")),Object(i.b)("p",null,"First, generate the ABI with ",Object(i.b)("a",{parentName:"p",href:"https://docs.rs/ethers-contract/0.1.3/ethers_contract/macro.abigen.html"},"ethers::contract::abigen")," macro for the Uniswap contract, and store it in the ",Object(i.b)("inlineCode",{parentName:"p"},"abi/")," folder. This will help us decode binary data from the transactions that interact with this contract. There are many resources on this, but see ",Object(i.b)("a",{parentName:"p",href:"https://ethereum.stackexchange.com/a/1171/34397"},"SO answer here"),"."),Object(i.b)("h3",{id:"sample-inspector---srcinspectorsaavers"},"Sample inspector - ",Object(i.b)("inlineCode",{parentName:"h3"},"src/inspectors/aave.rs")),Object(i.b)("p",null,"This is the inspector for Aave."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/keyword.impl.html"},"As is customary in Rust"),", we define a ",Object(i.b)("inlineCode",{parentName:"p"},"struct")," for the data fields, and an ",Object(i.b)("inlineCode",{parentName:"p"},"impl")," for the methods on the object itself."),Object(i.b)("p",null,"Aave inspector doesn't need a provider because it can simply load the ABI included in the repo."),Object(i.b)("p",null,"Next we implment the Inspector interface for the Aave object, which is a function that takes in a mutable inspection object that we'll write fields to as a result of the inspection logic."),Object(i.b)("h3",{id:"deriving-from-traits"},"Deriving from Traits"),Object(i.b)("p",null,"It seems in rust that having structs derive from traits like ",Object(i.b)("inlineCode",{parentName:"p"},"Debug")," is universally a good idea, but there are some others to be careful of. ",Object(i.b)("a",{parentName:"p",href:"https://users.rust-lang.org/t/what-traits-should-i-normally-derive/484/9"},"Good post on the subject here"),"."))}b.isMDXComponent=!0}}]);