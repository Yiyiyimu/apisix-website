(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(255)),i={title:"Plugins"},c={unversionedId:"plugins",id:"plugins",isDocsHomePage:!1,title:"Plugins",description:"\x3c!--",source:"@site/docs/apisix/plugins.md",slug:"/plugins",permalink:"/docs/apisix/plugins",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins.md",version:"current"},l=[{value:"Hot reload",id:"hot-reload",children:[{value:"Hot reload in stand-alone mode",id:"hot-reload-in-stand-alone-mode",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hot-reload"},"Hot reload"),Object(a.b)("p",null,"APISIX plugins are hot-loaded. No matter you add, delete or modify plugins, and ",Object(a.b)("strong",{parentName:"p"},"update codes of plugins in disk"),", you don't need to restart the service."),Object(a.b)("p",null,"If your APISIX node has the Admin API turned on, just send an HTTP request through admin API:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),Object(a.b)("p",null,"Note: if you disable a plugin which has been configured as part of your rule (in the ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," field of ",Object(a.b)("inlineCode",{parentName:"p"},"route"),", etc.),\nthe its execution will be skipped."),Object(a.b)("h3",{id:"hot-reload-in-stand-alone-mode"},"Hot reload in stand-alone mode"),Object(a.b)("p",null,"For stand-alone mode, see plugin related section in ",Object(a.b)("a",{parentName:"p",href:"/docs/apisix/stand-alone"},"stand alone mode"),"."))}p.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);