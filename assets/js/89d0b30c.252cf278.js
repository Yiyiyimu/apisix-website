(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(255)),o={title:"Route"},c={unversionedId:"architecture-design/route",id:"architecture-design/route",isDocsHomePage:!1,title:"Route",description:"\x3c!--",source:"@site/docs/apisix/architecture-design/route.md",slug:"/architecture-design/route",permalink:"/docs/apisix/architecture-design/route",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/route.md",version:"current",sidebar:"docs",previous:{title:"APISIX",permalink:"/docs/apisix/architecture-design/apisix"},next:{title:"Plugin",permalink:"/docs/apisix/architecture-design/plugin"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The route matches the client's request by defining rules, then loads and executes the corresponding plugin based on the matching result, and forwards the request to the specified Upstream."),Object(i.b)("p",null,"The route mainly consists of three parts: matching rules (e.g uri, host, remote_addr, etc.), plugin configuration (current-limit & rate-limit, etc.) and upstream information."),Object(i.b)("p",null,"The following image shows an example of some Route rules. When some attribute values are the same, the figure is identified by the same color."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/routes-example.png",alt:"routes-example"})),Object(i.b)("p",null,"We configure all the parameters directly in the Route, it's easy to set up, and each Route has a relatively high degree of freedom. But when our Route has more repetitive configurations (such as enabling the same plugin configuration or upstream information), once we need update these same properties, we have to traverse all the Routes and modify them, so it's adding a lot of complexity of management and maintenance."),Object(i.b)("p",null,"The shortcomings mentioned above are independently abstracted in APISIX by the two concepts ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/architecture-design/service"},"Service")," and ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/architecture-design/upstream"},"Upstream"),"."),Object(i.b)("p",null,"The route example created below is to proxy the request with URL ",Object(i.b)("inlineCode",{parentName:"p"},"/index.html")," to the Upstream service with the address ",Object(i.b)("inlineCode",{parentName:"p"},"39.97.63.215:80"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n\nHTTP/1.1 201 Created\nDate: Sat, 31 Aug 2019 01:17:15 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"node":{"value":{"uri":"\\/index.html","upstream":{"nodes":{"39.97.63.215:80":1},"type":"roundrobin"}},"createdIndex":61925,"key":"\\/apisix\\/routes\\/1","modifiedIndex":61925},"action":"create"}\n')),Object(i.b)("p",null,"When we receive a successful response, it indicates that the route was successfully created."),Object(i.b)("p",null,"For specific options of Route, please refer to ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/admin-api#route"},"Admin API"),"."))}p.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);