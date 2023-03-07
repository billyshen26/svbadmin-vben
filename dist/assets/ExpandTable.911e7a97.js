import{B as d}from"./TableImg.c4bb2332.js";import{k as F}from"./componentMap.f7ad5fcd.js";import{u as B}from"./useTable.d94d9db6.js";import{P as C}from"./index.f1677d87.js";import{getBasicColumns as f}from"./tableData.867891d4.js";import{d as b}from"./table.db812cb8.js";import{au as E,a as g,aw as i,o as m,j as a,z as e,n as _,i as T,t as w,l as A}from"./index.fd607933.js";import"./index.8fadb3a1.js";import"./Checkbox.c69cd213.js";import"./index.9ff4adc5.js";import"./index.78ef151a.js";import"./eagerComputed.04145c6f.js";import"./BasicForm.487dcdb3.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.6de668b2.js";import"./index.f7287486.js";import"./index.99b1969b.js";import"./_baseIteratee.b40e6eda.js";import"./get.3f90d58a.js";import"./DeleteOutlined.fe36862c.js";import"./index.ed90e99b.js";import"./useRefs.74f2c964.js";import"./Form.d51c38ac.js";import"./Col.36cdc9bf.js";import"./useFlexGapSupport.06a0420f.js";import"./useSize.3e437db8.js";import"./index.4d5bcc35.js";import"./uniqBy.4a44bbbc.js";import"./index.e25bbbe7.js";import"./useWindowSizeFn.3f90297d.js";import"./FullscreenOutlined.fcd749e0.js";import"./index.a30e6e53.js";import"./useForm.677d6921.js";import"./RadioButtonGroup.31fe683a.js";import"./useFormItem.4c54f273.js";import"./index.cae5315f.js";import"./index.bd73961c.js";import"./index.35074e10.js";import"./index.fe7fc01f.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.cf2729a4.js";import"./index.d0273064.js";import"./isNumber.a9cd6fbe.js";import"./fromPairs.84aabb58.js";import"./scrollTo.53697b5f.js";import"./index.9c5279a1.js";import"./index.600d6d22.js";import"./transButton.688fd0ae.js";import"./index.c6d60ee9.js";import"./index.6dd958ab.js";import"./download.0725302e.js";import"./base64Conver.08b9f4ec.js";import"./index.14f64395.js";import"./index.8973fcff.js";import"./index.b71c5540.js";import"./index.af5a653a.js";import"./useContentViewHeight.c000af9b.js";import"./ArrowLeftOutlined.8c15a711.js";import"./index.8900aab6.js";import"./select.5c4a37cc.js";const D=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function r(n){}function p(n){}return{registerTable:o,handleDelete:r,handleOpen:p}}});function k(o,r,p,n,h,x){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return m(),a(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:e(()=>[_(s,{onRegister:o.registerTable},{expandedRowRender:e(({record:t})=>[T("span",null,"No: "+w(t.no),1)]),bodyCell:e(({column:t,record:u})=>[t.key==="action"?(m(),a(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):A("",!0)]),_:1},8,["onRegister"])]),_:1})}var Oo=E(D,[["render",k]]);export{Oo as default};
