(window.webpackJsonp=window.webpackJsonp||[]).push([[1],Array(48).concat([function(t,e,n){var i=n(8),r=n(60),a=n(28),l=n(49),o=n(27),s=n(5),u=n(25),c=Object.getOwnPropertyDescriptor;e.f=i?c:function(t,e){if(t=l(t),e=o(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return a(!r.f.call(t,e),t[e])}},function(t,e,n){var i=n(61),r=n(51);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(57);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(21).default)("144963ea",i,!0,{sourceMap:!1})},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var i=n(53),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(77);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(21).default)("5b6d3ee6",i,!0,{sourceMap:!1})},function(t,e,n){var i=n(79);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(21).default)("7093e955",i,!0,{sourceMap:!1})},function(t,e,n){"use strict";n(50)},function(t,e,n){var i=n(20)(!1);i.push([t.i,".atom-headline[data-v-718636cb]{font-style:normal;font-weight:400}.atom-headline>*[data-v-718636cb]{display:block}.atom-headline.headline--h2 .overline[data-v-718636cb],.atom-headline.headline--h2 .subline[data-v-718636cb]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-718636cb],.atom-headline.headline--h2 .subline[data-v-718636cb]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-718636cb]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-718636cb]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-718636cb]{font-size:36px}}.atom-headline.headline--view-header[data-v-718636cb]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),t.exports=i},function(t,e,n){"use strict";var i,r=n(59),a=n(48).f,l=n(52),o=n(73),s=n(51),u=n(75),c=n(23),f="".startsWith,d=Math.min,p=u("startsWith");r({target:"String",proto:!0,forced:!!(c||p||(i=a(String.prototype,"startsWith"),!i||i.writable))&&!p},{startsWith:function(t){var e=String(s(this));o(t);var n=l(d(arguments.length>1?arguments[1]:void 0,e.length)),i=String(t);return f?f.call(e,i,n):e.slice(n,n+i.length)===i}})},function(t,e,n){var i=n(0),r=n(48).f,a=n(7),l=n(29),o=n(13),s=n(62),u=n(72);t.exports=function(t,e){var n,c,f,d,p,h=t.target,v=t.global,y=t.stat;if(n=v?i:y?i[h]||o(h,{}):(i[h]||{}).prototype)for(c in e){if(d=e[c],f=t.noTargetGet?(p=r(n,c))&&p.value:n[c],!u(v?c:h+(y?".":"#")+c,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;s(d,f)}(t.sham||f&&f.sham)&&a(d,"sham",!0),l(n,c,d,t)}}},function(t,e,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!i.call({1:2},1);e.f=a?function(t){var e=r(this,t);return!!e&&e.enumerable}:i},function(t,e,n){var i=n(6),r=n(22),a="".split;t.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?a.call(t,""):Object(t)}:Object},function(t,e,n){var i=n(5),r=n(63),a=n(48),l=n(24);t.exports=function(t,e){for(var n=r(e),o=l.f,s=a.f,u=0;u<n.length;u++){var c=n[u];i(t,c)||o(t,c,s(e,c))}}},function(t,e,n){var i=n(64),r=n(66),a=n(71),l=n(26);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(l(t)),n=a.f;return n?e.concat(n(t)):e}},function(t,e,n){var i=n(65),r=n(0),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(i[t])||a(r[t]):i[t]&&i[t][e]||r[t]&&r[t][e]}},function(t,e,n){var i=n(0);t.exports=i},function(t,e,n){var i=n(67),r=n(70).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var i=n(5),r=n(49),a=n(68).indexOf,l=n(30);t.exports=function(t,e){var n,o=r(t),s=0,u=[];for(n in o)!i(l,n)&&i(o,n)&&u.push(n);for(;e.length>s;)i(o,n=e[s++])&&(~a(u,n)||u.push(n));return u}},function(t,e,n){var i=n(49),r=n(52),a=n(69),l=function(t){return function(e,n,l){var o,s=i(e),u=r(s.length),c=a(l,u);if(t&&n!=n){for(;u>c;)if((o=s[c++])!=o)return!0}else for(;u>c;c++)if((t||c in s)&&s[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:l(!0),indexOf:l(!1)}},function(t,e,n){var i=n(53),r=Math.max,a=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):a(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var i=n(6),r=/#|\.prototype\./,a=function(t,e){var n=o[l(t)];return n==u||n!=s&&("function"==typeof e?i(e):!!e)},l=a.normalize=function(t){return String(t).replace(r,".").toLowerCase()},o=a.data={},s=a.NATIVE="N",u=a.POLYFILL="P";t.exports=a},function(t,e,n){var i=n(74);t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,n){var i=n(3),r=n(22),a=n(12)("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},function(t,e,n){var i=n(12)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(t){}}return!1}},function(t,e,n){"use strict";n(54)},function(t,e,n){var i=n(20)(!1);i.push([t.i,".molecule-link-list.type--view-header[data-v-3d4e64dd]{display:flex;padding:0;margin:0;list-style:none}.molecule-link-list.type--view-header a[data-v-3d4e64dd]{display:block;padding:10px 15px;font-family:sans-serif;color:#333;text-decoration:none}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active[data-v-3d4e64dd]{font-weight:700}.molecule-link-list.type--view-header a.router-link-exact-active.router-link-active[data-v-3d4e64dd],.molecule-link-list.type--view-header a[data-v-3d4e64dd]:hover{background:#eee}",""]),t.exports=i},function(t,e,n){"use strict";n(55)},function(t,e,n){var i=n(20)(!1);i.push([t.i,".organisms-view-header[data-v-47124960]{position:relative}.organisms-view-header nav[data-v-47124960]{display:flex;line-height:1}.organisms-view-header nav>span[data-v-47124960]{padding:10px 15px;font-family:sans-serif;color:#333}",""]),t.exports=i},function(t,e,n){"use strict";n.r(e);var i={props:{tag:{type:String,required:!1,default:function(){return"h1"}},styleType:{type:String,default:function(){return null}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){var t={};return t["headline--".concat(this.tag)]=!0,t["headline--".concat(this.styleType)]=this.styleType,t}}},r=(n(56),n(11)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"atom-headline",class:t.styleClasses},[t._t("default",[t.$slots.overline||t.overline?n("span",{staticClass:"overline"},[t._t("overline",[t._v("\n        "+t._s(t.overline)+"\n      ")])],2):t._e(),t._v(" "),t.$slots.headline||t.headline?n("span",{staticClass:"headline"},[t._t("headline",[t._v("\n        "+t._s(t.headline)+"\n      ")])],2):t._e(),t._v(" "),t.$slots.subline||t.subline?n("span",{staticClass:"subline"},[t._t("subline",[t._v("\n        "+t._s(t.subline)+"\n      ")])],2):t._e()])],2)}),[],!1,null,"718636cb",null).exports,l=(n(58),{props:{url:{type:String,required:!1,default:"#url"},title:{type:String,required:!1,default:null},click:{type:Function,default:function(){}},target:{type:String,required:!1,default:"_blank"}},computed:{isExternal:function(){return/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#")}}}),o={components:{AtomLinkTo:Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal?n("a",{attrs:{href:t.url,target:t.target||"_blank",rel:"noopener",title:t.title},on:{click:t.click}},[t._t("default",[t._v(t._s(t.title))])],2):t.isExternal?t._e():n("router-link",{attrs:{to:t.url,title:t.title},on:{click:t.click}},[t._t("default",[t._v(t._s(t.title))])],2)}),[],!1,null,null,null).exports},props:{type:{type:String,default:function(){return null}},list:{type:Array,default:function(){return[]}}},computed:{styleClasses:function(){var t={};return t["type--".concat(this.type)]=this.type,t}},methods:{getUrl:function(t){if(!("$i18n"in this&&this.$i18n&&"localePath"in this.$i18n))return t.url;this.localePath(t.url)}}},s=(n(76),{components:{AtomHeadline:a,MoleculeLinkList:Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"molecule-link-list",class:t.styleClasses},[t._t("default",t._l(t.list,(function(e){return n("li",{key:e.title},[n("atom-link-to",t._b({attrs:{url:t.getUrl(e)}},"atom-link-to",e,!1),[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})))],2)}),[],!1,null,"3d4e64dd",null).exports},props:{title:{type:String,default:"Header Title"},linksTitle:{type:String,default:"Links:"},navigation:{type:Array,default:function(){return[{title:"Link 1.",url:"#link-1",target:"_self"},{title:"Link 2.",url:"#link-2",target:"_self"},{title:"Link 3.",url:"#link-3",target:"_self"}]}}},computed:{headline:function(){return{overline:null,headline:this.title,subline:null}}}}),u=(n(78),Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"organisms-view-header"},[n("atom-headline",t._b({attrs:{tag:"div","style-type":"view-header"}},"atom-headline",t.headline,!1)),t._v(" "),t.navigation.length>0?n("nav",[n("span",[t._v(t._s(t.linksTitle))]),t._v(" "),n("molecule-link-list",{staticClass:"links",attrs:{type:"view-header",list:t.navigation}})],1):t._e(),t._v(" "),n("LazyGithubCorner")],1)}),[],!1,null,"47124960",null));e.default=u.exports}])]);