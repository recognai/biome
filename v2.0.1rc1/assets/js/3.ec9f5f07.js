(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{319:function(t,e,n){"use strict";var r=n(342),i=Object.prototype.toString;function o(t){return"[object Array]"===i.call(t)}function s(t){return void 0===t}function a(t){return null!==t&&"object"==typeof t}function u(t){if("[object Object]"!==i.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function c(t){return"[object Function]"===i.call(t)}function l(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),o(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:o,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:function(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isPlainObject:u,isUndefined:s,isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function t(){var e={};function n(n,r){u(e[r])&&u(n)?e[r]=t(e[r],n):u(n)?e[r]=t({},n):o(n)?e[r]=n.slice():e[r]=n}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],n);return e},extend:function(t,e,n){return l(e,(function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},320:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return v}));n(26),n(71),n(175),n(103),n(174),n(69),n(45),n(322),n(70),n(321),n(73);var r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=a(t);return o.test(i)?t:i+".html"+n}function p(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&a(t.path)===a(e)}function d(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=a(e),i=0;i<t.length;i++)if(a(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function h(t,e,n,r){var i=n.pages,o=n.themeConfig,s=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||s.sidebar||o.sidebar))return g(t);var a=s.sidebar||o.sidebar;if(a){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,a),c=u.base,l=u.config;return"auto"===l?g(t):l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,r);if(Array.isArray(e))return Object.assign(d(n,e[0],r),{title:e[1]});var o=e.children||[];return 0===o.length&&e.path?Object.assign(d(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:o.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function g(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},321:function(t,e,n){"use strict";var r=n(177),i=n(176),o=n(6),s=n(20),a=n(106),u=n(178),c=n(14),l=n(179),f=n(75),p=n(1),d=[].push,h=Math.min,g=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);for(var a,u,c,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,p+"g");(a=f.call(g,r))&&!((u=g.lastIndex)>h&&(l.push(r.slice(h,a.index)),a.length>1&&a.index<r.length&&d.apply(l,a.slice(1)),c=a[0].length,h=u,l.length>=o));)g.lastIndex===a.index&&g.lastIndex++;return h===r.length?!c&&g.test("")||l.push(""):l.push(r.slice(h)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var s=n(r,t,this,i,r!==e);if(s.done)return s.value;var f=o(t),p=String(this),d=a(f,RegExp),m=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),b=new d(g?f:"^(?:"+f.source+")",v),y=void 0===i?4294967295:i>>>0;if(0===y)return[];if(0===p.length)return null===l(b,p)?[p]:[];for(var x=0,w=0,k=[];w<p.length;){b.lastIndex=g?w:0;var C,L=l(b,g?p:p.slice(w));if(null===L||(C=h(c(b.lastIndex+(g?0:w)),p.length))===x)w=u(p,w,m);else{if(k.push(p.slice(x,w)),k.length===y)return k;for(var _=1;_<=L.length-1;_++)if(k.push(L[_]),k.length===y)return k;w=x=C}}return k.push(p.slice(x)),k}]}),!g)},322:function(t,e,n){"use strict";var r=n(177),i=n(6),o=n(14),s=n(20),a=n(178),u=n(179);r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=i(t),c=String(this);if(!s.global)return u(s,c);var l=s.unicode;s.lastIndex=0;for(var f,p=[],d=0;null!==(f=u(s,c));){var h=String(f[0]);p[d]=h,""===h&&(s.lastIndex=a(c,o(s.lastIndex),l)),d++}return 0===d?null:p}]}))},323:function(t,e,n){"use strict";var r=n(0),i=n(181).trim;r({target:"String",proto:!0,forced:n(367)("trim")},{trim:function(){return i(this)}})},329:function(t,e,n){var r=n(5),i=n(2),o=n(74),s=n(189),a=n(8).f,u=n(46).f,c=n(176),l=n(110),f=n(185),p=n(9),d=n(1),h=n(30).set,g=n(183),m=n(3)("match"),v=i.RegExp,b=v.prototype,y=/a/g,x=/a/g,w=new v(y)!==y,k=f.UNSUPPORTED_Y;if(r&&o("RegExp",!w||k||d((function(){return x[m]=!1,v(y)!=y||v(x)==x||"/a/i"!=v(y,"i")})))){for(var C=function(t,e){var n,r=this instanceof C,i=c(t),o=void 0===e;if(!r&&i&&t.constructor===C&&o)return t;w?i&&!o&&(t=t.source):t instanceof C&&(o&&(e=l.call(t)),t=t.source),k&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=s(w?new v(t,e):v(t,e),r?this:b,C);return k&&n&&h(a,{sticky:n}),a},L=function(t){t in C||a(C,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},_=u(v),O=0;_.length>O;)L(_[O++]);b.constructor=C,C.prototype=b,p(i,"RegExp",C)}g("RegExp")},330:function(t,e,n){},331:function(t,e,n){},332:function(t,e,n){},333:function(t,e,n){},334:function(t,e,n){},336:function(t,e){t.exports=function(t){return null==t}},337:function(t,e,n){},339:function(t,e,n){},340:function(t,e,n){},341:function(t,e,n){},342:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},343:function(t,e,n){"use strict";var r=n(319);function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(r.isURLSearchParams(e))o=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!=t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(i(e)+"="+i(t))})))})),o=s.join("&")}if(o){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}},344:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},345:function(t,e,n){"use strict";var r=n(319),i=n(388),o={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,u={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=n(346)),a),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){u.headers[t]=r.merge(o)})),t.exports=u},346:function(t,e,n){"use strict";var r=n(319),i=n(389),o=n(391),s=n(343),a=n(392),u=n(395),c=n(396),l=n(347);t.exports=function(t){return new Promise((function(e,n){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+g)}var m=a(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),s(m,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,o={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};i(e,n,o),d=null}},d.onabort=function(){d&&(n(l("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(l("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=(t.withCredentials||c(m))&&t.xsrfCookieName?o.read(t.xsrfCookieName):void 0;v&&(p[t.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,(function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),n(t),d=null)})),f||(f=null),d.send(f)}))}},347:function(t,e,n){"use strict";var r=n(390);t.exports=function(t,e,n,i,o){var s=new Error(t);return r(s,e,n,i,o)}},348:function(t,e,n){"use strict";var r=n(319);t.exports=function(t,e){e=e||{};var n={},i=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function u(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function c(i){r.isUndefined(e[i])?r.isUndefined(t[i])||(n[i]=u(void 0,t[i])):n[i]=u(t[i],e[i])}r.forEach(i,(function(t){r.isUndefined(e[t])||(n[t]=u(void 0,e[t]))})),r.forEach(o,c),r.forEach(s,(function(i){r.isUndefined(e[i])?r.isUndefined(t[i])||(n[i]=u(void 0,t[i])):n[i]=u(void 0,e[i])})),r.forEach(a,(function(r){r in e?n[r]=u(t[r],e[r]):r in t&&(n[r]=u(void 0,t[r]))}));var l=i.concat(o).concat(s).concat(a),f=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===l.indexOf(t)}));return r.forEach(f,c),n}},349:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},356:function(t,e,n){"use strict";n.r(e);n(102);var r=n(320),i={name:"SidebarGroup",components:{DropdownTransition:n(358).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(356).default},methods:{isActive:r.e}},o=(n(379),n(25)),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(380),n(69);function a(t,e,n,r,i){var o={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}};return i>2&&(o.style={"padding-left":i+"rem"}),t("RouterLink",o,n)}function u(t,e,n,i,o){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,n+"#"+e.slug,e.title,c,e.level-1),u(t,e.children,n,i,o,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,o=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,p=l.sidebarDepth,d=Object(r.e)(o,f.path),h="auto"===f.type?d||f.children.some((function(t){return Object(r.e)(o,f.basePath+"#"+t.slug)})):d,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):a(t,f.path,f.title||f.path,h),m=[i.frontmatter.sidebarDepth,p,c.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),v=c.displayAllHeaders||s.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,o,m)]:(h||v)&&f.headers&&!r.d.test(f.path)?[g,u(t,Object(r.c)(f.headers),f.path,o,m)]:g}};n(381);function l(t,e){if("group"===e.type){var n=e.path&&Object(r.e)(t,e.path),i=e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(r.e)(t,e.path)}));return n||i}return!1}var f={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(o.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},p=Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},357:function(t,e,n){"use strict";n(180),n(69),n(102),n(72),n(329),n(45),n(104),n(322),n(70);var r=n(43),i=n(325),o=n(358),s=n(188),a=n.n(s),u={name:"DropdownLink",components:{NavLink:i.a,DropdownTransition:o.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return a()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},c=(n(372),n(25)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(r){return n("li",{key:r.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:r},on:{focusout:function(n){t.isLastItemOfArray(r,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,f=n(320),p={name:"NavLinks",components:{NavLink:i.a,DropdownLink:l},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,o=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var s,a=e[r],u=o[r]&&o[r].label||a.lang;return a.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===s}))||(s=r)),{text:u,link:s}}))};return[].concat(Object(r.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(f.j)(t),{items:(t.items||[]).map(f.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}},d=(n(373),Object(c.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=d.exports},358:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(371),n(25)),o=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},360:function(t,e,n){"use strict";var r=n(0),i=n(361);r({target:"String",proto:!0,forced:n(362)("link")},{link:function(t){return i(this,"a","href",t)}})},361:function(t,e,n){var r=n(20),i=/"/g;t.exports=function(t,e,n,o){var s=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),a+">"+s+"</"+e+">"}},362:function(t,e,n){var r=n(1);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},364:function(t,e,n){var r=n(0),i=n(365);r({global:!0,forced:parseInt!=i},{parseInt:i})},365:function(t,e,n){var r=n(2),i=n(181).trim,o=n(182),s=r.parseInt,a=/^[+-]?0[Xx]/,u=8!==s(o+"08")||22!==s(o+"0x16");t.exports=u?function(t,e){var n=i(String(t));return s(n,e>>>0||(a.test(n)?16:10))}:s},367:function(t,e,n){var r=n(1),i=n(182);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},368:function(t,e,n){"use strict";var r,i=n(0),o=n(17).f,s=n(14),a=n(108),u=n(20),c=n(109),l=n(21),f="".endsWith,p=Math.min,d=c("endsWith");i({target:"String",proto:!0,forced:!!(l||d||(r=o(String.prototype,"endsWith"),!r||r.writable))&&!d},{endsWith:function(t){var e=String(u(this));a(t);var n=arguments.length>1?arguments[1]:void 0,r=s(e.length),i=void 0===n?r:p(s(n),r),o=String(t);return f?f.call(e,o,i):e.slice(i-o.length,i)===o}})},369:function(t,e,n){"use strict";n(330)},370:function(t,e,n){"use strict";n(331)},371:function(t,e,n){"use strict";n(332)},372:function(t,e,n){"use strict";n(333)},373:function(t,e,n){"use strict";n(334)},375:function(t,e,n){"use strict";n(337)},376:function(t,e,n){var r=n(33),i=n(15),o=n(28);t.exports=function(t){return"string"==typeof t||!i(t)&&o(t)&&"[object String]"==r(t)}},378:function(t,e,n){"use strict";n(339)},379:function(t,e,n){"use strict";n(340)},380:function(t,e,n){"use strict";var r=n(0),i=n(31).find,o=n(105),s=n(18),a=!0,u=s("find");"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},381:function(t,e,n){"use strict";n(341)},382:function(t,e,n){t.exports=n(383)},383:function(t,e,n){"use strict";var r=n(319),i=n(342),o=n(384),s=n(348);function a(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n}var u=a(n(345));u.Axios=o,u.create=function(t){return a(s(u.defaults,t))},u.Cancel=n(349),u.CancelToken=n(397),u.isCancel=n(344),u.all=function(t){return Promise.all(t)},u.spread=n(398),u.isAxiosError=n(399),t.exports=u,t.exports.default=u},384:function(t,e,n){"use strict";var r=n(319),i=n(343),o=n(385),s=n(386),a=n(348);function u(t){this.defaults=t,this.interceptors={request:new o,response:new o}}u.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)n=n.then(e.shift(),e.shift());return n},u.prototype.getUri=function(t){return t=a(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){u.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){u.prototype[t]=function(e,n,r){return this.request(a(r||{},{method:t,url:e,data:n}))}})),t.exports=u},385:function(t,e,n){"use strict";var r=n(319);function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},386:function(t,e,n){"use strict";var r=n(319),i=n(387),o=n(344),s=n(345);function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return a(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||s.adapter)(t).then((function(e){return a(t),e.data=i(e.data,e.headers,t.transformResponse),e}),(function(e){return o(e)||(a(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},387:function(t,e,n){"use strict";var r=n(319);t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},388:function(t,e,n){"use strict";var r=n(319);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},389:function(t,e,n){"use strict";var r=n(347);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},390:function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},391:function(t,e,n){"use strict";var r=n(319);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,i,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},392:function(t,e,n){"use strict";var r=n(393),i=n(394);t.exports=function(t,e){return t&&!r(e)?i(t,e):e}},393:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},394:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},395:function(t,e,n){"use strict";var r=n(319),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,s={};return t?(r.forEach(t.split("\n"),(function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(s[e]&&i.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},396:function(t,e,n){"use strict";var r=n(319);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},397:function(t,e,n){"use strict";var r=n(349);function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i((function(e){t=e})),cancel:t}},t.exports=i},398:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},399:function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},407:function(t,e,n){"use strict";n(45),n(70);var r=n(336),i=n.n(r),o=n(320),s={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,r=e.docsDir,o=void 0===r?"":r,s=e.docsBranch,a=void 0===s?"master":s,u=e.docsRepo,c=void 0===u?n:u;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,o,a,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,i){if(/bitbucket.org/.test(e))return e.replace(o.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(o.a,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(o.a,"")+"/-/edit"+"/".concat(r,"/")+(n?n.replace(o.a,"")+"/":"")+i:(o.i.test(e)?e:"https://github.com/".concat(e)).replace(o.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(o.a,"")+"/":"")+i}}},a=(n(375),n(25)),u={components:{PageEdit:Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,PageNav:n(409).a},props:["sidebarItems"]},c=(n(378),Object(a.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=c.exports},408:function(t,e,n){"use strict";n(26),n(184),n(175),n(103),n(45),n(186),n(322),n(323),n(174),n(69),n(102),n(329),n(104),n(368),n(70),n(321);var r=n(187),i=n.n(r),o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=i()(e,"title","");return i()(e,"frontmatter.tags")&&(r+=" ".concat(e.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),s(t,r)},s=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=new RegExp("[^\0-]"),i=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(r.test(t))return i.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var o=t.endsWith(" ");return new RegExp(i.map((function(t,e){return i.length!==e+1||o?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=[],s=0;s<e.length&&!(i.length>=n);s++){var a=e[s];if(this.getPageLocalePath(a)===r&&this.isSearchable(a))if(o(t,a))i.push(a);else if(a.headers)for(var u=0;u<a.headers.length&&!(i.length>=n);u++){var c=a.headers[u];c.title&&o(t,a,c.title)&&i.push(Object.assign({},a,{path:a.path+"#"+c.slug,header:c}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(369),n(25)),c=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},410:function(t,e,n){"use strict";n(370);var r=n(25),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=i.exports}}]);