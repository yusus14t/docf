"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[631],{3631:function(e,i,s){s.r(i),s.d(i,{default:function(){return j}});var n=s(4165),l=s(5861),a=s(9439),c=s(2791),d=s(5812),r=s(3946),t=s(1087),o=s(184),v=function(e){var i=e.departments;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"row",children:null===i||void 0===i?void 0:i.map((function(e,i){var s,n,l,a,c,d;return(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("div",{className:"card p-2 department-card",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("div",{className:"image",children:(0,o.jsx)("img",{src:r,className:"rounded department-card-image",alt:""})}),(0,o.jsxs)("div",{className:"departments-details ",children:[(0,o.jsx)("h5",{className:"mb-0 mt-0 department-card-name",children:null===e||void 0===e||null===(s=e.organizationId)||void 0===s?void 0:s.name}),(0,o.jsx)("span",{children:null!==e&&void 0!==e&&null!==(n=e.organizationId)&&void 0!==n&&n.specialization?null===e||void 0===e||null===(l=e.organizationId)||void 0===l||null===(a=l.specialization)||void 0===a?void 0:a.map((function(e){return e.name})):"-"}),(0,o.jsx)("br",{}),(0,o.jsxs)("span",{children:[" Room No: ",null===e||void 0===e||null===(c=e.organizationId)||void 0===c?void 0:c.room]}),(0,o.jsx)("div",{className:"color-primary mt-2 d-flex flex-row align-items-center",children:(0,o.jsx)(t.rU,{className:"btn btn btn-secondary w-100",to:"/department/".concat(null===e||void 0===e||null===(d=e.organizationId)||void 0===d?void 0:d._id),children:"View Details"})})]})]})})},i)}))})})},h=s(9806),m=s(1632),x=s(5403),u=s(7689),p=s(6148),j=function(){var e=(0,c.useState)({}),i=(0,a.Z)(e,2),s=i[0],r=i[1],t=(0,c.useState)([]),j=(0,a.Z)(t,2),f=j[0],g=j[1],N=(0,c.useState)([]),b=(0,a.Z)(N,2),w=b[0],y=b[1],_=(0,u.UO)();(0,c.useEffect)((function(){k(),Z()}),[_.id]);var Z=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.be.get("/common/notice/".concat(_.id));case 3:i=e.sent,s=i.data,y(null===s||void 0===s?void 0:s.notices),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.be.get("/hospital-details/".concat(_.id));case 3:i=e.sent,s=i.data,console.log(null===s||void 0===s?void 0:s.details),r(null===s||void 0===s?void 0:s.details),g(null===s||void 0===s?void 0:s.departments),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"box"}),(0,o.jsxs)("div",{className:"hospital-banner",children:[(0,o.jsx)("h4",{className:"clinic-detail-name",children:null===s||void 0===s?void 0:s.name}),(0,o.jsx)("img",{className:"hopsiptal-banner-img",src:null!==s&&void 0!==s&&s.photo?(0,x.a9)(null===s||void 0===s?void 0:s.photo):d,alt:""})]}),(0,o.jsxs)("div",{className:"p-4",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-8",children:f.length>0&&(0,o.jsx)(v,{departments:f})}),(0,o.jsx)("div",{className:"col-md-4",children:(0,o.jsxs)("div",{className:"",children:[(0,o.jsxs)("div",{className:"clinic-info-details pb-3",children:[(0,o.jsx)("h4",{className:"mb-3 pt-2  text-center",children:"Info"}),(0,o.jsxs)("div",{className:"bg-white m-2 rounded p-2",children:["Consultation Fee: Rs\xa0",s.fee," "]}),(0,o.jsx)("div",{className:"bg-white m-2 rounded p-2",children:"Important Notice"}),(0,o.jsx)("div",{className:"bg-white m-2 rounded p-2",children:(null===w||void 0===w?void 0:w.length)>0?w.map((function(e){return(0,o.jsxs)("div",{style:{borderLeft:"5px solid grey",paddingLeft:"1rem"},children:[(0,o.jsx)("h6",{children:"Title"}),(0,o.jsx)("p",{children:"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert message"})]})})):(0,o.jsx)("div",{className:"bg-white m-2 rounded p-2",children:"No Data"})})]}),(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("div",{className:"pr-2 ",children:(0,o.jsxs)("table",{className:"table  table-bordered",children:[(0,o.jsx)("thead",{className:"thead-light",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Session"}),(0,o.jsx)("th",{children:"Open"}),(0,o.jsx)("th",{children:"Close"})]})}),(0,o.jsx)("tbody",{children:Object.entries(p.vr).map((function(e){var i=(0,a.Z)(e,2);return function(e,i){var n,l=null===s||void 0===s||null===(n=s.timing)||void 0===n?void 0:n.find((function(i){return i.day===e}));return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:i}),(0,o.jsx)("td",{children:(null===l||void 0===l?void 0:l.open)||"-"}),(0,o.jsx)("td",{children:(null===l||void 0===l?void 0:l.close)||"-"})]})}(i[0],i[1])}))})]})})})]})})]}),(0,o.jsxs)("div",{class:"contact-details-clinic",children:[(0,o.jsxs)("div",{class:"sigma_info style-26 d-flex",children:[(0,o.jsx)("div",{class:"sigma_info-title",children:(0,o.jsx)("span",{class:"sigma_info-icon clinic-address-icon-container",children:(0,o.jsx)(h.G,{className:"clinic-address-icon",icon:m.opg})})}),(0,o.jsxs)("div",{class:"sigma_info-description",children:[(0,o.jsx)("p",{children:"Our Address"}),(0,o.jsx)("p",{class:"secondary-color",children:null===s||void 0===s?void 0:s.address})]})]}),(0,o.jsxs)("div",{class:"sigma_info style-26 d-flex",children:[(0,o.jsx)("div",{class:"sigma_info-title d-flex",children:(0,o.jsxs)("span",{class:"sigma_info-icon clinic-address-icon-container",children:[(0,o.jsx)(h.G,{className:"clinic-address-icon",icon:m.j1w}),(0,o.jsx)("i",{class:"fal fa-phone"})]})}),(0,o.jsxs)("div",{class:"sigma_info-description",children:[(0,o.jsx)("p",{children:"Call Us"}),(0,o.jsx)("p",{class:"secondary-color",children:(0,x.CN)(null===s||void 0===s?void 0:s.phone)})]})]}),(0,o.jsxs)("div",{class:"sigma_info style-26 d-flex",children:[(0,o.jsx)("div",{class:"sigma_info-title",children:(0,o.jsx)("span",{class:"sigma_info-icon clinic-address-icon-container",children:(0,o.jsx)(h.G,{className:"clinic-address-icon",icon:m.FU$})})}),(0,o.jsxs)("div",{class:"sigma_info-description",children:[(0,o.jsx)("p",{children:"Our Mail"}),(0,o.jsx)("p",{class:"secondary-color",children:null===s||void 0===s?void 0:s.email})]})]})]})]})]})}},3946:function(e,i,s){e.exports=s.p+"static/media/350x300-0.5f6a1382f8171c28e869.jpg"},5812:function(e,i,s){e.exports=s.p+"static/media/user-profile-bg-1920x400.d51b6ea479713cd0985a.jpg"}}]);
//# sourceMappingURL=631.ed43b687.chunk.js.map