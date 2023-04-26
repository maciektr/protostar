"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6333],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(m,c(c({ref:t},i),{},{components:r})):a.createElement(m,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5549:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var a=r(3117),n=(r(7294),r(3905));const o={},c="deploy",s={unversionedId:"tutorials/cairo-1-support/cheatcodes/deploy",id:"tutorials/cairo-1-support/cheatcodes/deploy",title:"deploy",description:"Deploys a preapred contract.",source:"@site/docs/tutorials/08-cairo-1-support/03-cheatcodes/deploy.md",sourceDirName:"tutorials/08-cairo-1-support/03-cheatcodes",slug:"/tutorials/cairo-1-support/cheatcodes/deploy",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/deploy",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/08-cairo-1-support/03-cheatcodes/deploy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"declare",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/declare"},next:{title:"prepare",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/prepare"}},p={},l=[],i={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy"},(0,n.kt)("inlineCode",{parentName:"h1"},"deploy")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cairo"},"fn deploy(prepared_contract: PreparedContract) -> Result::<felt252, felt252> nopanic;\n")),(0,n.kt)("p",null,"Deploys a ",(0,n.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/prepare"},"preapred")," contract."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prepared_contract")," - an object of the struct ",(0,n.kt)("inlineCode",{parentName:"li"},"PreparedContract")," that consists of the following fields:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"contract_address")," - the address of the contract calculated during contract ",(0,n.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/prepare"},"preparation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"class_hash")," - class hash calculated during contract ",(0,n.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/declare"},"declaration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"constructor_calldata")," - calldata for the constructor. If the constructor exists, it is called by ",(0,n.kt)("inlineCode",{parentName:"li"},"deploy"),".")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example"',title:'"Example"'},"use array::ArrayTrait;\nuse result::ResultTrait;\n\n#[test]\nfn test_deploy() {\n    let class_hash = declare('minimal').unwrap();\n    assert(class_hash != 0, 'class_hash != 0');\n\n    let prepare_result = prepare(class_hash, ArrayTrait::new()).unwrap();\n\n    assert(prepare_result.contract_address != 0, 'prepared contract_address != 0');\n    assert(prepare_result.class_hash != 0, 'prepared class_hash != 0');\n\n    let prepared_contract = PreparedContract {\n        contract_address: prepare_result.contract_address,\n        class_hash: prepare_result.class_hash,\n        constructor_calldata: prepare_result.constructor_calldata\n    };\n    let deployed_contract_address = deploy(prepared_contract).unwrap();\n    assert(deployed_contract_address != 0, 'deployed_contract_address != 0');\n}\n")),(0,n.kt)("p",null,"You can find more examples ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/protostar/blob/18959214d46409be8bedd92cc6427c1945b1bcc8/tests/integration/cairo1_hint_locals/deploy/deploy_test.cairo"},"here"),"."))}u.isMDXComponent=!0}}]);