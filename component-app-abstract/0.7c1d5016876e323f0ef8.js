(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){var i=n(120);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(37).default)("146db73a",i,!0,{sourceMap:!1})},119:function(e,t,n){"use strict";n(118)},120:function(e,t,n){(t=n(36)(!1)).push([e.i,".atom-headline[data-v-6cbb25dd]{font-style:normal;font-weight:400}.atom-headline>*[data-v-6cbb25dd]{display:block}.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-family:sans-serif;font-size:3.2vw;font-weight:400}@media (--xs){.atom-headline.headline--h2 .overline[data-v-6cbb25dd],.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-6cbb25dd]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-family:serif;font-size:9.6vw;font-weight:700}@media (--xs){.atom-headline.headline--h2 .headline[data-v-6cbb25dd]{font-size:36px}}.atom-headline.headline--view-header[data-v-6cbb25dd]{padding:15px;font-family:sans-serif;font-size:20px;font-weight:400}",""]),e.exports=t},121:function(e,t,n){"use strict";var i={props:{tag:{type:String,required:!1,default:function(){return"h1"}},styleType:{type:String,default:function(){return null}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){var e={};return e["headline--".concat(this.tag)]=!0,e["headline--".concat(this.styleType)]=this.styleType,e}}},a=(n(119),n(8)),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6cbb25dd",null);t.a=s.exports},124:function(e,t,n){var i=n(140);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(37).default)("4f8cb4c5",i,!0,{sourceMap:!1})},125:function(e,t,n){var i=n(142);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(37).default)("636d0a88",i,!0,{sourceMap:!1})},138:function(e,t,n){e.exports=n.p+"img/image.aa044df.png"},139:function(e,t,n){"use strict";n(124)},140:function(e,t,n){(t=n(36)(!1)).push([e.i,"",""]),e.exports=t},141:function(e,t,n){"use strict";n(125)},142:function(e,t,n){(t=n(36)(!1)).push([e.i,".view-index img{height:32px}",""]),e.exports=t},39:function(e,t,n){"use strict";n.r(t);n(21);var i=n(121),a={computed:{storeValue:function(){return this.$store.getters["base/value"]}},methods:{onClick:function(){this.$store.dispatch("base/setValue",!this.storeValue)}}},s=(n(139),n(8)),l=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-shared-store"},[t("p",[this._v("\n    Store Value: "+this._s(this.storeValue)+" -\n    "),t("button",{on:{click:this.onClick}},[this._v("\n      Change Value\n    ")])])])}),[],!1,null,null,null).exports,o={components:{AtomHeadline:i.a,OrganismSharedStore:l},data:function(){return{headline:{overline:null,headline:"Custom-Element Example",subline:null}}},mounted:function(){n.e(4).then(n.bind(null,151))}},d=(n(141),Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"view-index"},[t("atom-headline",this._b({attrs:{"style-type":"view"}},"atom-headline",this.headline,!1)),this._v(" "),t("img",{attrs:{src:n(138)}}),this._v(" "),t("organism-shared-store")],1)}),[],!1,null,null,null));t.default=d.exports}}]);