(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{160:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(8),a=(t(0),t(265)),i={title:"Build an image from the source codes"},c={unversionedId:"build",id:"build",isDocsHomePage:!1,title:"Build an image from the source codes",description:"\x3c!--",source:"@site/docs/apisix-docker/build.md",slug:"/build",permalink:"/docs/docker/build",editUrl:"https://github.com/apache/apisix-docker/edit/master/docs/en/latest/build.md",version:"current",sidebar:"docs",next:{title:"Deploy Apache APISIX with Docker",permalink:"/docs/docker/manual"}},l=[{value:"Build an image from source",id:"build-an-image-from-source",children:[]}],u={toc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"build-an-image-from-source"},"Build an image from source"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"install release version (Apache releases are beginning from version 0.9):")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"# Assign Apache release version number to variable `APISIX_VERSION`, for example: 2.2. The latest version can be find at `https://github.com/apache/apisix/releases`\n\nAPISIX_VERSION=2.2\ndocker build -t apisix:${APISIX_VERSION}-alpine --build-arg APISIX_VERSION=${APISIX_VERSION} -f alpine/Dockerfile alpine\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"install master branch version, which has latest code(ONLY for the developer's convenience):")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker build -t apisix:master-alpine -f alpine/Dockerfile alpine\n")))}s.isMDXComponent=!0},265:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return t?o.a.createElement(f,c(c({ref:r},u),{},{components:t})):o.a.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);