(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eeaf"],{d838:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Add Item")]),r("form",{staticClass:"w-25 m-auto",on:{submit:function(t){return t.preventDefault(),e.create.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.item.name,expression:"item.name"}],staticClass:"form-control",class:{"is-invalid":e.errors.name},attrs:{type:"text",id:"name",placeholder:"Enter name"},domProps:{value:e.item.name},on:{input:function(t){t.target.composing||e.$set(e.item,"name",t.target.value)}}}),r("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.name))])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"quantity"}},[e._v("Quantity")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.item.quantity,expression:"item.quantity"}],staticClass:"form-control",class:{"is-invalid":e.errors.quantity},attrs:{type:"text",id:"quantity",placeholder:"Quantity"},domProps:{value:e.item.quantity},on:{input:function(t){t.target.composing||e.$set(e.item,"quantity",t.target.value)}}}),r("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.quantity))])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"price"}},[e._v("Price")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.item.price,expression:"item.price"}],staticClass:"form-control",class:{"is-invalid":e.errors.price},attrs:{type:"text",id:"price",placeholder:"Price"},domProps:{value:e.item.price},on:{input:function(t){t.target.composing||e.$set(e.item,"price",t.target.value)}}}),r("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.price))])]),r("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit"}},[e._v("Create")])]),r("button",{staticClass:"btn btn-secondary mt-3",on:{click:function(t){return e.$router.back()}}},[e._v("Cancel")])])},s=[],n=r("1da1"),i=(r("96cf"),r("b0c0"),r("bc3a")),o=r.n(i),c={created:function(){localStorage.getItem("token")||this.$router.push("/")},methods:{create:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,s,n,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("http://127.0.0.1:8000/api"),r={Authorization:"Bearer ".concat(localStorage.getItem("token"))},t.prev=2,t.next=5,o.a.post("".concat("http://127.0.0.1:8000/api","/item/"),e.item,{headers:r});case 5:a=t.sent,s=a.data,null!==s&&void 0!==s&&s.status?(e.$swal("success",s.message,"success"),e.$router.push("/items")):e.$swal("oops!","something went wrong! try again!!","error"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),401==t.t0.response.status?(localStorage.removeItem("token"),e.$router.push("/")):422==t.t0.response.status&&(u=t.t0.response.data,null!==(n=u.errors)&&void 0!==n&&n.name?e.errors.name=u.errors.name[0]:e.errors.name="",null!==(i=u.errors)&&void 0!==i&&i.quantity?e.errors.quantity=u.errors.quantity[0]:e.errors.quantity="",null!==(c=u.errors)&&void 0!==c&&c.price?e.errors.price=u.errors.price[0]:e.errors.price="");case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}},data:function(){return{item:{name:"",quantity:"",price:""},errors:{name:"",quantity:"",price:""}}}},u=c,l=r("2877"),m=Object(l["a"])(u,a,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21eeaf.e01b9e52.js.map