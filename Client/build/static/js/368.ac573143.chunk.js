"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[368,161,807],{6236:function(e,i,s){s.r(i),s.d(i,{default:function(){return v}});var n=s(4165),a=s(5861),c=s(9439),l=s(2791),r=s(5403),t=s(1087),d=s(9806),o=s(1632),m=s(6148),u=s.p+"static/media/no_clinic.ed133fe94dd62fc587e2.jpg",x=s(184);var v=function(e){var i=e.source,s=(0,l.useState)([]),v=(0,c.Z)(s,2),h=v[0],j=v[1];(0,l.useEffect)((function(){p()}),[]);var p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.be.get("/all-clinics",{params:{isClinic:!0}});case 3:i=e.sent,s=i.data,j(null===s||void 0===s?void 0:s.clinics),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(e){var i,s,n=null===e||void 0===e?void 0:e.find((function(e){return e.day===m.lY[2]}));return console.log(n),n?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"pb-0  cli-time",children:"Morning"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("span",{children:["Open: ",(0,r.YZ)(null===n||void 0===n||null===(i=n.morning)||void 0===i?void 0:i.open)," "]}),(0,x.jsx)("br",{}),(0,x.jsxs)("span",{children:["Close: ",(0,r.YZ)(null===n||void 0===n||null===(s=n.morning)||void 0===s?void 0:s.close)," "]})]})]}),(0,x.jsx)("div",{})]}):(0,x.jsx)(x.Fragment,{children:"Today Not Available"})};return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"box d-flex align-items-center",children:(0,x.jsx)("h3",{className:"text-center underline",children:(0,x.jsx)("span",{className:"under",children:"Clinics"})})}),(0,x.jsxs)("div",{style:{background:"#f1f5fc"},className:"section section-padding aaside",children:[console.log(h),(0,x.jsx)("div",{className:"asidebox"}),(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row mt-2 mb-2",children:(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("div",{className:"row ",children:h.length>0&&h.filter((function(e,s){return"homepage"===i&&s<=5||"homepage"!==i})).map((function(e,i){var s;return(0,x.jsx)("div",{className:"col-lg-4 mb-4 col-md-6 mcard mt-4",children:(0,x.jsxs)("div",{style:{background:"#ffffff"},className:"clinic-card ",children:[(0,x.jsx)("div",{className:"inner-card-border"}),(0,x.jsxs)("div",{style:{marginBottom:"-22px"},children:[(0,x.jsx)("img",{className:"clinic-img",src:null!==e&&void 0!==e&&e.photo?(0,r.a9)(null===e||void 0===e?void 0:e.photo):u,alt:""}),(0,x.jsx)("span",{className:" p-2 clinic-title",children:null===e||void 0===e?void 0:e.name}),(0,x.jsxs)("span",{style:{marginLeft:"10px",fontSize:"15px"},className:"ml-2 p-2 clinic-title",children:["\u20b9",null===e||void 0===e?void 0:e.fee]})]}),(0,x.jsxs)("div",{className:"clinic-details d-flex flex-row justify-content-between",children:[(0,x.jsxs)("div",{className:"mt-2",children:[(0,x.jsx)("h6",{className:"clinic-specialization text-disabled",children:e.specialization.length>1?"Multi speciality":(null===(s=e.specialization[0])||void 0===s?void 0:s.name)||"-"}),(0,x.jsxs)("div",{className:"contact-info",children:[(0,x.jsx)("h6",{className:"text-disabled mt-1",children:"Contact Info :"}),(0,x.jsxs)("div",{children:[(0,x.jsx)(d.G,{className:"clinic-icon",icon:o.j1w}),(0,x.jsx)("p",{className:"d-inline-block ml-2 mb-0",children:null!==e&&void 0!==e&&e.phone?"+91"+(null===e||void 0===e?void 0:e.phone):""})]}),(0,x.jsx)("div",{children:(0,x.jsxs)("p",{className:"ml-2 adjust hospital-address  ",children:[(0,x.jsx)(d.G,{className:"clinic-icon address-icon",icon:o.opg}),null===e||void 0===e?void 0:e.address]})})]})]}),(0,x.jsxs)("div",{className:"",children:[(0,x.jsx)("h6",{className:"text-disabled",children:"Timming"}),(0,x.jsxs)("div",{className:"d-flex flex-column justify-contant-around",children:[f(null===e||void 0===e?void 0:e.timing),(0,x.jsx)(t.rU,{className:"text-light clinic-btn  btn btn1 btn-primary shadow-none",to:"/clinic-detail/".concat(null===e||void 0===e?void 0:e._id),children:"View More"})]})]})]})]})},i)}))})})})})]})]})}},7339:function(e,i,s){s.r(i),s.d(i,{default:function(){return p}});var n=s(4165),a=s(5861),c=s(9439),l=s(6236),r=s(9148),t=s(2791),d=(s(8040),s(197)),o=(s(9806),s(1087)),m=s(184),u=function(e){var i=e.source,s=e.specializations;return(0,m.jsx)(m.Fragment,{children:s.filter((function(e,s){return"slider1"===i&&s<=3||"slider2"===i&&s>=4&&s<=7||"slider3"===i&&s>=8&&s<=11||"slider4"===i&&s>=12&&s<=15||"slider5"===i&&s>=16&&s<=19})).map((function(e){return(0,m.jsx)(o.rU,{to:"/specialization/".concat(null===e||void 0===e?void 0:e.id),children:(0,m.jsx)("div",{className:"specialization-card",children:(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("div",{className:"spe-circle mx-auto ",children:(0,m.jsx)("img",{style:{width:"85px",height:"85px",borderRadius:"50%"},src:null===e||void 0===e?void 0:e.icon,alt:""})}),(0,m.jsx)("h2",{className:"sixe m-0",children:null===e||void 0===e?void 0:e.name}),(0,m.jsx)("p",{className:"m-0",children:null===e||void 0===e?void 0:e.nickname})]})})})}))})},x=s(5403);var v=function(){var e=(0,t.useState)([]),i=(0,c.Z)(e,2),s=i[0],l=i[1];(0,t.useEffect)((function(){r()}),[]);var r=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.be.get("/get-specializations");case 2:i=e.sent,s=i.data,l(null===s||void 0===s?void 0:s.specializations);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{style:{background:"#29",marginBottom:"200px"},className:"mb-2",children:[(0,m.jsx)("div",{style:{background:"tr"},className:"d-flex flex-row justify-content-between container mb-0  pt-3 px-4",children:(0,m.jsx)("div",{style:{fontSize:"30px"},children:"Specialization "})}),(0,m.jsxs)(d.lr,{dynamicHeight:!1,autoPlay:!0,showThumbs:!1,infiniteLoop:!0,showStatus:!1,onChange:!0,interval:50,children:[(0,m.jsx)("div",{className:"slide",children:(0,m.jsx)("div",{className:"d-flex justify-center",children:(0,m.jsx)("div",{className:"specialization-card-container container",children:(0,m.jsx)(u,{source:"slider1",specializations:s})})})}),(0,m.jsx)("div",{className:"slide",children:(0,m.jsx)("div",{className:"d-flex justify-center",children:(0,m.jsx)("div",{className:"specialization-card-container container",children:(0,m.jsx)(u,{source:"slider2",specializations:s})})})}),(0,m.jsx)("div",{className:"slide",children:(0,m.jsx)("div",{className:"d-flex justify-center",children:(0,m.jsx)("div",{className:"specialization-card-container container",children:(0,m.jsx)(u,{source:"slider3",specializations:s})})})}),(0,m.jsx)("div",{className:"slide",children:(0,m.jsx)("div",{className:"d-flex justify-center",children:(0,m.jsx)("div",{className:"specialization-card-container container",children:(0,m.jsx)(u,{source:"slider4",specializations:s})})})}),(0,m.jsx)("div",{className:"slide",children:(0,m.jsx)("div",{className:"d-flex justify-center",children:(0,m.jsx)("div",{className:"specialization-card-container container",children:(0,m.jsx)(u,{source:"slider5",specializations:s})})})})]})]})})},h=s(8161),j=s(6148);var p=function(){var e=(0,t.useState)([]),i=(0,c.Z)(e,2),s=i[0],d=i[1];(0,t.useEffect)((function(){o()}),[]);var o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Jx)();case 2:i=e.sent,d(i.data.images);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){var i;return(0,x.a9)(null===(i=s.find((function(i){return i.id===e})))||void 0===i?void 0:i.image)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"box"}),(0,m.jsx)("div",{className:" hero-container",style:{background:"url(".concat(u(j.p5.HOME_BANNER),")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",alignItems:"center"},children:(0,m.jsx)("div",{className:"container hero-content ",children:(0,m.jsxs)("div",{className:"",children:[(0,m.jsxs)("h1",{style:{fontWeight:"bolder"},children:["Get Expert ",(0,m.jsx)("span",{children:" "}),(0,m.jsxs)("span",{className:"text-success",children:["Medical ",(0,m.jsx)("br",{})," Consultation"]})]}),(0,m.jsx)("h4",{className:"hjj",children:"Our Partners provide best Medical Treament and advice"})]})})}),(0,m.jsx)("div",{className:"mobie",children:(0,m.jsx)(v,{})}),(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("div",{className:"",children:(0,m.jsx)(h.default,{source:"homepage"})}),(0,m.jsx)(l.default,{source:"homepage"}),(0,m.jsx)(r.Z,{source:"homepage"})]}),(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h3",{className:"text-center underline",children:(0,m.jsx)("span",{className:"under",children:"Why Choose Us"})}),(0,m.jsxs)("div",{className:"row mt-2",children:[(0,m.jsxs)("div",{className:"col-sm-6",children:[(0,m.jsx)("div",{className:"col-5 advantages d-flex align-items-center px-3",children:(0,m.jsx)("h5",{className:" mobi-txt align-middle",children:"Doctortime is a patient's time saving platform .this is India\u2019s first platform where the patient himself can see the live number at the doctor visit."})}),(0,m.jsx)("div",{className:"col-5 advantages d-flex align-items-center px-3",children:(0,m.jsx)("h5",{className:"mobi-txt",children:"Patient can avoid both crowd and infection at the doctor\u2018s place"})}),(0,m.jsx)("div",{className:"col-5 advantages d-flex align-items-center px-3",children:(0,m.jsx)("h5",{className:"mobi-txt",children:"You can book your and your known one's Appointment from any where ."})}),(0,m.jsx)("div",{className:"col-5 advantages d-flex align-items-center px-3",children:(0,m.jsx)("h5",{className:"mobi-txt",children:"You can get best doctor of your area\u2019s in your budget."})})]}),(0,m.jsx)("div",{className:"col-sm-6 advantages-side-img",children:(0,m.jsx)("img",{src:u(j.p5.HOME_BOTTOM_BANNER),alt:"",className:"rounded",style:{height:"460px",width:"100%"}})})]})]})]})}},8161:function(e,i,s){s.r(i);var n=s(4165),a=s(1413),c=s(5861),l=s(9439),r=s(2791),t=s(5403),d=s(6442),o=s(7689),m=s(1087),u=s(184);i.default=function(e){var i=e.source,s=e.filter,x=(0,r.useState)([]),v=(0,l.Z)(x,2),h=v[0],j=v[1];(0,r.useEffect)((function(){p()}),[]);var p=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var i,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.be.get("/all-doctors",(0,a.Z)({params:{filter:s,source:"doctor-page"}},(0,t.Ek)()));case 3:i=e.sent,c=i.data,j(null===c||void 0===c?void 0:c.doctors),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){(0,o.Fg)("/patient-login",{state:{redirectTo:window.location.pathname}})};return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"box d-flex align-items-center",children:(0,u.jsx)("h3",{className:"text-center underline",children:(0,u.jsx)("span",{className:"under",children:"Doctors"})})}),(0,u.jsx)("div",{className:"section section-padding mt-4",children:(0,u.jsx)("div",{className:"container mwidth",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-12",children:(0,u.jsx)("div",{className:"row ",children:(null===h||void 0===h?void 0:h.length)>0&&h.filter((function(e,s){return"homepage"===i&&s<7||"homepage"!==i})).map((function(e,i){var s,n,a;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"col-lg-4 col-md-6 mcard",children:(0,u.jsx)(m.rU,{to:"/clinic-detail/".concat(null===e||void 0===e?void 0:e.organizationId),children:(0,u.jsxs)("div",{onClick:f,className:"Dr-container mb-3 d-flex p-3",children:[(0,u.jsx)("div",{className:"ml-3",children:(0,u.jsx)("img",{className:"dr-profile-img",src:null!==e&&void 0!==e&&e.photo?(0,t.a9)(null===e||void 0===e?void 0:e.photo):d,alt:""})}),(0,u.jsxs)("div",{className:"dr-details",children:[(0,u.jsx)("h2",{className:"DRNAME",children:null===e||void 0===e?void 0:e.name}),(0,u.jsx)("p",{className:"mb-1 dr-spelialization",children:(null===e||void 0===e||null===(s=e.specialization)||void 0===s?void 0:s.name)||(null!==e&&void 0!==e&&null!==(n=e.specialization)&&void 0!==n&&n.length?null===e||void 0===e||null===(a=e.specialization[0])||void 0===a?void 0:a.name:"-")}),(0,u.jsxs)("p",{className:"mb-1 experience-dr",children:["Eperience :",(null===e||void 0===e?void 0:e.experience)||"-"]}),(0,u.jsxs)("p",{className:"dr-qualifiction mb-1",children:["Qualification ",(null===e||void 0===e?void 0:e.qualification)||"-"]}),(0,u.jsx)("p",{className:"dr-address",children:(null===e||void 0===e?void 0:e.address)||"-"})]})]})})},i)})}))})})})})})]})}}}]);
//# sourceMappingURL=368.ac573143.chunk.js.map