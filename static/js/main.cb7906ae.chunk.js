(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(17),r=n.n(i),s=(n(52),n(7)),d=n(68),l=n(67),j=n(70),h=(n(53),n(2)),o=function(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),a=n[0],i=n[1],r=window.innerWidth<=1024;return Object(c.useEffect)((function(){var t=new Date;t.setDate(t.getDate()+e.index);var n=t.toLocaleDateString("en-en",{weekday:"long"});i(n)})),Object(h.jsx)(j.a,{bg:"Dark",className:e.active?"day-active":"day",children:Object(h.jsxs)(j.a.Body,{className:"card-body-custom",children:[Object(h.jsx)(j.a.Title,{className:"day-name",children:a}),Object(h.jsxs)("div",{className:"day-body",children:[!r&&Object(h.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.data.weather[0].icon,"@2x.png")}),r&&Object(h.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.data.weather[0].icon,".png")})]}),Object(h.jsxs)(j.a.Title,{children:[Math.round(e.data.temp.day)," \xb0C"]})]})})},b=(n(55),n(69)),x=n(71),O=n(66),u=n(45),m=n(0),f=function(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),a=n[0],i=n[1],r=new Date(1e3*e.data.el.sunrise).toLocaleTimeString(),d=new Date(1e3*e.data.el.sunset).toLocaleTimeString();return Object(c.useEffect)((function(){var t=new Date;t.setDate(t.getDate()+e.data.index);var n=t.toLocaleDateString("en-en",{weekday:"long"});i(n)}),[e.data.index]),Object(h.jsx)(j.a,{bg:"Dark",style:{width:"50rem"},children:Object(h.jsxs)("div",{className:"row",style:{paddingTop:"10px"},children:[Object(h.jsx)("div",{className:"col-md-4 col-12",children:Object(h.jsxs)("div",{style:{padding:"1rem",textAlign:"center"},children:[Object(h.jsx)(j.a.Title,{children:a}),Object(h.jsx)("div",{style:{height:"7rem"},children:Object(h.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.data.el.weather[0].icon,"@2x.png")})}),Object(h.jsx)(j.a.Title,{children:Math.round(e.data.el.temp.day)})]})}),Object(h.jsx)("div",{className:"col-md-8 col-12",children:Object(h.jsxs)(b.a,{defaultActiveKey:"temperature",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(h.jsx)(x.a,{eventKey:"temperature",title:"Temperature",children:Object(h.jsxs)(O.a,{borderless:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{}),Object(h.jsx)("th",{children:"Morning"}),Object(h.jsx)("th",{children:"Afternoon"}),Object(h.jsx)("th",{children:"Evening"}),Object(h.jsx)("th",{children:"Night"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Temperature"}),Object(h.jsxs)("td",{children:[Math.round(e.data.el.temp.morn)," \xb0C"]}),Object(h.jsxs)("td",{children:[Math.round(e.data.el.temp.day)," \xb0C"]}),Object(h.jsxs)("td",{children:[Math.round(e.data.el.temp.eve)," \xb0C"]}),Object(h.jsxs)("td",{children:[Math.round(e.data.el.temp.night)," \xb0C"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Feels Like"}),Object(h.jsxs)("td",{children:[Math.round(e.data.el.feels_like.morn)," \xb0C"]}),Object(h.jsxs)("td",{children:[Math.round(e.data.el.feels_like.day)," \xb0C"]}),Object(h.jsxs)("td",{children:[Math.round(e.data.el.feels_like.eve)," \xb0C"]}),Object(h.jsxs)("td",{children:[Math.round(e.data.el.feels_like.night)," \xb0C"]})]})]})]})}),Object(h.jsx)(x.a,{eventKey:"sun-journey",title:"Sun journey",children:Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"9rem"},children:[Object(h.jsxs)("div",{style:{flexBasis:"50%",display:"flex",alignItems:"center"},children:[Object(h.jsx)(m.b.Provider,{value:{size:"5rem"},children:Object(h.jsx)(u.a,{})}),Object(h.jsx)("h4",{style:{marginLeft:"1rem"},children:r})]}),Object(h.jsxs)("div",{style:{flexBasis:"50%",display:"flex",alignItems:"center"},children:[Object(h.jsx)(m.b.Provider,{value:{size:"5rem"},children:Object(h.jsx)(u.b,{})}),Object(h.jsx)("h4",{style:{marginLeft:"1rem"},children:d})]})]})})]})})]})})},g=function(e){var t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(),j=Object(s.a)(r,2),b=j[0],x=j[1],O=Object(c.useState)(),u=Object(s.a)(O,2),m=u[0],g=u[1];Object(c.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=52.4064&lon=16.9252&exclude=hourly,minutely&units=metric&lang=pl&appid=e7dbf2490167397151d02b2e61d9f83b").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(c.useEffect)((function(){a&&x({el:a.daily[0],index:0})}),[a]);return Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{bg:"dark",variant:"dark",children:Object(h.jsx)(l.a,{children:Object(h.jsx)(d.a.Brand,{children:"Weather Forecast"})})}),Object(h.jsx)("div",{className:"container-element",children:Object(h.jsx)("div",{className:"inner-container-element",children:null===a||void 0===a?void 0:a.daily.map((function(e,t){return Object(h.jsx)("div",{onClick:function(){return function(e,t){x({el:e,index:t}),g(e)}(e,t)},style:{cursor:"pointer"},children:Object(h.jsx)(o,{data:e,active:e===m,index:t})})}))})}),Object(h.jsx)("div",{className:"bottom-element",children:b&&Object(h.jsx)(f,{data:b})})]})},p=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(61);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.cb7906ae.chunk.js.map