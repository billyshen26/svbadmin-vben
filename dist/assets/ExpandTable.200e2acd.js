import{B as d}from"./TableImg.a7942e91.js";import{l as F}from"./BasicForm.696c0ca0.js";import{u as B}from"./useTable.168b04a3.js";import{P as C}from"./index.ca2d09ae.js";import{getBasicColumns as f}from"./tableData.0902c609.js";import{d as b}from"./table.fdb2f94c.js";import{aw as E,a as g,ay as i,o as a,j as m,z as r,n as _,i as T,t as w,l as A}from"./index.93c840df.js";import"./index.c82bbdf2.js";import"./Checkbox.85271982.js";import"./index.b985b49e.js";import"./index.a1970168.js";import"./eagerComputed.436db484.js";import"./useForm.d59c0f05.js";import"./index.29c3946f.js";import"./index.159ccbe1.js";import"./index.8a0af673.js";import"./uuid.2b29000c.js";import"./index.1a039708.js";import"./_baseIteratee.f1a4c2b5.js";import"./get.abdb453b.js";import"./DeleteOutlined.b8e6daaa.js";import"./index.a78ff1c3.js";import"./useRefs.0e4b26a4.js";import"./Form.f6c051cb.js";import"./Col.7c1a7233.js";import"./useFlexGapSupport.9e13d7c9.js";import"./useSize.4f5a07ae.js";import"./useWindowSizeFn.e7bf6281.js";import"./index.3c17bb2e.js";import"./FullscreenOutlined.433346e8.js";import"./index.f588599f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.3548c190.js";import"./index.b181bcad.js";import"./fromPairs.84aabb58.js";import"./scrollTo.7f762505.js";import"./index.363cb378.js";/* empty css              *//* empty css              */import"./index.f54acf39.js";import"./transButton.619d76e5.js";import"./index.a260b93c.js";import"./index.a85eabdd.js";import"./download.6ece42b3.js";import"./base64Conver.08b9f4ec.js";import"./index.02675d67.js";import"./index.5c9b1cb7.js";import"./uniqBy.64ac4e63.js";import"./index.722b01c6.js";import"./index.a7404720.js";import"./useContentViewHeight.64ebddf0.js";import"./ArrowLeftOutlined.29c03e3f.js";import"./index.42a868ee.js";const D=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function p(t){}function n(t){}return{registerTable:o,handleDelete:p,handleOpen:n}}});function y(o,p,n,t,h,k){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[_(s,{onRegister:o.registerTable},{expandedRowRender:r(({record:e})=>[T("span",null,"No: "+w(e.no),1)]),bodyCell:r(({column:e,record:u})=>[e.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):A("",!0)]),_:1},8,["onRegister"])]),_:1})}var xo=E(D,[["render",y]]);export{xo as default};
