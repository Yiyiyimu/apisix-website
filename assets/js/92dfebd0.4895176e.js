(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return o}));var a=n(3),l=n(8),i=(n(0),n(265)),r={title:"Apache APISIX Helm Chart"},c={unversionedId:"apisix",id:"apisix",isDocsHomePage:!1,title:"Apache APISIX Helm Chart",description:"\x3c!--",source:"@site/docs/apisix-helm-chart/apisix.md",slug:"/apisix",permalink:"/docs/helm-chart/apisix",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/en/latest/apisix.md",version:"current",sidebar:"docs",next:{title:"Apache APISIX Dashboard Helm Chart",permalink:"/docs/helm-chart/apisix-dashboard"}},s=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Install",id:"install",children:[]},{value:"Uninstall",id:"uninstall",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"Seeking help",id:"seeking-help",children:[]}],p={toc:s};function o(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"apache-apisix-helm-chart"},"Apache APISIX Helm Chart"),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"Update the dependency chart"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ helm repo add bitnami https://charts.bitnami.com/bitnami\n$ helm dependency update .\n")),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"To install the chart with release name ",Object(i.b)("inlineCode",{parentName:"p"},"apisix"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ helm install apisix . -n default\n")),Object(i.b)("h2",{id:"uninstall"},"Uninstall"),Object(i.b)("p",null,"To uninstall/delete the ",Object(i.b)("inlineCode",{parentName:"p"},"apisix")," release:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"helm uninstall apisix . -n default\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"How to install APISIX only?")),Object(i.b)("p",null,"The Charts will install etcd 3.4.14 by default. If you want to install Apache APISIX only, please set ",Object(i.b)("inlineCode",{parentName:"p"},"etcd.enabled=false")," and set ",Object(i.b)("inlineCode",{parentName:"p"},"etcd.host={http://your_etcd_address:2379}"),"."),Object(i.b)("p",null,"Please use the FQDN address or the IP of the etcd."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# if etcd export by kubernetes service need spell fully qualified name\n$ helm install apisix . -n default \\\n    --set etcd.enabled=false \\\n    --set etcd.host={http://etcd_node_1:2379\\,http://etcd_node_2:2379}\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Why get 403 when I access Apache APISIX admin api?")),Object(i.b)("p",null,"We can define ",Object(i.b)("inlineCode",{parentName:"p"},"allow.ipList")," in CIDR."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ helm install apisix . -n default \\\n    --set allow.ipList="10.22.100.12/8" \\\n    --set allow.ipList="172.0.0.0/24"\n')),Object(i.b)("p",null,"If you want to allow all IPs for a quick test, just set ",Object(i.b)("inlineCode",{parentName:"p"},'allow.ipList=""')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ helm install apisix . -n default \\\n    --set allow.ipList=""\n')),Object(i.b)("h2",{id:"seeking-help"},"Seeking help"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Mailing List: Mail to ",Object(i.b)("a",{parentName:"li",href:"mailto:dev-subscribe@apisix.apache.org"},"dev-subscribe@apisix.apache.org"),", follow the reply to subscribe the mailing list."),Object(i.b)("li",{parentName:"ul"},"QQ Group - 578997126, 552030619"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://s.apache.org/slack-invite"},"Slack Workspace")," - join ",Object(i.b)("inlineCode",{parentName:"li"},"#apisix")," on our Slack to meet the team and ask questions"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",{parentName:"li",src:"https://img.shields.io/twitter/follow/ApacheAPISIX?style=social",alt:"Twitter Follow"})," - follow and interact with us using hashtag ",Object(i.b)("inlineCode",{parentName:"li"},"#ApacheAPISIX")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://space.bilibili.com/551921247"},"bilibili video"))))}o.isMDXComponent=!0},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),o=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=o(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=o(n),d=a,h=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?l.a.createElement(h,c(c({ref:t},p),{},{components:n})):l.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);