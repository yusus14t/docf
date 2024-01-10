"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[631],{3631:function(e,i,s){s.r(i),s.d(i,{default:function(){return j}});var n=s(4165),l=s(5861),a=s(9439),d=s(2791),c=s(2801),r=s(2012),o=s(1087),t=s(5403),v=s(184),m=function(e){var i=e.departments;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"row",children:null===i||void 0===i?void 0:i.map((function(e,i){var s,n,l,a,d,c,m,h,x,u;return(0,v.jsx)("div",{className:"col-lg-6 col-md-10",children:(0,v.jsx)("div",{className:"card p-2 department-card",children:(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)("div",{className:"image",children:(0,v.jsx)("img",{src:null!==e&&void 0!==e&&null!==(s=e.organizationId)&&void 0!==s&&s.photo?(0,t.a9)(null===e||void 0===e||null===(n=e.organizationId)||void 0===n?void 0:n.photo):r,className:"rounded department-card-image",alt:""})}),(0,v.jsxs)("div",{className:"departments-details ",children:[(0,v.jsxs)("h5",{className:"mb-0 mt-0 department-card-name",children:[(0,v.jsxs)("h5",{className:"mb-0 department-card-name",children:[(0,v.jsx)("span",{className:"text-dark mb-0 "})," ",null===e||void 0===e||null===(l=e.organizationId)||void 0===l||null===(a=l.doctor)||void 0===a?void 0:a.name]}),(0,v.jsxs)("span",{style:{fontSize:"15px"},className:"mb-0",children:["Dept. \xa0",null===e||void 0===e||null===(d=e.organizationId)||void 0===d?void 0:d.name]})]}),(0,v.jsx)("span",{children:null!==e&&void 0!==e&&null!==(c=e.organizationId)&&void 0!==c&&c.specialization?null===e||void 0===e||null===(m=e.organizationId)||void 0===m||null===(h=m.specialization)||void 0===h?void 0:h.map((function(e){return e.name})):"-"}),(0,v.jsx)("br",{}),(0,v.jsxs)("span",{children:[" Room No: ",null===e||void 0===e||null===(x=e.organizationId)||void 0===x?void 0:x.room]}),(0,v.jsx)("div",{className:"color-primary mt-2 d-flex flex-row align-items-center",children:(0,v.jsx)(o.rU,{className:"btn btn btn-secondary",to:"/department-detail/".concat(null===e||void 0===e||null===(u=e.organizationId)||void 0===u?void 0:u._id),children:"View Details"})})]})]})})},i)}))})})},h=s(9806),x=s(1632),u=s(7689),p=s(7634),j=function(){var e,i,s=(0,d.useState)({}),r=(0,a.Z)(s,2),o=r[0],j=r[1],f=(0,d.useState)([]),g=(0,a.Z)(f,2),N=g[0],b=g[1],w=(0,d.useState)([]),y=(0,a.Z)(w,2),_=y[0],Z=y[1],z=(0,u.UO)();(0,d.useEffect)((function(){k(),I()}),[z.id]);var I=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.be.get("/notice/".concat(z.id));case 3:i=e.sent,s=i.data,Z(null===s||void 0===s?void 0:s.notices),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.be.get("/hospital-details/".concat(z.id));case 3:i=e.sent,s=i.data,console.log(null===s||void 0===s?void 0:s.details),j(null===s||void 0===s?void 0:s.details),b(null===s||void 0===s?void 0:s.departments),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"box"}),(0,v.jsxs)("div",{className:"hospital-banner",children:[(0,v.jsx)("h4",{className:"clinic-detail-name",children:null===o||void 0===o?void 0:o.name}),(0,v.jsx)("img",{className:"hopsiptal-banner-img",src:null!==o&&void 0!==o&&o.photo?(0,t.a9)(null===o||void 0===o?void 0:o.photo):c,alt:""})]}),(0,v.jsxs)("div",{className:"p-4",children:[(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-md-8",children:N.length>0&&(0,v.jsx)(m,{departments:N})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsxs)("div",{className:"",children:[(0,v.jsxs)("div",{className:"clinic-info-details pb-3",children:[(0,v.jsx)("h4",{className:"mb-3 pt-2  text-center text-light",children:"Info"}),(0,v.jsx)("div",{className:"bg-white m-2 rounded p-2",children:(0,v.jsxs)("h6",{children:["Consultation Fee ",(0,v.jsxs)("span",{className:"ms-4",children:["\u20b9",null===o||void 0===o?void 0:o.fee]})]})}),"DP"!==(null===t.eY||void 0===t.eY?void 0:t.eY.userType)&&(0,v.jsxs)("div",{className:"bg-white m-2 rounded p-2",children:[(0,v.jsx)("h6",{className:"mx-1",children:"Services"}),(0,v.jsx)("div",{className:"d-flex flex-wrap",children:(null===(e=o.services)||void 0===e?void 0:e.length)>0?null===(i=o.services)||void 0===i?void 0:i.map((function(e){return(0,v.jsx)("div",{className:"service-tube m-1",children:null===e||void 0===e?void 0:e.name})})):"-"})]}),(0,v.jsxs)("div",{className:"bg-white m-2 rounded p-2",children:[(0,v.jsx)("h6",{children:"Important Notice"}),(null===_||void 0===_?void 0:_.length)>0?_.map((function(e){return(0,v.jsxs)("div",{style:{borderLeft:"5px solid grey",paddingLeft:"1rem"},children:[(0,v.jsx)("h6",{className:"text-danger",children:e.title}),(0,v.jsx)("p",{className:"text-danger",children:e.description})]})})):(0,v.jsx)("div",{className:"bg-white m-2 rounded p-2",children:"No Data"})]})]}),(0,v.jsx)("div",{className:"text-center",children:(0,v.jsx)("div",{className:"pr-2 ",children:(0,v.jsxs)("table",{className:"table  table-bordered",children:[(0,v.jsx)("thead",{className:"thead-light",children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Session"}),(0,v.jsx)("th",{children:"Open"}),(0,v.jsx)("th",{children:"Close"})]})}),(0,v.jsx)("tbody",{children:Object.entries(p.vr).map((function(e){var i=(0,a.Z)(e,2);return function(e,i){var s,n=null===o||void 0===o||null===(s=o.timing)||void 0===s?void 0:s.find((function(i){return i.day===e}));return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:i}),(0,v.jsx)("td",{children:(0,t.YZ)(null===n||void 0===n?void 0:n.open)}),(0,v.jsx)("td",{children:(0,t.YZ)(null===n||void 0===n?void 0:n.close)})]})}(i[0],i[1])}))})]})})})]})})]}),(0,v.jsxs)("div",{class:"contact-details-clinic",children:[(0,v.jsxs)("div",{class:"sigma_info style-26 d-flex",children:[(0,v.jsx)("div",{class:"sigma_info-title",children:(0,v.jsx)("span",{class:"sigma_info-icon clinic-address-icon-container",children:(0,v.jsx)(h.G,{className:"clinic-address-icon",icon:x.opg})})}),(0,v.jsxs)("div",{class:"sigma_info-description",children:[(0,v.jsx)("p",{children:"Our Address"}),(0,v.jsx)("p",{class:"secondary-color",children:null===o||void 0===o?void 0:o.address})]})]}),(0,v.jsxs)("div",{class:"sigma_info style-26 d-flex",children:[(0,v.jsx)("div",{class:"sigma_info-title d-flex",children:(0,v.jsxs)("span",{class:"sigma_info-icon clinic-address-icon-container",children:[(0,v.jsx)(h.G,{className:"clinic-address-icon",icon:x.j1w}),(0,v.jsx)("i",{class:"fal fa-phone"})]})}),(0,v.jsxs)("div",{class:"sigma_info-description",children:[(0,v.jsx)("p",{children:"Call Us"}),(0,v.jsx)("p",{class:"secondary-color",children:(0,t.CN)(null===o||void 0===o?void 0:o.phone)})]})]}),(0,v.jsxs)("div",{class:"sigma_info style-26 d-flex",children:[(0,v.jsx)("div",{class:"sigma_info-title",children:(0,v.jsx)("span",{class:"sigma_info-icon clinic-address-icon-container",children:(0,v.jsx)(h.G,{className:"clinic-address-icon",icon:x.FU$})})}),(0,v.jsxs)("div",{class:"sigma_info-description",children:[(0,v.jsx)("p",{children:"Our Mail"}),(0,v.jsx)("p",{class:"secondary-color",children:null===o||void 0===o?void 0:o.email})]})]})]})]})]})}},2801:function(e,i,s){e.exports=s.p+"static/media/no-banner.7ad9466fef0476060573.jpg"}}]);
//# sourceMappingURL=631.c067a095.chunk.js.map