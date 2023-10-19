"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[342],{1342:function(e,i,n){n.r(i);var s=n(4165),l=n(1413),c=n(5861),a=n(9439),d=n(5812),t=n(5403),o=n(7689),r=n(2791),v=n(8075),u=n(6862),h=n(9806),m=n(1632),x=(n(2012),n(6148)),p=n(184);i.default=function(){var e,i,n,j,N,f,g,b=(0,o.UO)(),k=(0,r.useState)({}),Z=(0,a.Z)(k,2),w=Z[0],y=Z[1],S=(0,r.useState)([]),_=(0,a.Z)(S,2),O=_[0],C=_[1],E=(0,r.useState)("00"),I=(0,a.Z)(E,2),z=I[0],L=I[1],T=(0,r.useState)(!1),Y=(0,a.Z)(T,2),M=Y[0],F=Y[1],G=(0,r.useState)([]),J=(0,a.Z)(G,2),A=J[0],U=J[1],D=JSON.parse(localStorage.getItem("user")),R=(0,r.useState)([]),$=(0,a.Z)(R,2),B=$[0],P=$[1],W=(0,o.s0)();(0,r.useEffect)((function(){Q(),K(),V(),u.Z.addEventListener("re-appointment",(function(e){return q(JSON.parse(e.data))})),u.Z.addEventListener("new-appointment",(function(e){return q(JSON.parse(e.data))})),u.Z.addEventListener("status",(function(e){return H(JSON.parse(e.data))}))}),[]);var q=function(e){Q()},H=function(e){K(),Q()},K=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var i,n,c,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.be.get("/clinic-detail",(0,l.Z)({params:{_id:b.id}},(0,t.Ek)()));case 3:i=e.sent,n=i.data,c=null===n||void 0===n?void 0:n.detail,y(c),U(null===c||void 0===c?void 0:c.timing),"00",a=(null===c||void 0===c?void 0:c.token)<10?"0".concat(null===c||void 0===c?void 0:c.token):(null===c||void 0===c?void 0:c.token)||"00",L(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var i,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.be.get("/waiting-list/".concat(b.id),(0,t.Ek)());case 3:i=e.sent,n=i.data,C(null===n||void 0===n?void 0:n.appointment),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var i,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.be.get("/notice/".concat(b.id));case 3:i=e.sent,n=i.data,P(null===n||void 0===n?void 0:n.notices),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("div",{className:"box"}),(0,p.jsxs)("div",{className:"clinicbanner",style:{backgroundImage:"url(".concat(null!==w&&void 0!==w&&w.photo?(0,t.a9)(null===w||void 0===w?void 0:w.photo):d,")"),backgroundRepeat:"no-repeat",backgroundSize:"100%"},children:[(0,p.jsx)("h4",{className:"clinic-detail-name",children:(null===w||void 0===w||null===(e=w.hospital)||void 0===e?void 0:e.name)||w.name}),(0,p.jsxs)("div",{className:"d-flex flex-row  clinic-detail-img-container ",children:[(0,p.jsxs)("div",{className:"d-flex flex-row  justify-content-between  ",children:[console.log(w),(0,p.jsxs)("div",{className:"mt-5 clinic-detail-mobile",children:[(0,p.jsx)("h4",{className:"text-light clinic-detail-drName rounded mt-4",children:null===(i=w.doctor)||void 0===i?void 0:i.name}),"Clinic"!==w.organizationType&&(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("h4",{className:"text-light clinic-detail-drName rounded",children:["Dept. ",w.name," "]})}),(0,p.jsx)("h6",{style:{display:"inline-block"},className:"text-light clinic-detail-drName rounded",children:(null===w||void 0===w||null===(n=w.specialization)||void 0===n?void 0:n.map((function(e){return e.name})))||"Specialization"}),(null===w||void 0===w?void 0:w.room)&&(0,p.jsxs)("h4",{className:"text-light clinic-detail-drName rounded",children:["Room No: ",null===w||void 0===w?void 0:w.room]})]})]}),(0,p.jsx)("div",{className:"current-clicnic-token ml-5 d-flex flex-row",style:{position:"relative"},children:(0,p.jsx)("h1",{style:{position:"absolute",left:"15%",top:"15%"},children:z})})]})]}),("PT"===(null===D||void 0===D?void 0:D.userType)||!D)&&(0,p.jsxs)("div",{className:"bookappoint cursor-pointer",onClick:function(){return D||W("/login",{state:{redirectTo:window.location.pathname}}),void F(!0)},children:[(0,p.jsx)(h.G,{className:"bookappointment-icon",icon:m.a1i}),(0,p.jsx)("h5",{className:"p-2",children:"Book Appointment"})]}),(0,p.jsxs)("div",{className:"container-fluid",children:[(0,p.jsxs)("div",{className:"row clinic-details-row mt-5 mx-0",children:[(0,p.jsx)("div",{className:"col-md-6 ",children:(0,p.jsxs)("div",{className:"wating-area-clinic",children:[(0,p.jsx)("h4",{className:"text-center mb-3",children:"Waiting List"}),(0,p.jsx)("div",{className:"token-list-container ",children:null!==O&&void 0!==O&&O.length?(0,p.jsx)("ul",{className:"token-list $",children:O.map((function(e,i){return(0,p.jsx)("li",{className:" p-2",children:(0,p.jsx)("div",{className:"mt-auto",children:(0,p.jsxs)("div",{className:"token-list-item d-flex flex-row justify-content-around ".concat((null===e||void 0===e?void 0:e.token)==parseInt(z)?"token-list-active":""),children:[(0,p.jsx)("div",{className:"token ".concat((null===e||void 0===e?void 0:e.token)==parseInt(z)?"token-active":""),children:(0,p.jsx)("h4",{className:"token-list-number",children:null===e||void 0===e?void 0:e.token})}),(0,p.jsxs)("div",{className:"token-list-detail",children:[(0,p.jsx)("h4",{className:"list-patient-name mb-1",children:null===e||void 0===e?void 0:e.name}),(0,p.jsxs)("p",{className:"mb-0 list-mobile-no",children:["Mobile Number : +91"," ",null!==e&&void 0!==e&&e.phone?"xxx-xxx-".concat(null===e||void 0===e?void 0:e.phone.slice(-4)):"----------"]}),(0,p.jsxs)("p",{className:"mb-0 list-address",children:["Address : ",null===e||void 0===e?void 0:e.address]})]})]})})},i)}))}):(0,p.jsx)("span",{children:"No Data"})})]})}),(0,p.jsxs)("div",{className:"col-md-6 ",children:[(0,p.jsxs)("div",{className:"clinic-info-details pb-3 mb-3",children:[(0,p.jsx)("h4",{className:"mb-3 pt-2  text-center text-light",children:"Info"}),(0,p.jsx)("div",{className:"bg-white m-2 rounded p-2",children:(0,p.jsxs)("h6",{children:["Consultation Fee"," ",(0,p.jsxs)("span",{className:"ms-4",children:["\u20b9",null===w||void 0===w?void 0:w.fee]})]})}),(0,p.jsxs)("div",{className:"bg-white m-2 rounded p-2",children:[(0,p.jsx)("h6",{className:"mx-1",children:"Services"}),(0,p.jsx)("div",{className:"d-flex flex-wrap",children:(null===w||void 0===w||null===(j=w.services)||void 0===j?void 0:j.length)>0?null===w||void 0===w||null===(N=w.services)||void 0===N?void 0:N.map((function(e){return(0,p.jsx)("div",{className:"service-tube m-1",children:null===e||void 0===e?void 0:e.name})})):null===w||void 0===w||null===(f=w.hospital)||void 0===f||null===(g=f.services)||void 0===g?void 0:g.map((function(e){return(0,p.jsx)("div",{className:"service-tube m-1",children:null===e||void 0===e?void 0:e.name})}))})]}),(0,p.jsxs)("div",{className:"bg-white m-2 rounded p-2",children:[(0,p.jsx)("h6",{children:"Important Notice"}),(null===B||void 0===B?void 0:B.length)>0&&B.map((function(e){return(0,p.jsxs)("div",{style:{borderLeft:"5px solid grey",paddingLeft:"1rem"},children:[(0,p.jsx)("h6",{className:"text-danger",children:e.title}),(0,p.jsx)("p",{className:"text-danger",children:e.description})]})}))]})]}),(0,p.jsx)("div",{className:"text-center",children:(0,p.jsx)("div",{className:"pr-2 ",children:(0,p.jsxs)("table",{className:"table  table-bordered",children:[(0,p.jsx)("thead",{className:"thead-light",children:"Clinic"===(null===w||void 0===w?void 0:w.organizationType)?(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"Session"}),(0,p.jsx)("th",{children:"Morn Open"}),(0,p.jsx)("th",{children:"Morn Close"}),(0,p.jsx)("th",{children:"Even Open"}),(0,p.jsx)("th",{children:"Even Close"})]}):(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"Session"}),(0,p.jsx)("th",{children:"Open"}),(0,p.jsx)("th",{children:"Close"})]})}),(0,p.jsx)("tbody",{children:Object.entries(x.vr).map((function(e){var i=(0,a.Z)(e,2);return function(e,i,n){var s,l,c,a,d=A.find((function(i){return i.day===e}));return"Clinic"===n?(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:i}),(0,p.jsx)("td",{children:(0,t.YZ)(null===d||void 0===d||null===(s=d.morning)||void 0===s?void 0:s.open)}),(0,p.jsx)("td",{children:(0,t.YZ)(null===d||void 0===d||null===(l=d.morning)||void 0===l?void 0:l.close)}),(0,p.jsx)("td",{children:(0,t.YZ)(null===d||void 0===d||null===(c=d.evening)||void 0===c?void 0:c.open)}),(0,p.jsx)("td",{children:(0,t.YZ)(null===d||void 0===d||null===(a=d.evening)||void 0===a?void 0:a.close)})]}):(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:i}),(0,p.jsx)("td",{children:(0,t.YZ)(null===d||void 0===d?void 0:d.open)}),(0,p.jsx)("td",{children:(0,t.YZ)(null===d||void 0===d?void 0:d.close)})]})}(i[0],i[1],null===w||void 0===w?void 0:w.organizationType)}))})]})})})]})]}),(0,p.jsxs)("div",{className:"contact-details-clinic pt-3",children:[(0,p.jsxs)("div",{className:"sigma_info style-26 d-flex",children:[(0,p.jsx)("div",{className:"sigma_info-title",children:(0,p.jsx)("span",{className:"sigma_info-icon clinic-address-icon-container",children:(0,p.jsx)(h.G,{className:"clinic-address-icon",icon:m.Mzo})})}),(0,p.jsx)("div",{className:"sigma_info-description",children:(0,p.jsxs)("div",{className:"clinic-footer-address",children:[(0,p.jsx)("p",{children:"Our Address"}),(0,p.jsx)("p",{className:"secondary-color",children:(0,p.jsx)("b",{children:null===w||void 0===w?void 0:w.address})})]})})]}),(0,p.jsxs)("div",{className:"sigma_info style-26 d-flex",children:[(0,p.jsx)("div",{className:"sigma_info-title d-flex",children:(0,p.jsxs)("span",{className:"sigma_info-icon clinic-address-icon-container",children:[(0,p.jsx)(h.G,{className:"clinic-address-icon",icon:m.j1w}),(0,p.jsx)("i",{className:"fal fa-phone"})]})}),(0,p.jsxs)("div",{className:"sigma_info-description",children:[(0,p.jsx)("p",{children:"Call Us"}),(0,p.jsx)("p",{className:"secondary-color",children:(0,p.jsx)("b",{children:(0,t.CN)(null===w||void 0===w?void 0:w.phone)})})]})]}),(0,p.jsxs)("div",{className:"sigma_info style-26 d-flex",children:[(0,p.jsx)("div",{className:"sigma_info-title",children:(0,p.jsx)("span",{className:"sigma_info-icon clinic-address-icon-container",children:(0,p.jsx)(h.G,{className:"clinic-address-icon",icon:m.FU$})})}),(0,p.jsxs)("div",{className:"sigma_info-description",children:[(0,p.jsx)("p",{children:"Our Mail"}),(0,p.jsx)("p",{className:"secondary-color",children:(0,p.jsx)("b",{children:null===w||void 0===w?void 0:w.email})})]})]})]})]})]}),M&&(0,p.jsx)(v.Z,{isOpen:M,setIsOpen:F,departmentId:null===w||void 0===w?void 0:w._id,refresh:function(){}})]})}},5812:function(e,i,n){e.exports=n.p+"static/media/user-profile-bg-1920x400.d51b6ea479713cd0985a.jpg"}}]);
//# sourceMappingURL=342.6fa6c7a7.chunk.js.map