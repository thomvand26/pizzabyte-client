(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a.n(r),s=a(24),i=a.n(s),o=a(4),l=a(12),d="/",u="/register",j="/login",p="/products",m="/cart",b="/login-warning",h="/pay-method",O="/pay",f="/orders",v=function(){var e=Object(o.g)();return Object(n.jsxs)("div",{className:"page cartPage",children:[Object(n.jsx)(se,{type:se.types.NORMAL}),Object(n.jsxs)("main",{className:"container cartPage__main",children:[Object(n.jsx)(W,{isCart:!0,className:"cartPage__order"}),Object(n.jsxs)("div",{className:"carpage__buttonGroup buttonGroup",children:[Object(n.jsx)(ee,{onClick:function(){JSON.parse(localStorage.getItem("credentials"))?e.push(h):e.push(b)},children:"Bevestig"}),Object(n.jsx)(ee,{to:p,className:"button--textOnly",children:"Terug"})]})]})]})},x=a(7),g=function(){var e=Object(r.useState)(!1),t=Object(x.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("credentials"));c(!!e)}),[]);return Object(n.jsxs)("div",{className:"page homePage",children:[Object(n.jsx)(se,{type:se.types.LARGE}),Object(n.jsx)("main",{className:"homePage__main ".concat(a?"homePage__main--loggedIn":""),children:a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"homePage__buttonGroup",children:[Object(n.jsx)(ee,{to:p,className:"homePage__pizzaButton homePage__pizzaButton--loggedIn",children:"Pizza's"}),Object(n.jsx)(ee,{to:f,className:"button--secondary",children:"Mijn Bestellingen"})]}),Object(n.jsx)("div",{className:"homePage__buttonGroup",children:Object(n.jsx)(ee,{onClick:function(){localStorage.removeItem("credentials"),c(!1)},className:"button--textOnly",children:"Logout"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"homePage__buttonGroup",children:Object(n.jsx)(ee,{to:p,className:"homePage__pizzaButton",children:"Pizza's"})}),Object(n.jsxs)("div",{className:"homePage__buttonGroup homePage__buttonGroup--loginRegister",children:[Object(n.jsx)(ee,{to:j,className:"button--secondary",children:"Login"}),Object(n.jsx)(ee,{to:u,className:"button--secondary",children:"Registreer"})]})]})})]})},_=a(3),N=a.n(_),z=a(5),y="http://localhost:8080/wp-json/wp/v2",w="http://localhost:8080/wp-json/jwt-auth/v1/token",P=Object(r.createContext)(),C=function(){return Object(r.useContext)(P)},I=function(e){var t=e.children,a="".concat(y),r=function(){var e=Object(z.a)(N.a.mark((function e(){var t,n,r,c,s,i,o=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]&&o[0],n=o.length>1&&void 0!==o[1]?o[1]:null,r=[],t&&r.push("_embed"),[null,-1,"-1"].includes(n)||r.push("categories=".concat(n)),c=r.length>0?"?".concat(r.join("&")):"",s="".concat(a,"/pizza").concat(c),e.next=10,fetch(s);case 10:return i=e.sent,e.abrupt("return",i.json());case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(z.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(a,"/categories"),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(z.a)(N.a.mark((function e(t){var n,r,c=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>1&&void 0!==c[1]&&c[1],n="".concat(a,"/purchase?author=").concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(z.a)(N.a.mark((function e(t){var n,r,c,s,i=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]&&i[1],r=t.join(","),c="".concat(a,"/pizza_price?include=").concat(r).concat(n?"&_embed":""),e.next=5,fetch(c);case 5:return s=e.sent,e.abrupt("return",s.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(z.a)(N.a.mark((function e(t,n,r){var c,s,i,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(a,"/users/register"),s={username:t,email:n,password:r},i={method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)},e.next=5,fetch(c,i);case 5:return o=e.sent,e.abrupt("return",o.json());case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(z.a)(N.a.mark((function e(t){var n,r,c,s,i,o,l,d,u,j,p,m;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.firstname,c=t.lastname,s=t.postalcode,i=t.street,o=t.housenumber,l=t.customer,d="".concat(a,"/customer_data"),u={title:"".concat(n),status:"publish",fields:{firstname:r,lastname:c,postalcode:s,street:i,housenumber:o,customer:l}},j=JSON.parse(localStorage.getItem("credentials")).token,p={method:"post",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(j)},body:JSON.stringify(u)},e.next=7,fetch(d,p);case 7:return m=e.sent,e.abrupt("return",m.json());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(z.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(a,"/customer_data?customer=").concat(t),e.next=3,fetch(n);case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(z.a)(N.a.mark((function e(t){var n,r,c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(a,"/users/me"),r=t||JSON.parse(localStorage.getItem("credentials")).token,c={method:"get",headers:{Accept:"application/json",Authorization:"Bearer ".concat(r)}},e.next=5,fetch(n,c);case 5:return s=e.sent,e.abrupt("return",s.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={getAllProducts:r,getAllCategories:c,getPizzaPricesByIds:i,registerUser:o,createCustomerData:l,generateJWTToken:function(){var e=Object(z.a)(N.a.mark((function e(t,a){var n,r,c,s,i,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(w),r={username:t,password:a},c={method:"post",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)},e.next=5,fetch(n,c);case 5:return s=e.sent,e.next=8,s.json();case 8:return i=e.sent,e.next=11,u(i.token);case 11:return o=e.sent,i.user_id=o.id,s&&localStorage.setItem("credentials",JSON.stringify(i)),e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getAllOrdersFromUser:s,getCustomerData:d,postOrder:function(){var e=Object(z.a)(N.a.mark((function e(t){var n,r,c,s,i,o,l,d,u,j,p;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.customer_data,r=t.purchase,c=t.total,s=t.address,i=t.delivery_time,o="".concat(a,"/purchase"),l=JSON.parse(localStorage.getItem("credentials")),d=l.token,u={title:"".concat(s," (Bestelling via app)"),status:"publish",fields:{customer_data:n,purchase:r,total:c,address:s,delivery_time:i}},j={method:"post",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(d)},body:JSON.stringify(u)},e.next=7,fetch(o,j);case 7:return p=e.sent,e.abrupt("return",p.json());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return Object(n.jsx)(P.Provider,{value:j,children:t})},S=Object(r.createContext)(),k=function(){return Object(r.useContext)(S)},M={PRODUCT:0},T=function(e){var t=e.children,a=Object(r.useState)(-1),c=Object(x.a)(a,2),s=c[0],i=c[1],o={setModal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i({modalType:e,props:t})},clearModal:function(){i({modalType:-1,props:{}})},modalTypes:M};return Object(n.jsxs)(S.Provider,{value:o,children:[s.modalType===M.PRODUCT&&Object(n.jsx)(ie,{product:s.props}),t]})},A=function(){var e=C().generateJWTToken,t=Object(o.h)(),a=Object(o.g)(),r=function(){var n=Object(z.a)(N.a.mark((function n(r){var c,s,i;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),c=r.target.email.value,s=c,i=r.target.password.value,n.prev=4,n.next=7,e(s,i);case 7:JSON.parse(localStorage.getItem("credentials"))&&(t.pathname!==j&&t.pathname!==u||a.push(d)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"page loginPage",children:[Object(n.jsx)(se,{type:se.types.WITH_HOME}),Object(n.jsx)("main",{className:"container loginPage__main",children:Object(n.jsxs)("form",{action:"POST",onSubmit:r,className:"loginPage__form",children:[Object(n.jsxs)("div",{className:"input input--email",children:[Object(n.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(n.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"janjanssens@mail.com",required:!0})]}),Object(n.jsxs)("div",{className:"input input--password",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Wachtwoord"}),Object(n.jsx)("input",{type:"password",name:"password",id:"password",required:!0})]}),Object(n.jsxs)("div",{className:"buttonGroup loginPage__buttonGroup",children:[Object(n.jsx)(ee,{children:"Login"}),Object(n.jsx)(ee,{to:u,className:"button--textOnly",children:"Registreer"})]})]})})]})},E=function(){var e=Object(o.g)();return Object(r.useEffect)((function(){JSON.parse(localStorage.getItem("credentials"))&&e.push(h)}),[e]),Object(n.jsxs)("div",{className:"page loginWarningPage",children:[Object(n.jsx)(se,{type:se.types.NORMAL}),Object(n.jsxs)("main",{className:"container loginWarningPage__main",children:[Object(n.jsx)("h2",{className:"loginWarningPage__warningMessage",children:"Log in om een bestelling te kunnen maken"}),Object(n.jsxs)("div",{className:"buttonGroup loginWarningPage__buttonGroup",children:[Object(n.jsx)(ee,{to:j,className:"button--secondary",children:"Login"}),Object(n.jsx)(ee,{to:u,className:"button--secondary",children:"Registreer"})]})]})]})},L=a(17),F=a(6),B=Object(r.createContext)(),G=function(){return Object(r.useContext)(B)},J=function(e){var t=e.children,a={title:"Nieuwe bestelling via de client",status:"publish",fields:{pizzas:[{itemId:"".concat(23,"-",17,"-",Math.random(),"-").concat(Date.now()),pizzaId:23,pizzaName:"Pizza Veggie",pizzaPriceId:17,size:{id:5,link:"http://localhost:8080/size/medium/",name:"Normaal",slug:"medium",taxonomy:"size"},price:5}],address:"straat nummer woonplaats",purchase:"1x Pizza Kip Groot \u20ac5.50; 2x Pizza Veggi Groot \u20ac11.00;",total:16.5}},c=Object(r.useState)(a),s=Object(x.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)([]),d=Object(x.a)(l,2),u=d[0],j=d[1],p=C(),m=p.getCustomerData,b=p.postOrder;Object(r.useEffect)((function(){var e=[];i.fields.pizzas.forEach((function(t){var a=e.find((function(e){return e.pizzaId===t.pizzaId&&e.pizzaPriceId===t.pizzaPriceId}));a?e=e.map((function(e){return e.itemId===a.itemId?Object(F.a)(Object(F.a)({},a),{},{amount:a.amount+1}):e})):e.push(Object(F.a)(Object(F.a)({},t),{},{amount:1}))})),j(e)}),[i]);var h=function(){var e=Object(z.a)(N.a.mark((function e(){var t,n,r,c,s,i,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("credentials")),e.next=3,m(t.user_id);case 3:return n=e.sent[0],r=0,c=u.map((function(e){var t=e.amount*e.price;return r+=t,"".concat(e.amount,"x ").concat(e.pizzaName," ").concat(e.size.name," = \u20ac").concat(t)})),s="".concat(n.acf.street," ").concat(n.acf.housenumber," ").concat(n.acf.postalcode),i=new Date(Date.now()+36e5),l={customer_data:n.id,purchase:"Bestelling voor ".concat(n.acf.firstname," ").concat(n.acf.lastname,": ").concat(c.join("; ")),total:r,address:s,delivery_time:"".concat(i.toTimeString().split(" ")[0].slice(0,-3))},o(a),e.abrupt("return",b(l));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O={clearCart:function(){o(a)},addProductToCart:function(e){var t=e.product,a=e.pizzaPrice,n=null===a||void 0===a?void 0:a._embedded["wp:term"][0][0],r=a.acf.price;r=parseFloat(r),o((function(e){return Object(F.a)(Object(F.a)({},e),{},{fields:Object(F.a)(Object(F.a)({},e.fields),{},{pizzas:[].concat(Object(L.a)(e.fields.pizzas),[{itemId:"".concat(t.id,"-").concat(a.id,"-").concat(Math.random(),"-").concat(Date.now()),pizzaId:t.id,pizzaName:t.title.rendered,pizzaPriceId:a.id,size:n,price:r}])})})}))},duplicateCartItem:function(e){o((function(t){return Object(F.a)(Object(F.a)({},t),{},{fields:Object(F.a)(Object(F.a)({},t.fields),{},{pizzas:[].concat(Object(L.a)(t.fields.pizzas),[Object(F.a)(Object(F.a)({},t.fields.pizzas.find((function(t){return t.itemId===e}))),{},{itemId:(a=t.fields.pizzas.find((function(t){return t.itemId===e})),"".concat(null===a||void 0===a?void 0:a.pizzaId,"-").concat(null===a||void 0===a?void 0:a.pizzaPriceId,"-").concat(Math.random(),"-").concat(Date.now()))})])})});var a}))},removeProductFromCart:function(e){var t=e.pizzaId,a=e.pizzaPriceId,n=function(e){var n=e.filter((function(e){return e.pizzaId===t&&e.pizzaPriceId===a}));return n.pop(),n};o((function(e){return Object(F.a)(Object(F.a)({},e),{},{fields:Object(F.a)(Object(F.a)({},e.fields),{},{pizzas:[].concat(Object(L.a)((r=e.fields.pizzas,r.filter((function(e){return!(e.pizzaId===t&&e.pizzaPriceId===a)})))),Object(L.a)(n(e.fields.pizzas)))})});var r}))},currentOrder:i,uniquePizzasInCart:u,placeOrder:h};return Object(n.jsx)(B.Provider,{value:O,children:t})},D=a(16),R=function(e){var t=e.className,a=e.product,r=e.pizzaPrice,c=e.duplicateItemId,s=void 0===c?null:c,i=G(),o=i.addProductToCart,l=i.removeProductFromCart,d=i.duplicateCartItem;return Object(n.jsxs)("div",{className:"orderControls ".concat(t),children:[Object(n.jsx)("div",{className:"orderControls__add",onClick:function(){return function(e,t){l(s?{pizzaId:e.pizzaId,pizzaPriceId:e.pizzaPriceId}:{pizzaId:e.id,pizzaPriceId:t.id})}(a,r)},children:Object(n.jsx)(D.c,{})}),Object(n.jsx)("div",{className:"orderControls__remove",onClick:function(){return function(e,t){s?d(s):o({product:e,pizzaPrice:t})}(a,r)},children:Object(n.jsx)(D.a,{})})]})},H=function(e){var t=e.className,a=void 0===t?"":t;return Object(n.jsx)("svg",{className:"triangle ".concat(a),xmlns:"http://www.w3.org/2000/svg",width:"17",height:"15",viewBox:"0 0 17 15",children:Object(n.jsx)("path",{id:"A",className:"triangle__path",d:"M8.5,0,17,15H0Z"})})},W=function(e){var t=e.extendable,a=void 0!==t&&t,c=e.isCart,s=void 0!==c&&c,i=e.className,o=void 0===i?"":i,l=e.order,d=G().uniquePizzasInCart,u=Object(r.useState)(0),j=Object(x.a)(u,2),p=j[0],m=j[1],b=Object(r.useState)(!1),h=Object(x.a)(b,2),O=h[0],f=h[1];Object(r.useEffect)((function(){if(!((null===d||void 0===d?void 0:d.length)<1)&&s){var e=d.map((function(e){return e.amount*e.price})).reduce((function(e,t){return e+t}));m(e)}}),[d,s]),Object(r.useEffect)((function(){l&&m(l.acf.total)}),[l]);return Object(n.jsxs)("div",{className:"order ".concat(o),children:[Object(n.jsxs)("div",{className:"order__content",onClick:function(){a&&f((function(e){return!e}))},children:[s&&d.map((function(e){var t=e.size,a=e.price,r=e.amount,c=e.pizzaName,s=e.itemId;return Object(n.jsxs)("div",{className:"orderElement",children:[Object(n.jsx)("div",{className:"orderElement__orderAmount",children:r}),Object(n.jsxs)("div",{className:"orderElement__uniquePizza",children:[Object(n.jsx)("div",{className:"orderElement__pizzaName",children:c}),Object(n.jsxs)("div",{className:"orderElement__pizzaSize",children:[t.name,Object(n.jsxs)("div",{className:"orderElement__pizzaCost",children:["\u20ac",a]})]})]}),Object(n.jsx)(R,{className:"orderElement__orderControls",product:e,duplicateItemId:e.itemId})]},s)})),a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"order__header",children:[Object(n.jsx)("div",{className:"order__date",children:new Date(l.date).toLocaleString("nl").split(" ")[0]}),Object(n.jsx)("div",{className:"order__arrowContainer ".concat(O?"order__arrowContainer--extended":""),children:Object(n.jsx)(H,{className:"order__arrow"})})]}),Object(n.jsx)("div",{className:"order__collapseArea ".concat(O?"":"order__collapseArea--closed"),children:l.acf.purchase})]})]}),Object(n.jsxs)("div",{className:"order__footer ".concat(O?"":"order__footer--closed"),children:[Object(n.jsxs)("div",{className:"order__total",children:[Object(n.jsx)("div",{className:"order__totalLabel",children:"Totaal"}),Object(n.jsxs)("div",{className:"order__totalAmount",children:["\u20ac",p]})]}),Object(n.jsxs)("div",{className:"order__deliveryTime",children:[Object(n.jsx)("div",{className:"order__deliveryTimeLabel",children:"Levering: "}),Object(n.jsx)("div",{className:"order__deliveryTimeHour",children:s?"Binnen ongeveer 1 uur":"om ".concat(l.acf.delivery_time)})]})]})]})},q=function(e){var t=e.className,a=void 0===t?"":t,c=C().getAllOrdersFromUser,s=Object(r.useState)([]),i=Object(x.a)(s,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){Object(z.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("credentials")).user_id,e.next=3,c(t);case 3:return a=e.sent,l(a),console.log(t,a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))()}),[c]),Object(n.jsx)("div",{className:"orderList ".concat(a),children:o.map((function(e){return Object(n.jsx)(W,{extendable:!0,order:e},e.id)}))})},U=function(){return Object(n.jsxs)("div",{className:"page ordersPage",children:[Object(n.jsx)(se,{type:se.types.NORMAL}),Object(n.jsxs)("main",{className:"container ordersPage__main",children:[Object(n.jsx)(q,{}),Object(n.jsx)(ee,{to:d,children:"Terug"})]})]})},K=function(){var e=G().placeOrder,t=Object(o.g)(),a=function(){var a=Object(z.a)(N.a.mark((function a(){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e();case 2:t.push(f);case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"page payPage",children:Object(n.jsxs)("main",{className:"container payPage__main",children:[Object(n.jsx)("div",{className:"payPage__invisibleTop"}),Object(n.jsx)("h2",{className:"payPage__message",children:"Betaal"}),Object(n.jsx)(ee,{onClick:a,children:"Bevestig"})]})})},V=function(){return Object(n.jsxs)("div",{className:"page payMethodPage",children:[Object(n.jsx)(se,{type:se.types.NORMAL}),Object(n.jsxs)("main",{className:"container payMethodPage__main",children:[Object(n.jsx)("h2",{className:"payMethodPage__message",children:"Kies uw betaalmethode"}),Object(n.jsxs)("div",{className:"buttonGroup payMethodPage__buttonGroup",children:[Object(n.jsx)(ee,{to:O,children:"Bancontact"}),Object(n.jsx)(ee,{to:O,children:"PayPal"})]}),Object(n.jsx)(ee,{to:m,className:"button--textOnly",children:"Terug"})]})]})},Z=function(){var e,t,a,c,s=G().currentOrder,i=C(),o=i.getAllCategories,l=i.getAllProducts,d=Object(r.useState)([]),u=Object(x.a)(d,2),j=u[0],p=u[1],b=Object(r.useState)([]),h=Object(x.a)(b,2),O=h[0],f=h[1],v=function(){var e=Object(z.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return t=e.sent,(a=(a=t.filter((function(e){return"Geen categorie"!==e.name}))).map((function(e){return{name:e.name,value:e.id}}))).unshift({name:"Alle",value:"-1"}),p(a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(z.a)(N.a.mark((function e(){var t,a,n=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:null,e.next=3,l(!0,t);case 3:return a=e.sent,f(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){g(),v()}),[]);return Object(n.jsxs)("div",{className:"page productsPage",children:[Object(n.jsx)(se,{type:se.types.WITH_HOME}),Object(n.jsxs)("main",{className:"container productsPage__main",children:[Object(n.jsx)("section",{className:"productsPage__filterSection",children:Object(n.jsx)(te,{options:j,placeholder:"Category",onChange:function(e){g(e.value)}})}),Object(n.jsx)("section",{className:"productsPage__results",children:Object(n.jsx)(oe,{allProducts:O})})]}),(null===s||void 0===s||null===(e=s.fields)||void 0===e||null===(t=e.pizzas)||void 0===t?void 0:t.length)>0&&Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)(ee,{to:m,className:"button--secondary button--order",children:["Bestel"," (".concat(null===s||void 0===s||null===(a=s.fields)||void 0===a||null===(c=a.pizzas)||void 0===c?void 0:c.length,")")]})})]})},Q=function(){var e=C(),t=e.registerUser,a=e.createCustomerData,r=e.generateJWTToken,c=function(){var e=Object(z.a)(N.a.mark((function e(n){var c,s,i,o,l,d,u,j;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=n.target.firstName.value,s=n.target.lastName.value,i=n.target.email.value,o=n.target.postalCode.value,l=n.target.street.value,d=n.target.houseNumber.value,u=n.target.password.value,e.prev=8,e.next=11,t(i,n.target.email.value,u);case 11:return j=e.sent,e.next=14,r(i,u);case 14:return e.next=16,a({username:i,firstname:c,lastname:s,postalcode:o,street:l,housenumber:d,customer:j.id});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"page registerPage",children:[Object(n.jsx)(se,{type:se.types.WITH_HOME}),Object(n.jsx)("main",{className:"container registerPage__main",children:Object(n.jsxs)("form",{action:"POST",onSubmit:c,className:"registerPage__form",children:[Object(n.jsxs)("div",{className:"input input--text",children:[Object(n.jsx)("label",{htmlFor:"firstName",children:"Voornaam"}),Object(n.jsx)("input",{type:"text",name:"firstName",id:"firstName",placeholder:"Jan",required:!0})]}),Object(n.jsxs)("div",{className:"input input--text",children:[Object(n.jsx)("label",{htmlFor:"lastName",children:"Achternaam"}),Object(n.jsx)("input",{type:"text",name:"lastName",id:"lastName",placeholder:"Janssens"})]}),Object(n.jsxs)("div",{className:"input input--email",children:[Object(n.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(n.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"janjanssens@mail.com",required:!0})]}),Object(n.jsxs)("div",{className:"input input--postalCode",children:[Object(n.jsx)("label",{htmlFor:"postalCode",children:"Postcode"}),Object(n.jsx)("input",{type:"test",name:"postalCode",id:"postalCode",placeholder:"9000",required:!0})]}),Object(n.jsxs)("div",{className:"registerPage__streetNumberGroup",children:[Object(n.jsxs)("div",{className:"input input--street",children:[Object(n.jsx)("label",{htmlFor:"street",children:"Straat"}),Object(n.jsx)("input",{type:"test",name:"street",id:"street",placeholder:"Korenmarkt",required:!0})]}),Object(n.jsxs)("div",{className:"input input--houseNumber",children:[Object(n.jsx)("label",{htmlFor:"houseNumber",children:"Huisnummer"}),Object(n.jsx)("input",{type:"test",name:"houseNumber",id:"houseNumber",placeholder:"1",required:!0})]})]}),Object(n.jsxs)("div",{className:"input input--password",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Kies een wachtwoord"}),Object(n.jsx)("input",{type:"password",name:"password",id:"password",required:!0})]}),Object(n.jsxs)("div",{className:"buttonGroup registerPage__buttonGroup",children:[Object(n.jsx)(ee,{children:"Registreer"}),Object(n.jsx)(ee,{to:j,className:"button--textOnly",children:"Login"})]})]})})]})},X=function(e){var t=e.children,a=Object(o.h)(),c=Object(o.g)(),s=k().clearModal;return Object(r.useEffect)((function(){s(),JSON.parse(localStorage.getItem("credentials"))&&(a.pathname!==j&&a.pathname!==u||c.push(d))}),[a,c]),Object(n.jsx)(n.Fragment,{children:t})};function Y(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(l.a,{basename:"/",children:[Object(n.jsx)(X,{}),Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,path:d,component:g}),Object(n.jsx)(o.a,{from:"/home",to:d}),Object(n.jsx)(o.b,{exact:!0,path:p,component:Z}),Object(n.jsx)(o.b,{exact:!0,path:m,component:v}),Object(n.jsx)(o.b,{exact:!0,path:u,component:Q}),Object(n.jsx)(o.b,{exact:!0,path:j,component:A}),Object(n.jsx)(o.b,{exact:!0,path:b,component:E}),Object(n.jsx)(o.b,{exact:!0,path:h,component:V}),Object(n.jsx)(o.b,{exact:!0,path:O,component:K}),Object(n.jsx)(o.b,{exact:!0,path:f,component:U})]})]})})}var $=a(26),ee=function(e){var t=e.className,a=void 0===t?"":t,r=e.children,c=e.to,s=e.onClick,i=Object($.a)(e,["className","children","to","onClick"]),l=Object(o.g)();return Object(n.jsx)("button",Object(F.a)(Object(F.a)({type:"submit",className:"button ".concat(a),onClick:function(e){s&&s(e),c&&l.push(c)}},i),{},{children:r}))},te=function(e){var t=e.options,a=e.selectedOption,c=void 0===a?null:a,s=e.placeholder,i=e.onChange,o=Object(r.useState)(!1),l=Object(x.a)(o,2),d=l[0],u=l[1],j=s||(null===c||void 0===c?void 0:c.name)||"DEFAULT",p=Object(r.useState)({name:j}),m=Object(x.a)(p,2),b=m[0],h=m[1],O=function(){u((function(e){return!e}))};return Object(n.jsxs)("div",{className:"dropdown",children:[Object(n.jsxs)("div",{className:"dropdown__main".concat(d?" dropdown__main--open":""),onClick:O,children:[b.name,Object(n.jsx)(H,{})]}),Object(n.jsx)("div",{className:"dropdown__list".concat(d?"":" dropdown__list--hide"),children:t.map((function(e){return Object(n.jsx)("div",{className:"dropdown__option",onClick:function(){return function(e){h(e),O(),i&&i(e)}(e)},children:e.name},e.value)}))})]})},ae=a.p+"static/media/Logo.842a972a.svg",ne=function(e){var t=e.className,a=void 0===t?"":t;return Object(n.jsx)("div",{className:"logo ".concat(a),children:Object(n.jsx)("img",{src:ae,alt:"Pizza Byte Logo"})})},re=a(27),ce={NORMAL:0,WITH_HOME:1,LARGE:2},se=function(e){var t=e.type,a="",r="",c=Object(n.jsx)(n.Fragment,{});switch(t){case ce.LARGE:a=" header--large",r="logo--large";break;case ce.WITH_HOME:a=" header--withHome",c=Object(n.jsx)(l.b,{to:d,className:"header__homeButton",children:Object(n.jsx)(re.a,{})})}return Object(n.jsxs)("header",{className:"header".concat(a," container"),children:[Object(n.jsx)(ne,{className:r}),c]})};se.types=ce;var ie=function(e){var t,a,c=e.product,s=k().clearModal,i=G().currentOrder,o=C().getPizzaPricesByIds,l=(null===c||void 0===c||null===(t=c.title)||void 0===t?void 0:t.rendered)||"",d=(null===c||void 0===c?void 0:c._embedded["wp:featuredmedia"][0].source_url)||"",u=(null===c||void 0===c||null===(a=c.acf)||void 0===a?void 0:a.ingredients)||"",j=Object(r.useState)([]),p=Object(x.a)(j,2),m=p[0],b=p[1],h=Object(r.useState)({}),O=Object(x.a)(h,2),f=O[0],v=O[1];return Object(r.useEffect)((function(){var e=i.fields.pizzas.filter((function(e){return e.pizzaId===c.id}));v(e)}),[i,c.id]),Object(r.useEffect)((function(){Object(z.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.acf.prices.map((function(e){return e.ID})),e.next=3,o(t,!0);case 3:a=e.sent,b(a);case 5:case"end":return e.stop()}}),e)})))()}),[c,o]),Object(n.jsxs)("div",{className:"modal productModal",children:[Object(n.jsxs)("div",{className:"modal__inner",children:[Object(n.jsx)("div",{className:"modal__close",children:Object(n.jsx)(D.b,{onClick:s})}),Object(n.jsxs)("div",{className:"productModal__info",children:[Object(n.jsx)("div",{className:"productModal__imageContainer",children:Object(n.jsx)("img",{src:d,alt:l,className:"productModal__image"})}),Object(n.jsx)("h3",{className:"productModal__productName",children:l}),Object(n.jsx)("p",{className:"productModal__productDescription",children:u})]}),Object(n.jsx)("div",{className:"productModal__orderList",children:m.map((function(e){var t=null===e||void 0===e?void 0:e._embedded["wp:term"][0][0],a=e.acf.price;a=(a=".00"===a.slice(-3)?a.slice(0,-3):a).replace(".",",");var r=f.filter((function(t){return t.size.id===e.acf.formaat})).length;return Object(n.jsxs)("div",{className:"productModal__order",children:[Object(n.jsx)("div",{className:"productModal__orderCount",children:r}),Object(n.jsx)("div",{className:"productModal__sizeName",children:t.name}),Object(n.jsxs)("div",{className:"productModal__orderCost",children:["\u20ac",a]}),Object(n.jsx)(R,{className:"productModal__orderControls",product:c,pizzaPrice:e})]},t.slug)}))})]}),Object(n.jsx)("div",{className:"modal__bg",onClick:s})]})},oe=function(e){var t=e.allProducts;return Object(n.jsx)("div",{className:"productList",children:t.map((function(e){return Object(n.jsx)(le,{product:e},e.id)}))})},le=function(e){var t,a=e.product,r=(null===a||void 0===a||null===(t=a.title)||void 0===t?void 0:t.rendered)||"",c=(null===a||void 0===a?void 0:a._embedded["wp:featuredmedia"][0].source_url)||"",s=k().setModal;return Object(n.jsxs)("div",{className:"productCard",onClick:function(){s(M.PRODUCT,a)},children:[Object(n.jsx)("div",{className:"productCard__imageContainer",children:Object(n.jsx)("img",{className:"productCard__image",src:c,alt:r})}),Object(n.jsx)("div",{className:"productCard__name",children:r})]})},de=(a(39),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))});i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(I,{children:Object(n.jsx)(J,{children:Object(n.jsx)(T,{children:Object(n.jsx)(Y,{})})})})}),document.getElementById("root")),de()}},[[40,1,2]]]);
//# sourceMappingURL=main.d5028288.chunk.js.map