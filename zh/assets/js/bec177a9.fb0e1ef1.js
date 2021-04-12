(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(265)),o={title:"Apache APISIX Dashboard Helm Chart"},l={unversionedId:"apisix-dashboard",id:"apisix-dashboard",isDocsHomePage:!1,title:"Apache APISIX Dashboard Helm Chart",description:"\x3c!--",source:"@site/docs/apisix-helm-chart/apisix-dashboard.md",slug:"/apisix-dashboard",permalink:"/zh/docs/helm-chart/apisix-dashboard",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/zh/latest/apisix-dashboard.md",version:"current",sidebar:"docs",previous:{title:"Apache APISIX Helm Chart",permalink:"/zh/docs/helm-chart/apisix"},next:{title:"Apache APISIX Ingress Controller Helm Chart",permalink:"/zh/docs/helm-chart/apisix-ingress-controller"}},c=[{value:"Install",id:"install",children:[]},{value:"Uninstall",id:"uninstall",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"apache-apisix-dashboard-helm-chart"},"Apache APISIX Dashboard Helm Chart"),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"To install the chart with release name ",Object(i.b)("inlineCode",{parentName:"p"},"apisix-dashboard"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ helm install apisix-dashboard . -n default\n")),Object(i.b)("h2",{id:"uninstall"},"Uninstall"),Object(i.b)("p",null,"To uninstall/delete the ",Object(i.b)("inlineCode",{parentName:"p"},"apisix-dashboard")," release:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ helm uninstall apisix-dashboard . -n default\n")))}p.isMDXComponent=!0},265:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(h,l(l({ref:t},s),{},{components:r})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);