(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{b612:function(e,t,a){"use strict";t["a"]={computed:{otherUserDetails:function(){return this.$store.state.LedgerStore.users[this.$route.params.otherUserId]?this.$store.state.LedgerStore.users[this.$route.params.otherUserId]:{}}}}},eb60:function(e,t,a){"use strict";var r=a("fbda"),s=a.n(r);s.a},f241:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",[a("q-toolbar",[e.userDetails.userId?a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"account_box"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}):e._e(),a("br"),"/"!=e.$route.path&&e.userDetails.userId?a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{icon:"arrow_back",flat:"",dense:"",label:"Back"}}):e._e(),a("q-toolbar-title",[a("q-btn",{attrs:{flat:"",exact:"",to:"/"}},[e._v(" Ledger App ")])],1),e.userDetails.userId?e._e():a("div",[a("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{exact:"",to:"/auth",outline:"",clickable:"","icon-right":"account_box",label:"Login"}})],1),e.userDetails.userId?a("div",[a("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{outline:"",clickable:"","icon-right":"exit_to_app"},on:{click:e.logoutUser}},[e._v("\n                    Logout\n                ")])],1):e._e()],1),a("div",{staticClass:"q-px-lg q-pt-md q-mb-md"},[a("q-fab",{staticClass:"my-fab-btn q-mb-sm",attrs:{"label-position":"left",color:"white",square:"",dense:"",outline:"",icon:"menu",direction:"right"},model:{value:e.fab1,callback:function(t){e.fab1=t},expression:"fab1"}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{exact:"",to:"/",clickable:""}},[a("q-item-section",{staticClass:"q-pa-sm q-ml-none"},[a("q-icon",{attrs:{name:"list"}}),e._v("\n                        Dashbaord\n                    ")],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{exact:"",to:"/history",clickable:""}},[a("q-item-section",{staticClass:"q-pa-sm"},[a("q-icon",{attrs:{name:"history"}}),e._v("\n\n                        History\n                    ")],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{exact:"",to:"/users",clickable:""}},[a("q-item-section",{staticClass:"q-pa-sm"},[a("q-icon",{attrs:{name:"supervised_user_circle"}}),e._v("\n\n                        Users\n                    ")],1)],1)],1),a("div",{staticClass:"text-h5"},[e._v("\n                "+e._s(e.title)+"\n            ")]),a("div",{staticClass:"text-subtitle-1"},[e._v("\n                "+e._s(e.todaysDate)+"\n            ")])],1),a("q-img",{staticClass:"header-image absolute-top",attrs:{src:"statics/mountain.jpg"}}),a("div",{staticClass:"absolute-bottom-right z-max"},[e._v("\n            "+e._s(e.loggedInUser)+"\n        ")])],1),a("q-drawer",{attrs:{width:200,breakpoint:400,elevated:"",overlay:""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 185px)","margin-top":"185px","border-right":"1px solid #ddd"}}),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"185px"},attrs:{src:"statics/mountain.jpg"}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),e.userDetails.userId?a("div",{staticClass:"text-weight-bold"},[e._v("\n                    "+e._s(e.userDetails.name)+"\n                ")]):e._e()],1)]),e.leftDrawerOpen?a("div",[a("div",{staticClass:"q-mini-drawer-hide absolute",staticStyle:{top:"15px",right:"-12px"}},[a("q-btn",{attrs:{dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_left"},on:{click:function(t){e.leftDrawerOpen=!1}}})],1)]):e._e()],1),a("q-page-container",[a("keep-alive",[e.loading?a("q-inner-loading",[a("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1):e._e(),a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},s=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("6762"),a("2fdb"),a("c47a")),n=a.n(i),o=a("bd4c"),c=a("2a19"),l=a("2f62"),u=a("b612");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={name:"MyLayout",mixins:[u["a"]],data:function(){return{loading:!0,fab1:!1,leftDrawerOpen:!1}},methods:p({},Object(l["b"])("LedgerStore",["logoutUser"]),{showNotification:function(e,t){}}),computed:p({},Object(l["d"])("LedgerStore",["userDetails","loggedInUser"]),{todaysDate:function(){var e=Date.now();return o["a"].formatDate(e,"dddd, DD MMMM ")},title:function(){var e=this.$route.path;return"/"==e?"Ledger App ":"/users"==e?"User List ":"/history"==e?"Record History ":e.includes("/chat")?this.otherUserDetails.name:"/auth"==e?"Login ":void 0}}),mounted:function(){var e=this;this.leftDrawerOpen=!1,this.$router.beforeEach((function(t,a,r){t.meta.requiresAuth?(console.log("xxx"),console.log(e.userDetails),e.userDetails.userId?r():c["a"].create({type:"warning",message:"Login first"})):r()})),this.loading=!1}},m=b,f=(a("eb60"),a("2877")),g=a("eebe"),v=a.n(g),h=a("4d5a"),q=a("e359"),w=a("65c6"),D=a("9c40"),y=a("6ac5"),_=a("c294"),O=a("66e5"),x=a("4074"),k=a("0016"),j=a("068f"),Q=a("9404"),C=a("4983"),I=a("cb32"),L=a("09e3"),S=a("74f7"),U=a("cf57"),P=a("2eeb"),$=a("714f"),N=Object(f["a"])(m,r,s,!1,null,null,null);t["default"]=N.exports;v()(N,"components",{QLayout:h["a"],QHeader:q["a"],QToolbar:w["a"],QBtn:D["a"],QToolbarTitle:y["a"],QFab:_["a"],QItem:O["a"],QItemSection:x["a"],QIcon:k["a"],QImg:j["a"],QDrawer:Q["a"],QScrollArea:C["a"],QAvatar:I["a"],QPageContainer:L["a"],QInnerLoading:S["a"],QSpinnerGears:U["a"]}),v()(N,"directives",{GoBack:P["a"],Ripple:$["a"]})},fbda:function(e,t,a){}}]);