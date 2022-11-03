import{B as b}from"./TableImg.0978e839.js";import{l as g}from"./BasicForm.453a21dc.js";import{u as C}from"./useTable.444f5c0d.js";import{b as T}from"./system.bd856765.js";import{u as _}from"./index.f4468f56.js";import{M as w,c as D,s as S}from"./MenuDrawer.2ef0cbae.js";import{aw as B,a as k,ay as r,o as h,h as M,n as c,z as l,j as y,l as F,al as E,B as A,E as R}from"./index.054255b5.js";import{d as v}from"./system.4eb46182.js";import"./index.51314c78.js";import"./Checkbox.dff9bd25.js";import"./index.8284f770.js";import"./index.90b68e43.js";import"./eagerComputed.c61c1bf6.js";import"./useForm.7c53e8df.js";import"./index.023dbe14.js";import"./index.c35f57fb.js";import"./index.e65dfd35.js";import"./useSize.1887ad30.js";import"./useWindowSizeFn.61d4b74b.js";import"./useContentViewHeight.5dcd68ca.js";import"./ArrowLeftOutlined.d0b015ab.js";import"./index.7ac04578.js";import"./transButton.ca133862.js";import"./index.850c6279.js";import"./index.4b704ec3.js";import"./index.ffa94cce.js";import"./uuid.2b29000c.js";import"./index.1c1b8b7b.js";import"./_baseIteratee.312bc25d.js";import"./get.7fcf1401.js";import"./DeleteOutlined.03c45443.js";import"./index.3e722cae.js";import"./useRefs.c93bf063.js";import"./Form.4029cf55.js";import"./Col.0a232c75.js";import"./useFlexGapSupport.4b9814ba.js";import"./index.00898c95.js";import"./FullscreenOutlined.85bd1417.js";import"./index.4bb27f52.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32633acf.js";import"./index.a229f492.js";import"./fromPairs.84aabb58.js";import"./scrollTo.19cf8f1f.js";import"./index.ce93adf2.js";/* empty css              *//* empty css              */import"./index.981b84f9.js";import"./index.263a0b75.js";import"./index.94282b19.js";import"./download.f31e9677.js";import"./base64Conver.08b9f4ec.js";import"./index.a28e7e9e.js";import"./index.c513a766.js";import"./uniqBy.f1f6cd50.js";import"./index.dac6c21b.js";const x=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:w,TableAction:g},setup(){const[e,{openDrawer:i}]=_(),[u,{reload:n,expandAll:d}]=C({title:"\u83DC\u5355\u5217\u8868",api:T,columns:D,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function f(){i(!0,{isUpdate:!1})}function a(o){i(!0,{record:o,isUpdate:!0})}function s(o){const{createMessage:t}=R();v(o.id).then(()=>{t.success("1")}).catch(()=>{t.error("0")}).finally(()=>{n()})}function m(){n()}function p(){E(d)}return{registerTable:u,registerDrawer:e,handleCreate:f,handleEdit:a,handleDelete:s,handleSuccess:m,onFetchSuccess:p}}}),$=A(" \u65B0\u589E\u83DC\u5355 ");function N(e,i,u,n,d,f){const a=r("a-button"),s=r("TableAction"),m=r("BasicTable"),p=r("MenuDrawer");return h(),M("div",null,[c(m,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(a,{type:"primary",onClick:e.handleCreate},{default:l(()=>[$]),_:1},8,["onClick"])]),bodyCell:l(({column:o,record:t})=>[o.key==="action"?(h(),y(s,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(p,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ie=B(x,[["render",N]]);export{Ie as default};
