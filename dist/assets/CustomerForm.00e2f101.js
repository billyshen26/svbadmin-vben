import{B as C}from"./BasicForm.5a9dab5d.js";import{u as B}from"./useForm.6c71342a.js";import{aw as E,a as g,cD as F,I as n,ay as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.3b95ce49.js";import{P}from"./index.f1459f24.js";/* empty css              *//* empty css              */import"./index.ed0291c4.js";import"./index.06e65f4a.js";import"./Checkbox.8e15e454.js";import"./index.f6bf7675.js";import"./index.2f7e9f6a.js";import"./index.f104b46b.js";import"./index.8add463f.js";import"./index.dc2fe64e.js";import"./get.54b90331.js";import"./index.73f0e6a4.js";import"./eagerComputed.dbb82c9f.js";import"./index.cb1b832a.js";import"./_baseIteratee.d7a52456.js";import"./DeleteOutlined.d465c94f.js";import"./index.ea690c8d.js";import"./useRefs.e98cf94e.js";import"./Form.7d37fb06.js";import"./Col.056c9524.js";import"./useFlexGapSupport.d945080b.js";import"./useSize.726f2102.js";import"./transButton.8e156b9f.js";import"./index.b606b597.js";import"./index.7c379729.js";import"./useWindowSizeFn.350a8af9.js";import"./FullscreenOutlined.a643825d.js";import"./index.4b090df0.js";import"./index.de521aa3.js";import"./uuid.2b29000c.js";import"./download.3c1027ec.js";import"./base64Conver.08b9f4ec.js";import"./index.44ce585c.js";import"./index.0a8b82ae.js";import"./uniqBy.41232b8f.js";import"./index.0bcd991c.js";import"./index.5a7bb714.js";import"./useContentViewHeight.c814123a.js";import"./ArrowLeftOutlined.054ebdfe.js";import"./index.f0ffeeb7.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",I]]);export{ho as default};
