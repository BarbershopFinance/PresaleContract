(this["webpackJsonplemonswap-frontend"]=this["webpackJsonplemonswap-frontend"]||[]).push([[10],{708:function(e,n,t){"use strict";var c,r,a=t(63),i=(t(0),t(4)),s=t(17),o=i.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),u=i.e.input(r||(r=Object(a.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary}));n.a=function(e){var n=e.endAdornment,t=e.onChange,c=e.placeholder,r=e.startAdornment,a=e.value;return Object(s.jsxs)(o,{children:[!!r&&r,Object(s.jsx)(u,{placeholder:c,value:a,onChange:t}),!!n&&n]})}},710:function(e,n,t){"use strict";t.d(n,"a",(function(){return x})),t.d(n,"c",(function(){return O})),t.d(n,"b",(function(){return p}));var c=t(3),r=t.n(c),a=t(15),i=t(0),s=t(72),o=t(715),u=t(55),l=t(113),d=t(138),b=t(706),j=t(705),x=function(e){var n=Object(u.b)(),t=Object(s.m)().account,c=Object(j.d)(),o=Object(l.a)(),x=o.toastError,O=o.toastSuccess;return{onApprove:Object(i.useCallback)(Object(a.a)(r.a.mark((function a(){var i;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(b.a)(e,c,t);case 3:return i=r.sent,n(Object(d.a)(t)),O("Success","Got approval!"),r.abrupt("return",i);case 9:return r.prev=9,r.t0=r.catch(0),x("An error occurred.","Did not get approval, please try again"),r.abrupt("return",!1);case 13:case"end":return r.stop()}}),a,null,[[0,9]])}))),[t,n,e,c,x,O])}},O=function(e,n){var t=Object(u.b)(),c=Object(s.m)().account,o=Object(j.f)(n);return{onApprove:Object(i.useCallback)(Object(a.a)(r.a.mark((function a(){var i;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(b.a)(e,o,c);case 3:return i=r.sent,t(Object(d.d)(n,c)),r.abrupt("return",i);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),a,null,[[0,8]])}))),[c,t,e,o,n])}},p=function(e,n){var t=Object(s.m)().account;return Object(i.useCallback)(Object(a.a)(r.a.mark((function c(){var a;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,e.methods.approve(n,o.ethers.constants.MaxUint256).send({from:t});case 3:return a=c.sent,c.abrupt("return",a);case 7:return c.prev=7,c.t0=c.catch(0),c.abrupt("return",!1);case 10:case"end":return c.stop()}}),c,null,[[0,7]])}))),[t,n,e])}},712:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var c,r=t(63),a=t(0),i=t(4),s=t(17),o=i.e.div(c||(c=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var n,t=e.size,c=void 0===t?"md":t,r=Object(a.useContext)(i.a).spacing;switch(c){case"lg":n=r[6];break;case"sm":n=r[2];break;case"md":default:n=r[4]}return Object(s.jsx)(o,{size:n})}},713:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c,r,a=t(63),i=t(0),s=t.n(i),o=t(4),u=t(712),l=t(17),d=o.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),b=o.e.div(r||(r=Object(a.a)(["\n  flex: 1;\n  text-align: center;\n"]))),j=function(e){var n=e.children,t=s.a.Children.toArray(n).length;return Object(l.jsx)(d,{children:s.a.Children.map(n,(function(e,n){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{children:e}),n<t-1&&Object(l.jsx)(u.a,{})]})}))})}},714:function(e,n,t){"use strict";t.d(n,"b",(function(){return x})),t.d(n,"a",(function(){return O})),t.d(n,"c",(function(){return p}));var c=t(45),r=t(3),a=t.n(r),i=t(15),s=t(0),o=t(72),u=t(113),l=t(55),d=t(138),b=t(706),j=t(705),x=function(e){var n=Object(l.b)(),t=Object(o.m)().account,c=Object(j.d)(),r=Object(u.a)(),x=r.toastError,O=r.toastSuccess;return{onReward:Object(s.useCallback)(Object(i.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(b.b)(c,e,t);case 3:return i=r.sent,n(Object(d.a)(t)),O("Success","Harvesting transaction confirmed"),r.abrupt("return",i);case 9:return r.prev=9,r.t0=r.catch(0),x("An error occurred.","Harvesting unsuccessful, please try again"),r.abrupt("return",!1);case 13:case"end":return r.stop()}}),r,null,[[0,9]])}))),[t,n,e,c,x,O])}},O=function(e){var n=Object(o.m)().account,t=Object(j.d)();return{onReward:Object(s.useCallback)(Object(i.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(b.b)(t,r,n)])}),[]),r.abrupt("return",Promise.all(i));case 2:case"end":return r.stop()}}),r)}))),[n,e,t])}},p=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(l.b)(),c=Object(o.m)(),r=c.account,u=Object(j.f)(e),x=Object(j.d)(),O=Object(s.useCallback)(Object(i.a)(a.a.mark((function c(){return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=5;break}return c.next=3,Object(b.b)(x,0,r);case 3:c.next=12;break;case 5:if(!n){c.next=10;break}return c.next=8,Object(b.h)(u,r);case 8:c.next=12;break;case 10:return c.next=12,Object(b.g)(u,r);case 12:t(Object(d.f)(e,r)),t(Object(d.e)(e,r));case 14:case"end":return c.stop()}}),c)}))),[r,t,n,x,u,e]);return{onReward:O}}},723:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var c,r,a,i,s,o=t(63),u=(t(0),t(4)),l=t(721),d=t(35),b=t(703),j=t(708),x=t(17),O=u.e.div(c||(c=Object(o.a)([""]))),p=u.e.div(r||(r=Object(o.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),f=u.e.div(a||(a=Object(o.a)(["\n  align-items: center;\n  display: flex;\n"]))),h=u.e.div(i||(i=Object(o.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),m=u.e.span(s||(s=Object(o.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),v=function(e){var n=e.max,t=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=e.depositFeeBP,s=void 0===i?0:i,o=Object(b.a)(),u=a,v=n;return Object(x.jsxs)(O,{children:[Object(x.jsxs)(h,{children:[v.toLocaleString()," ",t," ",o(526,"Available")]}),Object(x.jsx)(j.a,{endAdornment:Object(x.jsxs)(f,{children:[Object(x.jsx)(m,{children:t}),Object(x.jsx)(p,{}),Object(x.jsx)("div",{children:Object(x.jsx)(d.d,{size:"sm",onClick:r,children:o(452,"Max")})})]}),onChange:c,placeholder:"0",value:u}),s>0?Object(x.jsxs)(h,{children:[o(10001,"Deposit Fee"),": ",new l.a(u||0).times(s/1e4).toString()," ",t]}):null]})}},725:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u})),t.d(n,"d",(function(){return a})),t.d(n,"e",(function(){return o}));t(0);var c=t(35),r=t(17),a=function(){return Object(r.jsx)(c.z,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},i=function(){return Object(r.jsx)(c.z,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},s=function(){return Object(r.jsx)(c.z,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},o=function(){return Object(r.jsx)(c.z,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"SPECIAL"})},u=function(){return Object(r.jsx)(c.z,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},726:function(e,n,t){"use strict";t.d(n,"b",(function(){return j}));var c=t(3),r=t.n(c),a=t(15),i=t(0),s=t(72),o=t(55),u=t(138),l=t(113),d=t(706),b=t(705),j=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(o.b)(),c=Object(s.m)(),l=c.account,j=Object(b.d)(),x=Object(b.f)(e),O=Object(i.useCallback)(function(){var c=Object(a.a)(r.a.mark((function c(a){return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=5;break}return c.next=3,Object(d.i)(j,0,a,l);case 3:c.next=12;break;case 5:if(!n){c.next=10;break}return c.next=8,Object(d.e)(x,a,l);case 8:c.next=12;break;case 10:return c.next=12,Object(d.d)(x,a,l);case 12:t(Object(u.g)(e,l)),t(Object(u.e)(e,l));case 14:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[l,t,n,j,x,e]);return{onStake:O}};n.a=function(e){var n=Object(o.b)(),t=Object(s.m)().account,c=Object(b.d)(),j=Object(l.a)(),x=j.toastError,O=j.toastSuccess;return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(r.a.mark((function a(i,s){var o;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(d.i)(c,e,i,t,s);case 3:o=r.sent,n(Object(u.a)(t)),console.info(o),O("Success","Staking transaction confirmed"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),x("An error occurred.","Transaction unsuccessful, please try again");case 12:case"end":return r.stop()}}),a,null,[[0,9]])})));return function(e,n){return i.apply(this,arguments)}}(),[t,n,c,e,O,x])}}},728:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var c=t(721);c.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new c.a(.2);var r=new c.a(10512e3)},729:function(e,n,t){"use strict";var c,r=t(63),a=t(4).e.div(c||(c=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));n.a=a},730:function(e,n,t){"use strict";t.d(n,"b",(function(){return x}));var c=t(3),r=t.n(c),a=t(15),i=t(0),s=t(72),o=t(55),u=t(113),l=t(138),d=t(706),b=t(705),j=[5,6,3,1,22,23],x=function(e){var n=Object(o.b)(),t=Object(s.m)().account,c=Object(b.d)(),u=Object(b.f)(e),x=j.includes(e);return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(r.a.mark((function a(i){var s,o,b;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==e){r.next=7;break}return r.next=3,Object(d.j)(c,0,i,t);case 3:s=r.sent,console.info(s),r.next=18;break;case 7:if(!x){r.next=14;break}return r.next=10,Object(d.c)(u,i,t);case 10:o=r.sent,console.info(o),r.next=18;break;case 14:return r.next=16,Object(d.f)(u,i,t);case 16:b=r.sent,console.info(b);case 18:n(Object(l.g)(e,t)),n(Object(l.e)(e,t)),n(Object(l.f)(e,t));case 21:case"end":return r.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[t,n,x,c,u,e])}};n.a=function(e){var n=Object(o.b)(),t=Object(s.m)().account,c=Object(b.d)(),j=Object(u.a)(),x=j.toastError,O=j.toastSuccess;return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(r.a.mark((function a(i,s){var o;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(d.j)(c,e,i,t,s);case 3:o=r.sent,n(Object(l.a)(t)),console.info(o),O("Success","Unstaking transaction confirmed"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),x("An error occurred.","Transaction unsuccessful, please try again");case 12:case"end":return r.stop()}}),a,null,[[0,9]])})));return function(e,n){return i.apply(this,arguments)}}(),[t,n,c,e,O,x])}}},831:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return xn}));var c,r,a,i,s,o,u,l,d,b=t(63),j=t(23),x=t(16),O=t(0),p=t.n(O),f=t(30),h=t(13),m=t.n(h),v=t(4),g=t(72),k=t(35),w=t(728),y=t(759),C=t.n(y),S=t(816),z=t.n(S),D=t(703),A=t(321),N=function(){return Object(O.useContext)(A.a)},E=t(704),F=t(183),B=t(28),I=t(729),P=t(182),R=t(725),T=v.e.div(c||(c=Object(b.a)(["\n  background: ",";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",";\n  box-shadow: ",";\n  flex-direction: column;\n  position: relative;\n"])),(function(e){return e.theme.card.background}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"secondary"]}),(function(e){return e.isActive?"0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);":"0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"})),M=v.e.div(r||(r=Object(b.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"])),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"text"]})),L=t(17),U=v.e.div(a||(a=Object(b.a)(["\n  color: ",";\n  font-size: 40px;\n  font-weight: 600;\n"])),(function(e){return e.theme.colors.text})),H=v.e.div(i||(i=Object(b.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-bottom: 16px;\n"])),(function(e){return e.theme.colors.textSubtle})),W=v.e.div(s||(s=Object(b.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),Y=v.e.div(o||(o=Object(b.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.text})),_=v.e.div(u||(u=Object(b.a)(["\n  border-top: 1px solid ",";\n  padding: 24px;\n"])),(function(e){return e.theme.isDark?"#524B63":"#E9EAEB"})),q=function(){var e=Object(D.a)();return Object(L.jsxs)(T,{children:[Object(L.jsxs)("div",{style:{padding:"24px"},children:[Object(L.jsxs)(M,{children:[e(414,"Your Project?")," ",Object(L.jsx)("span",{role:"img","aria-label":"eyes",children:"\ud83d\udc40"})]}),Object(L.jsx)(k.p,{src:"/images/question.png",width:64,height:64,alt:"Your project here"}),Object(L.jsx)(U,{children:"???"}),Object(L.jsx)(H,{children:e(416,"Create a pool for your token")}),Object(L.jsx)(k.d,{variant:"secondary",as:"a",href:"https://t.me/lemonswap",external:!0,fullWidth:!0,mb:"16px",children:e(418,"Apply Now")}),Object(L.jsxs)(W,{children:[Object(L.jsxs)("div",{style:{flex:1},children:[e(736,"APR"),":"]}),Object(L.jsx)(Y,{children:"??"})]}),Object(L.jsxs)(W,{children:[Object(L.jsxs)("div",{style:{flex:1},children:[Object(L.jsx)("span",{role:"img","aria-label":"syrup",children:" "}),e(384,"Your Stake"),":"]}),Object(L.jsx)(Y,{children:"??? Lemon"})]})]}),Object(L.jsx)(_,{children:Object(L.jsx)(R.b,{})})]})},V=t(3),G=t.n(V),J=t(15),Q=t(716),K=v.e.div(l||(l=Object(b.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"primary"]})),X=function(e){var n=e.text,t=e.isFinished,c=void 0!==t&&t;return Object(L.jsx)(K,{isFinished:c,children:n})},Z=t(705),$=t(710),ee=t(726),ne=t(730),te=t(714),ce=t(717),re=t.n(ce),ae=Object(v.e)(k.A)(d||(d=Object(b.a)(["\n  color: ",";\n"])),(function(e){var n=e.isDisabled,t=e.color,c=e.theme;return n?c.colors.textDisabled:t})),ie=function(e){var n=e.value,t=e.fontSize,c=e.color,r=e.decimals,a=e.isDisabled,i=e.unit,s=Object(O.useRef)(0);return Object(O.useEffect)((function(){s.current=n}),[n]),Object(L.jsxs)(ae,{bold:!0,color:c,fontSize:t,isDisabled:a,children:[Object(L.jsx)(re.a,{start:s.current,end:n,decimals:r,duration:1,separator:","}),n&&i&&Object(L.jsx)("span",{children:i})]})};ie.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var se,oe,ue,le,de,be,je,xe,Oe,pe,fe,he,me,ve,ge,ke,we,ye,Ce,Se,ze,De,Ae=ie,Ne=t(713),Ee=t(723),Fe=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,i=Object(O.useState)(""),s=Object(j.a)(i,2),o=s[0],u=s[1],l=Object(O.useState)(!1),d=Object(j.a)(l,2),b=d[0],x=d[1],p=Object(D.a)(),f=Object(O.useMemo)((function(){return Object(E.c)(n,6)}),[n]),h=Object(O.useCallback)((function(e){u(e.currentTarget.value)}),[u]),m=Object(O.useCallback)((function(){u(f)}),[f,u]);return Object(L.jsxs)(k.u,{title:"".concat(p(316,"Deposit")," ").concat(a," Tokens"),onDismiss:c,children:[Object(L.jsx)(Ee.a,{value:o,onSelectMax:m,onChange:h,max:f,symbol:a}),Object(L.jsxs)(Ne.a,{children:[Object(L.jsx)(k.d,{fullWidth:!0,variant:"secondary",onClick:c,children:p(462,"Cancel")}),Object(L.jsx)(k.d,{fullWidth:!0,disabled:b,onClick:Object(J.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,t(o);case 3:x(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:b?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},Be=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,i=Object(O.useState)(""),s=Object(j.a)(i,2),o=s[0],u=s[1],l=Object(O.useState)(!1),d=Object(j.a)(l,2),b=d[0],x=d[1],p=Object(D.a)(),f=Object(O.useMemo)((function(){return Object(E.c)(c)}),[c]),h=Object(O.useCallback)((function(e){u(e.currentTarget.value)}),[u]),m=Object(O.useCallback)((function(){u(f)}),[f,u]);return Object(L.jsxs)(k.u,{title:"Withdraw ".concat(a),onDismiss:t,children:[Object(L.jsx)(Ee.a,{onSelectMax:m,onChange:h,value:o,max:f,symbol:a}),Object(L.jsxs)(Ne.a,{children:[Object(L.jsx)(k.d,{variant:"secondary",onClick:t,children:p(462,"Cancel")}),Object(L.jsx)(k.d,{disabled:b,onClick:Object(J.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(o);case 3:x(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:b?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},Ie=function(e){var n=e.earnings,t=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,i=Object(O.useState)(!1),s=Object(j.a)(i,2),o=s[0],u=s[1],l=Object(D.a)(),d=Object(O.useMemo)((function(){return Object(E.c)(n)}),[n]);return Object(L.jsxs)(k.u,{title:"".concat(l(999,"Compound")," ").concat(l(330,"".concat(a," Earned"))),onDismiss:c,children:[Object(L.jsx)(Pe,{children:Object(L.jsx)(Ae,{value:Number(d)})}),Object(L.jsxs)(Ne.a,{children:[Object(L.jsx)(k.d,{fullWidth:!0,variant:"secondary",onClick:c,children:l(462,"Cancel")}),Object(L.jsx)(k.d,{id:"compound-cake",fullWidth:!0,disabled:o,onClick:Object(J.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(d);case 3:u(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:o?l(488,"Pending Confirmation"):l(464,"Confirm")})]})]})},Pe=v.e.div(se||(se=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]))),Re=v.e.div(oe||(oe=Object(b.a)(["\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]))),Te=v.e.a(ue||(ue=Object(b.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]))),Me=function(e){var n=e.hasBalance;return void 0!==n&&n?Object(L.jsxs)("div",{children:[Object(L.jsx)(Re,{children:"Action Required"}),Object(L.jsx)(Te,{href:" https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",target:"_blank",children:"What do I need to do?"})]}):Object(L.jsx)("div",{children:Object(L.jsx)(M,{isFinished:!0,children:"FINISHED"})})},Le=t(75),Ue=v.e.button(le||(le=Object(b.a)(["\n  align-items: center;\n  background: ",";\n  border: 0;\n  border-radius: 12px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  border: 2px solid ",";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n"])),(function(e){return e.disabled?"#ddd":e.theme.card.background}),(function(e){return e.disabled?"#acaaaf":"#32cad7"}),(function(e){return e.fontSize}),(function(e){return e.size}),(function(e){return e.padding}),(function(e){return e.padding}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.disabled?"#eee":"#33cbd7"})),He=Object(v.e)(Le.b)(de||(de=Object(b.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),We=v.e.a(be||(be=Object(b.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),Ye=function(e){var n,t,c,r=e.children,a=e.disabled,i=e.href,s=e.onClick,o=e.size,u=e.text,l=e.to,d=Object(O.useContext)(v.a),b=d.colors,j=d.spacing,x=b.background;switch(o){case"sm":t=j[3],n=36,c=14;break;case"lg":t=j[4],n=72,c=16;break;case"md":default:t=j[4],n=56,c=16}var p=Object(O.useMemo)((function(){return l?Object(L.jsx)(He,{to:l,children:u}):i?Object(L.jsx)(We,{href:i,target:"__blank",children:u}):u}),[i,u,l]);return Object(L.jsxs)(Ue,{boxShadow:undefined,color:x,disabled:a,fontSize:c,onClick:s,padding:t,size:n,children:[r,p]})},_e=t(46),qe=t(828),Ve=t(829),Ge=(je={},Object(_e.a)(je,B.a.BINANCE,R.a),Object(_e.a)(je,B.a.CORE,R.c),Object(_e.a)(je,B.a.COMMUNITY,R.b),je),Je=v.e.div(xe||(xe=Object(b.a)(["\n  border-top: 1px solid ",";\n  color: ",";\n  padding: 24px;\n"])),(function(e){return e.theme.isDark?"#524B63":"#E9EAEB"}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled2":"primary2"]})),Qe=v.e.button(Oe||(Oe=Object(b.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n"])),(function(e){return e.theme.colors.primary})),Ke=v.e.div(pe||(pe=Object(b.a)(["\n  margin-top: 24px;\n"]))),Xe=v.e.div(fe||(fe=Object(b.a)(["\n  align-items: center;\n  display: flex;\n"]))),Ze=v.e.div(he||(he=Object(b.a)(["\n  flex: 1;\n"]))),$e=v.e.div(me||(me=Object(b.a)(["\n  font-size: 14px;\n"]))),en=v.e.a(ve||(ve=Object(b.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n"]))),nn=function(e){var n=e.projectLink,t=e.totalStaked,c=e.blocksRemaining,r=e.isFinished,a=e.blocksUntilStart,i=e.poolCategory,s=Object(O.useState)(!1),o=Object(j.a)(s,2),u=o[0],l=o[1],d=Object(D.a)(),b=u?qe.a:Ve.a,x=Ge[i];return Object(L.jsxs)(Je,{isFinished:r,children:[Object(L.jsxs)(Xe,{children:[Object(L.jsx)(Ze,{children:Object(L.jsx)(x,{})}),Object(L.jsxs)(Qe,{onClick:function(){return l(!u)},children:[u?"Hide":"Details"," ",Object(L.jsx)(b,{})]})]}),u&&Object(L.jsxs)(Ke,{children:[Object(L.jsxs)(Xe,{style:{marginBottom:"4px"},children:[Object(L.jsx)(Ze,{children:Object(L.jsxs)($e,{children:[Object(L.jsxs)("span",{role:"img","aria-label":"syrup",children:["\ud83e\udd5e"," "]}),d(408,"Total")]})}),Object(L.jsx)(Ae,{fontSize:"14px",isDisabled:r,value:Object(E.a)(t)})]}),a>0&&Object(L.jsxs)(Xe,{children:[Object(L.jsx)(Ze,{children:Object(L.jsxs)($e,{children:[d(410,"Start"),":"]})}),Object(L.jsx)(Ae,{fontSize:"14px",isDisabled:r,value:a,decimals:0})]}),0===a&&c>0&&Object(L.jsxs)(Xe,{children:[Object(L.jsx)(Ze,{children:Object(L.jsxs)($e,{children:[d(410,"End"),":"]})}),Object(L.jsx)(Ae,{fontSize:"14px",isDisabled:r,value:c,decimals:0})]}),Object(L.jsx)(en,{href:n,target:"_blank",children:d(412,"View project site")})]})]})},tn=p.a.memo(nn),cn=v.e.div(ge||(ge=Object(b.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]))),rn=v.e.div(ke||(ke=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]))),an=v.e.div(we||(we=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),sn=v.e.div(ye||(ye=Object(b.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),on=v.e.div(Ce||(Ce=Object(b.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),un=function(e){var n=e.pool,t=n.sousId,c=n.image,r=n.tokenName,a=n.stakingTokenName,i=n.stakingTokenAddress,s=n.projectLink,o=n.harvest,u=n.apy,l=n.tokenDecimals,d=n.poolCategory,b=n.totalStaked,x=n.startBlock,p=n.endBlock,f=n.isFinished,h=n.userData,v=n.stakingLimit,w=d===B.a.BINANCE,y=Object(D.a)(),C=Object(Z.b)(i),S=Object(g.m)().account,z=N(),A=Object($.c)(C,t).onApprove,F=Object(ee.b)(t,w).onStake,I=Object(ne.b)(t).onUnstake,P=Object(te.c)(t,w).onReward,R=Object(O.useState)(!1),U=Object(j.a)(R,2),H=U[0],W=U[1],Y=Object(O.useState)(!1),_=Object(j.a)(Y,2),q=_[0],V=_[1],K=new m.a((null===h||void 0===h?void 0:h.allowance)||0),ce=new m.a((null===h||void 0===h?void 0:h.stakingTokenBalance)||0),re=new m.a((null===h||void 0===h?void 0:h.stakedBalance)||0),ae=new m.a((null===h||void 0===h?void 0:h.pendingReward)||0),ie=Math.max(x-z,0),se=Math.max(p-z,0),oe=a===B.b.SYRUP,ue=(null===re||void 0===re?void 0:re.toNumber())>0,le=!ue&&!K.toNumber()&&!w,de=f&&ue,be=new m.a(v).multipliedBy(new m.a(10).pow(l)),je=Object(k.H)(Object(L.jsx)(Fe,{max:v&&ce.isGreaterThan(be)?be:ce,onConfirm:F,tokenName:v?"".concat(a," (").concat(v," max)"):a})),xe=Object(j.a)(je,1)[0],Oe=Object(k.H)(Object(L.jsx)(Ie,{earnings:ae,onConfirm:F,tokenName:a})),pe=Object(j.a)(Oe,1)[0],fe=Object(k.H)(Object(L.jsx)(Be,{max:re,onConfirm:I,tokenName:a})),he=Object(j.a)(fe,1)[0],me=Object(O.useCallback)(Object(J.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,W(!0),e.next=4,A();case 4:e.sent||W(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[A,W]);return Object(L.jsxs)(T,{isActive:de,isFinished:f&&0!==t,children:[f&&0!==t&&Object(L.jsx)(cn,{}),Object(L.jsxs)("div",{style:{padding:"24px"},children:[Object(L.jsxs)(M,{isFinished:f&&0!==t,children:[oe&&"[OLD]"," ",r," ",y(348,"Pool")]}),Object(L.jsxs)("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center"},children:[Object(L.jsx)("div",{style:{flex:1},children:Object(L.jsx)(k.p,{src:"/images/tokens/".concat(c||r,".png"),width:64,height:64,alt:r})}),S&&o&&!oe&&Object(L.jsx)(Ye,{disabled:!ae.toNumber()||q,text:q?"Collecting":"Harvest",onClick:Object(J.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,P();case 3:V(!1);case 4:case"end":return e.stop()}}),e)})))})]}),oe?Object(L.jsx)(Me,{hasBalance:ue}):Object(L.jsxs)(an,{children:[Object(L.jsx)(Ae,{value:Object(E.a)(ae,l),isDisabled:f}),0===t&&S&&o&&Object(L.jsx)(Ye,{disabled:!ae.toNumber()||q,text:y(999,q?"Compounding":"Compound"),onClick:pe})]}),Object(L.jsx)(X,{isFinished:f&&0!==t,text:y(330,"".concat(r," earned"))}),Object(L.jsxs)(rn,{children:[!S&&Object(L.jsx)(Q.a,{}),S&&(le&&!oe?Object(L.jsx)("div",{style:{flex:1},children:Object(L.jsx)(k.d,{disabled:f||H,onClick:me,fullWidth:!0,children:"Approve ".concat(a)})}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(k.d,{disabled:re.eq(new m.a(0))||q,onClick:oe?Object(J.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,I("0");case 3:V(!1);case 4:case"end":return e.stop()}}),e)}))):he,children:"Unstake ".concat(a)}),Object(L.jsx)(sn,{}),!oe&&Object(L.jsx)(k.o,{disabled:f&&0!==t,onClick:xe,children:Object(L.jsx)(k.a,{color:"background"})})]}))]}),Object(L.jsxs)(on,{children:[Object(L.jsxs)("div",{style:{flex:1},children:[y(736,"APR"),":"]}),f||oe||!u||(null===u||void 0===u?void 0:u.isNaN())||!(null===u||void 0===u?void 0:u.isFinite())?"-":Object(L.jsx)(Ae,{fontSize:"14px",isDisabled:f,value:null===u||void 0===u?void 0:u.toNumber(),decimals:2,unit:"%"})]}),Object(L.jsxs)(on,{children:[Object(L.jsxs)("div",{style:{flex:1},children:[Object(L.jsx)("span",{role:"img","aria-label":a,children:" "}),y(384,"Your Stake"),":"]}),Object(L.jsx)(Ae,{fontSize:"14px",isDisabled:f,value:Object(E.a)(re)})]})]}),Object(L.jsx)(tn,{projectLink:s,totalStaked:b,blocksRemaining:se,isFinished:f,blocksUntilStart:ie,poolCategory:d})]})},ln=function(){var e=Object(f.g)(),n=e.url,t=e.isExact,c=Object(D.a)();return Object(L.jsx)(dn,{children:Object(L.jsxs)(k.e,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(L.jsx)(k.f,{as:Le.b,to:"".concat(n),children:c(999,"Active")}),Object(L.jsx)(k.f,{as:Le.b,to:"".concat(n,"/history"),children:c(999,"Inactive")})]})})},dn=v.e.div(Se||(Se=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),bn=v.e.div(ze||(ze=Object(b.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),jn=v.e.div(De||(De=Object(b.a)(["\n  align-items: center;\n  color: ",";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.colors.primary})),xn=function(){var e=Object(f.g)().path,n=Object(D.a)(),t=Object(g.m)().account,c=Object(F.c)(),r=Object(F.e)(t),a=Object(F.f)(),i=N(),s=r.map((function(e){var n=e.poolCategory===B.a.BINANCE,t=c.find((function(n){return n.tokenSymbol===e.tokenName})),r=c.find((function(n){return n.tokenSymbol===e.stakingTokenName})),s=n?new m.a(1):new m.a(null===r||void 0===r?void 0:r.tokenPriceVsQuote),o=function(e,n,t){var c=new m.a(n);return"BNB"===e?new m.a(1):n&&t===B.b.BUSD?c.div(a):c}(e.tokenName,null===t||void 0===t?void 0:t.tokenPriceVsQuote,null===t||void 0===t?void 0:t.quoteTokenSymbol).times(e.tokenPerBlock).times(w.a),u=s.times(Object(E.a)(e.totalStaked)),l=o.div(u).times(100);return Object(x.a)(Object(x.a)({},e),{},{isFinished:0!==e.sousId&&(e.isFinished||i>e.endBlock),apy:l})})),o=z()(s,(function(e){return e.isFinished})),u=Object(j.a)(o,2),l=u[0],d=u[1];return Object(L.jsxs)(P.a,{children:[Object(L.jsxs)(jn,{children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(k.n,{as:"h1",size:"xxl",mb:"16px",children:n(282,"Dividends")}),Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:n(580,"Stake CAKE to earn new tokens.")}),Object(L.jsx)("li",{children:n(404,"You can unstake at any time.")}),Object(L.jsx)("li",{children:n(406,"Rewards are calculated per block.")})]})]}),Object(L.jsx)("img",{src:"/images/syrup.png",alt:"SYRUP POOL icon",width:410,height:191})]}),Object(L.jsx)(ln,{}),Object(L.jsx)(bn,{}),Object(L.jsxs)(I.a,{children:[Object(L.jsx)(f.a,{exact:!0,path:"".concat(e),children:Object(L.jsxs)(L.Fragment,{children:[C()(d,["sortOrder"]).map((function(e){return Object(L.jsx)(un,{pool:e},e.sousId)})),Object(L.jsx)(q,{})]})}),Object(L.jsx)(f.a,{path:"".concat(e,"/history"),children:C()(l,["sortOrder"]).map((function(e){return Object(L.jsx)(un,{pool:e},e.sousId)}))})]})]})}}}]);
//# sourceMappingURL=10.1db01653.chunk.js.map