(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),l=(n(0),n(255)),b={title:"mqtt-proxy"},p={unversionedId:"plugins/mqtt-proxy",id:"plugins/mqtt-proxy",isDocsHomePage:!1,title:"mqtt-proxy",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/mqtt-proxy.md",slug:"/plugins/mqtt-proxy",permalink:"/zh/docs/apisix/plugins/mqtt-proxy",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/mqtt-proxy.md",version:"current",sidebar:"docs",previous:{title:"dubbo-proxy",permalink:"/zh/docs/apisix/plugins/dubbo-proxy"},next:{title:"Admin API",permalink:"/zh/docs/apisix/admin-api"}},i=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u5b57",id:"\u540d\u5b57",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]}],c={toc:i};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%90%8D%E5%AD%97"},Object(l.b)("strong",{parentName:"a"},"\u540d\u5b57"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},Object(l.b)("strong",{parentName:"a"},"\u5c5e\u6027"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},Object(l.b)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},Object(l.b)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),Object(l.b)("h2",{id:"\u540d\u5b57"},"\u540d\u5b57"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"mqtt-proxy")," \u53ea\u5de5\u4f5c\u5728\u6d41\u6a21\u5f0f\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6839\u636e MQTT \u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"client_id")," \u5b9e\u73b0\u52a8\u6001\u8d1f\u8f7d\u5747\u8861\u3002"),Object(l.b)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u652f\u6301 MQTT ",Object(l.b)("a",{parentName:"p",href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html"},"3.1.*")," \u53ca",Object(l.b)("a",{parentName:"p",href:"https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html"},"5.0"),"\u4e24\u4e2a\u534f\u8bae\u3002"),Object(l.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"protocol_name"),": \u5fc5\u9009\uff0c\u534f\u8bae\u540d\u79f0\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u5e94\u4e3a\u201c MQTT\u201d \u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"protocol_level"),": \u5fc5\u9009\uff0c\u534f\u8bae\u7ea7\u522b\uff0cMQTT ",Object(l.b)("inlineCode",{parentName:"li"},"3.1.*")," \u5e94\u4e3a \u201c4\u201d \uff0cMQTT ",Object(l.b)("inlineCode",{parentName:"li"},"5.0")," \u5e94\u8be5\u662f\u201c5\u201d\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"upstream.ip"),": \u5fc5\u9009\uff0c\u5c06\u5f53\u524d\u8bf7\u6c42\u8f6c\u53d1\u5230\u7684\u4e0a\u6e38\u7684 IP \u5730\u5740\uff0c"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"upstream.port"),": \u5fc5\u9009\uff0c\u5c06\u5f53\u524d\u8bf7\u6c42\u8f6c\u53d1\u5230\u7684\u4e0a\u6e38\u7684 \u7aef\u53e3\uff0c")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"protocol_name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u534f\u8bae\u540d\u79f0\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u5e94\u4e3a\u201c MQTT\u201d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"protocol_level"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u534f\u8bae\u7ea7\u522b\uff0cMQTT ",Object(l.b)("inlineCode",{parentName:"td"},"3.1.*")," \u5e94\u4e3a ",Object(l.b)("inlineCode",{parentName:"td"},"4")," \uff0cMQTT ",Object(l.b)("inlineCode",{parentName:"td"},"5.0")," \u5e94\u662f",Object(l.b)("inlineCode",{parentName:"td"},"5"),"\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"upstream.ip"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u5c06\u5f53\u524d\u8bf7\u6c42\u8f6c\u53d1\u5230\u7684\u4e0a\u6e38\u7684 IP \u5730\u5740")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"upstream.port"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u5c06\u5f53\u524d\u8bf7\u6c42\u8f6c\u53d1\u5230\u7684\u4e0a\u6e38\u7684\u7aef\u53e3")))),Object(l.b)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),Object(l.b)("p",null,"\u4e3a\u4e86\u542f\u7528\u8be5\u63d2\u4ef6\uff0c\u9700\u8981\u5148\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u9996\u5148\u5f00\u542f stream_proxy \u914d\u7f6e\uff0c\u6bd4\u5982\u4e0b\u9762\u914d\u7f6e\u4ee3\u8868\u76d1\u542c 9100 TCP \u7aef\u53e3\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"    ...\n    router:\n        http: 'radixtree_uri'\n        ssl: 'radixtree_sni'\n    stream_proxy:                 # TCP/UDP proxy\n      tcp:                        # TCP proxy port list\n        - 9100\n    dns_resolver:\n    ...\n")),Object(l.b)("p",null,"\u7136\u540e\u628a MQTT \u8bf7\u6c42\u53d1\u9001\u5230 9100 \u7aef\u53e3\u5373\u53ef\u3002"),Object(l.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 mqtt-proxy \u63d2\u4ef6:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4,\n            "upstream": {\n                "ip": "127.0.0.1",\n                "port": 1980\n            }\n        }\n    }\n}\'\n')),Object(l.b)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:2379/v2/keys/apisix/stream_routes/1 -X DELETE\n")),Object(l.b)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 mqtt-proxy \u63d2\u4ef6\u4e86\u3002"))}o.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),o=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,O=u["".concat(b,".").concat(d)]||u[d]||m[d]||l;return n?a.a.createElement(O,p(p({ref:t},c),{},{components:n})):a.a.createElement(O,p({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var c=2;c<l;c++)b[c]=n[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);