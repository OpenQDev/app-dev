(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{854:function(t,e,n){var content=n(867);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("6a9b651e",content,!0,{sourceMap:!1})},866:function(t,e,n){"use strict";n(854)},867:function(t,e,n){var o=n(27)(!1);o.push([t.i,".loader__dot{-webkit-animation:blink 1s infinite;animation:blink 1s infinite}.loader__dot:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.loader__dot:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}",""]),t.exports=o},878:function(t,e,n){"use strict";n.r(e);n(81);var o={layout:"auth",data:function(){return{error:!1}},mounted:function(){var t=this,code=this.$route.query.code;code&&this.$axios.$post("https://octobay.uber.space/github/access-token",{code:code}).then((function(e){e.accessToken?setTimeout((function(){localStorage.setItem("github_access_token",e.accessToken),t.$router.push("/")}),1e3):t.error=!0})).catch((function(){return t.error=!0}))}},c=(n(866),n(11)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-auto text-center"},[t.error?n("div",[n("h3",{staticClass:"text-secondary mt-5 mb-0"},[t._v("Oops.")]),t._v(" "),n("div",{staticClass:"text-muted"},[t._v("There was an error.")]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-secondary mt-3",attrs:{to:"/"}},[t._v("Back to App")])],1):n("div",[n("h3",{staticClass:"text-secondary mt-5 mb-0"},[t._v("One moment please.")]),t._v(" "),n("div",{staticClass:"text-muted"},[t._v("You will be redirected.")]),t._v(" "),n("h1",{staticClass:"text-muted-lightest mt-3"},[n("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);