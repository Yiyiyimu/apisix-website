(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),i=(r(0),r(255)),c={title:"Release Apache APISIX Ingress Controller 0.2.0"},l={permalink:"/zh/events/2021/01/19/release-apache-apisix-ingress-controller-0.2.0",source:"@site/events/2021-01-19-release-apache-apisix-ingress-controller-0.2.0.md",description:"This release mainly improve basic features, bugfix and adds test cases.",date:"2021-01-19T00:00:00.000Z",tags:[],title:"Release Apache APISIX Ingress Controller 0.2.0",readingTime:.405,truncated:!0,prevItem:{title:"Release Apache APISIX 2.3",permalink:"/zh/events/2021/02/09/release-apache-apisix-2.3"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.1.0",permalink:"/zh/events/2020/12/23/release-apache-apisix-ingress-controller-0.1.0"}},p=[{value:"Core",id:"core",children:[]},{value:"Test case",id:"test-case",children:[]}],o={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release mainly improve basic features, bugfix and adds test cases."),Object(i.b)("h2",{id:"core"},"Core"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Enhanced documentation, easier to read and execute ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/129"},"#129")),Object(i.b)("li",{parentName:"ul"},"API specification for CRDs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/151"},"#151")),Object(i.b)("li",{parentName:"ul"},"Support Canary plugin (Base on the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2935"},"feature")," in Apache APISIX) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/13"},"#13")),Object(i.b)("li",{parentName:"ul"},"Support prometheus metrics ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/143"},"#143")),Object(i.b)("li",{parentName:"ul"},"Support install ingress controller by Helm Chart ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/153"},"#153")),Object(i.b)("li",{parentName:"ul"},"Support reconcile loop. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/149"},"#149")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/157"},"#157")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/163"},"#163")),Object(i.b)("li",{parentName:"ul"},"Support namespaces filtering. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/162"},"#162")),Object(i.b)("li",{parentName:"ul"},"Some Refactor. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/147"},"#147")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/155"},"#155")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/134"},"#134"))),Object(i.b)("h2",{id:"test-case"},"Test case"),Object(i.b)("p",null,"more e2e case ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/156"},"#156")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/142"},"#142")))}s.isMDXComponent=!0},255:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||b[h]||i;return r?n.a.createElement(m,l(l({ref:t},o),{},{components:r})):n.a.createElement(m,l({ref:t},o))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=r[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);