(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(255)),a={title:"Developing for Apache APISIX Ingress Controller"},l={unversionedId:"development",id:"development",isDocsHomePage:!1,title:"Developing for Apache APISIX Ingress Controller",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/development.md",slug:"/development",permalink:"/zh/docs/ingress-controller/development",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/development.md",version:"current",sidebar:"docs",previous:{title:"ApisixUpstream",permalink:"/zh/docs/ingress-controller/concepts/apisix_upstream"},next:{title:"Contributing to apisix-ingress-controller",permalink:"/zh/docs/ingress-controller/contribute"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Fork and Clone",id:"fork-and-clone",children:[]},{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[{value:"Run unit test cases",id:"run-unit-test-cases",children:[]},{value:"Run e2e test cases",id:"run-e2e-test-cases",children:[]},{value:"Build docker image",id:"build-docker-image",children:[]}]},{value:"Run apisix-ingress-controller locally",id:"run-apisix-ingress-controller-locally",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document explains how to get started with developing for Apache APISIX Ingress controller."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.13")," or later, and we use go module to manage the go package dependencies."),Object(o.b)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",Object(o.b)("a",{parentName:"li",href:"https://github.com/kubernetes/minikube"},"Minikube"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Install Apache APISIX in Kubernetes by Helm Chart"),".")),Object(o.b)("h2",{id:"fork-and-clone"},"Fork and Clone"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fork the repository from ",Object(o.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"apache/apisix-ingress-controller")," to your own GitHub account."),Object(o.b)("li",{parentName:"ul"},"Clone the forked repository to your workstation."),Object(o.b)("li",{parentName:"ul"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"go mod download")," to download modules to local cache. By the way, if you are a developer in China, we suggest you setting ",Object(o.b)("inlineCode",{parentName:"li"},"GOPROXY")," to ",Object(o.b)("inlineCode",{parentName:"li"},"https://goproxy.cn")," to speed up the downloading.")),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake build\n./apisix-ingress-controller version\n")),Object(o.b)("h2",{id:"test"},"Test"),Object(o.b)("h3",{id:"run-unit-test-cases"},"Run unit test cases"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake unit-test\n")),Object(o.b)("h3",{id:"run-e2e-test-cases"},"Run e2e test cases"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake e2e-test\n")),Object(o.b)("p",null,"Note the running of e2e cases is somewhat slow, so please be patient."),Object(o.b)("h3",{id:"build-docker-image"},"Build docker image"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake build-image IMAGE_TAG=a.b.c\n")),Object(o.b)("p",null,"The Dockerfile in this repository is only for development, not for release."),Object(o.b)("h2",{id:"run-apisix-ingress-controller-locally"},"Run apisix-ingress-controller locally"),Object(o.b)("p",null,"We assume all prerequisites above mentioned are met, what's more, since we want to run apisix-ingress-controller in bare-metal environment, please make sure both the proxy service and admin api service of Apache APISIX are exposed outside of the Kubernetes cluster, e.g. configuring them as ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort")," services."),Object(o.b)("p",null,"Let's assume the Admin API service address of Apache APISIX is ",Object(o.b)("inlineCode",{parentName:"p"},"http://192.168.65.2:31156"),". Next launch the ingress-apisix-controller by the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\n./apisix-ingress-controller ingress \\\n    --kubeconfig /path/to/kubeconfig \\\n    --http-listen :8080 \\\n    --log-output stderr \\\n    --apisix-base-url http://192.168.65.2:31156/apisix/admin\n    --apisix-admin-key edd1c9f034335f136f87ad84b625c8f1\n")),Object(o.b)("p",null,"Something you need to pay attention to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"configuring of ",Object(o.b)("inlineCode",{parentName:"li"},"--kubeconfig"),", if you are using Minikube, the file path should be ",Object(o.b)("inlineCode",{parentName:"li"},"~/.kube/config"),"."),Object(o.b)("li",{parentName:"ul"},"configuring of ",Object(o.b)("inlineCode",{parentName:"li"},"--apisix-admin-key"),", if you have changed the admin key in Apache APISIX, also changing it here, if you disable the authentication if Apache APISIX, just removing this option.")))}p.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);