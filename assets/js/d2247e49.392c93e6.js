(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),l=(n(0),n(255)),b={title:"ApisixRoute/v2alpha1 Reference"},i={unversionedId:"references/apisix_route_v2alpha1",id:"references/apisix_route_v2alpha1",isDocsHomePage:!1,title:"ApisixRoute/v2alpha1 Reference",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/references/apisix_route_v2alpha1.md",slug:"/references/apisix_route_v2alpha1",permalink:"/docs/ingress-controller/references/apisix_route_v2alpha1",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/references/apisix_route_v2alpha1.md",version:"current",sidebar:"docs",previous:{title:"ApisixRoute/v1 (Deprecated) Reference",permalink:"/docs/ingress-controller/references/apisix_route_v1"},next:{title:"ApisixUpstream Reference",permalink:"/docs/ingress-controller/references/apisix_upstream"}},c=[{value:"Spec",id:"spec",children:[]},{value:"Expression Operators",id:"expression-operators",children:[]},{value:"Service Resolve Granularity",id:"service-resolve-granularity",children:[]}],p={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"spec"},"Spec"),Object(l.b)("p",null,"Meaning of each field in the spec of ApisixRoute are followed, the top level fields (",Object(l.b)("inlineCode",{parentName:"p"},"apiVersion"),", ",Object(l.b)("inlineCode",{parentName:"p"},"kind")," and ",Object(l.b)("inlineCode",{parentName:"p"},"metadata"),") are same as other Kubernetes Resources."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"ApisixRoute's HTTP route rules.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].name"),Object(l.b)("td",{parentName:"tr",align:null},"string (required)"),Object(l.b)("td",{parentName:"tr",align:null},"The route rule name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].priority"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"The route priority, it's used to determine which route will be hitted when multile routes contains the same URI. Large number means higher priority.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Route match conditions.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.paths"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"A series of URI that should be matched (oneof) to use this route rule.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.hosts"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"A series of hosts that should be matched (oneof) to use this route rule.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.methods"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"A series of HTTP methods(",Object(l.b)("inlineCode",{parentName:"td"},"GET"),", ",Object(l.b)("inlineCode",{parentName:"td"},"POST"),", ",Object(l.b)("inlineCode",{parentName:"td"},"PUT"),", ",Object(l.b)("inlineCode",{parentName:"td"},"DELETE"),", ",Object(l.b)("inlineCode",{parentName:"td"},"PATCH"),", ",Object(l.b)("inlineCode",{parentName:"td"},"HEAD"),", ",Object(l.b)("inlineCode",{parentName:"td"},"OPTIONS"),", ",Object(l.b)("inlineCode",{parentName:"td"},"CONNECT"),", ",Object(l.b)("inlineCode",{parentName:"td"},"TRACE"),") that should be matched (oneof) to use this route rule.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.remote_addrs"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"A series of IP address (CIDR format) that should be matched (oneof) to use this route rule.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.exprs"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"A series expressions that the results should be matched (oneof) to use this route rule.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Expression subject.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.scope"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Specify where to find the subject, values can be ",Object(l.b)("inlineCode",{parentName:"td"},"Header"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Query"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Cookie")," and ",Object(l.b)("inlineCode",{parentName:"td"},"Path"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Specify subject name, when scope is ",Object(l.b)("inlineCode",{parentName:"td"},"Path"),", this field can be absent.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.exprs[].op"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Expression operator, see ",Object(l.b)("a",{parentName:"td",href:"#expression-operators"},"Expression Operators")," for the detail of enumerations.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.exprs[].value"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Expected expression result, it's exclusive with ",Object(l.b)("inlineCode",{parentName:"td"},"http[].match.exprs[].set"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].match.exprs[].set"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"Expected expression result set, only used when the operator is ",Object(l.b)("inlineCode",{parentName:"td"},"In")," or ",Object(l.b)("inlineCode",{parentName:"td"},"NotIn"),", it's exclusive with ",Object(l.b)("inlineCode",{parentName:"td"},"http[].match.exprs[].value"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backend"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"The backend service. Deprecated: use http[].backends instead.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backend.serviceName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backend.servicePort"),Object(l.b)("td",{parentName:"tr",align:null},"integer or string"),Object(l.b)("td",{parentName:"tr",align:null},"The backend service port, can be the port number of the name defined in the service object.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backend.resolveGranualrity"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backends"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"The backend services. When the number of backends more than one, weight based traffic split policy will be applied to shifting traffic between these backends.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backends[].serviceName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backends[].servicePort"),Object(l.b)("td",{parentName:"tr",align:null},"integer or string"),Object(l.b)("td",{parentName:"tr",align:null},"The backend service port, can be the port number of the name defined in the service object.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backends[].resolveGranualrity"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].backends[].weight"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"The backend weight, which is critical when shifting traffic between multiple backends, default is ",Object(l.b)("inlineCode",{parentName:"td"},"100"),". Weight is ignored when there is only one backend.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].plugins"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"A series of APISIX plugins that will be executed once this route rule is matched")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].plugins[].name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The plugin name, see ",Object(l.b)("a",{parentName:"td",href:"http://apisix.apache.org/docs/apisix/getting-started"},"docs")," for learning the available plugins.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].plugins[].enable"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Whether the plugin is in use")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"http[].plugins[].config"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"The plugin configuration, fields should be same as in APISIX.")))),Object(l.b)("h2",{id:"expression-operators"},"Expression Operators"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Operator"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Equal"),Object(l.b)("td",{parentName:"tr",align:null},"The result of ",Object(l.b)("inlineCode",{parentName:"td"},"subject")," should be equal to the ",Object(l.b)("inlineCode",{parentName:"td"},"value"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NotEqual"),Object(l.b)("td",{parentName:"tr",align:null},"The result of ",Object(l.b)("inlineCode",{parentName:"td"},"subject")," should not be equal to ",Object(l.b)("inlineCode",{parentName:"td"},"value"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GreaterThan"),Object(l.b)("td",{parentName:"tr",align:null},"The result of ",Object(l.b)("inlineCode",{parentName:"td"},"subject")," should be a number and it must larger then ",Object(l.b)("inlineCode",{parentName:"td"},"value"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LessThan"),Object(l.b)("td",{parentName:"tr",align:null},"The result of ",Object(l.b)("inlineCode",{parentName:"td"},"subject")," should be a number and it must less than ",Object(l.b)("inlineCode",{parentName:"td"},"value"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"In"),Object(l.b)("td",{parentName:"tr",align:null},"The result of ",Object(l.b)("inlineCode",{parentName:"td"},"subject")," should be inside the ",Object(l.b)("inlineCode",{parentName:"td"},"set"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NotIn"),Object(l.b)("td",{parentName:"tr",align:null},"The result of ",Object(l.b)("inlineCode",{parentName:"td"},"subject")," should not be inside the ",Object(l.b)("inlineCode",{parentName:"td"},"set"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RegexMatch"),Object(l.b)("td",{parentName:"tr",align:null},"The result of ",Object(l.b)("inlineCode",{parentName:"td"},"subject")," should be matched by the ",Object(l.b)("inlineCode",{parentName:"td"},"value")," (a PCRE regex pattern).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RegexNotMatch"),Object(l.b)("td",{parentName:"tr",align:null},"The result of ",Object(l.b)("inlineCode",{parentName:"td"},"subject")," should not be matched by the ",Object(l.b)("inlineCode",{parentName:"td"},"value")," (a PCRE regex pattern).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RegexMatchCaseInsensitive"),Object(l.b)("td",{parentName:"tr",align:null},"Similar with ",Object(l.b)("inlineCode",{parentName:"td"},"RegexMatch")," but the match process is case insensitive")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RegexNotMatchCaseInsensitive"),Object(l.b)("td",{parentName:"tr",align:null},"Similar with ",Object(l.b)("inlineCode",{parentName:"td"},"RegexNotMatchCaseInsensitive")," but the match process is case insensitive.")))),Object(l.b)("h2",{id:"service-resolve-granularity"},"Service Resolve Granularity"),Object(l.b)("p",null,"The service resolve granularity determines whether the ",Object(l.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"Serivce ClusterIP")," or its endpoints should be filled in the target upstream of APISIX."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Granularity"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"endpoint"),Object(l.b)("td",{parentName:"tr",align:null},"Filled upstream nodes by Pods' IP.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"service"),Object(l.b)("td",{parentName:"tr",align:null},"Filled upstream nodes by Service ClusterIP, in such a case, loadbalacing are implemented by ",Object(l.b)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/components/#kube-proxy"},"kube-proxy"),".")))))}o.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),u=a,m=d["".concat(b,".").concat(u)]||d[u]||s[u]||l;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);