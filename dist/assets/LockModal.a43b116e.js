var f=(e,m,r)=>new Promise((c,a)=>{var d=o=>{try{t(r.next(o))}catch(i){a(i)}},s=o=>{try{t(r.throw(o))}catch(i){a(i)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,s);t((r=r.apply(e,m)).next())});import{aw as w,a as C,b as y,s as $,f as _,ay as u,o as x,j as F,z as h,i as p,q as l,t as g,n as k,B as L,az as M,c as S}from"./index.93c840df.js";import{B as I,a as N}from"./index.3c17bb2e.js";import{B as R}from"./BasicForm.696c0ca0.js";import{u as P}from"./useForm.d59c0f05.js";import{u as z}from"./lock.2e719893.js";import{h as U}from"./header.d801b988.js";import"./useWindowSizeFn.e7bf6281.js";import"./FullscreenOutlined.433346e8.js";/* empty css              *//* empty css              */import"./index.f588599f.js";import"./index.c82bbdf2.js";import"./Checkbox.85271982.js";import"./index.b985b49e.js";import"./index.8a0af673.js";import"./index.29c3946f.js";import"./index.159ccbe1.js";import"./index.f54acf39.js";import"./get.abdb453b.js";import"./index.a1970168.js";import"./eagerComputed.436db484.js";import"./index.1a039708.js";import"./_baseIteratee.f1a4c2b5.js";import"./DeleteOutlined.b8e6daaa.js";import"./index.a78ff1c3.js";import"./useRefs.0e4b26a4.js";import"./Form.f6c051cb.js";import"./Col.7c1a7233.js";import"./useFlexGapSupport.9e13d7c9.js";import"./useSize.4f5a07ae.js";import"./transButton.619d76e5.js";import"./index.a260b93c.js";import"./index.a85eabdd.js";import"./index.b181bcad.js";import"./uuid.2b29000c.js";import"./download.6ece42b3.js";import"./base64Conver.08b9f4ec.js";import"./index.02675d67.js";import"./index.5c9b1cb7.js";import"./uniqBy.64ac4e63.js";const V=C({name:"LockModal",components:{BasicModal:I,BasicForm:R},setup(){const{t:e}=S(),{prefixCls:m}=y("header-lock-modal"),r=$(),c=z(),a=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realName}),[d,{closeModal:s}]=N(),[t,{validateFields:o,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const b=(yield o()).password;s(),c.setLockInfo({isLock:!0,pwd:b}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||U});return{t:e,prefixCls:m,getRealName:a,register:d,registerForm:t,handleLock:v,avatar:B}}}),q=["src"];function D(e,m,r,c,a,d){const s=u("BasicForm"),t=u("a-button"),o=u("BasicModal");return x(),F(o,M({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:h(()=>[p("div",{class:l(`${e.prefixCls}__entry`)},[p("div",{class:l(`${e.prefixCls}__header`)},[p("img",{src:e.avatar,class:l(`${e.prefixCls}__header-img`)},null,10,q),p("p",{class:l(`${e.prefixCls}__header-name`)},g(e.getRealName),3)],2),k(s,{onRegister:e.registerForm},null,8,["onRegister"]),p("div",{class:l(`${e.prefixCls}__footer`)},[k(t,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:h(()=>[L(g(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Fe=w(V,[["render",D]]);export{Fe as default};
