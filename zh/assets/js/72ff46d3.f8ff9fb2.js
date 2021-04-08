(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{152:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),i=(t(0),t(255)),a={title:"DNS"},c={unversionedId:"discovery/dns",id:"discovery/dns",isDocsHomePage:!1,title:"DNS",description:"\x3c!--",source:"@site/docs/apisix/discovery/dns.md",slug:"/discovery/dns",permalink:"/zh/docs/apisix/discovery/dns",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/discovery/dns.md",version:"current",sidebar:"docs",previous:{title:"\u96c6\u6210\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh/docs/apisix/discovery"},next:{title:"consul_kv",permalink:"/zh/docs/apisix/discovery/consul_kv"}},s=[{value:"service discovery via DNS",id:"service-discovery-via-dns",children:[{value:"SRV record",id:"srv-record",children:[]}]}],l={toc:s};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#service-discovery-via-dns"},"service discovery via DNS"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#srv-record"},"SRV record"))))),Object(i.b)("h2",{id:"service-discovery-via-dns"},"service discovery via DNS"),Object(i.b)("p",null,"Some service discovery system, like Consul, support exposing service information\nvia DNS. Therefore we can use this way to discover service directly."),Object(i.b)("p",null,"First of all, we need to configure the address of DNS servers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'# add this to config.yaml\ndiscovery:\n   dns:\n     servers:\n       - "127.0.0.1:8600"          # use the real address of your dns server\n')),Object(i.b)("p",null,"Unlike configuring the domain in the Upstream's ",Object(i.b)("inlineCode",{parentName:"p"},"nodes")," field, service discovery via\nDNS will return all records. For example, with upstream configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service",\n    "type": "roundrobin"\n}\n')),Object(i.b)("p",null,"and ",Object(i.b)("inlineCode",{parentName:"p"},"test.consul.service")," be resolved as ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.1.1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.1.2"),", this result will be the same as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "weight": 1},\n        {"host": "1.1.1.2", "weight": 1}\n    ]\n}\n')),Object(i.b)("p",null,"Note that all the IPs from ",Object(i.b)("inlineCode",{parentName:"p"},"test.consul.service")," share the same weight."),Object(i.b)("p",null,"If a service has both A and AAAA records, A record is preferred."),Object(i.b)("p",null,"If you want to specify the port for the upstream server, you can add it to the ",Object(i.b)("inlineCode",{parentName:"p"},"service_name"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service:1980",\n    "type": "roundrobin"\n}\n')),Object(i.b)("p",null,"Another way to do it is via the SRV record, see below."),Object(i.b)("h3",{id:"srv-record"},"SRV record"),Object(i.b)("p",null,"By using SRV record you can specify the port and the weight of a service."),Object(i.b)("p",null,"Assumed you have the SRV record like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"; under the section of blah.service\nA       300 IN      A     1.1.1.1\nB       300 IN      A     1.1.1.2\nB       300 IN      A     1.1.1.3\n\n; name  TTL         type    priority    weight  port\nsrv     86400 IN    SRV     10          60      1980 A\nsrv     86400 IN    SRV     20          20      1981 B\n")),Object(i.b)("p",null,"Upstream configuration like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "srv.blah.service",\n    "type": "roundrobin"\n}\n')),Object(i.b)("p",null,"is the same as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "port": 1980, "weight": 60, "priority": -10},\n        {"host": "1.1.1.2", "port": 1981, "weight": 10, "priority": -20},\n        {"host": "1.1.1.3", "port": 1981, "weight": 10, "priority": -20}\n    ]\n}\n')),Object(i.b)("p",null,"Note that two records of domain B split the weight evenly.\nFor SRV record, nodes with lower priority are chosen first, so the final priority is negative."),Object(i.b)("p",null,"As for 0 weight SRV record, the ",Object(i.b)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2782.txt"},"RFC 2782")," says:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Domain administrators SHOULD use Weight 0 when there isn't any server\nselection to do, to make the RR easier to read for humans (less\nnoisy).  In the presence of records containing weights greater\nthan 0, records with weight 0 should have a very small chance of\nbeing selected.")),Object(i.b)("p",null,'We treat weight 0 record has a weight of 1 so the node "have a very small chance of\nbeing selected", which is also the common way to treat this type of record.'))}p.isMDXComponent=!0},255:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return v}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,v=d["".concat(a,".").concat(u)]||d[u]||b[u]||i;return t?o.a.createElement(v,c(c({ref:r},l),{},{components:t})):o.a.createElement(v,c({ref:r},l))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);