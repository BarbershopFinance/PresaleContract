(this["webpackJsonplemonswap-frontend"]=this["webpackJsonplemonswap-frontend"]||[]).push([[20],{835:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var c,a,r,s,i,o,l,d,j,b=n(0),u=n(72),x=n(182),O=n(705),p=n(63),m=n(4),h=n(35),f=n(703),g=n(190),w=n(17),v=(Object(m.e)(h.n).attrs({as:"h1",size:"xl"})(c||(c=Object(p.a)(["\n  color: 'white';\n  margin-bottom: 24px;\n  font-size: 32px;\n"]))),Object(m.e)(h.A)(a||(a=Object(p.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n"])),(function(e){return e.theme.colors.secondary})),m.e.div(r||(r=Object(p.a)(["\n  // background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);\n  // background-image: ",";\n  padding-bottom: 40px;\n  padding-top: 40px;\n  display: flex;\n  flex-direction: row;\n"])),(function(e){return e.theme.colors.gradients.bubblegum}))),S=Object(m.e)(g.a)(s||(s=Object(p.a)(["\n  flex: 1;\n  // padding-right: 0;\n  text-align: center;\n  background-image: url(/images/egg/2d.png);\n  background-repeat: no-repeat;\n  background-position: center center;\n  padding-bottom: 40px;\n  padding-top: 150px;\n  display: flex;\n  flex-direction: row;\n\n  "," {\n    padding-right: 24px;\n  }\n\n  "," {\n    padding-right: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),k=function(){Object(f.a)();return Object(w.jsx)(v,{children:Object(w.jsx)(S,{})})},y=n(3),A=n.n(y),z=n(15),C=n(23),D=n(13),P=n.n(D),T=n(716),L=n(710),B=n(734),U=n(704),W=n(707),F=n(712),Q=m.e.div(i||(i=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: solid 1px;\n  border-radius: ",";\n  border-color: ",";\n  padding-left: 16px;\n"])),(function(e){return e.theme.radii.default}),(function(e){return e.theme.colors.borderColor})),E=function(e){var t=e.value,n=e.label,c=e.buttonLabel,a=e.onClick,r=e.disabled,s=void 0!==r&&r;return Object(w.jsxs)("div",{children:[n&&Object(w.jsx)(h.A,{fontSize:"14px",color:"textSubtle",children:n}),Object(w.jsxs)(Q,{children:[Object(w.jsx)(h.A,{bold:!0,fontSize:"20px",children:t}),Object(w.jsx)(h.d,{onClick:a,disabled:s,children:c})]})]})},J=n(735),M=n(720),Y=function(e){var t=e.currency,n=e.contract,c=e.currencyAddress,a=e.onDismiss,r=Object(b.useState)(""),s=Object(C.a)(r,2),i=s[0],o=s[1],l=Object(b.useState)(!1),d=Object(C.a)(l,2),j=d[0],x=d[1],O=Object(u.m)().account,p=Object(U.c)(Object(M.a)(c),18);return console.log("debug->value",i),Object(w.jsxs)(h.u,{title:"Contribute ".concat(t),onDismiss:a,children:[Object(w.jsx)(J.a,{value:i,onChange:function(e){return o(e.currentTarget.value)},symbol:t,max:p,onSelectMax:function(){return o(p.toString())}}),Object(w.jsxs)(h.m,{justifyContent:"space-between",mb:"24px",children:[Object(w.jsx)(h.d,{fullWidth:!0,variant:"secondary",onClick:a,mr:"8px",children:"Cancel"}),Object(w.jsx)(h.d,{fullWidth:!0,disabled:j,onClick:Object(z.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n.methods.buy(new P.a(i).times(new P.a(10).pow(18)).toString()).send({from:O});case 3:x(!1),a();case 5:case"end":return e.stop()}}),e)}))),children:"Confirm"})]}),Object(w.jsx)(h.r,{href:"https://pancakeswap.finance/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56",style:{margin:"auto"},children:"Get ".concat(t)})]})},$=Object(m.e)(h.h)(o||(o=Object(p.a)(["\n  padding: 32px 16px 16px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n  border-radius: 16px;\n  margin-top: 16px;\n  "," {\n    padding: 32px 16px 16px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 437px;\n    width: 100%;\n    border-radius: 16px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),G=m.e.div(l||(l=Object(p.a)(["\n  display: block;\n  padding-top: 10px;\n  "," {\n    display: flex;\n    padding-top: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),H=m.e.div(d||(d=Object(p.a)(["\n  display: flex;\n  padding-top: 16px;\n"]))),I=function(e){var t=e.address,n=e.currency,c=e.currencyAddress,a=e.contract,r=(e.status,e.raisingAmount,e.tokenDecimals,Object(b.useState)(!1)),s=Object(C.a)(r,2),i=s[0],o=s[1],l=Object(b.useState)(new P.a(0)),d=Object(C.a)(l,2),j=(d[0],d[1]),x=Object(b.useState)(!1),p=Object(C.a)(x,2),m=(p[0],p[1]),g=Object(b.useState)(new P.a(0)),v=Object(C.a)(g,2),S=v[0],k=v[1],y=Object(b.useState)(!0),D=Object(C.a)(y,2),Q=D[0],J=D[1],M=Object(u.m)().account,I=Object(b.useState)(new P.a(0)),N=Object(C.a)(I,2),_=N[0],q=N[1],K=Object(b.useState)(new P.a(0)),R=Object(C.a)(K,2),V=R[0],X=R[1],Z=Object(b.useState)(new P.a(0)),ee=Object(C.a)(Z,2),te=ee[0],ne=ee[1],ce=Object(b.useState)(new P.a(0)),ae=Object(C.a)(ce,2),re=ae[0],se=ae[1],ie=Object(b.useState)(new P.a(0)),oe=Object(C.a)(ie,2),le=oe[0],de=oe[1],je=Object(O.b)(c),be=Object(B.a)(je,t,i),ue=Object(L.b)(je,t),xe=Object(h.H)(Object(w.jsx)(Y,{currency:n,contract:a,currencyAddress:c})),Oe=Object(C.a)(xe,1)[0];Object(f.a)();Object(b.useEffect)((function(){var e=function(){var e=Object(z.a)(A.a.mark((function e(){var t,n,c,r,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.methods.claimActive().call();case 2:return t=e.sent,e.next=5,a.methods.saleActive().call();case 5:return n=e.sent,e.next=8,a.methods.getPaladinsTokensLeft().call();case 8:return c=e.sent,e.next=11,a.methods.getTotalTokensSold().call();case 11:r=e.sent,s=new P.a(c).minus(new P.a(r)),m(t),J(n),de(s),se(r),q(c);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();M&&function(){var e=Object(z.a)(A.a.mark((function e(){var t,n,c,r,s,i,o,l,d;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=P.a,e.next=3,a.methods.getTokensUnclaimed(M).call();case 3:return e.t1=e.sent,t=new e.t0(e.t1),e.next=7,a.methods.claimActive().call();case 7:return n=e.sent,e.next=10,a.methods.getTokensOwned(M).call();case 10:return c=e.sent,e.next=13,a.methods.saleActive().call();case 13:return r=e.sent,e.next=16,a.methods.getPaladinsTokensLeft().call();case 16:return s=e.sent,e.next=19,a.methods.getTokensUnclaimed(M).call();case 19:return i=e.sent,e.next=22,a.methods.getTokensOwned(M).call();case 22:return o=e.sent,e.next=25,a.methods.getTotalTokensSold().call();case 25:l=e.sent,d=new P.a(s).minus(new P.a(l)),console.log("debug->_total",d,o,l,s),m(n),j(t),k(c),J(r),de(d),X(i),ne(o),se(l),q(s);case 37:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),e()}),[M,a.methods,i]);var pe=function(){var e=Object(z.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,a.methods.claimTokens().send({from:M});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=!1;return Object(w.jsxs)(w.Fragment,{children:[!Q&&Object(w.jsx)(h.n,{size:"lg",style:{textAlign:"center"},children:"PreSale is not active"}),Object(w.jsxs)(G,{children:[Object(w.jsxs)($,{children:[Object(w.jsxs)(h.n,{size:"lg",mb:"24px",style:{textAlign:"center"},children:["Buy"," "]}),M&&be<=0&&Object(w.jsx)(h.d,{fullWidth:!0,disabled:i||me,onClick:Object(z.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,ue();case 4:o(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o(!1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),children:"Approve"}),!M&&Object(w.jsx)(T.a,{fullWidth:!0}),M&&be>0&&Object(w.jsx)(E,{disabled:i||!Q,buttonLabel:"Contribute",label:"Your contribution (DP)",value:Object(U.a)(new P.a(S).times(1)).toFixed(4),onClick:Oe})]}),Object(w.jsx)(F.a,{size:"sm"}),Object(w.jsxs)($,{children:[Object(w.jsxs)(h.n,{size:"lg",mb:"24px",style:{textAlign:"center"},children:["Claim"," "]}),!M&&Object(w.jsx)(T.a,{fullWidth:!0}),M&&Object(w.jsx)(E,{disabled:i||V<=new P.a(0)||!Q,buttonLabel:"Claim",label:"Your tokens to claim (PD)",value:Object(U.a)(new P.a(V)).toFixed(4),onClick:pe})]})]}),Object(w.jsxs)(G,{children:[Object(w.jsxs)($,{children:[Object(w.jsxs)(h.n,{size:"lg",mb:"24px",style:{textAlign:"center"},children:["Info"," "]}),Object(w.jsx)("hr",{}),Object(w.jsxs)(H,{children:[Object(w.jsx)(h.A,{mr:"16px",children:"Purchased PD:"}),Object(w.jsx)(W.a,{value:Object(U.a)(te,9),decimals:0,fontSize:"16px"})]}),Object(w.jsxs)(H,{children:[Object(w.jsx)(h.A,{mr:"16px",children:"Unclaimed PD:"}),Object(w.jsx)(W.a,{value:Object(U.a)(V,9),decimals:0,fontSize:"16px"})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)(H,{children:[Object(w.jsx)(h.A,{mr:"16px",children:"Total PD:"}),Object(w.jsx)(W.a,{value:Object(U.a)(_,9),decimals:0,fontSize:"16px"})]}),Object(w.jsxs)(H,{children:[Object(w.jsx)(h.A,{mr:"16px",children:"Total PD Sold:"}),Object(w.jsx)(W.a,{value:Object(U.a)(re,9),decimals:0,fontSize:"16px"})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)(H,{children:[Object(w.jsx)(h.A,{mr:"16px",color:"warning",children:"PD Left:"}),Object(w.jsx)(W.a,{value:Object(U.a)(le,9),decimals:0,fontSize:"18px"})]})]}),Object(w.jsx)(F.a,{size:"sm"}),Object(w.jsxs)($,{children:[Object(w.jsxs)(h.n,{size:"lg",mb:"24px",style:{textAlign:"center"},children:["PreSale"," "]}),Object(w.jsxs)(H,{children:[Object(w.jsxs)(h.A,{fontSize:"18px",mr:"16px",children:["- PD Presale Price:"," "]}),Object(w.jsx)(W.a,{fontSize:"18px",value:16,decimals:2,prefix:"$"})]}),Object(w.jsxs)(H,{children:[Object(w.jsxs)(h.A,{fontSize:"18px",mr:"16px",children:["- PD Launch Price:"," "]}),Object(w.jsx)(W.a,{fontSize:"18px",value:16,decimals:2,prefix:"$"})]}),Object(w.jsx)(H,{children:Object(w.jsx)(h.A,{fontSize:"18px",mr:"16px",children:"- Minimum Contribution - 16 BUSD"})}),Object(w.jsx)(H,{children:Object(w.jsx)(h.A,{fontSize:"18px",mr:"16px",children:"- Need help?"})})]})]})]})},N=m.e.div(j||(j=Object(p.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),_=function(){Object(u.m)().account;var e="0x11Ac98f62A5CdBdD36Ed339E9bB9a2dB778ea33C",t=Object(O.e)(e);return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(k,{}),Object(w.jsx)(N,{}),Object(w.jsx)(I,{address:e,currency:"BUSD",currencyAddress:"0x0c364692f76930dab46383eb13D6cDb53f63D663",tokenDecimals:18,contract:t})]})})}}}]);
//# sourceMappingURL=20.a88a5c64.chunk.js.map