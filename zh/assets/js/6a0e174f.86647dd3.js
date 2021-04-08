(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(255)),b={title:"batch-requests"},i={unversionedId:"plugins/batch-requests",id:"plugins/batch-requests",isDocsHomePage:!1,title:"batch-requests",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/batch-requests.md",slug:"/plugins/batch-requests",permalink:"/zh/docs/apisix/plugins/batch-requests",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/batch-requests.md",version:"current",sidebar:"docs",previous:{title:"\u5982\u4f55\u6784\u5efa Apache APISIX",permalink:"/zh/docs/apisix/how-to-build"},next:{title:"serverless",permalink:"/zh/docs/apisix/plugins/serverless"}},p=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42/\u54cd\u5e94",id:"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42\u54cd\u5e94",children:[{value:"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570:",id:"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570",children:[]},{value:"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570\uff1a",id:"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570\uff1a",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],c={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%9B%AE%E5%BD%95"},"\u76ee\u5f55")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%AE%80%E4%BB%8B"},"\u7b80\u4ecb")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},"\u5c5e\u6027")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%8E%A5%E5%8F%A3"},"\u63a5\u53e3")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},"\u5982\u4f55\u542f\u7528")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE"},"\u5982\u4f55\u914d\u7f6e")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%85%83%E6%95%B0%E6%8D%AE"},"\u5143\u6570\u636e")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%89%B9%E9%87%8F%E6%8E%A5%E5%8F%A3%E8%AF%B7%E6%B1%82%E5%93%8D%E5%BA%94"},"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42/\u54cd\u5e94"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%8E%A5%E5%8F%A3%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0"},"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#httprequest"},"HttpRequest")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%8E%A5%E5%8F%A3%E5%93%8D%E5%BA%94%E5%8F%82%E6%95%B0"},"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570\uff1a"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#httpresponse"},"HttpResponse")))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},"\u6d4b\u8bd5\u63d2\u4ef6")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},"\u7981\u7528\u63d2\u4ef6"))),Object(l.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"batch-requests")," \u63d2\u4ef6\u53ef\u4ee5\u4e00\u6b21\u63a5\u53d7\u591a\u4e2a\u8bf7\u6c42\u5e76\u4ee5 ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_pipelining"},"http pipeline")," \u7684\u65b9\u5f0f\u5728\u7f51\u5173\u53d1\u8d77\u591a\u4e2a http \u8bf7\u6c42\uff0c\u5408\u5e76\u7ed3\u679c\u540e\u518d\u8fd4\u56de\u5ba2\u6237\u7aef\uff0c\u8fd9\u5728\u5ba2\u6237\u7aef\u9700\u8981\u8bbf\u95ee\u591a\u4e2a\u63a5\u53e3\u65f6\u53ef\u4ee5\u663e\u8457\u5730\u63d0\u5347\u8bf7\u6c42\u6027\u80fd\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u63d0\u793a")),Object(l.b)("p",{parentName:"blockquote"},"\u5916\u5c42\u7684 Http \u8bf7\u6c42\u5934\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u5230\u6bcf\u4e00\u4e2a\u72ec\u7acb\u8bf7\u6c42\u4e2d\uff0c\u5982\u679c\u72ec\u7acb\u8bf7\u6c42\u4e2d\u51fa\u73b0\u76f8\u540c\u952e\u503c\u7684\u8bf7\u6c42\u5934\uff0c\u90a3\u4e48\u53ea\u6709\u72ec\u7acb\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u4f1a\u751f\u6548\u3002")),Object(l.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(l.b)("p",null,"\u65e0"),Object(l.b)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),Object(l.b)("p",null,"\u63d2\u4ef6\u4f1a\u589e\u52a0 ",Object(l.b)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," \u8fd9\u4e2a\u63a5\u53e3\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u901a\u8fc7 ",Object(l.b)("a",{parentName:"p",href:"/zh/docs/apisix/plugin-interceptors"},"interceptors"),"\n\u6765\u4fdd\u62a4\u5b83\u3002"),Object(l.b)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),Object(l.b)("p",null,"\u672c\u63d2\u4ef6\u9ed8\u8ba4\u542f\u7528\u3002"),Object(l.b)("h2",{id:"\u5982\u4f55\u914d\u7f6e"},"\u5982\u4f55\u914d\u7f6e"),Object(l.b)("p",null,"\u9ed8\u8ba4\u672c\u63d2\u4ef6\u9650\u5236\u8bf7\u6c42\u4f53\u7684\u5927\u5c0f\u4e0d\u80fd\u5927\u4e8e 1 MiB\u3002\u8fd9\u4e2a\u9650\u5236\u53ef\u4ee5\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"apisix/admin/plugin_metadata/batch-requests")," \u6765\u4fee\u6539\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/batch-requests -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '\n{\n    \"max_body_size\": 4194304\n}'\n")),Object(l.b)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max_body_size"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"1048576"),Object(l.b)("td",{parentName:"tr",align:null},"> 0"),Object(l.b)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53\u7684\u6700\u5927\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002")))),Object(l.b)("h2",{id:"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42\u54cd\u5e94"},"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42/\u54cd\u5e94"),Object(l.b)("p",null,"\u63d2\u4ef6\u4f1a\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"apisix")," \u521b\u5efa\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," \u7684\u63a5\u53e3\u6765\u5904\u7406\u4f60\u7684\u6279\u91cf\u8bf7\u6c42\u3002"),Object(l.b)("h3",{id:"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570"},"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"query"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u7ed9\u6240\u6709\u8bf7\u6c42\u90fd\u643a\u5e26\u7684 ",Object(l.b)("inlineCode",{parentName:"td"},"QueryString"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"headers"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u7ed9\u6240\u6709\u8bf7\u6c42\u90fd\u643a\u5e26\u7684 ",Object(l.b)("inlineCode",{parentName:"td"},"Header"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timeout"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"30000"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u805a\u5408\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a ",Object(l.b)("inlineCode",{parentName:"td"},"ms"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pipeline"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#HttpRequest"},"HttpRequest")),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f")))),Object(l.b)("h4",{id:"httprequest"},"HttpRequest"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"version"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"1.1"),Object(l.b)("td",{parentName:"tr",align:null},"[1.0, 1.1]"),Object(l.b)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7528\u7684 ",Object(l.b)("inlineCode",{parentName:"td"},"http")," \u534f\u8bae\u7248\u672c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"method"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"GET"),Object(l.b)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS", "CONNECT", "TRACE"]'),Object(l.b)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f7f\u7528\u7684 ",Object(l.b)("inlineCode",{parentName:"td"},"http")," \u65b9\u6cd5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"query"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u72ec\u7acb\u8bf7\u6c42\u6240\u643a\u5e26\u7684 ",Object(l.b)("inlineCode",{parentName:"td"},"QueryString"),", \u5982\u679c ",Object(l.b)("inlineCode",{parentName:"td"},"Key")," \u548c\u5168\u5c40\u7684\u6709\u51b2\u7a81\uff0c\u4ee5\u6b64\u8bbe\u7f6e\u4e3a\u4e3b\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"headers"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u72ec\u7acb\u8bf7\u6c42\u6240\u643a\u5e26\u7684 ",Object(l.b)("inlineCode",{parentName:"td"},"Header"),", \u5982\u679c ",Object(l.b)("inlineCode",{parentName:"td"},"Key")," \u548c\u5168\u5c40\u7684\u6709\u51b2\u7a81\uff0c\u4ee5\u6b64\u8bbe\u7f6e\u4e3a\u4e3b\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u8def\u5f84")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ssl_verify"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1 SSL \u8bc1\u4e66\u4e0e\u4e3b\u673a\u540d\u662f\u5426\u5339\u914d")))),Object(l.b)("h3",{id:"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570\uff1a"},"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570\uff1a"),Object(l.b)("p",null,"\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a ",Object(l.b)("a",{parentName:"p",href:"#HttpResponse"},"HttpResponse")," \u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"\u6570\u7ec4"),"\u3002"),Object(l.b)("h4",{id:"httpresponse"},"HttpResponse"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"status"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u72b6\u6001\u7801")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"reason"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u8fd4\u56de\u4fe1\u606f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u54cd\u5e94\u4f53")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"headers"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u54cd\u5e94\u5934")))),Object(l.b)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),Object(l.b)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u8981\u8bbf\u95ee\u7684\u8bf7\u6c42\u4fe1\u606f\u4f20\u5230\u7f51\u5173\u7684\u6279\u91cf\u8bf7\u6c42\u63a5\u53e3( ",Object(l.b)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," )\uff0c\u7f51\u5173\u4f1a\u4ee5 ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_pipelining"},"http pipeline")," \u7684\u65b9\u5f0f\u81ea\u52a8\u5e2e\u4f60\u5b8c\u6210\u8bf7\u6c42\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://127.0.0.1:9080/apisix/batch-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "headers": {\n        "Content-Type": "application/json",\n        "admin-jwt":"xxxx"\n    },\n    "timeout": 500,\n    "pipeline": [\n        {\n            "method": "POST",\n            "path": "/community.GiftSrv/GetGifts",\n            "body": "test"\n        },\n        {\n            "method": "POST",\n            "path": "/community.GiftSrv/GetGifts",\n            "body": "test2"\n        }\n    ]\n}\'\n')),Object(l.b)("p",null,"\u8fd4\u56de\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "status": 200,\n    "reason": "OK",\n    "body": "{\\"ret\\":500,\\"msg\\":\\"error\\",\\"game_info\\":null,\\"gift\\":[],\\"to_gets\\":0,\\"get_all_msg\\":\\"\\"}",\n    "headers": {\n      "Connection": "keep-alive",\n      "Date": "Sat, 11 Apr 2020 17:53:20 GMT",\n      "Content-Type": "application/json",\n      "Content-Length": "81",\n      "Server": "APISIX web server"\n    }\n  },\n  {\n    "status": 200,\n    "reason": "OK",\n    "body": "{\\"ret\\":500,\\"msg\\":\\"error\\",\\"game_info\\":null,\\"gift\\":[],\\"to_gets\\":0,\\"get_all_msg\\":\\"\\"}",\n    "headers": {\n      "Connection": "keep-alive",\n      "Date": "Sat, 11 Apr 2020 17:53:20 GMT",\n      "Content-Type": "application/json",\n      "Content-Length": "81",\n      "Server": "APISIX web server"\n    }\n  }\n]\n')),Object(l.b)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0d\u9700\u8981\u7981\u7528\u672c\u63d2\u4ef6\uff0c\u5982\u6709\u9700\u8981\uff0c\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"/conf/config.yaml")," \u4e2d\u65b0\u5efa\u4e00\u4e2a\u6240\u9700\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"plugins")," \u5217\u8868\uff0c\u4ee5\u8986\u76d6\u539f\u5217\u8868\u3002"))}u.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},O=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),O=u(n),d=a,j=O["".concat(b,".").concat(d)]||O[d]||m[d]||l;return n?r.a.createElement(j,i(i({ref:t},c),{},{components:n})):r.a.createElement(j,i({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);