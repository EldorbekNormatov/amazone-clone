(this["webpackJsonpamazon-clone-app"]=this["webpackJsonpamazon-clone-app"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(21),i=c.n(a),r=(c(28),c(29),c(4)),o=(c(30),c(14)),j=c(7),l=c(0),d=Object(s.createContext)(),h=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(l.jsx)(d.Provider,{value:Object(s.useReducer)(t,c),children:n})},b=function(){return Object(s.useContext)(d)};var m=function(){var e=b(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("img",{src:"https://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:"",className:"HeaderLogo"})}),Object(l.jsxs)("div",{className:"headerSearch",children:[Object(l.jsx)("input",{type:"text",className:"headerSearchInput"}),Object(l.jsx)(o.a,{className:"headerSearchIcon"})]}),Object(l.jsxs)("div",{className:"headerNav",children:[Object(l.jsx)(j.b,{to:"/login",children:Object(l.jsxs)("div",{className:"headerOption",children:[Object(l.jsx)("span",{className:"headerOptionLineOne",children:"hello Guest"}),Object(l.jsx)("span",{className:"headerOptionLineTwo",children:" Sign In"})]})}),Object(l.jsx)(j.b,{to:"/Orders",children:Object(l.jsxs)("div",{className:"headerOption",children:[Object(l.jsx)("span",{className:"headerOptionLineOne",children:"Returns "}),Object(l.jsx)("span",{className:"headerOptionLineTwo",children:" & Orders "})]})}),Object(l.jsx)(j.b,{to:"/prime",children:Object(l.jsxs)("div",{className:"headerOption",children:[Object(l.jsx)("span",{className:"headerOptionLineOne",children:"Your"}),Object(l.jsx)("span",{className:"headerOptionLineTwo",children:" Prime "})]})}),Object(l.jsx)(j.b,{to:"/checkout",children:Object(l.jsxs)("div",{className:"headerOptionBasket",children:[Object(l.jsx)(o.b,{size:"2rem"}),Object(l.jsx)("span",{className:"headerOptionLineTwo headerBasketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})};c(37),c(38);var u=function(e){var t=e.id,c=e.title,s=e.image,n=e.price,a=e.rating,i=b(),o=Object(r.a)(i,2),j=(o[0],o[1]);return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsxs)("div",{className:"productInfo",children:[Object(l.jsx)("p",{children:c}),Object(l.jsxs)("p",{className:"productPrice",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:n})]}),Object(l.jsx)("div",{className:"productRating",children:Object(l.jsx)("p",{})})]}),Object(l.jsx)("img",{src:s,alt:""}),Object(l.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:s,price:n,rating:a}})},children:"Add to Basket "})]})};var O=function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"homeContainer",children:[Object(l.jsx)("img",{className:"homeImage",src:"https://cdn.andnowuknow.com/mainStoryImage/amazon_newstore_111119.png?2elFDH.NARL3RqUKy0Nq2e.e1THgJeWI",alt:""}),Object(l.jsxs)("div",{className:"homeRow",children:[Object(l.jsx)(u,{id:"22233366",title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",price:"19.99",image:"https://artofthekickstart.com/wp-content/uploads/2016/06/lean-startup.jpg"}),Object(l.jsx)(u,{id:"22233344",title:"Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)\r Powered by your KitchenAid Stand Mixer, fits all household KitchenAid Stand Mixers",price:"49.99",image:"https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"})]}),Object(l.jsxs)("div",{className:"homeRow",children:[Object(l.jsx)(u,{id:"22233355",title:"Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band",price:"150.45",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1594259786000"}),Object(l.jsx)(u,{id:"22233333",title:"Bose Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-in, Black\r\nVisit the Bose Store",price:"299.00",image:"https://images-na.ssl-images-amazon.com/images/I/81NI0UFz4zL._AC_SL1500_.jpg"}),Object(l.jsx)(u,{id:"22233322",title:"Samsung Galaxy S20 FE G780F 128GB Dual Sim GSM Unlocked Android Smart Phone - International Version - Cloud Lavender",price:"569.99",image:"https://images-na.ssl-images-amazon.com/images/I/71KPQP6MYxL._AC_SX679_.jpg"})]}),Object(l.jsx)("div",{className:"homeRow",children:Object(l.jsx)(u,{id:"22233311",title:"VIZIO 40-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Auto Game Mode and Low Latency Gaming (V405-H19)",price:"800.49",image:"https://images-na.ssl-images-amazon.com/images/I/81NCnG8UvYL._AC_SY355_.jpg"})})]})})},p=c(2),x=(c(39),c(40),c(23)),g=c.n(x),v=c(19),N=c(10),f=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},k=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(N.a)(Object(N.a)({},e),{},{basket:[].concat(Object(v.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),s=Object(v.a)(e.basket);return c>=0?s.splice(c,1):console.warn("can't remove product (id: ".concat(t.id,") as it isn't in the basket")),Object(N.a)(Object(N.a)({},e),{},{basket:s});case"SET_USER":return Object(N.a)(Object(N.a)({},e),{},{usre:t.user});default:return e}};var S=function(){var e=Object(p.f)(),t=b(),c=Object(r.a)(t,2),s=c[0].basket;return c[1],Object(l.jsxs)("div",{className:"subtotal",children:[Object(l.jsx)(g.a,{renderText:function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["subtotal (",s.length," items): ",Object(l.jsx)("strong",{children:e})]}),Object(l.jsxs)("small",{className:"subtotalGift",children:[Object(l.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:f(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(l.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to checkout"})]})};c(42);var y=function(e){var t=e.image,c=e.id,s=e.price,n=(e.rating,e.title),a=b(),i=Object(r.a)(a,2),o=(i[0].basket,i[1]);return Object(l.jsxs)("div",{className:"chekoutProduct",children:[Object(l.jsx)("img",{className:"checkoutProductImage",src:t,alt:""}),Object(l.jsxs)("div",{className:"checkoutProductInfo",children:[Object(l.jsx)("p",{className:"checkoutProductTitle",children:n}),Object(l.jsxs)("p",{className:"checkoutProductPrice",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:s})]}),Object(l.jsx)("button",{onClick:function(){o({type:"REMOVE_FROM_BASKET",id:c})},children:"Remove from Basket"})]})]})};var w=function(){var e=b(),t=Object(r.a)(e,2),c=t[0],s=c.basket,n=c.user;return t[1],Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsxs)("div",{className:"checkoutLeft",children:[Object(l.jsx)("img",{className:"checkoutAd",src:"https://www.karobargain.com/wp-content/uploads/2020/03/amazonupc.png",alt:""}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:null===n||void 0===n?void 0:n.email}),Object(l.jsx)("h2",{className:"checkoutTitle",children:"Your shopping bascket"}),s.map((function(e){return Object(l.jsx)(y,{id:e.id,title:e.title,image:e.image,price:e.price})}))]})]}),Object(l.jsx)("div",{className:"checkoutRight",children:Object(l.jsx)(S,{})})]})};c(43);var C=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),o=i[0],d=i[1];return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("img",{className:"loginLogo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png",alt:""})}),Object(l.jsxs)("div",{className:"loginContainer",children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h5",{children:"E-mail"}),Object(l.jsx)("input",{type:"text",value:c,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("h5",{children:"Password"}),Object(l.jsx)("input",{type:"password",value:o,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault()},type:"submit",className:"loginSignInButton",children:"Sign In"})]}),Object(l.jsx)("p",{children:"By signing-in you agree to Amazon's Condition of use & sale. Please see our Privacy Potice, our cookies Notice and our Interest-Based Ads Notice."}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault()},className:"loginRegisterButton",children:"Create your Amazon account"})]})]})};c(44);var I=function(){var e=b(),t=Object(r.a)(e,2),c=t[0],s=c.basket;return c.user,t[1],Object(l.jsx)("div",{className:"payment",children:Object(l.jsxs)("div",{className:"paymentContainer",children:[Object(l.jsxs)("h1",{children:["Checkout (",Object(l.jsxs)(j.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(l.jsx)("div",{className:"paymentSection",children:Object(l.jsx)("div",{className:"paymentTitle",children:Object(l.jsx)("h3",{children:"delivery"})})}),Object(l.jsxs)("div",{className:"paymentSection",children:[Object(l.jsx)("div",{className:"paymentTitle",children:Object(l.jsx)("h3",{children:"Review items delivery"})}),Object(l.jsx)("div",{className:"paymentItems",children:s.map((function(e){return Object(l.jsx)(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(l.jsx)("div",{className:"paymentSection",children:Object(l.jsxs)("div",{className:"paymentTitle",children:[Object(l.jsx)("h3",{children:"payment method"}),Object(l.jsx)("div",{className:"paymentDetails"})]})})]})})};var A=function(){return Object(l.jsx)("div",{className:"orders",children:Object(l.jsx)("h1",{children:"your orders "})})};var _=function(){return Object(l.jsx)("div",{})};var T=function(){return Object(l.jsx)(j.a,{children:Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{path:"/login",children:Object(l.jsx)(C,{})}),Object(l.jsxs)(p.a,{path:"/orders",children:[Object(l.jsx)(m,{}),Object(l.jsx)(A,{})]}),Object(l.jsxs)(p.a,{path:"/prime",children:[Object(l.jsx)(m,{}),Object(l.jsx)(_,{})]}),Object(l.jsxs)(p.a,{path:"/checkout",children:[Object(l.jsx)(m,{}),Object(l.jsx)(w,{})]}),Object(l.jsxs)(p.a,{path:"/payment",children:[Object(l.jsx)(m,{}),Object(l.jsx)(I,{})]}),Object(l.jsxs)(p.a,{path:"/",children:[Object(l.jsx)(m,{}),Object(l.jsx)(O,{})]})]})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{initialState:{basket:[],user:null},reducer:k,children:Object(l.jsx)(T,{})})}),document.getElementById("root")),L()}},[[45,1,2]]]);
//# sourceMappingURL=main.98e4be13.chunk.js.map