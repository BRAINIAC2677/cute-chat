(this["webpackJsonpcute-chat"]=this["webpackJsonpcute-chat"]||[]).push([[0],{51:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(31),s=n.n(r),o=n(6),i=n(36),u=n(8),l=n(18),d=n(1),j=a.a.createContext();function b(e){var t=Object(c.useState)({user:null,chatRooms:null,currentRoomId:null}),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(d.jsx)(j.Provider,{value:{global:a,setGlobal:r},children:e.children})}var m=n(3),h=(n(64),m.a.initializeApp({apiKey:"AIzaSyBQwYLNreWnwSEeNC3eOzr-2q-1PASglCI",authDomain:"cute-chat-43080.firebaseapp.com",projectId:"cute-chat-43080",storageBucket:"cute-chat-43080.appspot.com",messagingSenderId:"730231964779",appId:"1:730231964779:web:198ad75e908791fa541d2e"})),O=h.firestore(),f=n(32),x=n.n(f),v=(n(30),{signInFlow:"popup",signInOptions:[m.a.auth.GoogleAuthProvider.PROVIDER_ID,m.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}});n(51);var g=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"login-container elevated",children:[Object(d.jsx)("p",{className:"item title",children:"Login"}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(x.a,{uiConfig:v,firebaseAuth:h.auth()})}),Object(d.jsx)("p",{className:"item dev",children:"Developed By: Asif Azad"})]})})},p=a.a.createContext();function y(e){var t=Object(c.useState)({searchIsOn:!1,focused:-1,breakPoint:1023}),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(d.jsx)(p.Provider,{value:{myStyle:a,setMyStyle:r},children:e.children})}function N(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var C=function(){var e=Object(c.useState)(N()),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){a(N())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n};var I=function(e){var t=C().width,n=Object(c.useContext)(p),a=n.myStyle,r=n.setMyStyle,s=a.breakPoint,i=Object(c.useContext)(j),u=i.global,l=i.setGlobal,b=u.user,m=e.info,h=m.room_name,O=m.room_id,f=m.imgUrls,x=h[0]===b.displayName?h[1]:h[0],v=f[0]===b.photoURL?f[1]:f[0];return Object(d.jsxs)("button",{className:"chat-head elevated",onClick:function(){return l((function(e){return Object(o.a)(Object(o.a)({},e),{},{currentRoomId:O})})),void(t<=s&&r((function(e){return Object(o.a)(Object(o.a)({},e),{},{focused:0})})))},children:[Object(d.jsx)("img",{className:"avatar",src:v,alt:"avatar"}),Object(d.jsx)("p",{children:x})]})};var R=function(){var e=Object(c.useContext)(j).global,t=Object(c.useContext)(p).myStyle.focused,n=e.chatRooms.map((function(e){return Object(d.jsx)(I,{info:e},e.room_id)})),a={display:"block",gridArea:"focus"};return-1===t&&(a.gridArea="sidebar"),Object(d.jsx)("div",{className:"chat-sidebar pressed",style:0===t?{display:"none"}:a,children:n})};var S=function(e){var t=Object(c.useContext)(j).global.chatRooms;return null===e?null:t.findIndex((function(t){return t.room_id===e}))},w=n(16),k=n(12);var _=function(){var e=Object(c.useContext)(j).global.user;return Object(d.jsxs)("div",{className:"blank-room",children:[Object(d.jsx)("p",{style:{color:"var(--accent-col-2)"},children:"Welcome To CuteChat ".concat(e.displayName)}),Object(d.jsx)("div",{className:"faded-icon",children:Object(d.jsx)(w.a,{icon:k.b})})]})};var A=function(){var e=a.a.useContext(j).global,t=e.chatRooms,n=e.currentRoomId,c=e.user,r=S(n),s=a.a.useState(""),o=Object(l.a)(s,2),i=o[0],u=o[1];return Object(d.jsxs)("div",{className:"compose-text",children:[Object(d.jsx)("input",{className:"pressed",placeholder:"You are awesome",value:i,onChange:function(e){return function(e){u(e.target.value)}(e)}}),Object(d.jsx)("button",{className:"elevated rounded-btn",onClick:function(){var e=new Date,a={id:Date.now(),author:c.email,body:i,time:e.toLocaleTimeString()},s=t[r].texts;s.length>=20&&s.shift(),s.push(a),O.collection("cute_rooms").doc(n).update({texts:s}).then((function(){return console.log("success writing")})).catch((function(e){return console.log(e)})),u("")},children:Object(d.jsx)(w.a,{icon:k.c})})]})};var E=function(){var e,t,n=Object(c.useContext)(j).global,a=n.user,r=n.chatRooms,s=n.currentRoomId,o=S(s);if(null!==o){var i=r[o],u=i.room_name,l=i.imgUrls;e=u[0]===a.displayName?u[1]:u[0],t=l[0]===a.photoURL?l[1]:l[0]}return Object(d.jsxs)("div",{className:"inbox-header",children:[Object(d.jsx)("img",{className:"avatar elevated",src:t,alt:"avatar"}),Object(d.jsx)("p",{children:e})]})};var L=function(e){var t=Object(c.useContext)(j).global,n=t.chatRooms,a=t.currentRoomId,r=t.user,s=S(a),o=e.info,i=o.id,u=o.body,l=o.time,b=o.author,m=n[s],h=m.members,f=m.imgUrls[h.findIndex((function(e){return e===b}))],x={},v={marginLeft:"1rem"};return b===r.email&&(x={order:"2"},v={order:"1",marginRight:"1rem"}),Object(d.jsxs)("div",{className:"chat-text",style:b===r.email?{alignSelf:"flex-end"}:null,children:[Object(d.jsx)("img",{className:"avatar",src:f,style:x,alt:"avatar"}),Object(d.jsxs)("div",{className:"chat-text-content elevated",style:v,children:[Object(d.jsx)("p",{className:"chat-text-time",children:l}),Object(d.jsx)("p",{className:"chat-text-body",children:u}),b===r.email&&Object(d.jsx)("button",{className:"chat-text-delete",onClick:function(){var e=n[s].texts.filter((function(e){return e.id!==i}));O.collection("cute_rooms").doc(a).update({texts:e}).then((function(){return console.log("success writing")})).catch((function(e){return console.log(e)}))},children:Object(d.jsx)(w.a,{icon:k.f})})]})]})};var U=function(){var e=Object(c.useContext)(j).global,t=e.chatRooms,n=e.currentRoomId,a=S(n);return Object(d.jsx)("div",{className:"chat-texts",children:t[a].texts.map((function(e){return Object(d.jsx)(L,{info:e},e.id)}))})};var z=function(){var e=Object(c.useContext)(p).myStyle.focused,t=Object(c.useContext)(j).global.currentRoomId,n=S(t),a={display:"grid",gridArea:"focus"};return-1===e&&(a.gridArea="box"),Object(d.jsx)("div",{className:"chat-box pressed",style:1===e?{display:"none"}:a,children:null===n?Object(d.jsx)(_,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{}),Object(d.jsx)(U,{}),Object(d.jsx)(A,{})]})})},P=n(26),D=n.n(P),M=n(34),G=n(35);var T=function(e){var t=Object(c.useContext)(j),n=t.global,a=t.setGlobal,r=Object(c.useContext)(p).setMyStyle,s=n.chatRooms,i=n.user,u=e.info,l=u.name,b=u.email,m=u.imgUrl;function h(){return(h=Object(G.a)(D.a.mark((function e(){var t,n,c,u,d,j,h,f,x,v,g,p;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b!==i.email){e.next=4;break}return console.log("This is You!"),r((function(e){return Object(o.a)(Object(o.a)({},e),{},{searchIsOn:!1})})),e.abrupt("return");case 4:if(-1!==(t=s.findIndex((function(e){return e.members.includes(b)})))){e.next=20;break}return n=[i.displayName,l],c=[i.email,b],u=[i.photoURL,m],d={room_name:n,members:c,imgUrls:u,texts:[]},e.next=10,O.collection("cute_rooms").add(d);case 10:return j=e.sent,e.next=13,O.collection("cute_rooms").where("members","array-contains",i.email).get();case 13:h=e.sent,f=[],x=Object(M.a)(h.docs);try{for(x.s();!(v=x.n()).done;)g=v.value,f.push(Object(o.a)({room_id:g.id},g.data()))}catch(y){x.e(y)}finally{x.f()}a((function(e){return Object(o.a)(Object(o.a)({},e),{},{chatRooms:f,currentRoomId:j.id})})),e.next=22;break;case 20:p=s[t].room_id,a((function(e){return Object(o.a)(Object(o.a)({},e),{},{currentRoomInd:t,currentRoomId:p})}));case 22:r((function(e){return Object(o.a)(Object(o.a)({},e),{},{searchIsOn:!1})}));case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)("button",{className:"search-result elevated",onClick:function(){return function(){return h.apply(this,arguments)}()},children:[Object(d.jsx)("img",{className:"avatar",src:m,alt:""}),Object(d.jsx)("p",{children:l})]})};var B=function(){var e=Object(c.useContext)(p),t=e.myStyle,n=e.setMyStyle,a=t.searchIsOn,r=Object(c.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1],j=Object(c.useState)([]),b=Object(l.a)(j,2),m=b[0],h=b[1];return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("input",{className:"pressed",value:i,placeholder:"ex. Asif Azad",onChange:function(e){return function(e){u(e.target.value)}(e)}}),Object(d.jsx)("button",{className:"rounded-btn elevated",onClick:function(){i&&O.collection("cute_users").where("name","==",i.trim()).get().then((function(e){var t=[];e.forEach((function(e){t.push(Object(d.jsx)(T,{info:e.data()},e.id))})),h(t),n((function(e){return Object(o.a)(Object(o.a)({},e),{},{searchIsOn:!0})})),u("")}))},children:Object(d.jsx)(w.a,{icon:k.d})}),Object(d.jsx)("div",{className:"search-results",style:a?{display:"block"}:{display:"none"},children:0===m.length?Object(d.jsx)("div",{children:"No Matched Result"}):m})]})};var W=function(){var e=C().width;return Object(d.jsx)("button",{className:e<=400?"rounded-btn elevated":"logout elevated",onClick:function(){h.auth().signOut()},children:e<=480?Object(d.jsx)(w.a,{icon:k.e}):"Logout"})};var F=function(){var e=Object(c.useContext)(j).global.user;return Object(d.jsxs)("div",{className:"chat-header elevated",children:[Object(d.jsx)("img",{className:"avatar elevated",src:e.photoURL,alt:"avatar"}),Object(d.jsx)(B,{}),Object(d.jsx)(W,{})]})};var Y=function(){var e=Object(c.useContext)(p).myStyle.searchIsOn;return Object(d.jsx)("div",{className:"greyout",style:e?{zIndex:"1"}:{zIndex:"-1"}})};var J=function(){var e=Object(c.useContext)(p),t=e.myStyle,n=e.setMyStyle,a=t.focused;return Object(d.jsx)("div",{className:"chat-footer elevated",children:Object(d.jsx)("button",{className:"elevated rounded-btn",onClick:function(){n((function(e){var t=1-e.focused;return Object(o.a)(Object(o.a)({},e),{},{focused:t})}))},children:Object(d.jsx)(w.a,{icon:0===a?k.g:k.a})})})};n(57);var V=function(){var e=Object(c.useContext)(j),t=e.global,n=e.setGlobal,r=Object(c.useContext)(p),s=r.myStyle,i=r.setMyStyle,u=s.breakPoint,l=C().width,b=t.user,m=t.chatRooms;return Object(c.useEffect)((function(){i(l<=u?function(e){return Object(o.a)(Object(o.a)({},e),{},{focused:0})}:function(e){return Object(o.a)(Object(o.a)({},e),{},{focused:-1})})}),[l]),Object(c.useEffect)((function(){var e=O.collection("cute_rooms").where("members","array-contains",b.email).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(o.a)({room_id:e.id},e.data()))})),n((function(e){return Object(o.a)(Object(o.a)({},e),{},{chatRooms:t})}))}));return function(){e()}}),[]),Object(d.jsx)(a.a.Fragment,{children:null===m?Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",fontSize:"1.5rem",backgroundColor:"var(--primary-col)"},children:Object(d.jsx)("p",{children:"Loading. . ."})}):Object(d.jsxs)("div",{className:"chat-container",children:[Object(d.jsx)(F,{}),Object(d.jsx)(R,{}),Object(d.jsx)(z,{}),Object(d.jsx)(J,{}),Object(d.jsx)(Y,{})]})})};var q=function(){var e=Object(c.useContext)(j),t=e.global,n=e.setGlobal,a=t.user;return Object(c.useEffect)((function(){var e=h.auth().onAuthStateChanged((function(e){if(n(null===e?function(e){return Object(o.a)(Object(o.a)({},e),{},{user:null,currentRoomId:null,chatRooms:null})}:function(t){return Object(o.a)(Object(o.a)({},t),{},{user:e})}),e&&h.auth().currentUser.metadata.creationTime===h.auth().currentUser.metadata.lastSignInTime){var t={name:e.displayName,email:e.email,imgUrl:e.photoURL};O.collection("cute_users").add(t).then((function(e){return console.log("".concat(e.id," and new user successfully in."))})).catch((function(e){return console.log("".concat(e," in writing new user in database."))}))}}));return function(){e()}}),[]),Object(d.jsx)(y,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(u.c,{children:Object(d.jsx)(u.a,{exact:!0,path:"/",children:a?Object(d.jsx)(V,{}):Object(d.jsx)(g,{})})})})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{children:Object(d.jsx)(q,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.13946136.chunk.js.map