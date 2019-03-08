webpackJsonp([0],{0:function(t,e){},"3DCY":function(t,e){},"5NFu":function(t,e){},AJqI:function(t,e,s){"use strict";var a={name:"edit",data:function(){return{customer:{},alert:""}},methods:{fetchCustomer:function(t){this.$http.get("https://rest-api-customer-manager.herokuapp.com/customer/"+t).then(function(t){this.customer=t.body})},updateCustomer:function(t){if(this.customer.first_name&&this.customer.last_name&&this.customer.phone&&this.customer.email&&this.customer.address&&this.customer.city&&this.customer.state){var e={first_name:this.customer.first_name,last_name:this.customer.last_name,phone:this.customer.phone,email:this.customer.email,address:this.customer.address,city:this.customer.city,state:this.customer.state};this.$http.put("https://rest-api-customer-manager.herokuapp.com/customer/update/"+this.$route.params.id,e).then(function(t){this.$router.push({path:"/",query:{alert:"updated"}})}),t.preventDefault()}else this.alert="Please fill in all the required fields.";t.preventDefault()}},created:function(){this.fetchCustomer(this.$route.params.id)},components:{Alert:s("yL53").a}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit container my-md-3"},[t.alert?s("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"pb-2 mt-4 mb-4 border-bottom"},[t._v("Edit Customer")]),t._v(" "),s("form",{on:{submit:t.updateCustomer}},[s("div",{staticClass:"card mb-4 card-body bg-light"},[s("h4",{staticClass:"card-title"},[t._v("Customer Info")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("First Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.first_name,expression:"customer.first_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.customer.first_name},on:{input:function(e){e.target.composing||t.$set(t.customer,"first_name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Last Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.last_name,expression:"customer.last_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.customer.last_name},on:{input:function(e){e.target.composing||t.$set(t.customer,"last_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"card mb-4 card-body bg-light"},[s("h4",{staticClass:"card-title"},[t._v("Customer Contact")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Phone")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.customer.phone},on:{input:function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"card mb-4 card-body bg-light"},[s("h4",{staticClass:"card-title"},[t._v("Customer Location")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.address,expression:"customer.address"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Address"},domProps:{value:t.customer.address},on:{input:function(e){e.target.composing||t.$set(t.customer,"address",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("City")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.city,expression:"customer.city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"City"},domProps:{value:t.customer.city},on:{input:function(e){e.target.composing||t.$set(t.customer,"city",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("State")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.state,expression:"customer.state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"State"},domProps:{value:t.customer.state},on:{input:function(e){e.target.composing||t.$set(t.customer,"state",e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])],1)},staticRenderFns:[]};var o=s("VU/8")(a,r,!1,function(t){s("q9Nl")},"data-v-39581eff",null);e.a=o.exports},B5mc:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("vCustomer")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)]),t._v(" "),s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/add"}},[t._v("Add Customer")])],1)])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var o=s("VU/8")({name:"App"},r,!1,function(t){s("TJPY")},null,null).exports,i=s("YaEn"),n=s("8+8L");a.a.use(n.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,components:{App:o},template:"<App/>"})},TJPY:function(t,e){},Uqk1:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container my-md-3"},[s("h1",{staticClass:"pb-2 mt-4 mb-4 border-bottom"},[t._v(t._s(t.customer.first_name)+" "+t._s(t.customer.last_name)+"\n\t\t\t"),s("span",{staticClass:"float-right"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/edit/"+t.customer._id}},[t._v("Edit")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteCustomer(t.customer._id)}}},[t._v("Delete")])],1)]),t._v(" "),s("ul",{staticClass:"list-group mb-4"},[s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"fas fa-mobile-alt mr-4"}),t._v(t._s(t.customer.phone))]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"far fa-envelope mr-4"}),t._v(t._s(t.customer.email))])]),t._v(" "),s("ul",{staticClass:"list-group mb-4"},[s("li",{staticClass:"list-group-item"},[t._v(" "+t._s(t.customer.address))]),t._v(" "),s("li",{staticClass:"list-group-item"},[t._v(t._s(t.customer.city))]),t._v(" "),s("li",{staticClass:"list-group-item"},[t._v(t._s(t.customer.state))])])])},staticRenderFns:[]};var r=s("VU/8")({name:"customerdetails",data:function(){return{customer:""}},methods:{fetchCustomer:function(t){this.$http.get("https://rest-api-customer-manager.herokuapp.com/customer/"+t).then(function(t){this.customer=t.body})},deleteCustomer:function(t){this.$http.delete("https://rest-api-customer-manager.herokuapp.com/customer/delete/"+t).then(function(t){this.$router.push({path:"/",query:{alert:"deleted"}})})}},created:function(){this.fetchCustomer(this.$route.params.id)}},a,!1,function(t){s("3DCY")},"data-v-3154b992",null);e.a=r.exports},YJUc:function(t,e,s){"use strict";var a={name:"customers",data:function(){return{customers:[],alert:"",filterInput:""}},methods:{fetchCustomers:function(){this.$http.get("https://rest-api-customer-manager.herokuapp.com/customers").then(function(t){this.customers=t.body})},filterBy:function(t,e){return t.filter(function(t){return t.last_name.toLowerCase().indexOf(e.toLowerCase().trim())>=0})}},created:function(){var t=this.$route.query.alert;t&&(this.alert="Customer "+t+"!"),this.fetchCustomers()},updated:function(){this.fetchCustomers()},components:{Alert:s("yL53").a}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customers container my-md-3"},[t.alert?s("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"pb-2 mt-4 mb-4 border-bottom"},[t._v("Manage Customers")]),t._v(" "),s("form",[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.filterInput,expression:"filterInput"}],staticClass:"form-control",attrs:{placeholder:"Enter Last Name"},domProps:{value:t.filterInput},on:{input:function(e){e.target.composing||(t.filterInput=e.target.value)}}})])]),t._v(" "),s("table",{staticClass:"table table-striped table-bordered"},[t._m(0),t._v(" "),s("tbody",t._l(t.filterBy(t.customers,t.filterInput),function(e){return s("tr",{key:e._id},[s("td",[t._v(t._s(e.first_name))]),t._v(" "),s("td",[t._v(t._s(e.last_name))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-info",attrs:{to:"/customer/"+e._id}},[t._v("View")])],1)])}),0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("First Name")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Last Name")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Email")]),this._v(" "),e("th")])])}]};var o=s("VU/8")(a,r,!1,function(t){s("rzdt")},"data-v-695643c9",null);e.a=o.exports},YaEn:function(t,e,s){"use strict";(function(t){var a=s("7+uW"),r=s("/ocq"),o=s("YJUc"),i=s("c27y"),n=s("il+h"),c=s("Uqk1"),l=s("AJqI");a.a.use(r.a),e.a=new r.a({mode:"history",base:t,routes:[{path:"/",component:o.a},{path:"/about",component:i.a},{path:"/add",component:n.a},{path:"/customer/:id",component:c.a},{path:"/edit/:id",component:l.a}]})}).call(e,"/")},c27y:function(t,e,s){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about container my-md-3"},[e("h1",{staticClass:"pb-2 mt-4 mb-4 border-bottom"},[this._v("About")]),this._v(" "),e("p",[this._v("This is a customer manager app built with the Vue.js framework")]),this._v(" "),e("footer",{staticClass:"blockquote-footer"},[this._v("Version 1.0.0")])])}]};var r=s("VU/8")({name:"about",data:function(){return{}}},a,!1,function(t){s("vmC1")},"data-v-16dfd9fc",null);e.a=r.exports},"il+h":function(t,e,s){"use strict";var a={name:"add",data:function(){return{customer:{},alert:""}},methods:{addCustomer:function(t){if(this.customer.first_name&&this.customer.last_name&&this.customer.phone&&this.customer.email&&this.customer.address&&this.customer.city&&this.customer.state){var e={first_name:this.customer.first_name,last_name:this.customer.last_name,phone:this.customer.phone,email:this.customer.email,address:this.customer.address,city:this.customer.city,state:this.customer.state};this.$http.post("https://rest-api-customer-manager.herokuapp.com/customer/add",e).then(function(t){this.$router.push({path:"/",query:{alert:"created"}})}),t.preventDefault()}else this.alert="Please fill in all the required fields.";t.preventDefault()}},components:{Alert:s("yL53").a}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add container my-md-3"},[t.alert?s("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"pb-2 mt-4 mb-4 border-bottom"},[t._v("Add Customer")]),t._v(" "),s("form",{on:{submit:t.addCustomer}},[s("div",{staticClass:"card mb-4 card-body bg-light"},[s("h4",{staticClass:"card-title"},[t._v("Customer Info")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("First Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.first_name,expression:"customer.first_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.customer.first_name},on:{input:function(e){e.target.composing||t.$set(t.customer,"first_name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Last Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.last_name,expression:"customer.last_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.customer.last_name},on:{input:function(e){e.target.composing||t.$set(t.customer,"last_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"card mb-4 card-body bg-light"},[s("h4",{staticClass:"card-title"},[t._v("Customer Contact")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Phone")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.customer.phone},on:{input:function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"card mb-4 card-body bg-light"},[s("h4",{staticClass:"card-title"},[t._v("Customer Location")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.address,expression:"customer.address"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Address"},domProps:{value:t.customer.address},on:{input:function(e){e.target.composing||t.$set(t.customer,"address",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("City")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.city,expression:"customer.city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"City"},domProps:{value:t.customer.city},on:{input:function(e){e.target.composing||t.$set(t.customer,"city",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("State")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.state,expression:"customer.state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"State"},domProps:{value:t.customer.state},on:{input:function(e){e.target.composing||t.$set(t.customer,"state",e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])],1)},staticRenderFns:[]};var o=s("VU/8")(a,r,!1,function(t){s("B5mc")},"data-v-b66615f0",null);e.a=o.exports},q9Nl:function(t,e){},rzdt:function(t,e){},vmC1:function(t,e){},yL53:function(t,e,s){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[this._v("\n\t"+this._s(this.message)+"\n\t"),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var r=s("VU/8")({name:"alert",props:["message"],data:function(){return{}}},a,!1,function(t){s("5NFu")},"data-v-1122ee35",null);e.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.120cd9c5ed364d27af18.js.map