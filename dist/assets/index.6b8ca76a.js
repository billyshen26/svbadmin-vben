import{aw as _,a as f,dr as C,s as A,ft as r,f as m,ay as o,o as S,j as B,z as n,n as t,i as a,t as p,B as s}from"./index.93c840df.js";import{A as g}from"./index.a85eabdd.js";import{S as D}from"./index.a260b93c.js";import{P as R}from"./index.ca2d09ae.js";import y from"./CurrentPermissionMode.626710d4.js";import"./useFlexGapSupport.9e13d7c9.js";import"./index.722b01c6.js";import"./index.a7404720.js";import"./useSize.4f5a07ae.js";import"./eagerComputed.436db484.js";import"./useWindowSizeFn.e7bf6281.js";import"./useContentViewHeight.64ebddf0.js";import"./ArrowLeftOutlined.29c03e3f.js";import"./index.42a868ee.js";import"./transButton.619d76e5.js";import"./index.f588599f.js";const P=f({components:{Space:D,Alert:g,CurrentPermissionMode:y,PageWrapper:R},setup(){const{changeRole:u}=C(),e=A();return{userStore:e,RoleEnum:r,isSuper:m(()=>e.getRoleList.includes(r.SUPER)),isTest:m(()=>e.getRoleList.includes(r.TEST)),changeRole:u}}}),v=s(" \u5F53\u524D\u89D2\u8272: "),T={class:"mt-4"},k=s(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): ");function $(u,e,h,U,b,w){const l=o("CurrentPermissionMode"),d=o("Alert"),i=o("a-button"),c=o("Space"),E=o("PageWrapper");return S(),B(E,{title:"\u524D\u7AEF\u6743\u9650\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:n(()=>[t(l),a("p",null,[v,a("a",null,p(u.userStore.getRoleList),1)]),t(d,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316","show-icon":""}),a("div",T,[k,t(c,null,{default:n(()=>[t(i,{onClick:e[0]||(e[0]=F=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:n(()=>[s(p(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),t(i,{onClick:e[1]||(e[1]=F=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:n(()=>[s(p(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}var X=_(P,[["render",$],["__scopeId","data-v-05d085c9"]]);export{X as default};
