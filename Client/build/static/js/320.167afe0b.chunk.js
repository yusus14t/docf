"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[320],{4906:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(4165),s=t(5861),l=t(9439),i=t(2791),a=t.p+"static/media/department.4c788788ba97a4fda461.jpg",c=t(5403),o=t(2373),u=t(9806),d=t(1632),p=t(7634),m=t(184),h=function(){var e=(0,i.useState)(!1),n=(0,l.Z)(e,2),t=n[0],h=n[1],v=(0,i.useState)({}),x=(0,l.Z)(v,2),g=x[0],f=x[1],b=(0,i.useRef)(null),N=(0,i.useRef)(null),j=(0,o.Z)(),k=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n){e.next=4;break}return j.error("Enter phone number"),e.abrupt("return");case 4:return e.next=6,c.be.post("/signup",{phone:n,source:"department"});case 6:t=e.sent,s=t.data,h(!0),f(null===s||void 0===s?void 0:s.user),j.success(null===s||void 0===s?void 0:s.message),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),j.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t,s,l,i,a,o,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.be.post("/validate-otp",{otp:N.current.value,userId:g._id});case 3:l=e.sent,i=l.data,localStorage.setItem("user",JSON.stringify(null===i||void 0===i?void 0:i.user)),localStorage.setItem("token",JSON.stringify(null===i||void 0===i?void 0:i.token)),null!==i&&void 0!==i&&null!==(n=i.user)&&void 0!==n&&null!==(t=n.twoFactor)&&void 0!==t&&t.isVerified?(u=null===(a=p._A[null===i||void 0===i||null===(o=i.user)||void 0===o?void 0:o.userType])||void 0===a?void 0:a.path,window.location.replace(u)):null===i||void 0===i||null===(s=i.user)||void 0===s||s.userType,j.success(null===i||void 0===i?void 0:i.message),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),j.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{style:{backgroundImage:"url(".concat(a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:"loginContainer align-center",children:(0,m.jsxs)("div",{className:"w-25 m-auto hc-signup-container d-flex flex-column align-items-center",children:[(0,m.jsx)("span",{className:" h4 hos-singup-heading p-1 text-light",children:" Sign Up"}),(0,m.jsx)("span",{className:"h2 text-light text-center  mb-3 hos-singup-heading",children:"Hospital / Clinic"}),!t&&(0,m.jsxs)("div",{className:"w-100",children:[(0,m.jsx)("p",{className:"mb-1 text-light",children:"Mobile Number"}),(0,m.jsx)("input",{type:"text",className:"form-control letterSpcing",placeholder:"8218692122",onChange:c.y4,ref:b}),(0,m.jsx)("span",{className:"text-center",children:(0,m.jsx)("button",{className:"btn btn1 btn-primary mt-3 shadow-none",onClick:function(){return k(b.current.value)},children:"Sent OTP"})})]}),t&&(0,m.jsxs)("div",{className:"mobile",children:[(0,m.jsx)("p",{className:"mb-1 text-light",children:"Mobile Number"}),(0,m.jsxs)("h3",{className:"text-light",children:["+91 ","".concat(String((null===g||void 0===g?void 0:g.phone)||"").slice(0,3),"-").concat(String((null===g||void 0===g?void 0:g.phone)||"").slice(3,6),"-").concat(String((null===g||void 0===g?void 0:g.phone)||"").slice(6,10))," ",(0,m.jsx)("span",{children:(0,m.jsx)(u.G,{onClick:function(){return h(!1)},className:"cursor-pointer medit ml-1 text",icon:d.Xcf})})]})]}),t&&(0,m.jsx)("div",{className:"w-100 d-flex flex-column justify-content-start",children:(0,m.jsxs)("div",{className:"otp w-75 mt-2 ",children:[(0,m.jsx)("label",{htmlFor:"",className:"text-light",children:"Enter the OTP"}),(0,m.jsx)("input",{className:"form-control mt-2 letterSpcing",type:"text",name:"OTP",placeholder:"X X X X",maxLength:4,ref:N}),(0,m.jsx)("button",{className:"btn btn-primary btn1 mt-4",onClick:S,children:"Sign Up"})]})})]})})}}}]);
//# sourceMappingURL=320.167afe0b.chunk.js.map