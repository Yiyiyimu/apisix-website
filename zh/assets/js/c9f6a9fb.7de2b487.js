(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(255)),l={title:"ApisixRoute/v1 (Deprecated) Reference"},c={unversionedId:"references/apisix_route_v1",id:"references/apisix_route_v1",isDocsHomePage:!1,title:"ApisixRoute/v1 (Deprecated) Reference",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/references/apisix_route_v1.md",slug:"/references/apisix_route_v1",permalink:"/zh/docs/ingress-controller/references/apisix_route_v1",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/references/apisix_route_v1.md",version:"current",sidebar:"docs",previous:{title:"Install Ingress APISIX on Tencent TKE",permalink:"/zh/docs/ingress-controller/deployments/tke"},next:{title:"ApisixRoute/v2alpha1 Reference",permalink:"/zh/docs/ingress-controller/references/apisix_route_v2alpha1"}},o=[],b={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"WARNINIG"),": ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute/v1")," is obsolete and will be unsupported in the future, please use ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute/v2alpha1"),"!"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"rules"),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"ApisixRoute's request matching rules.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"host"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The requested host.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"http"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"Route rules are applied to the scope of layer 7 traffic.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"paths"),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"Path-based ",Object(i.b)("inlineCode",{parentName:"td"},"route")," rule matching.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"backend"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"Backend service information configuration.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"serviceName"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The name of backend service. ",Object(i.b)("inlineCode",{parentName:"td"},"namespace + serviceName + servicePort")," form an unique identifier to match the back-end service.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"servicePort"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The port of backend service. ",Object(i.b)("inlineCode",{parentName:"td"},"namespace + serviceName + servicePort")," form an unique identifier to match the back-end service.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"path"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The URI matched by the route. Supports exact match and prefix match. Example\uff0cexact match: ",Object(i.b)("inlineCode",{parentName:"td"},"/hello"),", prefix match: ",Object(i.b)("inlineCode",{parentName:"td"},"/hello*"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"plugins"),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"Custom plugin collection (Plugins defined in the ",Object(i.b)("inlineCode",{parentName:"td"},"route")," level). For more plugin information, please refer to the ",Object(i.b)("a",{parentName:"td",href:"https://github.com/apache/apisix/tree/master/doc/plugins"},"Apache APISIX plugin docs"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The name of the plugin. For more information about the example plugin, please check the ",Object(i.b)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/doc/plugins/limit-count.md#Attributes"},"limit-count docs"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"enable"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"Whether to enable the plugin, ",Object(i.b)("inlineCode",{parentName:"td"},"true"),": means enable, ",Object(i.b)("inlineCode",{parentName:"td"},"false"),": means disable.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"config"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"Configuration of plugin information. Note: The check of configuration schema is missing now, so please be careful when editing.")))))}p.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);