var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(r,t,o)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,C=(r,t)=>{for(var o in t||(t={}))x.call(t,o)&&v(r,o,t[o]);if(d)for(var o of d(t))M.call(t,o)&&v(r,o,t[o]);return r};var _=(r,t,o)=>new Promise((m,a)=>{var u=i=>{try{e(o.next(i))}catch(p){a(p)}},c=i=>{try{e(o.throw(i))}catch(p){a(p)}},e=i=>i.done?m(i.value):Promise.resolve(i.value).then(u,c);e((o=o.apply(r,t)).next())});import{B as b}from"./BasicForm.fb535ff8.js";import"./componentMap.7ff7d94b.js";import{u as k}from"./useForm.06d1c40b.js";import"./RadioButtonGroup.ae12fada.js";import w from"./JsonModal.bf011f43.js";import{a as B,v as F,w as y,f as D,o as E,j,z as G,n as g,k as l,ax as O,dG as R}from"./index.ae9214f1.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.cc0f2044.js";import"./index.7035921f.js";import"./index.d9d950d6.js";import"./_baseIteratee.ec0b7751.js";import"./get.2082d5f1.js";import"./DeleteOutlined.e4932743.js";import"./index.2033aad2.js";import"./useRefs.67c9ee0b.js";import"./Form.d1328e3f.js";import"./Col.f27830cd.js";import"./useFlexGapSupport.ac20dccf.js";import"./useSize.323a7a3d.js";import"./index.dcb517bf.js";import"./uniqBy.9150ba72.js";import"./index.380f9340.js";import"./useWindowSizeFn.ae9d70a1.js";import"./FullscreenOutlined.d28387c9.js";import"./index.4b867019.js";import"./index.fb4c50fd.js";import"./Checkbox.a908a981.js";import"./index.81d57ccf.js";import"./index.0e6c086b.js";import"./index.04705a19.js";import"./index.1ab4ba70.js";import"./index.82395d0c.js";import"./index.a3f05007.js";import"./useFormItem.54a6ef03.js";import"./index.f99f4fbc.js";import"./eagerComputed.4c87dd8b.js";import"./transButton.fb9a0e54.js";import"./index.6d3fe6ba.js";import"./index.e8f328c9.js";import"./index.9671d3c3.js";import"./isNumber.734ab5b6.js";import"./uuid.2b29000c.js";import"./download.c8636c4a.js";import"./base64Conver.08b9f4ec.js";import"./index.48b78ba3.js";import"./index.67729c0b.js";import"./PreviewCode.6172bc8b.js";import"./index.bd7ef637.js";import"./index.153e2fb6.js";const Oo=B({__name:"useForm",setup(r,{expose:t}){const o=F(null),m=y({formModel:{},formConfig:{},visible:!1}),a=D(()=>C({},m.formConfig)),u=n=>{m.formConfig=n,m.visible=!0},[c,{validate:e}]=k(),i=()=>{m.visible=!1},p=()=>_(this,null,function*(){var s,f;let n=yield e();(f=(s=o.value)==null?void 0:s.showModal)==null||f.call(s,n)});return t({showModal:u}),(n,s)=>(E(),j(l(R),{title:"\u9884\u89C8(\u4E0D\u652F\u6301\u5E03\u5C40)",visible:m.visible,onOk:p,onCancel:i,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:G(()=>[g(l(b),O(l(a),{onRegister:l(c)}),null,16,["onRegister"]),g(w,{ref_key:"jsonModal",ref:o},null,512)]),_:1},8,["visible"]))}});export{Oo as default};
