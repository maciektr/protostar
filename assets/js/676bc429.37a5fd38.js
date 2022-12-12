"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[782],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),g=l(n),d=a,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1001:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const i={},o="Signing",s={unversionedId:"tutorials/interacting-with-starknet/signing",id:"tutorials/interacting-with-starknet/signing",title:"Signing",description:"Protostar offers two ways of providing the signature:",source:"@site/docs/tutorials/08-interacting-with-starknet/06-signing.md",sourceDirName:"tutorials/08-interacting-with-starknet",slug:"/tutorials/interacting-with-starknet/signing",permalink:"/protostar/docs/tutorials/interacting-with-starknet/signing",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/08-interacting-with-starknet/06-signing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorials",previous:{title:"Creating account",permalink:"/protostar/docs/tutorials/interacting-with-starknet/deploy-account"},next:{title:"Multicall",permalink:"/protostar/docs/tutorials/interacting-with-starknet/multicall"}},c={},l=[{value:"1. StarkCurveSigner",id:"1-starkcurvesigner",level:3},{value:"2. Using a custom signer class",id:"2-using-a-custom-signer-class",level:3}],u={toc:l};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signing"},"Signing"),(0,a.kt)("p",null,"Protostar offers two ways of providing the signature:"),(0,a.kt)("h3",{id:"1-starkcurvesigner"},"1. StarkCurveSigner"),(0,a.kt)("p",null,"By default, Protostar uses the ",(0,a.kt)("a",{parentName:"p",href:"https://starknetpy.readthedocs.io/en/latest/signer.html#starknet_py.net.signer.stark_curve_signer.StarkCurveSigner"},"StarkCurveSigner class")," from Starknet.py."),(0,a.kt)("p",null,"This way requires you to pass a private key (for signing) and account contract's address (to fetch the nonce).\nYou can obtain the key and account address e.g. from ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/argent-x/dlcobpjiigpikoobohmabehhmhfoodbb"},"Argentx")," or ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/braavos-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma"},"Braavos")," wallets. "),(0,a.kt)("p",null,"2 options are used for this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"private-key-path")," - a path to the file containing hex-encoded private key"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"account-address")," - your account contract's address (hex-encoded as well) on the appropriate network")),(0,a.kt)("p",null,"Alternatively, if you prefer not to store private key in a file, we check for ",(0,a.kt)("inlineCode",{parentName:"p"},"PROTOSTAR_ACCOUNT_PRIVATE_KEY")," environment variable, and use it if it's available.",(0,a.kt)("br",{parentName:"p"}),"\n","It should be in the same hex-encoded format, like all the options above."),(0,a.kt)("h3",{id:"2-using-a-custom-signer-class"},"2. Using a custom signer class"),(0,a.kt)("p",null,"You can provide a custom signer class which inherits from ",(0,a.kt)("a",{parentName:"p",href:"https://starknetpy.readthedocs.io/en/latest/signer.html#starknet_py.net.signer.BaseSigner"},"BaseSigner")," abstract class.\nThis way of signing requires you to write a class in Python, which signs the transaction in a way that is suitable to you.\nAfter writing such class, simply use ",(0,a.kt)("inlineCode",{parentName:"p"},"signer_class")," argument in the CLI for ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," command to use that class instead of the default one.\nUsage of this way of signing is exclusive with the default signer strategy."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The custom signer class must not take any arguments in the constructor, since we don't pass any args on instantiation.")),(0,a.kt)("p",null,"The Python file containing this class can be put next to Cairo source code.\nProtostar synchronizes ",(0,a.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," with project's ",(0,a.kt)("inlineCode",{parentName:"p"},"cairo_path"),".\nModules that are dependencies of Protostar (like ",(0,a.kt)("inlineCode",{parentName:"p"},"starknet_py")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"cairo-lang"),") should be available for importing by default.\nIf you want to import other custom modules, you should extend ",(0,a.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," yourself (",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"},"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"),"), when running this command."))}p.isMDXComponent=!0}}]);