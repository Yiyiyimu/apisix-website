(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(255)),c={title:"Global rule"},o={unversionedId:"architecture-design/global-rule",id:"architecture-design/global-rule",isDocsHomePage:!1,title:"Global rule",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/architecture-design/global-rule.md",slug:"/architecture-design/global-rule",permalink:"/zh/docs/apisix/architecture-design/global-rule",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/global-rule.md",version:"current",sidebar:"docs",previous:{title:"Upstream",permalink:"/zh/docs/apisix/architecture-design/upstream"},next:{title:"Plugin Config",permalink:"/zh/docs/apisix/architecture-design/plugin-config"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/zh/docs/apisix/architecture-design/plugin"},"Plugin")," \u53ea\u80fd\u7ed1\u5b9a\u5728 ",Object(i.b)("a",{parentName:"p",href:"/zh/docs/apisix/architecture-design/service"},"Service")," \u6216\u8005 ",Object(i.b)("a",{parentName:"p",href:"/zh/docs/apisix/architecture-design/route"},"Route")," \u4e0a\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u80fd\u4f5c\u7528\u4e8e\u6240\u6709\u8bf7\u6c42\u7684 ",Object(i.b)("a",{parentName:"p",href:"/zh/docs/apisix/architecture-design/plugin"},"Plugin")," \u8be5\u600e\u4e48\u529e\u5462\uff1f\n\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"GlobalRule")," \u6765\u6ce8\u518c\u4e00\u4e2a\u5168\u5c40\u7684 ",Object(i.b)("a",{parentName:"p",href:"/zh/docs/apisix/architecture-design/plugin"},"Plugin"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),Object(i.b)("p",null,"\u5982\u4e0a\u6240\u6ce8\u518c\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u5c06\u4f1a\u4f5c\u7528\u4e8e\u6240\u6709\u7684\u8bf7\u6c42\u3002"),Object(i.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u63a5\u53e3\u67e5\u770b\u6240\u6709\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"GlobalRule"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl https://{apisix_listen_address}/apisix/admin/global_rules -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}p.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||i;return n?a.a.createElement(f,o(o({ref:t},u),{},{components:n})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);