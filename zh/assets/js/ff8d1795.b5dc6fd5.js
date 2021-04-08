(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{248:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(255)),i={title:"Control API"},c={unversionedId:"control-api",id:"control-api",isDocsHomePage:!1,title:"Control API",description:"\x3c!--",source:"@site/docs/apisix/control-api.md",slug:"/control-api",permalink:"/zh/docs/apisix/control-api",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/control-api.md",version:"current",sidebar:"docs",previous:{title:"Admin API",permalink:"/zh/docs/apisix/admin-api"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/apisix/FAQ"}},l=[{value:"Control API Added via plugin",id:"control-api-added-via-plugin",children:[]},{value:"Plugin independent Control API",id:"plugin-independent-control-api",children:[{value:"GET /v1/schema",id:"get-v1schema",children:[]},{value:"GET /v1/healthcheck",id:"get-v1healthcheck",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The control API can be used to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"expose APISIX internal state"),Object(o.b)("li",{parentName:"ul"},"control the behavior of a single isolate APISIX data panel")),Object(o.b)("p",null,"By default, the control API server is enabled and listens to ",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1:9090"),". You can change it via\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"control")," section under ",Object(o.b)("inlineCode",{parentName:"p"},"apisix")," in ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  ...\n  enable_control: true\n  control:\n    ip: "127.0.0.1"\n    port: 9090\n')),Object(o.b)("p",null,"Note that the control API server should not be configured to listen to the public traffic!"),Object(o.b)("h2",{id:"control-api-added-via-plugin"},"Control API Added via plugin"),Object(o.b)("p",null,"Plugin can add its control API when it is enabled.\nIf a plugin adds such a control API, please refer to each plugin's documentation for those APIs."),Object(o.b)("h2",{id:"plugin-independent-control-api"},"Plugin independent Control API"),Object(o.b)("p",null,"Here is the supported API:"),Object(o.b)("h3",{id:"get-v1schema"},"GET /v1/schema"),Object(o.b)("p",null,"Introduced since ",Object(o.b)("inlineCode",{parentName:"p"},"v2.2"),"."),Object(o.b)("p",null,"Return the jsonschema used by this APISIX instance in the format below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "main": {\n        "route": {\n            "properties": {...}\n        },\n        "upstream": {\n            "properties": {...}\n        },\n        ...\n    },\n    "plugins": {\n        "example-plugin": {\n            "consumer_schema": {...},\n            "metadata_schema": {...},\n            "schema": {...},\n            "type": ...,\n            "priority": 0,\n            "version": 0.1\n        },\n        ...\n    }\n}\n')),Object(o.b)("p",null,"For ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," part, only enabled plugins will be returned. Some plugins may lack\nof fields like ",Object(o.b)("inlineCode",{parentName:"p"},"consumer_schema")," or ",Object(o.b)("inlineCode",{parentName:"p"},"type"),", it is depended on by the plugin's\ndefinition."),Object(o.b)("h3",{id:"get-v1healthcheck"},"GET /v1/healthcheck"),Object(o.b)("p",null,"Introduced since ",Object(o.b)("inlineCode",{parentName:"p"},"v2.3"),"."),Object(o.b)("p",null,"Return current ",Object(o.b)("a",{parentName:"p",href:"/zh/docs/apisix/health-check"},"health check")," status in the format below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/upstreams/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.2",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "upstreams"\n    },\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/routes/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.1",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "routes"\n    }\n]\n')),Object(o.b)("p",null,"Each entry contains fields below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"src_type: where the health checker comes from. The value is one of ",Object(o.b)("inlineCode",{parentName:"li"},'["routes", "services", "upstreams"]'),"."),Object(o.b)("li",{parentName:"ul"},"src_id: the id of object which creates the health checker. For example, if Upstream\nobject with id 1 creates a health checker, the ",Object(o.b)("inlineCode",{parentName:"li"},"src_type")," is ",Object(o.b)("inlineCode",{parentName:"li"},"upstreams")," and the ",Object(o.b)("inlineCode",{parentName:"li"},"src_id")," is ",Object(o.b)("inlineCode",{parentName:"li"},"1"),"."),Object(o.b)("li",{parentName:"ul"},"name: the name of the health checker."),Object(o.b)("li",{parentName:"ul"},"nodes: the target nodes of the health checker."),Object(o.b)("li",{parentName:"ul"},"healthy_nodes: the healthy node known by the health checker.")),Object(o.b)("p",null,"User can also use ",Object(o.b)("inlineCode",{parentName:"p"},"/v1/healthcheck/$src_type/$src_id")," can get the status of a health checker."),Object(o.b)("p",null,"For example, ",Object(o.b)("inlineCode",{parentName:"p"},"GET /v1/healthcheck/upstreams/1")," returns:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "healthy_nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "name": "upstream#/upstreams/1",\n    "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1988,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "src_id": "1",\n    "src_type": "upstreams"\n}\n')))}s.isMDXComponent=!0},255:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return t?a.a.createElement(d,c(c({ref:n},p),{},{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);