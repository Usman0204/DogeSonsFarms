(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1095:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Se}));var c,r,a,i,s,o,u,j,b,l,d,O,p,f,x,m,h=n(16),g=n(0),v=n(7),k=n(12),w=n(44),y=n(153),S=n(2),z=n.n(S),C=n(11),N=n(22),T=n(27),Q=n(254),F=n(15),E=n(13),A=n.n(E),D=n(58),H=n(24),R=n(92),B=n(248),I=n(152),L=function(){var e=Object(g.useState)([]),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(T.c)().account,a=Object(I.a)().fastRefresh;return Object(g.useEffect)((function(){r&&function(){var e=Object(C.a)(z.a.mark((function e(){var t,n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.b.map((function(e){return{address:Object(H.h)(),name:"pendingCake",params:[e.pid,r]}})),e.next=3,Object(D.a)(R,t);case 3:n=e.sent,a=B.b.map((function(e,t){return Object(F.a)(Object(F.a)({},e),{},{balance:new A.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},P=n(246),V=function(){var e=Object(g.useState)([]),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(T.c)().account,a=Object(I.a)().fastRefresh;return Object(g.useEffect)((function(){r&&function(){var e=Object(C.a)(z.a.mark((function e(){var t,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.b.map((function(e){return{address:Object(H.h)(),name:"pendingCake",params:[e.pid,r]}})),e.next=3,Object(D.a)(R,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},Y=n(54),U=n(264),M=n(4),q=function(e){var t=e.value,n=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,a=e.lineHeight,i=void 0===a?"1":a,s=e.prefix,o=void 0===s?"":s,u=e.bold,j=void 0===u||u,b=e.color,l=void 0===b?"text":b,d=Object(U.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),O=d.countUp,p=d.update,f=Object(g.useRef)(p);return Object(g.useEffect)((function(){f.current(t)}),[t,f]),Object(M.jsxs)(k.cb,{bold:j,fontSize:r,style:{lineHeight:i},color:l,children:[o,O]})},J=function(e){return Object(M.jsx)(q,Object(F.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},W=v.e.div(c||(c=Object(h.a)(["\n  margin-bottom: 24px;\n}\n"]))),$=function(){var e=Object(w.a)(),t=Object(T.c)().account,n=V().reduce((function(e,t){return e+new A.a(t).div(new A.a(10).pow(18)).toNumber()}),0),c=new A.a(n).multipliedBy(Object(Y.m)()).toNumber();return t?Object(M.jsxs)(W,{children:[Object(M.jsx)(q,{value:n,lineHeight:"1.5"}),Object(M.jsx)(J,{value:c})]}):Object(M.jsx)(k.cb,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},K=n(857),X=n(73),Z=function(){var e=Object(w.a)(),t=Object(K.a)(Object(H.d)()),n=new E.BigNumber(Object(X.a)(t)).multipliedBy(Object(Y.m)()).toNumber();return Object(T.c)().account?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(q,{value:Object(X.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),Object(M.jsx)(J,{value:n})]}):Object(M.jsx)(k.cb,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},_=Object(v.e)(k.o)(r||(r=Object(h.a)(["\n  background-image: url('/images/cake-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),G=v.e.div(a||(a=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),ee=v.e.img(i||(i=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),te=v.e.div(s||(s=Object(h.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),ne=v.e.div(o||(o=Object(h.a)(["\n  margin-top: 24px;\n"]))),ce=function(){var e=Object(g.useState)(!1),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(T.c)().account,a=Object(w.a)(),i=L().filter((function(e){return e.balance.toNumber()>0})),s=Object(Q.a)(i.map((function(e){return e.pid}))).onReward,o=Object(g.useCallback)(Object(C.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,s();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[s]);return Object(M.jsx)(_,{children:Object(M.jsxs)(k.p,{children:[Object(M.jsx)(k.F,{size:"xl",mb:"24px",children:a(542,"Farms & Staking")}),Object(M.jsx)(ee,{src:"/images/cake.svg",alt:"cake logo",width:64,height:64}),Object(M.jsxs)(G,{children:[Object(M.jsxs)(te,{children:[a(544,"Candy to Harvest"),":"]}),Object(M.jsx)($,{})]}),Object(M.jsxs)(G,{children:[Object(M.jsxs)(te,{children:[a(546,"Candy in Wallet"),":"]}),Object(M.jsx)(Z,{})]}),Object(M.jsx)(ne,{children:r?Object(M.jsx)(k.k,{id:"harvest-all",disabled:i.length<=0||n,onClick:o,width:"100%",children:n?a(548,"Collecting CANDY"):a(532,"Harvest all (".concat(i.length,")"))}):Object(M.jsx)(P.a,{width:"100%"})})]})})},re=Object(v.e)(k.o)(u||(u=Object(h.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ae=v.e.div(j||(j=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ie=function(){var e=Object(w.a)(),t=Object(K.c)(),n=Object(X.a)(Object(K.b)(Object(H.d)())),c=t?Object(X.a)(t)-n:0;return Object(M.jsx)(re,{children:Object(M.jsxs)(k.p,{children:[Object(M.jsx)(k.F,{size:"xl",mb:"24px",children:e(534,"Candy Stats")}),Object(M.jsxs)(ae,{children:[Object(M.jsx)(k.cb,{fontSize:"14px",children:e(536,"Total CANDY Supply")}),c&&Object(M.jsx)(q,{fontSize:"14px",value:c})]}),Object(M.jsxs)(ae,{children:[Object(M.jsx)(k.cb,{fontSize:"14px",children:e(538,"Total CANDY Burned")}),Object(M.jsx)(q,{fontSize:"14px",decimals:0,value:n})]}),Object(M.jsxs)(ae,{children:[Object(M.jsx)(k.cb,{fontSize:"14px",children:e(540,"New CANDY Block")}),Object(M.jsx)(q,{fontSize:"14px",decimals:0,value:5})]})]})})},se=Object(v.e)(k.o)(b||(b=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),oe=function(){var e=Object(w.a)(),t=Object(Y.s)();return Object(M.jsx)(se,{children:Object(M.jsxs)(k.p,{children:[Object(M.jsx)(k.F,{size:"lg",mb:"24px",children:e(762,"Total Value Locked (TVL)")}),Object(M.jsx)(q,{value:t.toNumber(),prefix:"$",decimals:2})]})})},ue=n(67),je=n(36),be=n(154),le=Object(v.e)(k.o)(l||(l=Object(h.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),de=Object(v.e)(k.F).attrs({size:"xl"})(d||(d=Object(h.a)(["\n  line-height: 44px;\n"]))),Oe=function(){var e=Object(w.a)(),t=Object(Y.e)(),n=Object(Y.l)(),c=Object(g.useRef)(Number.MIN_VALUE),r=function(){var e=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier}));return a(e),(100*c.current).toLocaleString("en-US").slice(0,-1)},a=Object(g.useCallback)((function(e){var r,a=new A.a((null===(r=t.find((function(e){return e.pid===be.f})))||void 0===r?void 0:r.tokenPriceVsQuote)||0);e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=be.e.times(e.poolWeight),r=t.times(be.c),i=a.times(r).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===je.b.BUSD)i=a.times(r).div(e.lpTotalInQuoteToken).times(n);else if(e.quoteTokenSymbol===je.b.CAKE)i=r.div(e.lpTotalInQuoteToken);else if(e.dual){var s=e&&a.times(t).times(be.c).div(e.lpTotalInQuoteToken),o=e.tokenPriceVsQuote&&new A.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(be.c).div(e.lpTotalInQuoteToken);i=s&&o&&s.plus(o)}return c.current<i.toNumber()&&(c.current=i.toNumber()),i}))}),[n,t]);return Object(M.jsx)(le,{children:Object(M.jsxs)(k.p,{children:[Object(M.jsx)(k.F,{color:"contrast",size:"lg",children:"Earn up to"}),Object(M.jsx)(de,{color:"#7645d9",children:r()?"".concat(r(),"% ").concat(e(736,"APR")):Object(M.jsx)(k.Z,{animation:"pulse",variant:"rect",height:"44px"})}),Object(M.jsxs)(k.E,{justifyContent:"space-between",children:[Object(M.jsx)(k.F,{color:"contrast",size:"lg",children:"in Farms"}),Object(M.jsx)(ue.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apy-cta",children:Object(M.jsx)(k.c,{mt:30,color:"primary"})})]})]})})},pe=n(62),fe=n(173),xe=n.n(fe),me=n(65),he=Object(v.e)(k.o)(O||(O=Object(h.a)(["\n  background: linear-gradient(#53dee9, #7645d9);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ge=Object(v.e)(k.F).attrs({size:"xl"})(p||(p=Object(h.a)(["\n  line-height: 44px;\n"]))),ve=function(){var e=me.a.filter((function(e){return!e.isFinished&&!e.tokenName.includes("CANDY")})),t=xe()(e,["sortOrder","pid"],["desc","desc"]).slice(0,3),n=["CANDY"].concat(Object(pe.a)(t.map((function(e){return e.tokenName})))).join(", ");return Object(M.jsx)(he,{children:Object(M.jsxs)(k.p,{children:[Object(M.jsx)(k.F,{color:"contrast",size:"lg",children:"Earn"}),Object(M.jsx)(ge,{color:"invertedContrast",children:n}),Object(M.jsxs)(k.E,{justifyContent:"space-between",children:[Object(M.jsx)(k.F,{color:"contrast",size:"lg",children:"in Pools"}),Object(M.jsx)(ue.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(M.jsx)(k.c,{mt:30,color:"primary"})})]})]})})},ke=v.e.div(f||(f=Object(h.a)(["\n  align-items: center;\n  background-image: url('/images/pan-bg-mobile.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),we=Object(v.e)(k.e)(x||(x=Object(h.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ye=Object(v.e)(k.e)(m||(m=Object(h.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Se=function(){var e=Object(w.a)();return Object(M.jsxs)(y.a,{children:[Object(M.jsxs)(ke,{children:[Object(M.jsx)(k.F,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"SweetSwap")}),Object(M.jsx)(k.cb,{children:e(578,"The Sweetest AMM on Binance")})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)(we,{children:Object(M.jsx)(ce,{})}),Object(M.jsxs)(ye,{children:[Object(M.jsx)(Oe,{}),Object(M.jsx)(ve,{})]}),Object(M.jsxs)(we,{children:[Object(M.jsx)(ie,{}),Object(M.jsx)(oe,{})]})]})]})}},857:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return p}));var c=n(2),r=n.n(c),a=n(11),i=n(22),s=n(0),o=n(13),u=n.n(o),j=n(27),b=n(42),l=n(63),d=n(152),O=function(){var e=Object(d.a)().slowRefresh,t=Object(s.useState)(),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,o(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},p=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],j=Object(d.a)().slowRefresh,O=Object(l.a)();return Object(s.useEffect)((function(){(function(){var t=Object(a.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e,O),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:c=t.sent,o(new u.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[O,e,j]),c};t.a=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],O=Object(j.c)().account,p=Object(l.a)(),f=Object(d.a)().fastRefresh;return Object(s.useEffect)((function(){O&&function(){var t=Object(a.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e,p),t.next=3,n.methods.balanceOf(O).call();case 3:c=t.sent,o(new u.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[O,e,p,f]),c}}}]);
//# sourceMappingURL=13.be5bf4ff.chunk.js.map