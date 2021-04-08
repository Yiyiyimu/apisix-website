(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return u})),t.d(e,"toc",(function(){return a})),t.d(e,"default",(function(){return l}));var r=t(3),i=t(7),c=(t(0),t(255)),o={title:"Plugin Config"},u={unversionedId:"architecture-design/plugin-config",id:"architecture-design/plugin-config",isDocsHomePage:!1,title:"Plugin Config",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/architecture-design/plugin-config.md",slug:"/architecture-design/plugin-config",permalink:"/zh/docs/apisix/architecture-design/plugin-config",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/plugin-config.md",version:"current",sidebar:"docs",previous:{title:"Global rule",permalink:"/zh/docs/apisix/architecture-design/global-rule"},next:{title:"Router",permalink:"/zh/docs/apisix/architecture-design/router"}},a=[],p={toc:a};function l(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u590d\u7528\u4e00\u7ec4\u901a\u7528\u7684\u63d2\u4ef6\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u63d0\u53d6\u6210\u4e00\u4e2a Plugin config\uff0c\u5e76\u7ed1\u5b9a\u5230\u5bf9\u5e94\u7684\u8def\u7531\u4e0a\u3002"),Object(c.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u8fd9\u4e48\u505a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa Plugin config\n$ curl http://127.0.0.1:9080/apisix/admin/plugin_configs/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "desc": "\u543e\u4e43\u63d2\u4ef6\u914d\u7f6e1",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n\n# \u7ed1\u5b9a\u5230\u8def\u7531\u4e0a\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(c.b)("p",null,"\u5982\u679c\u627e\u4e0d\u5230\u5bf9\u5e94\u7684 Plugin config\uff0c\u8be5\u8def\u7531\u4e0a\u7684\u8bf7\u6c42\u4f1a\u62a5 503 \u9519\u8bef\u3002"),Object(c.b)("p",null,"\u5982\u679c\u8fd9\u4e2a\u8def\u7531\u5df2\u7ecf\u914d\u7f6e\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"plugins"),"\uff0c\u90a3\u4e48 Plugin config \u91cc\u9762\u7684\u63d2\u4ef6\u914d\u7f6e\u4f1a\u5408\u5e76\u8fdb\u53bb\u3002\n\u76f8\u540c\u7684\u63d2\u4ef6\u4f1a\u8986\u76d6\u6389 ",Object(c.b)("inlineCode",{parentName:"p"},"plugins")," \u539f\u6709\u7684\u63d2\u4ef6\u3002"),Object(c.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'{\n    "desc": "\u543e\u4e43\u63d2\u4ef6\u914d\u7f6e1",\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')),Object(c.b)("p",null,"\u52a0\u4e0a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 20,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\n')),Object(c.b)("p",null,"\u7b49\u4e8e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')))}l.isMDXComponent=!0},255:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return f}));var r=t(0),i=t.n(r);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=i.a.createContext({}),l=function(n){var e=i.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},s=function(n){var e=l(n.components);return i.a.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},b=i.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,c=n.originalType,o=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),s=l(t),b=r,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||c;return t?i.a.createElement(f,u(u({ref:e},p),{},{components:t})):i.a.createElement(f,u({ref:e},p))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var c=t.length,o=new Array(c);o[0]=b;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=n,u.mdxType="string"==typeof n?n:r,o[1]=u;for(var p=2;p<c;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);