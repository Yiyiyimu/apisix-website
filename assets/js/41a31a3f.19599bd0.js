(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(255)),o={title:"Integration service discovery registry"},c={unversionedId:"discovery",id:"discovery",isDocsHomePage:!1,title:"Integration service discovery registry",description:"\x3c!--",source:"@site/docs/apisix/discovery.md",slug:"/discovery",permalink:"/docs/apisix/discovery",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/discovery.md",version:"current",sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/apisix/FAQ"},next:{title:"DNS",permalink:"/docs/apisix/discovery/dns"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Supported discovery registries",id:"supported-discovery-registries",children:[]},{value:"How to extend the discovery client?",id:"how-to-extend-the-discovery-client",children:[{value:"Basic steps",id:"basic-steps",children:[]},{value:"the example of Eureka",id:"the-example-of-eureka",children:[]}]},{value:"Configuration for discovery client",id:"configuration-for-discovery-client",children:[{value:"Initial service discovery",id:"initial-service-discovery",children:[]},{value:"Configuration for Eureka",id:"configuration-for-eureka",children:[]}]},{value:"Upstream setting",id:"upstream-setting",children:[]},{value:"Embedded control api for debugging",id:"embedded-control-api-for-debugging",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"summary"},"Summary"),Object(a.b)("p",null,"When system traffic changes, the number of servers of the upstream service also increases or decreases, or the server needs to be replaced due to its hardware failure. If the gateway maintains upstream service information through configuration, the maintenance costs in the microservices architecture pattern are unpredictable. Furthermore, due to the untimely update of these information, will also bring a certain impact for the business, and the impact of human error operation can not be ignored. So it is very necessary for the gateway to automatically get the latest list of service instances through the service registry\u3002As shown in the figure below\uff1a"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/discovery.png",alt:null})),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"When the service starts, it will report some of its information, such as the service name, IP, port and other information to the registry. The services communicate with the registry using a mechanism such as a heartbeat, and if the registry and the service are unable to communicate for a long time, the instance will be cancel.When the service goes offline, the registry will delete the instance information."),Object(a.b)("li",{parentName:"ol"},"The gateway gets service instance information from the registry in near-real time."),Object(a.b)("li",{parentName:"ol"},"When the user requests the service through the gateway, the gateway selects one instance from the registry for proxy.")),Object(a.b)("p",null,"Common registries: Eureka, Etcd, Consul, Zookeeper, Nacos etc."),Object(a.b)("h2",{id:"supported-discovery-registries"},"Supported discovery registries"),Object(a.b)("p",null,"Currently we support Eureka/Consul and service discovery via DNS."),Object(a.b)("p",null,"For service discovery via DNS, see ",Object(a.b)("a",{parentName:"p",href:"/docs/apisix/discovery/dns"},"service discovery via DNS"),"."),Object(a.b)("p",null,"For Consul, see ",Object(a.b)("a",{parentName:"p",href:"/docs/apisix/discovery/consul_kv"},"service discovery via Consul")),Object(a.b)("p",null,"For Eureka, see below."),Object(a.b)("h2",{id:"how-to-extend-the-discovery-client"},"How to extend the discovery client?"),Object(a.b)("h3",{id:"basic-steps"},"Basic steps"),Object(a.b)("p",null,"It is very easy for APISIX to extend the discovery client, the basic steps are as follows"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add the implementation of registry client in the 'apisix/discovery/' directory;")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Implement the ",Object(a.b)("inlineCode",{parentName:"p"},"_M.init_worker()")," function for initialization and the ",Object(a.b)("inlineCode",{parentName:"p"},"_M.nodes(service_name)")," function for obtaining the list of service instance nodes;")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you need the discovery module to export the debugging information online, implement the ",Object(a.b)("inlineCode",{parentName:"p"},"_M.dump_data()")," function;")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Convert the registry data into data in APISIX;"))),Object(a.b)("h3",{id:"the-example-of-eureka"},"the example of Eureka"),Object(a.b)("h4",{id:"implementation-of-eurekalua"},"Implementation of eureka.lua"),Object(a.b)("p",null,"First, add ",Object(a.b)("a",{parentName:"p",href:"../../../apisix/discovery/eureka.lua"},Object(a.b)("inlineCode",{parentName:"a"},"eureka.lua"))," in the ",Object(a.b)("inlineCode",{parentName:"p"},"apisix/discovery/")," directory;"),Object(a.b)("p",null,"Then implement the ",Object(a.b)("inlineCode",{parentName:"p"},"_M.init_worker()")," function for initialization and the ",Object(a.b)("inlineCode",{parentName:"p"},"_M.nodes(service_name)")," function for obtaining the list of service instance nodes in ",Object(a.b)("inlineCode",{parentName:"p"},"eureka.lua"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    version = 1.0,\n}\n\n\nfunction _M.nodes(service_name)\n    ... ...\nend\n\n\nfunction _M.init_worker()\n    ... ...\nend\n\n\nfunction _M.dump_data()\n    return {config = your_config, services = your_services, other = ... }\nend\n\n\nreturn _M\n")),Object(a.b)("h4",{id:"how-convert-eurekas-instance-data-to-apisixs-node"},"How convert Eureka's instance data to APISIX's node?"),Object(a.b)("p",null,"Here's an example of Eureka's data\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "applications": {\n      "application": [\n          {\n              "name": "USER-SERVICE",                 # service name\n              "instance": [\n                  {\n                      "instanceId": "192.168.1.100:8761",\n                      "hostName": "192.168.1.100",\n                      "app": "USER-SERVICE",          # service name\n                      "ipAddr": "192.168.1.100",      # IP address\n                      "status": "UP",\n                      "overriddenStatus": "UNKNOWN",\n                      "port": {\n                          "$": 8761,\n                          "@enabled": "true"\n                      },\n                      "securePort": {\n                          "$": 443,\n                          "@enabled": "false"\n                      },\n                      "metadata": {\n                          "management.port": "8761",\n                          "weight": 100               # Setting by \'eureka.instance.metadata-map.weight\' of the spring boot application\n                      },\n                      "homePageUrl": "http://192.168.1.100:8761/",\n                      "statusPageUrl": "http://192.168.1.100:8761/actuator/info",\n                      "healthCheckUrl": "http://192.168.1.100:8761/actuator/health",\n                      ... ...\n                  }\n              ]\n          }\n      ]\n  }\n}\n')),Object(a.b)("p",null,"Deal with the Eureka's instance data need the following steps :"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"select the UP instance. When the value of ",Object(a.b)("inlineCode",{parentName:"li"},"overriddenStatus"),' is "UP" or the value of ',Object(a.b)("inlineCode",{parentName:"li"},"overriddenStatus"),' is "UNKNOWN" and the value of ',Object(a.b)("inlineCode",{parentName:"li"},"status"),' is "UP".'),Object(a.b)("li",{parentName:"ol"},"Host. The ",Object(a.b)("inlineCode",{parentName:"li"},"ipAddr")," is the IP address of instance; and must be IPv4 or IPv6."),Object(a.b)("li",{parentName:"ol"},"Port. If the value of ",Object(a.b)("inlineCode",{parentName:"li"},'port["@enabled"]'),' is equal to "true", using the value of ',Object(a.b)("inlineCode",{parentName:"li"},'port["\\$"]'),", If the value of ",Object(a.b)("inlineCode",{parentName:"li"},'securePort["@enabled"]'),' is equal to "true", using the value of ',Object(a.b)("inlineCode",{parentName:"li"},'securePort["\\$"]'),"."),Object(a.b)("li",{parentName:"ol"},"Weight. ",Object(a.b)("inlineCode",{parentName:"li"},"local weight = metadata.weight or local_conf.eureka.weight or 100"))),Object(a.b)("p",null,"The result of this example is as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "host" : "192.168.1.100",\n    "port" : 8761,\n    "weight" : 100,\n    "metadata" : {\n      "management.port": "8761",\n    }\n  }\n]\n')),Object(a.b)("h2",{id:"configuration-for-discovery-client"},"Configuration for discovery client"),Object(a.b)("h3",{id:"initial-service-discovery"},"Initial service discovery"),Object(a.b)("p",null,"Add the following configuration to ",Object(a.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," to add different service discovery clients for dynamic selection during use:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  eureka:\n      ...\n")),Object(a.b)("p",null,"This name should be consistent with the file name of the implementation registry in the ",Object(a.b)("inlineCode",{parentName:"p"},"apisix/discovery/")," directory."),Object(a.b)("p",null,"The supported discovery client: Eureka."),Object(a.b)("h3",{id:"configuration-for-eureka"},"Configuration for Eureka"),Object(a.b)("p",null,"Add following configuration in ",Object(a.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," \uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  eureka:\n    host:                            # it\'s possible to define multiple eureka hosts addresses of the same eureka cluster.\n      - "http://${username}:${password}@${eureka_host1}:${eureka_port1}"\n      - "http://${username}:${password}@${eureka_host2}:${eureka_port2}"\n    prefix: "/eureka/"\n    fetch_interval: 30               # 30s\n    weight: 100                      # default weight for node\n    timeout:\n      connect: 2000                  # 2000ms\n      send: 2000                     # 2000ms\n      read: 5000                     # 5000ms\n')),Object(a.b)("h2",{id:"upstream-setting"},"Upstream setting"),Object(a.b)("p",null,'Here is an example of routing a request with a URL of "/user/*" to a service which named "user-service" and use eureka discovery client in the registry :'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/user/*",\n    "upstream": {\n        "service_name": "USER-SERVICE",\n        "type": "roundrobin",\n        "discovery_type": "eureka"\n    }\n}\'\n\nHTTP/1.1 201 Created\nDate: Sat, 31 Aug 2019 01:17:15 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"node":{"value":{"uri":"\\/user\\/*","upstream": {"service_name": "USER-SERVICE", "type": "roundrobin", "discovery_type": "eureka"}},"createdIndex":61925,"key":"\\/apisix\\/routes\\/1","modifiedIndex":61925},"action":"create"}\n')),Object(a.b)("p",null,"Because the upstream interface URL may have conflict, usually in the gateway by prefix to distinguish:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/a/*",\n    "plugins": {\n        "proxy-rewrite" : {\n            regex_uri: ["^/a/(.*)", "/${1}"]\n        }\n    }\n    "upstream": {\n        "service_name": "A-SERVICE",\n        "type": "roundrobin",\n        "discovery_type": "eureka"\n    }\n}\'\n\n$ curl http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/b/*",\n    "plugins": {\n        "proxy-rewrite" : {\n            regex_uri: ["^/b/(.*)", "/${1}"]\n        }\n    }\n    "upstream": {\n        "service_name": "B-SERVICE",\n        "type": "roundrobin",\n        "discovery_type": "eureka"\n    }\n}\'\n')),Object(a.b)("p",null,"Suppose both A-SERVICE and B-SERVICE provide a ",Object(a.b)("inlineCode",{parentName:"p"},"/test")," API. The above configuration allows access to A-SERVICE's ",Object(a.b)("inlineCode",{parentName:"p"},"/test")," API through ",Object(a.b)("inlineCode",{parentName:"p"},"/a/test")," and B-SERVICE's ",Object(a.b)("inlineCode",{parentName:"p"},"/test")," API through ",Object(a.b)("inlineCode",{parentName:"p"},"/b/test"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Notice"),"\uff1aWhen configuring ",Object(a.b)("inlineCode",{parentName:"p"},"upstream.service_name"),",  ",Object(a.b)("inlineCode",{parentName:"p"},"upstream.nodes")," will no longer take effect, but will be replaced by 'nodes' obtained from the registry."),Object(a.b)("h2",{id:"embedded-control-api-for-debugging"},"Embedded control api for debugging"),Object(a.b)("p",null,"Sometimes we need the discovery client to export online data snapshot in memory when running for debugging, and if you implement the ",Object(a.b)("inlineCode",{parentName:"p"},"_M. dump_data()")," function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},"function _M.dump_data()\n    return {config = local_conf.discovery.eureka, services = applications}\nend\n")),Object(a.b)("p",null,"Then you can call its control api as below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"GET /v1/discovery/{discovery_type}/dump\n")),Object(a.b)("p",null,"eg:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9090/v1/discovery/eureka/dump\n")))}u.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);