(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{255:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,m=h["".concat(i,".").concat(u)]||h[u]||b[u]||s;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),s=(a(0),a(255)),i={title:"Run Ingress APISIX on Amazon EKS",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars0.githubusercontent.com/u/10428333?s=60&v=4"},o={permalink:"/blog/2021/01/21/run-ingress-apisix-on-amazon-eks",source:"@site/blog/2021-01-21-run-ingress-apisix-on-amazon-eks.md",description:"@Chao Zhang, Apache APISIX Committer from Shenzhen Zhiliu Technology Co.",date:"2021-01-21T00:00:00.000Z",tags:[],title:"Run Ingress APISIX on Amazon EKS",readingTime:4.13,truncated:!0,prevItem:{title:"Stable Product Delivery with Cypress",permalink:"/blog/2021/02/08/stable-product-delivery-with-cypress"},nextItem:{title:"\u521d\u63a2 Kubernetes Service APIs",permalink:"/blog/2020/12/18/a-first-look-at-kubernetes-service-api"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Apache APISIX",id:"install-apache-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]},{value:"Test",id:"test",children:[]},{value:"See Also",id:"see-also",children:[]}],c={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",{parentName:"p",href:"https://github.com/tokers"},"@Chao Zhang"),", Apache APISIX Committer from ",Object(s.b)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Source:"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"https://github.com/apache/apisix-helm-chart")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"https://github.com/apache/apisix-ingress-controller")))),Object(s.b)("p",null,"This post is based on ",Object(s.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/deployments/aws.md"},"Install Ingress APISIX on Amazon EKS"),"."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"})),Object(s.b)("p",null,"Amazon Elastic Kubernetes Service (",Object(s.b)("a",{parentName:"p",href:"https://amazonaws-china.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc"},"Amazon EKS"),") gives you the flexibility to start, run, and scale Kubernetes applications in the AWS cloud or on-premises. This article explains how to run Ingress APISIX on it."),Object(s.b)("p",null,"Ingress APISIX brings good features (traffic splitting, multiple protocols, authentication and etc) of Apache APISIX to Kubernetes, with a well-designed Controller component to drive it, which helps users to achieve complex demands for the north-south traffic."),Object(s.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.b)("p",null,"Before you go ahead, make sure you have an available EKS cluster on Amazon AWS. If you don't have one, please create it according to the guide."),Object(s.b)("p",null,"You shall have kubectl tool in your own environment, set the context to your EKS cluster by running:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"aws eks update-kubeconfig --name <your eks cluster name> --region <your region>\n")),Object(s.b)("p",null,"After the Kubernetes cluster is ready, creating the namespace ingress-apisix, all subsequent resources will be created at this namespace."),Object(s.b)("p",null,"kubectl create namespace ingress-apisix"),Object(s.b)("p",null,"We use ",Object(s.b)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," to deploy all components in Ingress APISIX (",Object(s.b)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," and ",Object(s.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"apisix-ingress-controller"),"), so please also install Helm according to its installation guide. The helm charts for Apache APISIX and apisix-ingress-controller are in apache/apisix-helm-chart and apache/apisix-ingress-controller, clone them to get the charts."),Object(s.b)("h2",{id:"install-apache-apisix"},"Install Apache APISIX"),Object(s.b)("p",null,"Apache APISIX as the proxy plane of apisix-ingress-controller, should be deployed in advance."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm dependency update ./chart/apisix\nhelm install apisix ./chart/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),Object(s.b)("p",null,"The above commands created two Kubernetes Service resources, one is ",Object(s.b)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",Object(s.b)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes. Here we created the ",Object(s.b)("inlineCode",{parentName:"p"},"apisix-gateway")," as a ",Object(s.b)("inlineCode",{parentName:"p"},"LoadBalancer")," type Service, which resorts the ",Object(s.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html"},"AWS Network Balancer")," to expose it to the Internet. You can find the load balancer hostname by the following command:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway \\\n--namespace ingress-apisix \\\n-o jsonpath='{.status.loadBalancer.ingress[].hostname}'\n")),Object(s.b)("p",null," Another thing should be concerned that the ",Object(s.b)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the ",Object(s.b)("a",{parentName:"p",href:"https://amazonaws-china.com/premiumsupport/knowledge-center/eks-multiple-cidr-ranges/"},"EKS CIDR Ranges")," in your EKS cluster, so that the apisix-ingress-controller can be authorized by Apache APISIX (for the resources pushing)."),Object(s.b)("p",null,"See value.yaml](",Object(s.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart/blob/master/chart/apisix/values.yaml"},"https://github.com/apache/apisix-helm-chart/blob/master/chart/apisix/values.yaml"),") to learn all the configuration items if you have other requirements."),Object(s.b)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),Object(s.b)("p",null,"After Apache APISIX is deployed successfully, now it's time to install the controller component."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\n# install base resources, e.g. ServiceAccount.\nhelm install ingress-apisix-base -n ingress-apisix ./charts/base\n# install apisix-ingress-controller\nhelm install ingress-apisix ./charts/ingress-apisix \\\n  --set ingressController.image.tag=dev \\\n  --set ingressController.config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set ingressController.config.apisix.adminKey={YOUR ADMIN KEY} \\\n  --namespace ingress-apisix\n")),Object(s.b)("p",null,"The ingress-apisix-base chart installed some basic dependencies for apisix-ingress-controller, such as ServiceAccount, its exclusive CRDs and etc."),Object(s.b)("p",null,"The ingress-apisix chart guides us how to install the controller itself, you can change the image tag to the desired release version, also the value of ",Object(s.b)("inlineCode",{parentName:"p"},"ingressController.config.apisix.adminKey")," in above mentioned commands should be filled according to your practical usage (and be sure the admin key is same as the on in Apache APISIX deployment). See ",Object(s.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/charts/ingress-apisix/values.yaml"},"value.yaml")," to learn all the configuration items if you have other requirements."),Object(s.b)("p",null,"Now try to open your EKS console, choosing your cluster and clicking the Workloads tag, you shall see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),Object(s.b)("h2",{id:"test"},"Test"),Object(s.b)("p",null,"Now we have deployed all components in Ingress APISIX, it's important to check whether it runs well. We will deploy a httpbin service and ask Apache APISIX to route all requests with Host ",Object(s.b)("inlineCode",{parentName:"p"},'"local.httpbin.org"')," to it."),Object(s.b)("p",null,"The first step we should do is created the httpbin workload and expose it."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),Object(s.b)("p",null,"In order to let Apache APISIX routes requests correctly, we need create an ApisixRoute resource to drive it."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"# ar-httpbin.yaml\napiVersion: apisix.apache.org/v1\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - backend:\n          serviceName: httpbin\n          servicePort: 80\n        path: /*\n")),Object(s.b)("p",null,"The above ApisixRoute resource asks Apache APISIX to route requests which Host header is ",Object(s.b)("inlineCode",{parentName:"p"},'"local.httpbin.org"')," to the httpbin backend (the one we just created)."),Object(s.b)("p",null,"Now try to apply it, note the service and the ApisixRoute resource should be put in the same namespace., crossing namespaces is not allowed in apisix-ingress-controller."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ar-httpbin.yaml\n")),Object(s.b)("p",null,"Test it by a simple curl call from a place where the Apache APISIX service is reachable."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://{apisix-gateway-ip}:{apisix-gateway-port}/headers -s -H \'Host: local.httpbin.org\'\n\n{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-5ffc3273-2928e0844e19c9810d1bbd8a"\n  }\n}\n')),Object(s.b)("p",null,"If the Service type is ",Object(s.b)("inlineCode",{parentName:"p"},"ClusterIP,")," you have to login to a pod in the EKS cluster, then accessing Apache APISIX with its ",Object(s.b)("inlineCode",{parentName:"p"},"ClusterIP")," or Service FQDN. If it was exposed (no matter ",Object(s.b)("inlineCode",{parentName:"p"},"NodePort")," or ",Object(s.b)("inlineCode",{parentName:"p"},"LoadBalancer"),"), just accessing its outside reachable endpoint."),Object(s.b)("h2",{id:"see-also"},"See Also"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api"},"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.apiseven.com/zh/blog/another-way-to-implement-envoy-filter"},"https://www.apiseven.com/zh/blog/another-way-to-implement-envoy-filter"))))}p.isMDXComponent=!0}}]);