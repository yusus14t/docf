"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[276],{6276:function(e,n,i){i.r(n);var s=i(1413),a=i(4165),l=i(5861),r=i(9439),c=i(2791),t=i(1087),d=i(5403),o=i(2012),u=i(6148),m=i(184);n.default=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),i=n[0],p=n[1],x=(0,c.useState)([]),v=(0,r.Z)(x,2),f=(v[0],v[1]),h=(0,c.useState)(null),j=(0,r.Z)(h,2),g=j[0],b=j[1];(0,c.useEffect)((function(){k()}),[g]),(0,c.useEffect)((function(){N(),k()}),[]);var N=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.Jx)();case 2:n=e.sent,f(n.data.images);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.be.get("/all-clinics",(0,s.Z)({params:{filter:{specialization:g||u.yi.map((function(e){return e.name}))}}},(0,d.Ek)()));case 3:n=e.sent,i=n.data,p(null===i||void 0===i?void 0:i.clinics),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"box bg-light"}),(0,m.jsx)("div",{style:{zIndex:"99"},className:" mini-menu position-fixed w-100 bg-light  ",children:(0,m.jsx)("ul",{className:"d-flex mb-0 p-2 overflow-auto",children:u.yi.map((function(e){e.id;var n=e.name;return(0,m.jsx)("li",{className:"bgh py-1 px-3 cursor-pointer rounded mt-1 mx-1  ".concat(g===n&&"ultraActive"),onClick:function(){b(n)},children:n})}))})}),(0,m.jsx)("div",{className:"container mt-5",children:(0,m.jsx)("div",{className:"row",children:(null===i||void 0===i?void 0:i.length)>0&&i.map((function(e,n){return(0,m.jsxs)("div",{className:"col-lg-4 col-md-4 mcard",children:[console.log(e),(0,m.jsx)(t.rU,{to:"/clinic-detail/".concat(e._id),children:(0,m.jsxs)("div",{style:{background:"#edede9",border:"none"},className:"Dr-container mb-3 d-flex p-3",children:[(0,m.jsxs)("div",{className:"ml-3",children:[(0,m.jsx)("img",{className:"dr-profile-img",src:null!==e&&void 0!==e&&e.photo?(0,d.a9)(null===e||void 0===e?void 0:e.photo):o,alt:""}),(0,m.jsx)("div",{style:{fontSize:"10px",height:"30px",marginTop:"10px",marginLeft:"",width:"50px",zIndex:"1"},className:"ml-2 p-2 clinic-title",children:(0,m.jsxs)("h6",{style:{fontSize:"12px"},children:["\u20b9 ",e.fee]})})]}),(0,m.jsxs)("div",{className:"dr-details",children:[(0,m.jsx)("h2",{className:"text-center",children:null===e||void 0===e?void 0:e.name}),(0,m.jsx)("p",{style:{background:"#00afb9"},className:"mb-1 dr-spelialization",children:null===e||void 0===e?void 0:e.specialization[0].name}),(0,m.jsxs)("p",{className:"mb-1 experience-dr",children:["Experience: ",(null===e||void 0===e?void 0:e.experience)||"-"]}),(0,m.jsx)("p",{className:"dr-qualifiction mb-1",children:(null===e||void 0===e?void 0:e.qualification)||"-"}),(0,m.jsx)("p",{className:"dr-address",children:(null===e||void 0===e?void 0:e.address)||"-"})]})]})})]},n)}))})})]})}}}]);
//# sourceMappingURL=276.aa9bc86b.chunk.js.map