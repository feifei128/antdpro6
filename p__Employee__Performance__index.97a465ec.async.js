"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[540],{69657:function(ne,x,o){o.r(x),o.d(x,{BasicList:function(){return P}});var L=o(58357),h=o.n(L),I=o(71977),d=o.n(I),y=o(30577),A=o.n(y),j=o(50959),R=o(9165),v=o(97618),U=o(539),$=o(62931),W=o(48757),H=o(79660),i=o(11527),P=function(){var G=(0,j.useState)([]),M=A()(G,2),D=M[0],K=M[1];return(0,j.useEffect)(function(){var T=function(){var s=d()(h()().mark(function b(){var p;return h()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,H.request)("/api/employees");case 2:p=_.sent,K(p);case 4:case"end":return _.stop()}},b)}));return function(){return s.apply(this,arguments)}}();T()},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(W._z,{children:(0,i.jsx)("div",{children:(0,i.jsx)(R.Z,{bordered:!1,title:"\u5458\u5DE5\u4E1A\u7EE9",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},children:(0,i.jsx)(v.ZP,{size:"large",rowKey:"id",dataSource:D,renderItem:function(s){return(0,i.jsxs)(v.ZP.Item,{actions:[(0,i.jsx)("a",{onClick:function(p){p.preventDefault(),console.log("edit",s)},children:"\u7F16\u8F91"},"edit"),(0,i.jsx)("a",{onClick:function(p){p.preventDefault(),console.log("delete",s)},children:"\u5220\u9664"},"delete")],children:[(0,i.jsx)(v.ZP.Item.Meta,{avatar:(0,i.jsx)(U.C,{src:s.avatar,size:42,shape:"square",style:{marginBottom:-15}}),title:(0,i.jsx)("a",{href:"#",children:s.name}),description:"".concat(s.gender,"\uFF0C").concat(s.age,"\u5C81"),style:{display:"flex",alignItems:"center",justifyContent:"space-between"}}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",color:"gray",width:"70%"},children:[(0,i.jsxs)("div",{style:{flex:1,textAlign:"center",marginRight:50},children:["\u51FA\u52E4\u7387",(0,i.jsx)("br",{}),(0,i.jsx)($.Z,{percent:s.processing.toFixed(2),size:"small"})]}),(0,i.jsxs)("div",{style:{flex:1,textAlign:"center",marginRight:50},children:["\u89E3\u51B3\u7387",(0,i.jsx)("br",{}),(0,i.jsx)($.Z,{percent:s.solving.toFixed(2),size:"small"})]}),(0,i.jsxs)("div",{style:{flex:1,textAlign:"center"},children:["\u5E73\u5747\u5DE5\u65F6",(0,i.jsx)("br",{}),s.workHours.toFixed(2),(0,i.jsx)("span",{style:{fontSize:8,marginLeft:8},children:"\u65F6/\u5929"})]}),(0,i.jsxs)("div",{style:{flex:1,textAlign:"center"},children:["KPI",(0,i.jsx)("br",{}),s.kpi.toFixed(2)]})]})]})},pagination:{showSizeChanger:!0,showQuickJumper:!0,pageSize:10,total:D.length}})})})})})};x.default=P},9165:function(ne,x,o){o.d(x,{Z:function(){return de}});var L=o(84875),h=o.n(L),I=o(62810),d=o(50959),y=o(77500),A=o(89267),j=o(19003),R=o(84490),v=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},$=e=>{var{prefixCls:t,className:r,hoverable:a=!0}=e,n=v(e,["prefixCls","className","hoverable"]);const{getPrefixCls:c}=d.useContext(y.E_),m=c("card",t),S=h()(`${m}-grid`,r,{[`${m}-grid-hoverable`]:a});return d.createElement("div",Object.assign({},n,{className:S}))},W=o(22960),H=o(96733),i=o(35335);const P=e=>{const{antCls:t,componentCls:r,cardHeadHeight:a,cardPaddingBase:n,cardHeadTabsMarginBottom:c}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${n}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,background:"transparent",borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,i.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},i.vS),{[`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:c,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},Z=e=>{const{cardPaddingBase:t,colorBorderSecondary:r,cardShadow:a,lineWidth:n}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${n}px 0 0 0 ${r},
      0 ${n}px 0 0 ${r},
      ${n}px ${n}px 0 0 ${r},
      ${n}px 0 0 0 ${r} inset,
      0 ${n}px 0 0 ${r} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},G=e=>{const{componentCls:t,iconCls:r,cardActionsLiMargin:a,cardActionsIconSize:n,colorBorderSecondary:c}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:e.colorBgContainer,borderTop:`${e.lineWidth}px ${e.lineType} ${c}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,i.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${r}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${r}`]:{fontSize:n,lineHeight:`${n*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${c}`}}})},M=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,i.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},i.vS),"&-description":{color:e.colorTextDescription}}),D=e=>{const{componentCls:t,cardPaddingBase:r,colorFillAlter:a}=e;return{[`${t}-head`]:{padding:`0 ${r}px`,background:a,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${e.padding}px ${r}px`}}},K=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},T=e=>{const{componentCls:t,cardShadow:r,cardHeadPadding:a,colorBorderSecondary:n,boxShadowTertiary:c,cardPaddingBase:m}=e;return{[t]:Object.assign(Object.assign({},(0,i.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:c},[`${t}-head`]:P(e),[`${t}-extra`]:{marginInlineStart:"auto",color:"",fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:m,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,i.dF)()),[`${t}-grid`]:Z(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},img:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${t}-actions`]:G(e),[`${t}-meta`]:M(e)}),[`${t}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${n}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:r}},[`${t}-contain-grid`]:{[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:a}}},[`${t}-type-inner`]:D(e),[`${t}-loading`]:K(e),[`${t}-rtl`]:{direction:"rtl"}}},s=e=>{const{componentCls:t,cardPaddingSM:r,cardHeadHeightSM:a}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:a,padding:`0 ${r}px`,fontSize:e.fontSize,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:r}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{minHeight:a,paddingTop:0,display:"flex",alignItems:"center"}}}}};var b=(0,W.Z)("Card",e=>{const t=(0,H.TS)(e,{cardShadow:e.boxShadowCard,cardHeadHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,cardHeadHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardHeadTabsMarginBottom:-e.padding-e.lineWidth,cardActionsLiMargin:`${e.paddingSM}px 0`,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[T(t),s(t)]}),p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function V(e){return e.map((r,a)=>d.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${a}`},d.createElement("span",null,r)))}var re=d.forwardRef((e,t)=>{const{getPrefixCls:r,direction:a}=d.useContext(y.E_),n=d.useContext(A.Z),c=u=>{var g;(g=e.onTabChange)===null||g===void 0||g.call(e,u)},m=()=>{let u;return d.Children.forEach(e.children,g=>{g&&g.type&&g.type===$&&(u=!0)}),u},{prefixCls:S,className:f,rootClassName:w,extra:C,headStyle:z={},bodyStyle:B={},title:E,loading:X,bordered:le=!0,size:se,type:J,cover:Q,actions:F,tabList:O,children:Y,activeTabKey:q,defaultActiveTabKey:ce,tabBarExtraContent:ge,hoverable:pe,tabProps:me={}}=e,ue=p(e,["prefixCls","className","rootClassName","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),l=r("card",S),[fe,he]=b(l),be=d.createElement(j.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},Y),k=q!==void 0,_e=Object.assign(Object.assign({},me),{[k?"activeKey":"defaultActiveKey"]:k?q:ce,tabBarExtraContent:ge});let ee;const te=O&&O.length?d.createElement(R.Z,Object.assign({size:"large"},_e,{className:`${l}-head-tabs`,onChange:c,items:O.map(u=>{var g;return{label:u.tab,key:u.key,disabled:(g=u.disabled)!==null&&g!==void 0?g:!1}})})):null;(E||C||te)&&(ee=d.createElement("div",{className:`${l}-head`,style:z},d.createElement("div",{className:`${l}-head-wrapper`},E&&d.createElement("div",{className:`${l}-head-title`},E),C&&d.createElement("div",{className:`${l}-extra`},C)),te));const xe=Q?d.createElement("div",{className:`${l}-cover`},Q):null,ye=d.createElement("div",{className:`${l}-body`,style:B},X?be:Y),ve=F&&F.length?d.createElement("ul",{className:`${l}-actions`},V(F)):null,$e=(0,I.Z)(ue,["onTabChange"]),ae=se||n,Se=h()(l,{[`${l}-loading`]:X,[`${l}-bordered`]:le,[`${l}-hoverable`]:pe,[`${l}-contain-grid`]:m(),[`${l}-contain-tabs`]:O&&O.length,[`${l}-${ae}`]:ae,[`${l}-type-${J}`]:!!J,[`${l}-rtl`]:a==="rtl"},f,w,he);return fe(d.createElement("div",Object.assign({ref:t},$e,{className:Se}),ee,xe,ye,ve))}),ie=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},oe=e=>{const{prefixCls:t,className:r,avatar:a,title:n,description:c}=e,m=ie(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:S}=d.useContext(y.E_),f=S("card",t),w=h()(`${f}-meta`,r),C=a?d.createElement("div",{className:`${f}-meta-avatar`},a):null,z=n?d.createElement("div",{className:`${f}-meta-title`},n):null,B=c?d.createElement("div",{className:`${f}-meta-description`},c):null,E=z||B?d.createElement("div",{className:`${f}-meta-detail`},z,B):null;return d.createElement("div",Object.assign({},m,{className:w}),C,E)};const N=re;N.Grid=$,N.Meta=oe;var de=N}}]);