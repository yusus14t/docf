"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[237],{1237:function(e,i,n){n.r(i),n.d(i,{default:function(){return f}});var s=n(4165),l=n(1413),c=n(5861),a=n(9439),t=n(5812),d=n(5403),o=n(7689),r=n(2791),v=n(8075),u=n(6862),h=n(9806),x=n(1632),m=n(2012),p=n(6148),j=n(184);var f=function(){var e,i,n,f,N=(0,o.UO)(),g=(0,r.useState)({}),b=(0,a.Z)(g,2),k=b[0],w=b[1],y=(0,r.useState)([]),Z=(0,a.Z)(y,2),S=Z[0],_=Z[1],O=(0,r.useState)("00"),C=(0,a.Z)(O,2),E=C[0],I=C[1],z=(0,r.useState)(!1),M=(0,a.Z)(z,2),T=M[0],G=M[1],J=(0,r.useState)([]),L=(0,a.Z)(J,2),A=L[0],F=L[1],U=JSON.parse(localStorage.getItem("user")),D=(0,r.useState)([]),R=(0,a.Z)(D,2),$=R[0],B=R[1],P=(0,o.s0)();(0,r.useEffect)((function(){K(),H(),Q(),u.Z.addEventListener("re-appointment",(function(e){return W(JSON.parse(e.data))})),u.Z.addEventListener("new-appointment",(function(e){return W(JSON.parse(e.data))})),u.Z.addEventListener("status",(function(e){return q(JSON.parse(e.data))}))}),[]);var W=function(e){K()},q=function(e){H(),K()},H=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var i,n,c,a,t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.be.get("/clinic-detail",(0,l.Z)({params:{_id:N.id}},(0,d.Ek)()));case 3:n=e.sent,c=n.data,a=null===c||void 0===c?void 0:c.detail,w(a),F(null===a||void 0===a?void 0:a.timing),"00",t=1===(null===a||void 0===a||null===(i=a.token)||void 0===i?void 0:i.length)?"0".concat(null===a||void 0===a?void 0:a.token):(null===a||void 0===a?void 0:a.token)||"00",I(t),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var i,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.be.get("/waiting-list/".concat(N.id),(0,d.Ek)());case 3:i=e.sent,n=i.data,_(null===n||void 0===n?void 0:n.appointment),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var i,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.be.get("/common/notice/".concat(N.id));case 3:i=e.sent,n=i.data,B(null===n||void 0===n?void 0:n.notices),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("div",{className:"box"}),(0,j.jsxs)("div",{className:"clinicbanner",style:{backgroundImage:"url(".concat(null!==k&&void 0!==k&&k.photo?(0,d.a9)(null===k||void 0===k?void 0:k.photo):t,")"),backgroundRepeat:"no-repeat",backgroundSize:"100%"},children:[(0,j.jsx)("h4",{className:"clinic-detail-name",children:null===k||void 0===k?void 0:k.name}),(0,j.jsxs)("div",{className:"d-flex flex-row  clinic-detail-img-container ",children:[(0,j.jsxs)("div",{className:"d-flex flex-row  justify-content-around  ",children:[(0,j.jsx)("img",{className:"clinic-detail-img",src:null!==k&&void 0!==k&&k.doctors?(0,d.a9)(null===k||void 0===k||null===(e=k.doctors[0])||void 0===e?void 0:e.photo):m,alt:""}),(0,j.jsxs)("div",{className:"mt-5 clinic-detail-mobile",children:[(0,j.jsx)("h4",{className:"text-light clinic-detail-drName rounded mt-4",children:null===k||void 0===k?void 0:k.name}),(0,j.jsx)("h6",{style:{display:"inline-block"},className:"text-light clinic-detail-drName rounded",children:(null===k||void 0===k||null===(i=k.specialization)||void 0===i?void 0:i.map((function(e){return e.name})))||"Specialization"})]})]}),(0,j.jsx)("div",{className:"current-clicnic-token ml-5 d-flex flex-row",style:{position:"relative"},children:(0,j.jsx)("h1",{style:{position:"absolute",left:"15%",top:"15%"},children:E})})]})]}),("PT"===(null===U||void 0===U?void 0:U.userType)||!U)&&(0,j.jsxs)("div",{className:"bookappoint cursor-pointer",onClick:function(){return U||P("/login",{state:{redirectTo:window.location.pathname}}),void G(!0)},children:[(0,j.jsx)(h.G,{className:"bookappointment-icon",icon:x.a1i}),(0,j.jsx)("h5",{className:"p-2",children:"Book Appointment"})]}),(0,j.jsxs)("div",{className:"container-fluid",children:[(0,j.jsxs)("div",{className:"row clinic-details-row mt-5 mx-0",children:[(0,j.jsx)("div",{className:"col-md-6 ",children:(0,j.jsxs)("div",{className:"wating-area-clinic",children:[(0,j.jsx)("h4",{className:"text-center mb-3",children:"Waiting List"}),(0,j.jsx)("div",{className:"token-list-container ",children:null!==S&&void 0!==S&&S.length?(0,j.jsx)("ul",{className:"token-list $",children:S.map((function(e,i){return(0,j.jsx)("li",{className:" p-2",children:(0,j.jsx)("div",{className:"mt-auto",children:(0,j.jsxs)("div",{className:"token-list-item d-flex flex-row justify-content-around ".concat((null===e||void 0===e?void 0:e.token)==parseInt(E)?"token-list-active":""),children:[(0,j.jsx)("div",{className:"token ",children:(0,j.jsx)("h4",{className:"token-list-number",children:null===e||void 0===e?void 0:e.token})}),(0,j.jsxs)("div",{className:"token-list-detail",children:[(0,j.jsx)("h4",{className:"list-patient-name mb-1",children:null===e||void 0===e?void 0:e.name}),(0,j.jsxs)("p",{className:"mb-0 list-mobile-no",children:["Mobile Number : +91"," ",null!==e&&void 0!==e&&e.phone?"xxx-xxx-".concat(null===e||void 0===e?void 0:e.phone.slice(-4)):"----------"]}),(0,j.jsxs)("p",{className:"mb-0 list-address",children:["Address : ",null===e||void 0===e?void 0:e.address]})]})]})})},i)}))}):(0,j.jsx)("span",{children:"No Data"})})]})}),(0,j.jsxs)("div",{className:"col-md-6 px-3",children:[(0,j.jsxs)("div",{className:"clinic-info-details pb-3",children:[(0,j.jsx)("h4",{className:"mb-3 pt-2  text-center",children:"Info"}),(0,j.jsxs)("h6",{className:"text-left text-light mx-2",children:[(0,j.jsx)("span",{className:"text-disabled",children:"Consultation Fee"})," : Rs\xa0",null===k||void 0===k?void 0:k.fee]}),(0,j.jsxs)("div",{className:"description-clinic-detail mb-3 pe-2",children:[(0,j.jsx)("span",{className:"text-disabled",children:"Services"})," : \xa0",(null===k||void 0===k||null===(n=k.services)||void 0===n?void 0:n.length)>0?null===k||void 0===k||null===(f=k.services)||void 0===f?void 0:f.map((function(e){return"".concat(null===e||void 0===e?void 0:e.name,", ")})):"-"]}),(0,j.jsx)("div",{className:"bg-white m-2 rounded p-2",children:"Important Notice"}),(null===$||void 0===$?void 0:$.length)>0?$.map((function(e){return(0,j.jsxs)("div",{className:"bg-white m-2 rounded p-2",children:[(0,j.jsx)("h6",{children:e.title}),(0,j.jsx)("p",{children:e.description})]})})):(0,j.jsx)("div",{className:"bg-white m-2 rounded p-2",children:"No Data"})]}),(0,j.jsx)("div",{className:"text-center",children:(0,j.jsx)("div",{className:"pr-2 ",children:(0,j.jsxs)("table",{className:"table  table-bordered",children:[(0,j.jsx)("thead",{className:"thead-light",children:"Clinic"===(null===k||void 0===k?void 0:k.organizationType)?(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Session"}),(0,j.jsx)("th",{children:"Morn Open"}),(0,j.jsx)("th",{children:"Morn Close"}),(0,j.jsx)("th",{children:"Even Open"}),(0,j.jsx)("th",{children:"Even Close"})]}):(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Session"}),(0,j.jsx)("th",{children:"Open"}),(0,j.jsx)("th",{children:"Close"})]})}),(0,j.jsx)("tbody",{children:Object.entries(p.vr).map((function(e){var i=(0,a.Z)(e,2);return function(e,i,n){var s,l,c,a,t=A.find((function(i){return i.day===e}));return"Clinic"===n?(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:i}),(0,j.jsx)("td",{children:(null===t||void 0===t||null===(s=t.morning)||void 0===s?void 0:s.open)||"-"}),(0,j.jsx)("td",{children:(null===t||void 0===t||null===(l=t.morning)||void 0===l?void 0:l.close)||"-"}),(0,j.jsx)("td",{children:(null===t||void 0===t||null===(c=t.evening)||void 0===c?void 0:c.open)||"-"}),(0,j.jsx)("td",{children:(null===t||void 0===t||null===(a=t.evening)||void 0===a?void 0:a.close)||"-"})]}):(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:i}),(0,j.jsx)("td",{children:(null===t||void 0===t?void 0:t.open)||"-"}),(0,j.jsx)("td",{children:(null===t||void 0===t?void 0:t.close)||"-"})]})}(i[0],i[1],null===k||void 0===k?void 0:k.organizationType)}))})]})})})]})]}),(0,j.jsxs)("div",{className:"contact-details-clinic pt-3",children:[(0,j.jsxs)("div",{className:"sigma_info style-26 d-flex",children:[(0,j.jsx)("div",{className:"sigma_info-title",children:(0,j.jsx)("span",{className:"sigma_info-icon clinic-address-icon-container",children:(0,j.jsx)(h.G,{className:"clinic-address-icon",icon:x.Mzo})})}),(0,j.jsx)("div",{className:"sigma_info-description",children:(0,j.jsxs)("div",{className:"clinic-footer-address",children:[(0,j.jsx)("p",{children:"Our Address"}),(0,j.jsx)("p",{className:"secondary-color",children:(0,j.jsx)("b",{children:null===k||void 0===k?void 0:k.address})})]})})]}),(0,j.jsxs)("div",{className:"sigma_info style-26 d-flex",children:[(0,j.jsx)("div",{className:"sigma_info-title d-flex",children:(0,j.jsxs)("span",{className:"sigma_info-icon clinic-address-icon-container",children:[(0,j.jsx)(h.G,{className:"clinic-address-icon",icon:x.j1w}),(0,j.jsx)("i",{className:"fal fa-phone"})]})}),(0,j.jsxs)("div",{className:"sigma_info-description",children:[(0,j.jsx)("p",{children:"Call Us"}),(0,j.jsx)("p",{className:"secondary-color",children:(0,j.jsx)("b",{children:(0,d.CN)(null===k||void 0===k?void 0:k.phone)})})]})]}),(0,j.jsxs)("div",{className:"sigma_info style-26 d-flex",children:[(0,j.jsx)("div",{className:"sigma_info-title",children:(0,j.jsx)("span",{className:"sigma_info-icon clinic-address-icon-container",children:(0,j.jsx)(h.G,{className:"clinic-address-icon",icon:x.FU$})})}),(0,j.jsxs)("div",{className:"sigma_info-description",children:[(0,j.jsx)("p",{children:"Our Mail"}),(0,j.jsx)("p",{className:"secondary-color",children:(0,j.jsx)("b",{children:null===k||void 0===k?void 0:k.email})})]})]})]})]})]}),T&&(0,j.jsx)(v.Z,{isOpen:T,setIsOpen:G,departmentId:null===k||void 0===k?void 0:k._id,refresh:function(){}})]})}},5812:function(e,i,n){e.exports=n.p+"static/media/user-profile-bg-1920x400.d51b6ea479713cd0985a.jpg"}}]);
//# sourceMappingURL=237.5de981c9.chunk.js.map