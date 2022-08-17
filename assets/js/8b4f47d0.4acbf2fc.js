"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[539],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},282:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="call",s={unversionedId:"tutorials/deploying/migrations/call",id:"tutorials/deploying/migrations/call",title:"call",description:"Calls a StarkNet contract without affecting the StarkNet's state.",source:"@site/docs/tutorials/06-deploying/02-migrations/call.md",sourceDirName:"tutorials/06-deploying/02-migrations",slug:"/tutorials/deploying/migrations/call",permalink:"/protostar/docs/tutorials/deploying/migrations/call",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/06-deploying/02-migrations/call.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"Migrations",permalink:"/protostar/docs/tutorials/deploying/migrations/"},next:{title:"declare",permalink:"/protostar/docs/tutorials/deploying/migrations/declare"}},p={},u=[{value:"Example",id:"example",level:2}],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"call"},(0,o.kt)("inlineCode",{parentName:"h1"},"call")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def call(\n    contract_address: int,\n    function_name: str,\n    inputs: list[int] | dict[str, Any] | None = None,\n) -> ContractCallResult:\n\nclass ContractCallResult(NamedTuple):\n    ...\n    ...\n")),(0,o.kt)("p",null,"Calls a StarkNet contract without affecting the StarkNet's state."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can provide ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," as a dictionary to use ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/deploying/migrations/#data-transformer"},"data transformer"),"."))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ protostar migrate migrations/migration_01.cairo\n    --network alpha-goerli\n    --output-dir migrations/output\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="migrations/migration_01.cairo"',title:'"migrations/migration_01.cairo"'},'%lang starknet\n\n@external\nfunc up():\n    %{ \n        contract_address = deploy_contract("./build/main.json").contract_address\n\n        result = call(contract_address, "identity", {"arg": 42})\n\n        assert result.res == 42\n    %}\n\n    return ()\nend\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="src/main.cairo"',title:'"src/main.cairo"'},"%lang starknet\n\n@view\nfunc identity(arg) -> (res : felt):\n    return (arg)\nend\n")))}d.isMDXComponent=!0}}]);