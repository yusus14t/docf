"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[148],{7970:function(s,e,a){a.d(e,{L:function(){return o},c:function(){return m}});var n=a(9439),i=a(1413),t=a(4925),l=a(2791),r=a(184),c=["children"],m=function(s){var e=s.children,a=(0,t.Z)(s,c);return(0,r.jsx)("li",(0,i.Z)((0,i.Z)({class:"dropdown-menu-header cursor-pointer dropdown-menu-active px-2 py-1"},a),{},{children:e}))},o=function(s){var e=s.toggle,a=s.children,i=(0,l.useState)(!1),t=(0,n.Z)(i,2),c=t[0],m=t[1],o=(0,l.useRef)(null),d=function(s){o.current.contains(s.target)||m(!1)};return(0,l.useEffect)((function(){return c&&window.addEventListener("mousedown",d),function(){return window.removeEventListener("mousedown",d)}})),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"dropdown",onClick:function(){return m(!c)},ref:o,children:[e,(0,r.jsx)("ul",{class:"dropdown-menu dropdown-menu-end user-dropdown pb-0 ".concat(c&&"show"),"aria-labelledby":"userDropdown","data-bs-popper":"none",children:a})]})})}},2148:function(s,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=a(2791),i=a(7689),t=(a(249),a(562),a(9439)),l=a(1087),r=a(3351),c=a(3632),m=a(9806),o=a(1632),d=a(184);var x=function(s){var e=s.isOpen;return(0,d.jsx)("aside",{className:"side-nav fixed ms-aside-scrollable ms-aside ps ps--active-y  ".concat(e?"":"ms-aside-left"," "),children:(0,d.jsx)("div",{className:"logo-sn ms-d-block-lg m-container",children:(0,d.jsxs)("div",{className:"m-container",children:[(0,d.jsxs)("div",{className:"",children:[(0,d.jsxs)(l.rU,{to:"/",className:"text-center",children:[" ",(0,d.jsx)("img",{className:"profile-image",src:r,alt:"logo"})]}),(0,d.jsx)("p",{className:"m-title",children:"Arif Mohd"})]}),(0,d.jsx)("div",{className:"m-footer",children:(0,d.jsx)(l.rU,{to:"/login",className:"m-login",children:"Login/Signup"})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("ul",{className:"m-menu",children:[(0,d.jsx)("li",{className:"m-menu-item",children:(0,d.jsxs)(l.rU,{to:"/",className:"text-white",children:["Home"," ",(0,d.jsx)(m.G,{style:{marginLeft:"100px"},className:"m-icon",icon:o.ccb}),(0,d.jsx)("hr",{className:"underline"})]})}),(0,d.jsx)("li",{className:"m-menu-item",children:(0,d.jsxs)(l.rU,{to:"/hospitals",className:"text-white",children:[" ","Hospitals"," ",(0,d.jsx)(m.G,{style:{marginLeft:"66px"},className:" m-icon",icon:o.ccb}),(0,d.jsx)("hr",{className:"underline"})]})}),(0,d.jsx)("li",{className:"m-menu-item",children:(0,d.jsxs)(l.rU,{to:"/clinic",className:"text-white",children:["Clinics",(0,d.jsx)(m.G,{style:{marginLeft:"101px"},className:"m-icon",icon:o.ccb})," ",(0,d.jsx)("hr",{className:"underline"})]})}),(0,d.jsx)("li",{className:"m-menu-item",children:(0,d.jsxs)(l.rU,{to:"/doctors",className:"text-white",children:["Doctors"," ",(0,d.jsx)(m.G,{style:{marginLeft:"78px"},className:"m-icon",icon:o.ccb})," ",(0,d.jsx)("hr",{className:"underline"})]})}),(0,d.jsx)("li",{className:"m-menu-item",children:(0,d.jsxs)(l.rU,{to:"/clinic",className:"text-white",children:["About Us",(0,d.jsx)(m.G,{style:{marginLeft:"70px"},className:"m-icon",icon:o.ccb}),(0,d.jsx)("hr",{className:"underline"})]})}),(0,d.jsx)("li",{className:"m-menu-item",children:(0,d.jsxs)(l.rU,{to:"/clinic",className:"text-white",children:["Contact",(0,d.jsx)(m.G,{style:{marginLeft:"86px"},className:"m-icon",icon:o.ccb}),(0,d.jsx)("hr",{className:"underline"})]})})]})})]})})})},u=a(7970),h=a(6148),p=function(){var s=JSON.parse(localStorage.getItem("user")),e=(0,n.useState)(Boolean(s)),a=(0,t.Z)(e,1)[0],i=(0,n.useState)(!1),m=(0,t.Z)(i,2),o=m[0],p=m[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{isOpen:o,setIsOpen:p}),(0,d.jsxs)("nav",{className:"navbar ms-navbar",children:[(0,d.jsxs)("div",{className:"ms-aside-toggler ms-toggler ps-0",children:[(0,d.jsx)("span",{className:"ms-toggler-bar bg-white"}),(0,d.jsx)("span",{className:"ms-toggler-bar bg-white"}),(0,d.jsx)("span",{className:"ms-toggler-bar bg-white"})]}),(0,d.jsx)("div",{className:"docfind-logo",children:(0,d.jsx)(l.rU,{className:"sigma_logo",to:"/",children:(0,d.jsx)("img",{className:"logo",src:c,alt:"logo"})})}),(0,d.jsx)("div",{className:"menu_item",children:(0,d.jsxs)("ul",{className:"ms-nav-list ms-inline mb-0",id:"ms-nav-options",children:[(0,d.jsx)("li",{className:"ms-nav-item  ms-d-none",children:(0,d.jsx)(l.rU,{to:"/",className:"text-white","data-bs-toggle":"modal",children:"Home"})}),(0,d.jsx)("li",{className:"ms-nav-item ms-d-none",children:(0,d.jsx)(l.rU,{to:"/gynae",className:"text-white","data-bs-toggle":"modal",children:"Gynae"})}),(0,d.jsx)("li",{className:"ms-nav-item ms-d-none",children:(0,d.jsx)(l.rU,{to:"/hospitals",className:"text-white","data-bs-toggle":"modal",children:" Hospitals"})}),(0,d.jsx)("li",{className:"ms-nav-item ms-d-none",children:(0,d.jsx)(l.rU,{to:"/clinic",className:"text-white","data-bs-toggle":"modal",children:"Clinics"})}),(0,d.jsx)("li",{className:"ms-nav-item ms-d-none",children:(0,d.jsx)(l.rU,{to:"/doctors",className:"text-white","data-bs-toggle":"modal",children:"Doctors"})}),(0,d.jsx)("li",{className:"ms-nav-item ms-d-none",children:(0,d.jsx)(l.rU,{to:"/about",className:"text-white","data-bs-toggle":"modal",children:"About Us"})}),(0,d.jsx)("li",{className:"ms-nav-item ms-d-none",children:(0,d.jsx)(l.rU,{to:"/contact",className:"text-white","data-bs-toggle":"modal",children:"Contact"})})]})}),a?(0,d.jsx)("div",{className:"ms-nav-item ms-nav-user dropdown d-profile cursor-pointer",children:(0,d.jsxs)(u.L,{toggle:(0,d.jsx)("img",{className:"ms-user-img ms-img-round float-end avatar",src:r,alt:"people"}),children:[(0,d.jsx)("li",{className:"dropdown-menu-header",children:(0,d.jsx)("h6",{className:"dropdown-header ms-inline m-0",children:(0,d.jsx)("span",{className:"text-disabled",children:"Welcome, Dr Samuel Deo"})})}),(0,d.jsx)("li",{className:"dropdown-divider"}),s&&(0,d.jsxs)(u.c,{children:[" ",(0,d.jsxs)(l.rU,{className:"fs-14 p-2",to:h._A[s.userType].path,children:[" ",(0,d.jsx)("span",{children:"Dashboard"})," "]})]}),(0,d.jsx)(u.c,{onClick:function(){return localStorage.clear(),void window.location.replace("/login")},children:(0,d.jsxs)("span",{className:"fs-14 p-2",children:[(0,d.jsx)("i",{className:"flaticon-user"}),"Logout"]})})]})}):(0,d.jsx)("div",{className:"login_button",children:(0,d.jsx)(l.rU,{to:"/login",children:"Login/Signup"})}),(0,d.jsxs)("div",{className:"ms-toggler ms-d-block-sm pe-0 ms-nav-toggler","data-bs-toggle":"slideDown","data-bs-target":"#ms-nav-options",onClick:function(){p(!o)},children:[(0,d.jsx)("span",{className:"ms-toggler-bar bg-white"}),(0,d.jsx)("span",{className:"ms-toggler-bar bg-white"}),(0,d.jsx)("span",{className:"ms-toggler-bar bg-white"})]})]})]})};var j=function(){return(0,d.jsx)("footer",{className:"sigma_footer style-5 pb-0 footer",children:(0,d.jsx)("p",{className:"mb-0 p-2 text-center",children:"Made with \u2764\ufe0f in India | Copyright \xa9, Doctor Time. All rights reserved"})})},g=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),(0,d.jsx)(i.j3,{}),(0,d.jsx)(j,{})]})}},562:function(){},249:function(){},3351:function(s,e,a){s.exports=a.p+"static/media/doctor-3.e3e8e76ce23c22e321ff.jpg"},3632:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAABgCAYAAADfA4MyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABMKSURBVHhe7d0LmE1V/wfw35ASyqUYl0rlEuFVKIkkepTKYzKJyi2My1Cv5FKv3noTur0u436LFKKmmX8KSSrk1pPco7ci5VLuhnLJ2P/z3dYwZ85a5+xz5pxjn/H9PM96nLWdfS57zvmdtdf6rbXjRMTyFCIicqF86l8iInIhBmkiIhc7192Rnp4uCQkJuElERBdQYmKipKWl2bfZkiYicjEGaSIiF2OQJiJyMQZpIiIXczRwmJmZqW4RUTTky5dP4uLw9aSLUfaBQ0CQtjxB2tJZv369/f8sLCzRKytWrFDfQLoYtWzZ8txngd0dREQuxiBNRORiDNJERC7GIE1E5GIM0kRELsYgTUTkYgzSREQuxiBNRORiDNJERC7GIE1E5GIM0kRELsYgTUTkYgzSREQuxiBNRORiDNJERC7GIE1E5GIM0kRELsYgTUTkYgzSREQuxiBNRORiDNJERC7GIE1E5GIM0kRELhbnKRZupKenS0JCAm562bBhg9SsWVPVwqN69epy2WWXqZrZmTNn5MCBA7Jv3z45fvy42hpZl1xyidStW1caNmwoZcqUkVKlSskVV1xhv4a9e/fKtm3b5LPPPrP/jaSiRYvKvffeK7feeqvEx8fb5fTp07J//3757bffZNmyZbJ69eqQjsull14qNWrUULXw2rlzp/zxxx+qFpwiRYrIPffcI3Xq1LGPO94z/h54PJSNGzfK559/bn8mcqNEiRJyww03qFpgR48etZ8zt88bjBUrVki9evVUjS42iYmJkpaWpmpng7TlCdKWzvr16+3/D2f58ccf1aM7d/DgQfs19uzZ0ypXrpz2cXNTKlWqZL399tvW4cOH1TP6h/fQr18/q3DhwtrHC7U0atTI8gQi6++//1bPZPbnn39aEydOtDw/etrHMpXy5curRwi/Z599Vvuc/krjxo0tzw+fderUKfUoZpmZmdaqVausVq1aWXFxcdrHC1SeeOIJ9WjB8fxQWKmpqVbz5s1Dfm6nxROk1bPSxahly5bnPgsXpCXtCXBSsWJFVQue58ss06ZNk9dee01++eUXtTU0aCWnpKRI+/btJX/+/Gqrc2hhDxw4UCZPnqy2hOa6666Tt956y249BwtnHKNHj5YXXnhBjh07praaeYJ0ro+bSd++fWXYsGGq5l/lypXt44azllBs2rRJevToIV9//bXa4ownSMuMGTNULTSexov9OJs3b1ZbwivYlvToeeMkdUW6qkVW6oBZUvLKkqom8tm6xTLkg9dUTW9M1xFSo3x1VTvvjfThMu/bBarmrX7VejK07SBVyx1P3JMuY3vIT3t+Vlu8/bN5L2l5RwtVO29fxj555PXHVS08Bj/xH7nr5vqqppe9JR2TQTqLpyUpXbt2lVmzZqktwalSpYr9vvFvbk2fPl26d+8uJ06cUFucu+uuu+TDDz+UkiXPf/BD8cMPP0jTpk3l119/VVv03BCkW7RoIe+8845ceeWVaktoPGcc4mm92z9SToUjSAO6mh588EH58ssv1ZbwCTZI95k2QEZ9MlbVImvHpP9JuavKqprIrKWzpX1KF1XTWzJkkdSv4vt+uo7rKVMXT1c1X6n935OEus1VLXQj5o6SftP/pWq+RnUZJsnNuqnaebsO7JbyXSurWnh8OGC2tLj9IVXTyx6kY3rgsHDhwjJz5kx544031Bbn0IrDFyEcARo6dOggH3/8sd2HGgx8EdHPmtsADTfddJMsX75cbrzxRrXFnVq3bm3/OOY2QEOBAgVk1KhR8tJLL6kt0XP55ZfbX6Trr79ebaFw6za+l+w59LuqhWbDjk0ycOZ/VC325Insjn79+slTTz2laoEVK1bMDqjFixdXW8wyMzPtgSMn0FUxcuRIVQusbNmydgsaA3mBoIsHJZBrrrlGUlNTpWDBgmqLu2BQEF1VcXE4ifPv5MmT8tdff6mafwjSrVq1UrXQ4O+Mgc/sJVD3ET5LQ4YMUTUKtwNHD0jnMd3s7opQnDh1QtqOeFJOnQ783XErVwXpRx991A50WeWBBx6w+4pff/31gH1/I0aMsLMynMDpOFrSJjt27LD7OtEiRQBFiw9B74477pA333zTb7Ds2bOn3H///arm35gxY+wMEhP0e7Zt21ZKly5tZ8Og5YZWG7qlvvjiC3UvX8gIGTp0qKr5QoZIx44d/RZTl8mAAQO0988qn376qbqnL5xl4MwH78Nk6dKl9ucA2R045jhbQqYLPgsffPCBupcvBP2pU6fm6owEYxPXXnutV8GYBY7/008/bY8/6LRp08Z+vRQZ6PMeu2CCqgWn/zsD5fvftqha7LJHEJE5oRPN7I74+Hjt/VEwmp6UlGRneZh4vuDafbOXKlWqWKdPn1Z7eDtz5ow1evRoq0iRItp9s0q1atWs1atXq718rV27NuDof61atdS9fSGzY/DgwZbnVF67b1Zp0qSJdeTIEbWXN08r1M7i0O3npOA96FSoUEF7fycFfz+TjIwMy/PDGPC4tWjRwtq9e7fay5fnTEa7X/Ziyu545ZVXtPfPKjVr1rROnDih7u2tXbt22n1CLcFmdzwztb+Vv2XhqJSd+3epZz1r5pL3tPfLXr7eon8/SWOTtffPWQq1LmFt+nWz2suZ+WsWah9LV8bOn6D28ob3qrt/bsr/rf5YPbpZ9uyOmOnu8LxuOxMA/a4Y1dfBABwGzvx5/vnnjVkcaAWj2yTQKS5a9XfeeadxwOiWW26Rhx7yPzDw3HPPqVu+0L+NTA0MivmzePFiufvuu8UTqNWW83AGgG4gN0EWjA7eJ/5248ePD3ha+9FHH9nHF2cDOjgDuvrqq1UtvHBmM3v2bFXzFq6xDdI7+fdJaTeik+NuC2RldB7TXdViW8z1SeOUE6fVmNih88gjj6hbvhCcTcFzyZIlMmGC81Mq9FUjs8SUzaHLlMmC0/777rtP1byhuyCYbJV169bJq6++qmrecCzy5XPHnxiBFVklOuiaQQB0CpOKevfurWre8OPUrFkzVQs/0+tkd0fkYQDwhZkvq5p/Xcb0kL1H9qpaZL3Y+l+yedR3jkuTfzRSezoTkwOHa9assfuGddB3aYI+Zcw2ywkBt0uXLkEPTvz000/GQSO8DtPgGFrhuswGtCiTk5NVzTn0peIHZsqUKV4Fg6MYnHQDpKrpIB3TX/+5Cfq2cSahY3qucMCsSJ2MjAx168Lo26K3rBm20m/p2rSzurfZsqGLtftmL6WK5j4TKVTD56bIl5uWqJrehE8ny7w15rGRcCtdLF5uKlfZcSlSUP8ZMonJIA2mySPlypWziw4G1HRWrlxpB9xQmPJtMdhkGhREq1IHr2P79u2q5hxa8zjNT0pK8inIUHAD07GfM2eOo6wVHdOxr1WrlroVfg0aNFC3vEUq79ypsiXKSM3ra/gtpYvHq3ub/aN8de2+2UuBSwqoe18YHUclyaFjh1TN25adW6Xv9OdVLW+I2SCNYLZ7925V84Y1H3QQOHWwBkao8OU0rVVheh2mU+NvvvlG3cp7InHsV61apW55Mx333EI3m2nMY8uW2M8giBWYYNJj4j9V7Tz0V7cb2clOu8tLYjZIw++/65PcTQHBFBxDXRAoi2l/U0s6Uq/DzSLxnk37oiupUKFCquYcXmO1atW8Sv369aVdu3Z21xHyu3XQYPCXEknhl7oiTWYseU/Vzvr3rJdl3fYNqhY9mNY+6P2hjgryvoMV00Eas810TKfPpsHGUNbsyM40yzDY1xHsbMVYEolj7+94mZ7PHwwEI3Moe8G6IJi+7i9bB1PSsX4KRddTk/vIL3t32Le/2PiVDPsoxb4dbej/HjTHE4QdlP0ZF1mQNvU9m1pYpu2mx3HKNDhnaukjO0HH38SWWBeJY2/aF0uKhtrPHaxPPvnEnpZO0Xf0+FHpkNLFTrdDP3VeFbNBGoNvukwN2LNnj7rlzbQducahwuJTmBqsYwrSpu3IFQ4VziowKzFnye1ZQrhE4tib9jUd33D76quv7NmGyA6iC2P51pVS+9k7ZfdB/ecrL4jZIN2/f391y9v3339vnOiAxYd0sAB+qMHClDKHFelMrwNZHDr44XE6tT07TF1GFgeyPHKWSKajBcN07B977DG56qqrVM05/CghbVIn2KVLg4XJQ3juxo0b2ysxUuSUKlpKEuuZ5xxAoACd1LSTuhWbYjJIY6IIvtw68+fPV7d8YaYg1uXQQUpfsIsSYR1kpLnpzJs3T93yhQkRupYl8qonTpwYdN801tPQDcxhgSJTLnG0mf4umB2IdVeChfeMK/zo+Dv2/hw+fFi2bt16rpi6pQADicHm1VPwMNVgQvfRXkujBqNOxVryUmv9TNdYEXNBGi1N08xAfGkCzdYzLdJTqVIleyEnp9DFgcBumrDibzEgyH5pnOzQfYKp607hdNt0VoHlQN3S0kMGxLfffqtq3pA98fDDD6taYMi5xrR5nYMHD4b8w4Qp31WrVj1X8FnD2UhOWPAJF5yg6ChepLhMf3qK8btmUrhgYZnRe5oUyB/bA/IxE6SRVoVV47AGtCkP9v3335e1a9eqmh5mKprW5sBKZ5ggEWjth9tvv93OaTatpIeWnCmHNwt+ENDS1Rk0aJC9Uh9WgDPBSnJY/wMz73RZLvjBGjx4sKq5w4svvqhu+cLfDj82/pZtxZcUC/ZjpTz0t+tgirzT5U0DQQ788OHDVc0bcqYxg5Wio1H1htIv4RlVcyal83+lYpkKqhY5jzdsI5OSxzoqTiYU5eSqII3FjXAam1WwIA++JFjPAt0DWADJtBYFpuWaFvDJDqew/q4cgiCAVt+kSZPsqyNg9hqCMRbnx6y+hQsX2hMw0PLWQeqXk9eBi8mia8OkT58+8vPPP9sXNMDSp8jZRZ811uPAVHR02yAgmY4HpoVH6tJOoVqwYIE92KaDLh78cGGaON4X1jZBdwZatLg4LY4puonwI2qamo3lVfFDHk54LaauqbFjx7pmbZSLwctt/i21K+hnruaEfuyOjdupWmQ1qFpPOjXp4KgULVRU7RUcezk8NyxVGipPYLQ8gUz7XLriCQjWokWL1N7hlZycrH1OXfG0hq01a9aoPcNn06ZNVqFChbTP6bREYqlSlLJly1q7dnkvdRkOntazVadOHe1z5iympUrHjx+vvb+n1azu4at79+7afXJbgl2q1ImX5wzRLp2ZvRw7fkzd27lILlVattMN6p5n/W/3j9YVj5XU3jerXJdUyTp49PySxvsz9mvvl73kZqnSiQunqHuHT0wuVWqCPsMnn3zS72LzOaG1i4XlkQkSTljoaNy4caoWGK6Rh75YU3paKND6bt68edhO+cMNU/lxfUOnV7txAn9PXBzC1OedW7h+pemxcVYTSnYKhaZSmYoysrN+cTXAGQ76r9GPnVfEdJDetm2bPW333XffVVucO3TokN2FMXfuXLUldFi9Dv3ZpuUz/cEp+m233RaWAIPHQK51KIs0RRNeJ/r1kUGRW5gkg6v44JJhkeJp2Bj/tsjVD2UVPwodug1aN2hldx3kLM+17Gv3X0dT5pnMoEswYjJIY0AH/cM333yzfPfdd2pr8NCPjXS+Xr16hdyaXbZsmR0Yg7ladU6e0387nQ99sqG0gLEPBhExkBXOVnkkIUAjUCP9DmcUwcIEEvw4165d214LPNKQ540V+3SQM41rN1L0zHxmmhx4d5dPeeXx6F+QGNPTL2tV1HFpOPBetaczrg7SWA8BU3zxhUZaFS42ipZzxYoV7TQ8U3ZEMNBKwgAQrmeIgUtkDgRa9wFpXvjCNmnSxA6uuVnJLQsCFQItXgfSu5ysqoaBQWRE4OKzCPCxNvMNXR4YIMV7xgAd1soIBGcJ+HvhBxpdHPiBixYca90PCgYP8ZqCTREjcgKfKnRO2zm1uquJbNiwwc7dvZgg3Q+tUqylgUkimNGH2YPIDEGfLy46EI0FdXDRWeQEI+UQryPrRwuBCamIphmNsQzrcaBViveLgmntOO4oGzdutLM/Lgb4+6I7Lpzsldjm+O+aOTLzDzu/OBizls6W9in62Z9ZlgxZJPWr+L6fruN6ytTF01XNV3yxUrLrrW2qFhqsPBffUX9VoCyjugyT5GbdVO08LItavqv5otWhqFv5Nln+qv7Se1mQWZY1l4JBmsiFGKTPYpCO8YFDIqK8jkGaiMjFGKSJiFzOntUSzRmHLCws/kskZhxS7MhTMw6JiPIyBmkiIhdjkCYicjEGaSIiF2OQJiJyMQZpIiIXY5AmInIxBmkiIhdjkCYicjEGaSIiF2OQJiJyMQZpIiIXY5AmInIxBmkiIhdjkCYicjEGaSIiF2OQJiJyMQZpIiIXY5AmInIxBmkiIheL8xRc7FDS09MlISEBN71s375dunXrpmpEFA0pKSlStWpVVaOLTWJioqSlpdm3AwZpIiKKruxBmt0dREQuxiBNRORiDNJERC7GIE1E5GIM0kRELnYuu4OIiNyHLWkiIhdjkCYici2R/wf2u/S3icpmYwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=148.91955be0.chunk.js.map