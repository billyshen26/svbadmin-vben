import{B as b}from"./TableImg.c4bb2332.js";import{k as g}from"./componentMap.f7ad5fcd.js";import{u as C}from"./useTable.d94d9db6.js";import{g as T,d as w}from"./System.7132948a.js";import{u as D}from"./index.f4c9ae10.js";import{M as _,c as S,s as k}from"./MenuDrawer.4864264a.js";import{au as B,a as M,aw as r,o as h,h as F,n as c,z as l,B as y,j as E,l as A,al as R,E as v}from"./index.fd607933.js";import"./index.8fadb3a1.js";import"./Checkbox.c69cd213.js";import"./index.9ff4adc5.js";import"./index.78ef151a.js";import"./eagerComputed.04145c6f.js";import"./BasicForm.487dcdb3.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.6de668b2.js";import"./index.f7287486.js";import"./index.99b1969b.js";import"./_baseIteratee.b40e6eda.js";import"./get.3f90d58a.js";import"./DeleteOutlined.fe36862c.js";import"./index.ed90e99b.js";import"./useRefs.74f2c964.js";import"./Form.d51c38ac.js";import"./Col.36cdc9bf.js";import"./useFlexGapSupport.06a0420f.js";import"./useSize.3e437db8.js";import"./index.4d5bcc35.js";import"./uniqBy.4a44bbbc.js";import"./index.e25bbbe7.js";import"./useWindowSizeFn.3f90297d.js";import"./FullscreenOutlined.fcd749e0.js";import"./index.a30e6e53.js";import"./useForm.677d6921.js";import"./RadioButtonGroup.31fe683a.js";import"./useFormItem.4c54f273.js";import"./index.f1677d87.js";import"./index.b71c5540.js";import"./index.af5a653a.js";import"./useContentViewHeight.c000af9b.js";import"./ArrowLeftOutlined.8c15a711.js";import"./index.8900aab6.js";import"./transButton.688fd0ae.js";import"./index.cae5315f.js";import"./index.bd73961c.js";import"./index.35074e10.js";import"./index.fe7fc01f.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.cf2729a4.js";import"./index.d0273064.js";import"./isNumber.a9cd6fbe.js";import"./fromPairs.84aabb58.js";import"./scrollTo.53697b5f.js";import"./index.9c5279a1.js";import"./index.600d6d22.js";import"./index.c6d60ee9.js";import"./index.6dd958ab.js";import"./download.0725302e.js";import"./base64Conver.08b9f4ec.js";import"./index.14f64395.js";import"./index.8973fcff.js";import"./index.8ca3f7d2.js";const x=M({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:_,TableAction:g},setup(){const[e,{openDrawer:i}]=D(),[u,{reload:n,expandAll:d}]=C({title:"\u83DC\u5355\u5217\u8868",api:T,columns:S,formConfig:{labelWidth:120,schemas:k},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function f(){i(!0,{isUpdate:!1})}function a(o){i(!0,{record:o,isUpdate:!0})}function s(o){const{createMessage:t}=v();w(o.id).then(()=>{t.success("1")}).catch(()=>{t.error("0")}).finally(()=>{n()})}function m(){n()}function p(){R(d)}return{registerTable:u,registerDrawer:e,handleCreate:f,handleEdit:a,handleDelete:s,handleSuccess:m,onFetchSuccess:p}}});function $(e,i,u,n,d,f){const a=r("a-button"),s=r("TableAction"),m=r("BasicTable"),p=r("MenuDrawer");return h(),F("div",null,[c(m,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(a,{type:"primary",onClick:e.handleCreate},{default:l(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:l(({column:o,record:t})=>[o.key==="action"?(h(),E(s,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(p,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var qe=B(x,[["render",$]]);export{qe as default};
