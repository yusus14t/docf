"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[821],{7401:function(e,i,s){s.r(i),s.d(i,{default:function(){return p}});var n=s(1413),a=s(4165),l=s(5861),c=s(9439),t=s(2791),r=s(7689),d=s(1087),o=s(9806),m=s(1632),x=s(5403),h=s.p+"static/media/1920x1280-1.70ab245d5b64b80620c6.jpg",v=s(6148),u=s(184),p=function(){var e=(0,r.UO)(),i=(0,t.useState)([]),s=(0,c.Z)(i,2),p=s[0],j=s[1],f=(0,t.useState)([]),N=(0,c.Z)(f,2),b=N[0],g=N[1],w=(0,t.useState)([]),y=(0,c.Z)(w,2),Z=y[0],k=y[1];(0,t.useEffect)((function(){z()}),[e.id]),(0,t.useEffect)((function(){C(),M()}),[Z]);var z=function(){var i=(0,l.Z)((0,a.Z)().mark((function i(){var s,n;return(0,a.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,x.be.get("/specialization/".concat(e.id));case 3:s=i.sent,n=s.data,k(null===n||void 0===n?void 0:n.specializations),i.next=11;break;case 8:i.prev=8,i.t0=i.catch(0),console.error(i.t0);case 11:case"end":return i.stop()}}),i,null,[[0,8]])})));return function(){return i.apply(this,arguments)}}(),C=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.be.get("/all-clinics",(0,n.Z)({params:{filter:{specialization:null===Z||void 0===Z?void 0:Z.name},isClinic:!0}},(0,x.Ek)()));case 3:i=e.sent,s=i.data,j(null===s||void 0===s?void 0:s.clinics),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.be.get("/hospitals",(0,n.Z)({params:{filter:{specialization:null===Z||void 0===Z?void 0:Z.name}}},(0,x.Ek)()));case 3:i=e.sent,s=i.data,g(null===s||void 0===s?void 0:s.organization),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(e){var i=null===e||void 0===e?void 0:e.find((function(e){return e.day===v.lY[2]}));return i?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{children:(0,u.jsxs)("div",{children:[(0,u.jsxs)("span",{children:["Open: ",(0,x.YZ)(null===i||void 0===i?void 0:i.open)," "]}),(0,u.jsx)("br",{}),(0,u.jsxs)("span",{children:["Close: ",(0,x.YZ)(null===i||void 0===i?void 0:i.close)," "]})]})}),(0,u.jsx)("div",{})]}):(0,u.jsx)(u.Fragment,{children:"Today Not Available"})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{style:{height:"65px"}}),(0,u.jsx)("div",{className:"",children:(0,u.jsx)("div",{className:" banner text-center",children:(0,u.jsx)("h3",{className:"title pt-0",children:null===Z||void 0===Z?void 0:Z.name})})}),(0,u.jsxs)("div",{className:"splz-deatial container mt-3",children:[(0,u.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,u.jsx)("div",{className:"mb-0",children:(0,u.jsx)("img",{className:"specialization-image",src:null===Z||void 0===Z?void 0:Z.pic,alt:""})}),(0,u.jsx)("div",{className:"deatil  m-0 ",children:(0,u.jsx)("p",{className:"details-text",children:null===Z||void 0===Z?void 0:Z.description})})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("h2",{className:"text-center",children:"Hospitals"}),(0,u.jsx)("div",{className:"row",children:(null===b||void 0===b?void 0:b.length)>0&&b.map((function(e){var i;return(0,u.jsx)("div",{className:"ml-2 col-lg-4 mb-4 col-md-4 mcard mt-2",children:(0,u.jsxs)("div",{className:"hospitalCard ",children:[(0,u.jsx)("span",{className:" hospital-title",children:e.name}),(0,u.jsxs)("div",{className:"hospitalCard-background-img",children:[(0,u.jsx)("img",{className:"hospitalCard-background-img",src:null!==e&&void 0!==e&&e.photo?(0,x.a9)(e.photo):h,alt:""}),(0,u.jsxs)("span",{style:{marginLeft:"10px",fontSize:"10px"},className:"ml-2 p-2 clinic-title",children:["\u20b9",null===e||void 0===e?void 0:e.fee]})]}),(0,u.jsxs)("div",{className:"clinic-details d-flex flex-row justify-content-between",children:[(0,u.jsxs)("div",{className:"mt-3",children:[(0,u.jsx)("h6",{className:"hospital-specialization text-disabled",children:e.specialization.length>1?"Multi speciality":(null===(i=e.specialization[0])||void 0===i?void 0:i.name)||"-"}),(0,u.jsx)("div",{className:"contact-info mt-3",children:(0,u.jsx)("div",{children:(0,u.jsxs)("p",{className:"ml-2 adjust hospital-address  ",children:[(0,u.jsx)(o.G,{className:"clinic-icon address-icon",icon:m.opg}),e.address||"-"]})})})]}),(0,u.jsxs)("div",{className:"mt-3 hospital-card-timing",children:["Timing",(0,u.jsxs)("div",{className:"d-flex flex-column justify-contant-between",children:[E(e.timing),(0,u.jsx)("div",{className:"",children:(0,u.jsx)(d.rU,{className:"text-light hospital-btn  btn btn1 btn-primary shadow-none",to:"/hospital/".concat(e._id),children:"View More"})})]})]})]})]})})}))})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("h2",{className:"text-center",children:"clincs"}),(0,u.jsx)("div",{className:"row",children:p.length>0&&p.filter((function(e,i){return i<3})).map((function(e,i){return(0,u.jsx)("div",{className:"col-lg-4 mb-4 col-md-4 mcard mt-4",children:(0,u.jsxs)("div",{style:{background:"#ffffff"},className:"clinic-card ",children:[(0,u.jsx)("div",{className:"inner-card-border"}),(0,u.jsxs)("div",{style:{marginBottom:"-22px"},children:[(0,u.jsx)("img",{className:"clinic-img",src:null!==e&&void 0!==e&&e.photo?(0,x.a9)(null===e||void 0===e?void 0:e.photo):h,alt:""}),(0,u.jsx)("span",{className:" p-2 clinic-title",children:null===e||void 0===e?void 0:e.name}),(0,u.jsxs)("span",{style:{marginLeft:"10px",fontSize:"10px"},className:"ml-2 p-2 clinic-title",children:["\u20b9",null===e||void 0===e?void 0:e.fee]})]}),(0,u.jsxs)("div",{className:"clinic-details d-flex flex-row justify-content-between",children:[(0,u.jsxs)("div",{className:"mt-2",children:[(0,u.jsx)("h6",{className:"clinic-specialization text-disabled",children:"Dermatologist"}),(0,u.jsxs)("div",{className:"contact-info",children:[(0,u.jsx)("h6",{className:"text-disabled mt-1",children:"Contact Info :"}),(0,u.jsx)("div",{children:(0,u.jsxs)("p",{className:"ml-2 adjust hospital-address  ",children:[(0,u.jsx)(o.G,{className:"clinic-icon address-icon",icon:m.opg}),(null===e||void 0===e?void 0:e.address)||"-"]})})]})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("h6",{className:"text-disabled",children:"Timming"}),(0,u.jsxs)("div",{className:"d-flex flex-column justify-contant-between",children:[(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("p",{className:"clinic-timming mb-0",children:"Morning : 08 AM to 11 PM"}),(0,u.jsx)("p",{className:"clinic-timming mb-0",children:"Evening : 05 PM to 11 PM"})]}),(0,u.jsx)(d.rU,{className:"text-light clinic-btn  btn btn1 btn-primary shadow-none",to:"/clinic-detail/".concat(null===e||void 0===e?void 0:e._id),children:"View More"})]})]})]})]})},i)}))})]})]})]})}}}]);
//# sourceMappingURL=821.bb3a010d.chunk.js.map