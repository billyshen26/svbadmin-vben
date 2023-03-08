import{B as b}from"./TableImg.db711325.js";import{k as g}from"./componentMap.7ff7d94b.js";import{u as C}from"./useTable.e4c8e7e4.js";import{b as D}from"./index.380f9340.js";import{D as T,g as _,c as B,s as S,d as k}from"./DictModal.031a3086.js";import{au as I,a as y,w as M,aw as r,o as h,h as w,n as p,z as c,B as E,j as F,l as R}from"./index.ae9214f1.js";import"./index.fb4c50fd.js";import"./Checkbox.a908a981.js";import"./index.81d57ccf.js";import"./index.f99f4fbc.js";import"./eagerComputed.4c87dd8b.js";import"./BasicForm.fb535ff8.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.cc0f2044.js";import"./index.7035921f.js";import"./index.d9d950d6.js";import"./_baseIteratee.ec0b7751.js";import"./get.2082d5f1.js";import"./DeleteOutlined.e4932743.js";import"./index.2033aad2.js";import"./useRefs.67c9ee0b.js";import"./Form.d1328e3f.js";import"./Col.f27830cd.js";import"./useFlexGapSupport.ac20dccf.js";import"./useSize.323a7a3d.js";import"./index.dcb517bf.js";import"./uniqBy.9150ba72.js";import"./index.4b867019.js";import"./useForm.06d1c40b.js";import"./RadioButtonGroup.ae12fada.js";import"./useFormItem.54a6ef03.js";import"./index.1c6df52f.js";import"./index.f3152ebe.js";import"./index.6ceac9a2.js";import"./useWindowSizeFn.ae9d70a1.js";import"./useContentViewHeight.2d86beb8.js";import"./ArrowLeftOutlined.d3cdefe3.js";import"./index.477047b6.js";import"./transButton.fb9a0e54.js";import"./index.1ab4ba70.js";import"./index.82395d0c.js";import"./index.04705a19.js";import"./index.0e6c086b.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.71de56e4.js";import"./FullscreenOutlined.d28387c9.js";import"./index.9671d3c3.js";import"./isNumber.734ab5b6.js";import"./fromPairs.84aabb58.js";import"./scrollTo.91903af9.js";import"./index.f41aab42.js";import"./index.a3f05007.js";import"./index.6d3fe6ba.js";import"./index.e8f328c9.js";import"./download.c8636c4a.js";import"./base64Conver.08b9f4ec.js";import"./index.48b78ba3.js";import"./index.67729c0b.js";const A=y({name:"DictManagement",components:{BasicTable:b,DictModal:T,TableAction:g},setup(){const[o,{openModal:i}]=D(),d=M({}),[u,{reload:n,updateTableDataRecord:f}]=C({title:"\u5217\u8868",api:_,rowKey:"id",columns:B,formConfig:{labelWidth:120,schemas:S,autoSubmitOnEnter:!0},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function a(){i(!0,{isUpdate:!1})}function m(e){i(!0,{record:e,isUpdate:!0})}function s(e){k(e.id).then(t=>{}).catch(t=>{}).finally(()=>{n()})}function l({isUpdate:e,values:t}){if(e){const v=f(t.id,t)}else n()}return{registerTable:u,registerModal:o,handleCreate:a,handleEdit:m,handleDelete:s,handleSuccess:l,searchInfo:d}}});function $(o,i,d,u,n,f){const a=r("a-button"),m=r("TableAction"),s=r("BasicTable"),l=r("DictModal");return h(),w("div",null,[p(s,{onRegister:o.registerTable,searchInfo:o.searchInfo},{toolbar:c(()=>[p(a,{type:"primary",onClick:o.handleCreate},{default:c(()=>[E(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:c(({column:e,record:t})=>[e.key==="action"?(h(),F(m,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,t)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister","searchInfo"]),p(l,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Lo=I(A,[["render",$]]);export{Lo as default};
