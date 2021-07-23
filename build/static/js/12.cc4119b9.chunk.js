(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[12],{1096:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i,o,b,l,d,u,j,p,O,f,h,x=n(16),m=n(0),v=n(7),g=n(12),k=n(44),y=n(153),w=n(2),C=n.n(w),I=n(30),S=n(15),F=n(11),T=n(22),N=n(173),U=n.n(N),D=n(131),E=n(27),A=n(42),P=n(867),Q=n(155),_=n(54),q=v.e.div(r||(r=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),J=n(126),L=n.n(J),R=n(48),B=n(4),W=Object(v.e)(g.cb)(c||(c=Object(x.a)(["\n  font-weight: 600;\n"]))),z=v.e.div(a||(a=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),Y=v.e.div(s||(s=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),G=v.e.label(i||(i=Object(x.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),H=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(m.useState)(!1),s=Object(T.a)(a,2),i=s[0],o=s[1],b=Object(m.useState)(""),l=Object(T.a)(b,2),d=l[0],u=l[1],j=Object(m.useState)(null),p=Object(T.a)(j,2),O=p[0],f=p[1],h=Object(k.a)(),x=Object(E.c)().account,v=Object(R.j)(),y=Object(_.r)().toastSuccess,w=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L.a.utils.isAddress(d)){e.next=6;break}f(h(999,"Please enter a valid wallet address")),e.next=8;break;case 6:return e.next=8,v.methods.transferFrom(x,d,n[0]).send({from:x}).on("sending",(function(){o(!0)})).on("receipt",(function(){c(),r(),y("NFT successfully transferred!")})).on("error",(function(){console.error(O),f("Unable to transfer NFT"),o(!1)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(g.Q,{title:h(999,"Transfer NFT"),onDismiss:c,children:[Object(B.jsxs)(z,{children:[O&&Object(B.jsx)(g.cb,{color:"failure",mb:"8px",children:O}),Object(B.jsxs)(q,{children:[Object(B.jsxs)(g.cb,{children:[h(999,"Transferring"),":"]}),Object(B.jsx)(W,{children:'1x "'.concat(t.name,'" NFT')})]}),Object(B.jsxs)(G,{htmlFor:"transferAddress",children:[h(999,"Receiving address"),":"]}),Object(B.jsx)(g.J,{id:"transferAddress",name:"address",type:"text",placeholder:h(999,"Paste address"),value:d,onChange:function(e){var t=e.target.value;u(t)},isWarning:O,disabled:i})]}),Object(B.jsxs)(Y,{children:[Object(B.jsx)(g.k,{width:"100%",variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(B.jsx)(g.k,{width:"100%",onClick:w,disabled:!x||i||!d,children:h(464,"Confirm")})]})]})},K=v.e.div(o||(o=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),M=v.e.div(b||(b=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),V=function(e){var t=e.nft,n=e.onSuccess,r=e.onDismiss,c=Object(m.useState)(!1),a=Object(T.a)(c,2),s=a[0],i=a[1],o=Object(k.a)(),b=Object(E.c)().account,l=Object(_.r)(),d=l.toastError,u=l.toastSuccess,j=Object(R.b)(),p=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.methods.mintNFT(t.bunnyId).send({from:b}).on("sending",(function(){i(!0)})).on("receipt",(function(){u("Successfully claimed!"),r(),n()})).on("error",(function(e){console.error("Unable to claim NFT",e),d("Error","Unable to claim NFT, please try again."),i(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(g.Q,{title:o(999,"Claim Collectible"),onDismiss:r,children:[Object(B.jsx)(K,{children:Object(B.jsxs)(g.E,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(B.jsxs)(g.cb,{children:[o(626,"You will receive"),":"]}),Object(B.jsx)(g.cb,{bold:!0,children:'1x "'.concat(t.name,'" Collectible')})]})}),Object(B.jsxs)(M,{children:[Object(B.jsx)(g.k,{width:"100%",variant:"secondary",onClick:r,children:o(462,"Cancel")}),Object(B.jsx)(g.k,{width:"100%",onClick:p,disabled:!b||s,children:o(464,"Confirm")})]})]})},X=v.e.div(l||(l=Object(x.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Z=v.e.img(d||(d=Object(x.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px 32px 0 0;\n"]))),$=v.e.video(u||(u=Object(x.a)(["\n  height: 100%;\n  width: 100%;\n"]))),ee=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,s=t.video,i="/images/nfts/".concat(c.lg);if(s){var o=Object(B.jsxs)($,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:i,children:[Object(B.jsx)("source",{src:s.webm,type:"video/webm"}),Object(B.jsx)("source",{src:s.mp4,type:"video/mp4"})]});return r?Object(B.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var b=Object(B.jsx)(Z,{src:i,alt:a});return Object(B.jsx)(X,{children:r?Object(B.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:b}):b})},te=Object(v.e)(q)(j||(j=Object(x.a)(["\n  min-height: 28px;\n"]))),ne=Object(v.e)(g.k).attrs({variant:"text"})(p||(p=Object(x.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),re=v.e.div(O||(O=Object(x.a)(["\n  padding: 24px;\n"]))),ce=function(e){var t,n=e.nft,r=e.onSuccess,c=e.canClaim,a=void 0!==c&&c,s=e.tokenIds,i=void 0===s?[]:s,o=Object(m.useState)(!1),b=Object(T.a)(o,2),l=b[0],d=b[1],u=Object(k.a)(),j=Object(_.o)().profile,p=n.bunnyId,O=n.name,f=n.description,h=i.length>0,x=l?g.A:g.x,v=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(!l);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=Object(g.qb)(Object(B.jsx)(H,{nft:n,tokenIds:i,onSuccess:r})),w=Object(T.a)(y,1)[0],I=Object(g.qb)(Object(B.jsx)(V,{nft:n,onSuccess:r})),S=Object(T.a)(I,1)[0];return Object(B.jsxs)(g.o,{isActive:h||a,children:[Object(B.jsx)(ee,{nft:n,isOwned:h}),Object(B.jsxs)(g.p,{children:[Object(B.jsxs)(te,{children:[Object(B.jsx)(g.F,{children:O}),h&&Object(B.jsx)(g.bb,{outline:!0,variant:"secondary",children:u(999,"In Wallet")}),(null===j||void 0===j||null===(t=j.nft)||void 0===t?void 0:t.bunnyId)===p&&Object(B.jsx)(g.bb,{outline:!0,variant:"success",children:u(999,"Profile Pic")})]}),a&&Object(B.jsx)(g.k,{width:"100%",mt:"24px",onClick:S,children:u(999,"Claim this NFT")}),h&&Object(B.jsx)(g.k,{width:"100%",variant:"secondary",mt:"24px",onClick:w,children:u(999,"Transfer")})]}),Object(B.jsxs)(g.q,{p:"0",children:[Object(B.jsx)(ne,{width:"100%",endIcon:Object(B.jsx)(x,{width:"24px",color:"primary"}),onClick:v,children:u(658,"Details")}),l&&Object(B.jsx)(re,{children:Object(B.jsx)(g.cb,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:f})})]})]})},ae=v.e.div(f||(f=Object(x.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),se=Object(A.c)(),ie=function(){var e=Object(m.useState)({}),t=Object(T.a)(e,2),n=t[0],r=t[1],c=Object(P.a)(),a=c.nfts,s=c.refresh,i=Object(E.c)().account,o=Object(_.r)().toastError,b=Object(m.useCallback)(function(){var e=Object(F.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Q.a)(D.a.map((function(e){return se.methods.canClaimSingle(t,e.bunnyId).call})));case 3:n=e.sent,r(n.reduce((function(e,t,n){return Object(S.a)(Object(S.a)({},e),{},Object(I.a)({},D.a[n].bunnyId,t))}),{})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),o("Error checking NFT claimable status");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[r,o]),l=function(){s(),b(i)};return Object(m.useEffect)((function(){i&&b(i)}),[i,b]),Object(B.jsx)(ae,{children:U()(D.a,"sortOrder").map((function(e){var t=a[e.bunnyId]?a[e.bunnyId].tokenIds:[];return Object(B.jsx)("div",{children:Object(B.jsx)(ce,{nft:e,canClaim:n[e.bunnyId],tokenIds:t,onSuccess:l})},e.name)}))})},oe=v.e.div(h||(h=Object(x.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(k.a)();return Object(B.jsxs)(y.a,{children:[Object(B.jsx)(oe,{children:Object(B.jsx)(g.F,{as:"h1",size:"xxl",color:"secondary",children:e(999,"SweetSwap Collectibles")})}),Object(B.jsx)(ie,{})]})}},867:function(e,t,n){"use strict";var r=n(30),c=n(61),a=n(2),s=n.n(a),i=n(11),o=n(22),b=n(15),l=n(27),d=n(0),u=n(42),j=n(155),p=Object(u.j)(),O={isLoading:!0,nfts:{},lastUpdated:Date.now()},f=function(e,t){switch(t.type){case"set_nfts":return Object(b.a)(Object(b.a)({},O),{},{isLoading:!1,nfts:t.data});case"refresh":return Object(b.a)(Object(b.a)({},O),{},{lastUpdated:t.timestamp});case"reset":return Object(b.a)(Object(b.a)({},O),{},{isLoading:!1});default:return e}};t.a=function(){var e=Object(d.useReducer)(f,O),t=Object(o.a)(e,2),n=t[0],a=t[1],u=Object(l.c)().account,h=n.lastUpdated;Object(d.useEffect)((function(){u&&function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,l,d,O,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.methods.balanceOf(u).call();case 3:if(!((t=e.sent)>0)){e.next=16;break}for(n={},l=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c,a,i,b,l,d,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=p.methods,r=n.tokenOfOwnerByIndex,c=n.getBunnyId,a=n.tokenURI,e.next=4,r(u,t).call();case 4:return i=e.sent,e.next=7,Object(j.a)([c(i).call,a(i).call]);case 7:return b=e.sent,l=Object(o.a)(b,2),d=l[0],O=l[1],e.abrupt("return",[Number(d),Number(i),O]);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),d=[],O=0;O<t;O++)d.push(l(O));return e.next=11,Promise.all(d);case 11:f=e.sent,n=f.reduce((function(e,t){if(!t)return e;var n=Object(o.a)(t,3),a=n[0],s=n[1],i=n[2];return Object(b.a)(Object(b.a)({},e),{},Object(r.a)({},a,{tokenUri:i,tokenIds:e[a]?[].concat(Object(c.a)(e[a].tokenIds),[s]):[s]}))}),{}),a({type:"set_nfts",data:n}),e.next=17;break;case 16:a({type:"reset"});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a({type:"reset"});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}()()}),[u,h,a]);return Object(b.a)(Object(b.a)({},n),{},{refresh:function(){return a({type:"refresh",timestamp:Date.now()})}})}}}]);
//# sourceMappingURL=12.cc4119b9.chunk.js.map