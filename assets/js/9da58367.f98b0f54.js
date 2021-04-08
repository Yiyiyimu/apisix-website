(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{181:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(255)),o={title:"ApisixRoute"},s={unversionedId:"concepts/apisix_route",id:"concepts/apisix_route",isDocsHomePage:!1,title:"ApisixRoute",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/concepts/apisix_route.md",slug:"/concepts/apisix_route",permalink:"/docs/ingress-controller/concepts/apisix_route",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/concepts/apisix_route.md",version:"current",sidebar:"docs",previous:{title:"ApisixTls Reference",permalink:"/docs/ingress-controller/references/apisix_tls"},next:{title:"ApisixUpstream",permalink:"/docs/ingress-controller/concepts/apisix_upstream"}},c=[{value:"Path based route rules",id:"path-based-route-rules",children:[]},{value:"Advanced route features",id:"advanced-route-features",children:[]},{value:"Service Resolution Granularity",id:"service-resolution-granularity",children:[]},{value:"Weight Based Traffic Split",id:"weight-based-traffic-split",children:[]},{value:"Plugins",id:"plugins",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute")," is a CRD resource which focus on how to route traffic to\nexpected backend, it exposes many features supported by Apache APISIX.\nCompared to ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),",\nfunctions are implemented in a more native way, with stronger semantics."),Object(i.b)("h2",{id:"path-based-route-rules"},"Path based route rules"),Object(i.b)("p",null,"URI path are always used to split traffic, for instance, requests with host ",Object(i.b)("inlineCode",{parentName:"p"},"foo.com")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"/foo")," prefix should be routed to service ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," while requests which path is ",Object(i.b)("inlineCode",{parentName:"p"},"/bar"),"\nshould be routed to service ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),", in the manner of ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute"),", the configuration\nshould be:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: foor-bar-route\nspec:\n  http:\n  - name: foo\n    match:\n      hosts:\n      - foo.com\n      paths:\n      - "/foo*"\n    backend:\n     serviceName: foo\n     servicePort: 80\n  - name: bar\n    match:\n      paths:\n        - "/bar"\n    backend:\n      serviceName: bar\n      servicePort: 80\n')),Object(i.b)("p",null,"There are two path types can be used, ",Object(i.b)("inlineCode",{parentName:"p"},"prefix")," and ",Object(i.b)("inlineCode",{parentName:"p"},"exact"),", default is ",Object(i.b)("inlineCode",{parentName:"p"},"exact"),",\nwhile if ",Object(i.b)("inlineCode",{parentName:"p"},"prefix")," is desired, just append a ",Object(i.b)("inlineCode",{parentName:"p"},"*"),", for instance, ",Object(i.b)("inlineCode",{parentName:"p"},"/id/*")," matches\nall paths with the prefix of ",Object(i.b)("inlineCode",{parentName:"p"},"/id/"),"."),Object(i.b)("h2",{id:"advanced-route-features"},"Advanced route features"),Object(i.b)("p",null,"Path based route are most common, but if it's not enough, try\nother route features in ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute")," such as ",Object(i.b)("inlineCode",{parentName:"p"},"methods"),", ",Object(i.b)("inlineCode",{parentName:"p"},"exprs"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"methods")," splits traffic according to the HTTP method, the following configurations routes requests\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," method to ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," service (a Kubernetes Service)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n        - /\n        methods:\n        - GET\n      backends:\n        - serviceName: foo\n          servicePort: 80\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"exprs")," allows user to configure match conditions with arbitrary predicates in HTTP, such as queries, HTTP headers, Cookie.\nIt's composed by several expressions, which in turn composed by subject, operator and value/set."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n          - /\n        exprs:\n          - subject:\n              scope: Query\n              name: id\n            op: Equal\n            value: 2143\n      backends:\n        - serviceName: foo\n          servicePort: 80\n")),Object(i.b)("p",null,"The above configuration configures an extra route match condition, which asks the\nquery ",Object(i.b)("inlineCode",{parentName:"p"},"id")," must be equal to ",Object(i.b)("inlineCode",{parentName:"p"},"2143"),"."),Object(i.b)("h2",{id:"service-resolution-granularity"},"Service Resolution Granularity"),Object(i.b)("p",null,"By default a referenced Service will be watched, so\nit's newest endpoints list can be updated to Apache APISIX.\napisix-ingress-controller provides another mechanism that just use\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"ClusterIP")," of this service, if that's what you want, just set\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"resolveGranularity")," to ",Object(i.b)("inlineCode",{parentName:"p"},"service")," (default is ",Object(i.b)("inlineCode",{parentName:"p"},"endpoint"),")."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n          - /*\n        methods:\n          - GET\n      backends:\n        - serviceName: foo\n          servicePort: 80\n          resolveGranularity: service\n")),Object(i.b)("h2",{id:"weight-based-traffic-split"},"Weight Based Traffic Split"),Object(i.b)("p",null,"There can more than one backend specified in one route rule,\nwhen multiple backends co-exist there, the traffic split based on weights\nwill be applied (which actually uses the ",Object(i.b)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/traffic-split/"},"traffic-split")," plugin in Apache APISIX).\nYou can specify weight for each backend, the default weight is ",Object(i.b)("inlineCode",{parentName:"p"},"100"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n          - /*\n        methods:\n          - GET\n        exprs:\n          - subject:\n              scope: Header\n              name: User-Agent\n            op: RegexMatch\n            value: ".*Chrome.*"\n      backends:\n        - serviceName: foo\n          servicePort: 80\n          weight: 100\n        - serviceName: bar\n          servicePort: 81\n          weight: 50\n')),Object(i.b)("p",null,"The above ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute")," has one route rule, which contains two backends ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),", the weight ratio is ",Object(i.b)("inlineCode",{parentName:"p"},"100:50"),",\nwhich means ",Object(i.b)("inlineCode",{parentName:"p"},"2/3")," requests (with ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," method and ",Object(i.b)("inlineCode",{parentName:"p"},"User-Agent")," matching regex pattern ",Object(i.b)("inlineCode",{parentName:"p"},".*Chrome.*"),") will be sent to service ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"1/3")," requests\nwill be proxied to serivce ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),"."),Object(i.b)("h2",{id:"plugins"},"Plugins"),Object(i.b)("p",null,"Apache APISIX provides more than 40 ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/docs/en/latest/plugins"},"plugins"),", which can be used\nin ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute"),". All configuration items are named same to the one in APISIX."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n    - name: httpbin\n      match:\n        hosts:\n        - local.httpbin.org\n        paths:\n          - /*\n      backends:\n        - serviceName: foo\n          servicePort: 80\n      plugins:\n        - name: cors\n          enable: true\n")),Object(i.b)("p",null,"The above configuration enables ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/cors.md"},"Cors")," plugin for requests\nwhich host is ",Object(i.b)("inlineCode",{parentName:"p"},"local.httpbin.org"),"."))}l.isMDXComponent=!0},255:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(t),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return t?r.a.createElement(m,s(s({ref:n},p),{},{components:t})):r.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);