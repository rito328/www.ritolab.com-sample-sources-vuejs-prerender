(function(t){function e(e){for(var r,i,a=e[0],c=e[1],l=e[2],p=0,f=[];p<a.length;p++)i=a[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var s=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/product"}},[t._v("Product")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/recruit"}},[t._v("Recruit")])],1),n("router-view")],1)},u=[],i=(n("5c0b"),n("2877")),a={},c=Object(i["a"])(a,o,u,!1,null,null,null),l=c.exports,s=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Home")])])}],d={beforeRouteEnter:function(t,e,n){n(function(){t.meta.title&&(document.title=t.meta.title),t.meta.desc&&document.querySelector("meta[name='description']").setAttribute("content",t.meta.desc)})}},m={mixins:[d]},v=m,h=Object(i["a"])(v,p,f,!1,null,null,null),_=h.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("About")])])}],g={mixins:[d]},x=g,O=Object(i["a"])(x,b,y,!1,null,null,null),j=O.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product"},[n("h1",[t._v("Product")])])}],P={mixins:[d]},$=P,k=Object(i["a"])($,w,E,!1,null,null,null),T=k.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recruit"},[n("h1",[t._v("Recruit")])])}],R={mixins:[d]},C=R,M=Object(i["a"])(C,S,A,!1,null,null,null),H=M.exports;r["a"].use(s["a"]);var J=new s["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:_,meta:{title:"verification apps",desc:"This is Home page."}},{path:"/about",name:"about",component:j,meta:{title:"About",desc:"This is About page."}},{path:"/product",name:"product",component:T,meta:{title:"Product",desc:"This is Product page."}},{path:"/recruit",name:"recruit",component:H,meta:{title:"Recruit",desc:"This is Recruit page."}}]}),q=n("342d"),z=n.n(q);r["a"].use(z.a),r["a"].config.productionTip=!1,new r["a"]({router:J,head:{meta:[{name:"description",content:""}]},render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){}});
//# sourceMappingURL=app.840c5d47.js.map